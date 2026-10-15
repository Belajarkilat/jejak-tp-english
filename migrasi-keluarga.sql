-- Mod Keluarga / Anak NaikGred untuk English (15 Okt 2026), diadaptasi daripada Sejarah. Sama seperti Sains (lo_), tetapi Premium keluarga
-- datang daripada bayaran di Jejak TP Sains: fungsi bayar Sains memanggil mj_keluarga_sinkron(emel, tamat).
alter table je_guru add column if not exists keluarga boolean not null default false;

-- E-mel keluarga yang sudah bayar (diisi oleh Sains melalui service_role). Anon/authenticated tidak boleh baca.
create table if not exists mj_keluarga_emel (
  emel  text primary key,
  tamat timestamptz not null,
  dikemas timestamptz not null default now()
);
alter table mj_keluarga_emel enable row level security;
revoke all on mj_keluarga_emel from anon, authenticated;

-- Tandakan akaun ibu bapa, sediakan kelas 'Keluarga' dan beri Premium jika e-mel sudah bayar di Sains.
create or replace function je_keluarga_tetap() returns boolean
language plpgsql security definer set search_path = public as $$
declare t timestamptz;
begin
  if not exists (select 1 from je_guru where id = auth.uid()) then return false; end if;
  if exists (select 1 from je_kelas where guru = auth.uid() and nama <> 'Keluarga') then return false; end if;
  update je_guru set keluarga = true where id = auth.uid();
  insert into je_kelas (guru, nama) select auth.uid(), 'Keluarga'
    where not exists (select 1 from je_kelas where guru = auth.uid());
  select e.tamat into t from mj_keluarga_emel e where lower(e.emel) = lower(coalesce(auth.jwt() ->> 'email', '')) and e.tamat > now();
  if t is not null then
    update je_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), t),
                       premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), t) where id = auth.uid();
  end if;
  return true;
end $$;
revoke all on function je_keluarga_tetap() from public, anon;
grant execute on function je_keluarga_tetap() to authenticated;

-- Bayaran keluarga di Jejak TP Sains memanggil mj_keluarga_sinkron(emel, tamat) yang menulis ke mj_keluarga_emel.
-- JANGAN ganti mj_keluarga_sinkron (milik Matematik/Sejarah, hidup). English hanya melekat pada jadual itu melalui pencetus,
-- supaya fungsi sedia ada tidak diubah: setiap baris baharu/dikemas memberi Premium keluarga kepada akaun je_guru yang sepadan.
create or replace function je_keluarga_pencetus() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update je_guru g set premium_rendah_tamat = greatest(coalesce(g.premium_rendah_tamat, '-infinity'), new.tamat),
                       premium_atas_tamat = greatest(coalesce(g.premium_atas_tamat, '-infinity'), new.tamat)
    from auth.users u where u.id = g.id and lower(u.email) = lower(new.emel) and g.keluarga;
  return new;
end $$;
revoke all on function je_keluarga_pencetus() from public, anon, authenticated;
drop trigger if exists je_keluarga_pencetus on mj_keluarga_emel;
create trigger je_keluarga_pencetus after insert or update on mj_keluarga_emel for each row execute function je_keluarga_pencetus();

CREATE OR REPLACE FUNCTION public.je_had_kelas()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare g je_guru%rowtype; sendiri int; had int; pid uuid; pan je_panitia%rowtype; guna int;
begin
  
  select * into g from je_guru where id = new.guru;
  if coalesce(g.keluarga, false) then
    if (select count(*) from je_kelas where guru = new.guru) >= 1 then raise exception 'had kelas bagi setiap guru'; end if;
    return new;
  end if;
  select count(*) into sendiri from je_kelas where guru = new.guru;
  had := (case when je_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into pan from je_panitia where id = pid and tamat > now();
    continue when pan.id is null;
    select count(*) into guna from je_kelas k join je_guru x on x.id = k.guru
      where x.panitia_rendah = pan.id or x.panitia_atas = pan.id;
    if guna < (je_pakej_had(pan.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $function$
;
CREATE OR REPLACE FUNCTION public.je_murid_maks(p_kelas text)
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select case when exists (select 1 from je_kelas k join je_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga) then 5 when je_premium((select guru from je_kelas where id = p_kelas)) then 60 else 40 end
$function$
;
revoke all on function je_murid_maks(text) from public, anon, authenticated;
