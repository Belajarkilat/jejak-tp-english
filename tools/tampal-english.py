"""Tampalan (14 Okt 2026): tukar salinan app Jejak TP Sejarah kepada Jejak TP English.
Id bab e{tingkatan}b{bab}; jadual/fungsi pangkalan data berawalan je_ (projek Supabase jejaktpmath).
Jalankan sekali dari akar repo: python tools/tampal-english.py"""
import re, glob

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)

FAIL = ['index.html','semak.html','landing.html','terma.html','privasi.html','manifest.webmanifest','sw.js',
        'sumber.js','konfig.js','skema.sql','bina.js'] + glob.glob('migrasi-*.sql') + glob.glob('tools/*.js') \
       + glob.glob('supabase/**/*.*', recursive=True)
UMUM = [
 ('Anak NaikGred Sejarah','Anak NaikGred English'),
 ('Jejak TP Sejarah','Jejak TP English'),
 ('jejaktpsejarah','jejaktpenglish'),
 ('jejak-tp-sejarah','jejak-tp-english'),
 ('DSKP KSSM Sejarah','DSKP KSSM Bahasa Inggeris'),
 ('Sejarah KSSM','Bahasa Inggeris KSSM'),
 ('bayar-sejarah','bayar-english'),
 ('TOYYIB_KATEGORI_SEJARAH','TOYYIB_KATEGORI_ENGLISH'),
 ('js_','je_'), ('"js-','"je-'), ("'js-","'je-"), ('startsWith("js-")','startsWith("je-")'),
]
for p in FAIL:
    try: s = baca(p)
    except Exception: continue
    t = s
    for a, b in UMUM: t = t.replace(a, b)
    if p.endswith('.js') and p.startswith('tools'):
        t = t.replace('/^s\db\d+\.js$/', '/^e\db\d+\.js$/').replace('s1b1', 'e1b1')
    if p == 'bina.js': t = t.replace('/^s\db\d+\.js$/', '/^e\db\d+\.js$/')
    if t != s: tulis(p, t); print('dikemas kini:', p)

s = baca('index.html')
G = [
 ('"s"+', '"e"+'), ('/^s(\d)b/', '/^e(\d)b/'), ('/^s(\d)b(\d+)$/', '/^e(\d)b(\d+)$/'),
 ('/^s\d+b\d+$/', '/^e\d+b\d+$/'), ('"s1b1"', '"e1b1"'),
 ('<span>Sejarah Menengah Rendah</span>', '<span>English Menengah Rendah</span>'),
 ('id="guruEyebrow">Sejarah</p>', 'id="guruEyebrow">English</p>'),
 ('"Sejarah · Tingkatan "', '"English · Tingkatan "'),
 ('Jom mula jejak Sejarah!', 'Jom mula jejak English!'),
 ('Rekod PBD Sejarah', 'Rekod PBD English'),
 ('"Kelas Sejarah "', '"Kelas English "'),
 ('&middot; Sejarah</h1>', '&middot; English</h1>'),
 ('k.nama,"Sejarah",BAB.kod', 'k.nama,"English",BAB.kod'),
 ('panitia Sejarah kita', 'panitia English kita'),
 ('semua bab Sejarah menengah rendah', 'semua bab English menengah rendah'),
 ('Semua bab Sejarah Tingkatan 1 hingga 5', 'Semua bab English Tingkatan 1 hingga 3'),
 ('<b>Sejarah, Sains dan Matematik</b>', '<b>English, Sains, Matematik dan Sejarah</b>'),
 ('var JUMLAH_BAB={1:8,2:10,3:8,4:12,5:11};', 'var JUMLAH_BAB={1:7};'),
 ('return /\b(rajah|petikan|figure)\b/i.test(teks) ? lam : "";', 'return /\b(rajah|petikan|figure|text \d)\b/i.test(teks) ? lam : "";'),
 ('return /\b(rajah|petikan)\b/i.test(teks) ? lam : "";', 'return /\b(rajah|petikan|figure|text \d)\b/i.test(teks) ? lam : "";'),
]
for a, b in G: s = s.replace(a, b)
tulis('index.html', s)
t = baca('semak.html')
t = t.replace('"s1b1"', '"e1b1"').replace('return /\b(rajah|petikan|figure)\b/i.test(teks) ? lam : "";', 'return /\b(rajah|petikan|figure|text \d)\b/i.test(teks) ? lam : "";').replace('return /\b(rajah|petikan)\b/i.test(teks) ? lam : "";', 'return /\b(rajah|petikan|figure|text \d)\b/i.test(teks) ? lam : "";')
tulis('semak.html', t)
t = baca('sw.js').replace('"bank-s1b1.js?v=1"', '"bank-e1b1.js?v=1"')
t = re.sub(r'(VERSI\s*=\s*")[^"]*(")', r'\1je-2026-10-14a\2', t)
tulis('sw.js', t)
for p in ['index.html','semak.html']:
    baki = [l.strip()[:150] for l in baca(p).split('\n') if 'Sejarah' in l or re.search(r'\bs\db\d', l)]
    print(p, 'baki Sejarah/s-id:', len(baki))
    for l in baki: print('   ', l)
