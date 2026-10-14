r"""Tulis semula landing.html (salinan Sejarah) untuk Jejak TP English. Jalankan sekali: python tools/tulis-landing-english.py
Tiada video, gambar hero, tema Pinktober atau pengira murid produk lain. Bahasa Melayu baku."""
import re
p = 'landing.html'
s = open(p, encoding='utf-8').read()

def antara(s, mula, tamat, ganti, sertakan_tamat=False):
    i = s.index(mula); j = s.index(tamat, i)
    return s[:i] + ganti + s[j:]

# ---- meta ----
s = re.sub(r'<meta name="description" content="[^"]*">',
  '<meta name="description" content="Permainan pentaksiran bilik darjah Bahasa Inggeris KSSM Tingkatan 1 hingga 5: kosa kata, tatabahasa, bacaan dan soalan mendengar. Murid bermain, dan guru mendapat cadangan TP secara automatik. Bab 1 dan 2 percuma.">', s, count=1)
s = re.sub(r'<meta property="og:description" content="[^"]*">',
  '<meta property="og:description" content="Bahasa Inggeris KSSM Tingkatan 1 hingga 5 dengan bacaan, soalan mendengar dan latihan tatabahasa. Murid bermain sambil belajar, dan guru hanya perlu menyemak serta menyalin ulasan PBD. Bab 1 dan 2 percuma.">', s, count=1)
s = re.sub(r'<meta property="og:image[^>]*>\n', '', s)
s = s.replace('<meta name="twitter:card" content="summary_large_image">', '<meta name="twitter:card" content="summary">')

# ---- hero ----
HERO = '''<div class="wrap hero" style="grid-template-columns:1fr minmax(0,380px)">
  <div>
    <span class="eyebrow-tag">Bab 1 dan 2 percuma bagi setiap tingkatan</span>
    <h1>Bahasa Inggeris yang murid <mark>mahu bermain</mark>, TP yang guru tidak perlu isi.</h1>
    <p class="lede">Murid menjawab soalan Bahasa Inggeris KSSM Tingkatan 1 hingga 5 melalui telefon atau komputer: kosa kata, tatabahasa, bacaan dan soalan mendengar yang dibaca oleh suara dalam peranti. Sistem mencadangkan TP setiap murid dan menyediakan ulasan PBD untuk disalin ke SPPB. Keputusan akhir tetap di tangan guru.</p>
    <div class="ctas">
      <a class="btn utama" href="index.html?demo=cikgu">Lihat kelas contoh</a>
      <a class="btn kedua" href="index.html?daftar">Daftar percuma</a>
    </div>
    <a class="cuba-murid" href="index.html?demo=murid">Cuba sebagai murid →</a>
    <p class="kod">Sudah ada kod kelas daripada guru? Masukkan kod itu di <b>jejaktpenglish.naikgred.com</b></p>
  </div>
  <div class="contoh" aria-label="Contoh soalan dalam aplikasi">
    <p class="contoh-hd">Contoh soalan · Tingkatan 3</p>
    <p class="contoh-q">Listen. Why is Sara worried?</p>
    <p class="contoh-dengar"><span aria-hidden="true">&#128266;</span> Dengar &nbsp;·&nbsp; <span aria-hidden="true">&#128034;</span> Perlahan</p>
    <ul class="contoh-p">
      <li><b>A</b> Saturday tickets have sold out.</li>
      <li><b>B</b> She has lost her passport.</li>
      <li><b>C</b> The trip has been cancelled.</li>
      <li><b>D</b> The bus has broken down.</li>
    </ul>
    <p class="contoh-nota">Skrip dipaparkan selepas murid menjawab. Jika peranti tiada suara, skrip terus dipaparkan.</p>
  </div>
</div>
<style>
.contoh{background:var(--surface);border:2px solid var(--teal-line);border-radius:20px;padding:20px 20px 16px;box-shadow:var(--shadow)}
.contoh-hd{font:600 12.5px "Lexend",sans-serif;color:var(--teal);text-transform:uppercase;letter-spacing:.06em}
.contoh-q{font:700 1.15rem/1.3 "Baloo 2",sans-serif;margin-top:8px}
.contoh-dengar{margin-top:10px;display:inline-block;background:var(--mint);border-radius:12px;padding:8px 14px;font:600 14px "Lexend",sans-serif;color:var(--teal-deep)}
:root[data-theme="dark"] .contoh-dengar{color:#FAD4E4}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .contoh-dengar{color:#FAD4E4}}
.contoh-p{list-style:none;margin:12px 0 0;padding:0;display:grid;gap:8px}
.contoh-p li{border:1.5px solid var(--teal-line);border-radius:12px;padding:9px 12px;font-size:.98rem}
.contoh-p b{display:inline-block;min-width:22px;color:var(--teal)}
.contoh-nota{margin-top:12px;font-size:.85rem;color:var(--ink2)}
@media (max-width:760px){.hero{grid-template-columns:1fr !important}}
.bab-sec{padding-block:8px 56px}
.bab-sec h2{font-size:clamp(1.5rem,3vw,2rem)}
.bab-grid{margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px}
.bab-kad{background:var(--surface);border:1.5px solid var(--teal-line);border-radius:16px;padding:14px 16px}
.bab-kad h3{font-size:1.05rem}
.bab-kad p{font-size:.82rem;color:var(--ink2);margin-top:2px}
.bab-kad ol{margin:10px 0 0;padding-left:20px;font-size:.92rem}
.bab-kad li{margin-bottom:3px}
</style>

'''
s = antara(s, '<div class="wrap hero">', '<div class="wrap pillar-sec">', HERO)

