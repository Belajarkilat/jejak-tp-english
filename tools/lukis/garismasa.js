/* Rajah garis masa (Sejarah): garis menegak dengan peristiwa mengikut kronologi.

   Menegak, bukan mendatar, supaya label yang panjang muat pada telefon.
   Spesifikasi:
     { jenis:"garismasa",
       peristiwa:[ {masa:"5.3 juta tahun dahulu", label:"Zaman Pliosen bermula"}, ... ],
       sorok:[2],            // indeks peristiwa yang labelnya diganti "?" (soalan isi tempat kosong)
       kapsyen:"Rajah 1 · ...", alt:"..." }
   Penjana tidak menyusun semula peristiwa: sumber bab bertanggungjawab atas urutannya,
   dan urutan itu ialah jawapan bagi soalan kronologi. */
const A = require("./asas");

const LEBAR = 300, X_GARIS = 112, SAIZ = 12, BARIS = 15;
const MUAT_LABEL = Math.floor((LEBAR - X_GARIS - 18) / (SAIZ * 0.6));   /* aksara sebaris */
const MUAT_MASA = Math.floor((X_GARIS - 18) / (11.5 * 0.6));

function balut(teks, muat){
  const kata = String(teks).split(/\s+/), baris = [];
  let kini = "";
  for(const k of kata){
    if(k.length > muat) throw new Error(`perkataan "${k}" terlalu panjang untuk garis masa`);
    if((kini ? kini + " " + k : k).length > muat){ baris.push(kini); kini = k; }
    else kini = kini ? kini + " " + k : k;
  }
  if(kini) baris.push(kini);
  return baris;
}

function lukis(spec){
  const ps = spec.peristiwa || [];
  if(ps.length < 2) throw new Error("garis masa perlu sekurang-kurangnya dua peristiwa");
  const sorok = new Set(spec.sorok || []);
  const blok = ps.map((p, i) => {
    const label = sorok.has(i) ? ["?"] : balut(p.label, MUAT_LABEL);
    const masa = balut(p.masa, MUAT_MASA);
    if(label.length > 3) throw new Error(`label "${p.label}" melebihi tiga baris`);
    return { label, masa, tinggi: Math.max(label.length, masa.length) * BARIS + 18 };
  });
  let y = 22, isi = "";
  const atas = 14;
  const jumlah = blok.reduce((n, b) => n + b.tinggi, 0) + 22;
  isi += A.garis(X_GARIS, atas, X_GARIS, jumlah - 6, { warna: "garis2", tebal: 2.5, hujungBulat: true });
  blok.forEach((b, i) => {
    const sor = sorok.has(i);
    isi += A.bulatan(X_GARIS, y - 4, 6, { isi: sor ? "kuningLembut" : "kertas", garis: sor ? "kuning" : "ungu", tebal: 2.5 });
    b.masa.forEach((t, k) => { isi += A.teks(X_GARIS - 14, y + k * BARIS, t, { saiz: 11.5, kanan: true, warna: "tinta3" }); });
    b.label.forEach((t, k) => { isi += A.teks(X_GARIS + 16, y + k * BARIS, t, { saiz: SAIZ, warna: sor ? "kuning" : "tinta", tebal: sor || k === 0 && b.label.length === 1 }); });
    y += b.tinggi;
  });
  /* Anak panah masa di hujung bawah: kronologi bergerak ke bawah. */
  isi += A.kepalaPanah(X_GARIS, jumlah - 2, 0, 1, { warna: "garis2", tebal: 2.5 });
  return A.figura({ lebar: LEBAR, tinggi: jumlah + 4, isi, alt: spec.alt, kapsyen: spec.kapsyen });
}

module.exports = { lukis };