# ---- pilar, langkah, senarai bab ----
BAB = {
 1: ["What do you like?","Fact or fiction?","Wild weather","Life on Earth","Let's experiment","Rules, advice and plans","Building better sentences"],
 2: ["Money","Journeys","Good luck, bad luck","Take care","Quantifiers, feelings and tags","Rules then and now"],
 3: ["Adventure Trails","Green Schools","Tomorrow's World","Made in Malaysia","Festivals and Friends","Healthy Opinions"],
 4: ["Memory Lane","If I Were...","What If We Act?","He Said, She Said","Cause and Effect","Helping Hands"],
 5: ["What If I Had...?","Behind the Question","Case Closed","Smart Consumers","Discover Malaysia","Making Your Case"]}
CEFR = {1:"A2", 2:"A2", 3:"B1 Low", 4:"B1 Mid", 5:"B1"}
kad = ''
for t, senarai in BAB.items():
    kad += '<div class="bab-kad"><h3>Tingkatan %d</h3><p>%d bab · %d soalan · CEFR %s</p><ol>%s</ol></div>\n' % (
        t, len(senarai), len(senarai)*54, CEFR[t], ''.join('<li>%s</li>' % x.replace('&','&amp;') for x in senarai))

PILAR = '''<div class="wrap pillar-sec">
  <h2>Apa yang diperoleh murid dan guru</h2>
  <div class="pillars">
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>
      <h3>Enam hentian, enam kemahiran</h3>
      <p>Setiap bab melatih kosa kata, tatabahasa, bacaan bahan pendek, mendengar, bacaan dan penaakulan, serta membetulkan dan menyusun ayat. Murid berlatih semua kemahiran dalam satu bab.</p>
    </div>
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
      <h3>Bahan seperti dalam peperiksaan</h3>
      <p>Notis, poster, jadual, sembang kumpulan, e-mel dan artikel pendek disediakan bersama soalan. Soalan mendengar dibaca oleh suara dalam telefon, dan murid boleh memilih bacaan perlahan.</p>
    </div>
    <div class="pillar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M12 20V4M20 20v-7"/><path d="M3 20h18"/></svg>
      <h3>Rekod TP automatik</h3>
      <p>Setiap hentian yang dilepasi murid terus menghasilkan cadangan Tahap Penguasaan dan ulasan PBD. Guru hanya perlu menyemak dan mengesahkannya, tanpa mengisi satu demi satu.</p>
    </div>
  </div>
</div>

<div class="wrap steps-sec">
  <h2>Cara menggunakan Jejak TP English</h2>
  <div class="steps">
    <div class="step"><i>1</i><div><h3>Guru mendaftar dan mengimport senarai murid</h3><p>Percuma. Muat naik fail Excel atau APDM sekali gus, dan semua kelas serta PIN murid akan dijana secara automatik.</p></div></div>
    <div class="step"><i>2</i><div><h3>Guru berkongsi kod kelas enam aksara</h3><p>Murid menaip nama dan PIN, kemudian terus bermain. Murid tidak memerlukan akaun atau kata laluan.</p></div></div>
    <div class="step"><i>3</i><div><h3>Murid menjejak peta, hentian demi hentian</h3><p>Setiap bab mempunyai enam hentian dan satu soalan cabaran di hujung setiap hentian. Soalan memberi penjelasan selepas setiap jawapan, dan murid boleh mengulang soalan yang tersilap.</p></div></div>
    <div class="step"><i>4</i><div><h3>Guru mengesahkan TP dan mengeksport laporan</h3><p>Guru dapat melihat soalan yang paling banyak dijawab salah oleh kelas. Data PBD boleh dieksport ke Excel pada bila-bila masa.</p></div></div>
  </div>
</div>

<div class="wrap bab-sec" id="bab">
  <h2>Bab yang tersedia</h2>
  <p class="lede" style="margin-top:10px;color:var(--ink2);max-width:60ch">Bahasa Inggeris KSSM Tingkatan 1 hingga 5, jumlahnya 31 bab dan 1,674 soalan. Tatabahasa dan fungsi bahasa mengikut senarai dalam DSKP bagi setiap tingkatan.</p>
  <div class="bab-grid">
''' + kad + '''  </div>
</div>

'''
s = antara(s, '<div class="wrap pillar-sec">', '<div class="wrap cerita-sec">', PILAR)

# ---- cerita ----
CERITA = '''<div class="wrap cerita-sec">
  <div class="cerita">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    <div>
      <h2>Mengikut DSKP dan disemak dengan teliti</h2>
      <p>Soalan Tingkatan 1 hingga 4 mengikut tema, tatabahasa dan fungsi bahasa dalam DSKP KSSM Bahasa Inggeris, dan Standard Prestasi disalin kata demi kata daripada dokumen itu. Tingkatan 5 dibina mengikut jujukan CEFR B1 dan akan dikemas kini apabila DSKP rasmi disahkan. Semua teks bacaan dan bahan soalan ditulis khas dan dilabel sebagai teks latihan.</p>
      <p>Setiap bab mempunyai 54 soalan, dan sistem menyemak sendiri bahawa setiap soalan mempunyai tepat satu jawapan betul serta pilihan jawapan yang seimbang. Jika terdapat soalan yang berbeza daripada buku teks, tekan butang "Beri maklum balas" dalam aplikasi.</p>
    </div>
  </div>
</div>

'''
s = antara(s, '<div class="wrap cerita-sec">', '<div class="wrap harga-sec"', CERITA)

# ---- harga ----
s = s.replace('<p>Bab 1 dan 2 bagi setiap tingkatan. Sehingga 2 kelas', '<p>Bab 1 dan 2 bagi setiap tingkatan (10 bab). Sehingga 2 kelas')
s = re.sub(r'Akses kepada <b>20 bab</b> \(1,080 soalan\): Bab 3 hingga bab terakhir bagi Tingkatan 1 \(8 bab\), Tingkatan 2 \(10 bab\) dan Tingkatan 3 \(8 bab\)\.',
           'Akses kepada <b>13 bab</b> (702 soalan): Bab 3 hingga bab terakhir bagi Tingkatan 1 (7 bab), Tingkatan 2 (6 bab) dan Tingkatan 3 (6 bab).', s)
s = re.sub(r'Akses kepada <b>19 bab</b> \(1,026 soalan\): Bab 3 hingga bab terakhir bagi Tingkatan 4 \(12 bab\) dan Tingkatan 5 \(11 bab\)\.',
           'Akses kepada <b>8 bab</b> (432 soalan): Bab 3 hingga bab terakhir bagi Tingkatan 4 (6 bab) dan Tingkatan 5 (6 bab).', s)
s = s.replace('guru</b> Sejarah di sekolah yang sama', 'guru</b> Bahasa Inggeris di sekolah yang sama')

# ---- soalan lazim ----
s = re.sub(r'<p>Bahasa Inggeris KSSM Tingkatan 1 \(8 bab\)[^<]*</p>',
  '<p>Bahasa Inggeris KSSM Tingkatan 1 (7 bab) dan Tingkatan 2 hingga 5 (6 bab setiap satu). Jumlahnya 31 bab dan 1,674 soalan. Bab 1 dan 2 bagi setiap tingkatan disediakan secara percuma.</p>', s, count=1)
TAMBAH = '''    <details>
      <summary>Bagaimana soalan mendengar berfungsi?</summary>
      <p>Teks soalan dibaca oleh suara dalam pelayar telefon atau komputer. Murid boleh mengulang bacaan atau memilih bacaan perlahan. Skrip dipaparkan selepas murid menjawab. Jika peranti tiada suara English atau bunyi dimatikan, skrip dipaparkan terus supaya murid tidak terhenti.</p>
    </details>
    <details>
      <summary>Adakah murid menulis karangan?</summary>
      <p>Belum. Murid berlatih menaip jawapan pendek, membetulkan kesalahan, menyusun perkataan, ayat dan perenggan. Karangan penuh memerlukan penilaian guru, dan ciri itu dirancang kemudian.</p>
    </details>
'''
s = s.replace('    <details>\n      <summary>Apakah Pakej Panitia Sekolah?</summary>', TAMBAH + '    <details>\n      <summary>Apakah Pakej Panitia Sekolah?</summary>')
s = s.replace('Setiap hentian mengandungi lapan soalan dan satu soalan cabaran penutup (bos), jadi satu bab mempunyai 54 soalan.', 'Setiap hentian mengandungi lapan soalan dan satu soalan cabaran penutup (bos), jadi satu bab mempunyai 54 soalan.')

# ---- buang bendera, pengira hidup ----
i = s.index('<script>\n(function(){\n  var n=40'); j = s.index('</script>', i) + len('</script>\n')
s = s[:i] + s[j:]
i = s.index('<script>\n/* Pengira hidup'); j = s.index('</script>', i) + len('</script>\n')
s = s[:i] + s[j:]
s = s.replace('<script src="sumber.js?v=20261013"></script>', '<script src="sumber.js?v=20261015"></script>')
s = s.replace('Jejak TP English · Bahasa Inggeris KSSM Tingkatan 1–5', 'Jejak TP English · Bahasa Inggeris KSSM Tingkatan 1–5')
open(p, 'w', encoding='utf-8', newline='\n').write(s)
sisa = [l.strip()[:100] for l in s.split('\n') if re.search(r'Sejarah|sejarah|garis masa|petikan sumber|Pinktober|bendera|lencana-pink"|video', l)]
print('baris yang masih sebut Sejarah/video/dll:', len(sisa))
for l in sisa[:20]: print('  ', l)
