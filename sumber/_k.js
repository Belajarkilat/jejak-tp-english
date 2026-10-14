/* Pembantu untuk sumber bab English. Fail berawalan _ diabaikan oleh bina.js.

   Semua bahan rangsangan ialah HTML <figure> yang diwarnakan oleh token tema (CSS .eng-*
   dalam index.html dan semak.html), jadi ia kekal terbaca dalam tema gelap. App hanya
   memaparkannya pada soalan yang menyebut "Figure n" atau "Text n" (lampiranUntuk).

   notis   : notis / papan kenyataan sekolah        -> "Figure n"
   poster  : poster acara atau iklan                -> "Figure n"
   sembang : perbualan aplikasi mesej                -> "Figure n"
   jadual  : jadual waktu, menu, senarai harga      -> "Figure n"
   emel    : e-mel atau surat ringkas               -> "Text n"
   teks    : petikan bacaan (artikel, cerita, blog) -> "Text n"

   Semua nama, sekolah dan acara ialah rekaan untuk latihan. */
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/* **tebal** dalam teks rangsangan */
const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const kap = (jenis, n, tajuk) => "<figcaption>" + jenis + " " + n + " · " + esc(tajuk) + "</figcaption>";

function notis(n, tajuk, judul, baris, kaki){
  return '<figure class="figure eng eng-notis"><div class="eng-pin" aria-hidden="true"></div>' +
    '<p class="eng-judul">' + esc(judul) + "</p>" +
    [].concat(baris).map(b => "<p>" + md(b) + "</p>").join("") +
    (kaki ? '<p class="eng-kaki">' + md(kaki) + "</p>" : "") +
    kap("Figure", n, tajuk) + "</figure>";
}

function poster(n, tajuk, o){
  return '<figure class="figure eng eng-poster">' +
    (o.ikon ? '<div class="eng-ikon" aria-hidden="true">' + o.ikon + "</div>" : "") +
    '<p class="eng-judul">' + esc(o.judul) + "</p>" +
    (o.sub ? '<p class="eng-sub">' + md(o.sub) + "</p>" : "") +
    '<ul class="eng-butir">' + o.butir.map(b => "<li><span aria-hidden=\"true\">" + b[0] + "</span><div>" + md(b[1]) + "</div></li>").join("") + "</ul>" +
    (o.kaki ? '<p class="eng-kaki">' + md(o.kaki) + "</p>" : "") +
    kap("Figure", n, tajuk) + "</figure>";
}

/* mesej: [{dari:"Aina", teks:"..."}, ...]; saya = nama pemilik telefon (gelembung kanan) */
function sembang(n, tajuk, kumpulan, saya, mesej){
  return '<figure class="figure eng eng-sembang"><p class="eng-kumpulan">' + esc(kumpulan) + "</p>" +
    mesej.map(m => '<div class="eng-msj' + (m.dari === saya ? " saya" : "") + '"><b>' + esc(m.dari) + "</b>" + md(m.teks) + "</div>").join("") +
    kap("Figure", n, tajuk) + "</figure>";
}

function jadual(n, tajuk, judul, kepala, baris, kaki){
  return '<figure class="figure eng eng-jadual"><p class="eng-judul">' + esc(judul) + "</p>" +
    '<table><thead><tr>' + kepala.map(k => "<th>" + esc(k) + "</th>").join("") + "</tr></thead><tbody>" +
    baris.map(r => "<tr>" + r.map(c => "<td>" + md(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table>" +
    (kaki ? '<p class="eng-kaki">' + md(kaki) + "</p>" : "") +
    kap("Figure", n, tajuk) + "</figure>";
}

function emel(n, tajuk, o){
  return '<figure class="figure eng eng-emel"><div class="eng-emel-hd">' +
    "<p><b>From:</b> " + esc(o.dari) + "</p><p><b>To:</b> " + esc(o.kepada) + "</p><p><b>Subject:</b> " + esc(o.subjek) + "</p></div>" +
    o.isi.map(p => "<p>" + md(p) + "</p>").join("") +
    kap("Text", n, tajuk) + "</figure>";
}

function teks(n, tajuk, judul, perenggan, rujukan){
  return '<figure class="figure petikan eng-teks"><blockquote>' +
    (judul ? '<p class="eng-judul">' + esc(judul) + "</p>" : "") +
    [].concat(perenggan).map(p => "<p>" + md(p) + "</p>").join("") +
    (rujukan ? '<span class="sumber-rujuk">' + esc(rujukan) + "</span>" : "") +
    "</blockquote>" + kap("Text", n, tajuk) + "</figure>";
}

/* Standard Prestasi: "Table 5: General Performance Standards Guide for A2 (Basic User)",
   DSKP KSSM Bahasa Inggeris Tingkatan 1 dan 2 (BPK, 2017), disalin kata demi kata.
   DSKP menetapkan guru menentukan tahap keseluruhan murid menggunakan jadual ini. */
const SPI_A2 = [
  "Pupil hardly achieves the curriculum target even with a lot of support.",
  "Pupil is on track to achieve the curriculum target.",
  "Pupil achieves expectations for the curriculum target.",
  "Pupil works towards exceeding expectations of the curriculum target.",
  "Pupil is on track to exceed expectations of the curriculum target.",
  "Pupil exceeds expectations of the curriculum target."
];

/* Ulasan PBD standard bagi satu bab (bahasa Inggeris, untuk disalin guru ke SPPB).
   topik: frasa topik, cth. "free-time activities and the present simple and present continuous" */
function ulasanBab(topik, tajukPendek){
  return {
    "1": "{n} recognises a few basic words on " + topik + " with a lot of support. Suggestion: revise the word cards in Stop 1 with a friend and use pictures to remember the meanings.",
    "2": "{n} understands key vocabulary on " + topik + " but still makes basic grammar errors. Suggestion: practise short sentences using the target grammar every day.",
    "3": "{n} reads short texts on " + topik + " and finds specific details accurately. {n} achieves the expected target for this unit.",
    "4": "{n} understands spoken English on " + topik + " and identifies main ideas and specific details well. {n} is working towards exceeding the target.",
    "5": "{n} reads longer texts on " + topik + ", makes good inferences and guesses the meaning of unfamiliar words from context. Very good progress.",
    "6": "{n} uses English accurately and independently on " + topik + ", corrects errors and builds well-organised sentences. {n} exceeds the target and is an exemplary model to others.",
    tiada: "{n} has not yet shown enough evidence of mastery for the unit " + tajukPendek + ". Suggestion: replay Stop 1 with guidance from the teacher or a peer, focusing on the key words."
  };
}

/* Table 5: Overall Performance Level for Target Level CEFR B1 (Independent User), DSKP KSSM Bahasa Inggeris
   Tingkatan 3 (draf 1/2018) dan Tingkatan 4 (draf 1/2018), kata demi kata. Tingkatan 3 = B1 Low, Tingkatan 4 = B1 Mid.
   Tingkatan 5 memakai perkataan Tingkatan 4 (DSKP Tingkatan 5 belum dijumpai; lihat SAMBUNG.md). */
const SPI_B1_T3 = [
  "Pupil hardly achieves the curriculum target even with a lot of support.",
  "Pupil is on track to achieve the curriculum target.",
  "Pupil achieves expectations of the curriculum target.",
  "Pupil works towards exceeding expectations of the curriculum target.",
  "Pupil is on track to exceed expectations of the curriculum target.",
  "Pupil exceeds expectations of the curriculum target."
];
const SPI_B1_T4 = [
  "Pupil displays minimal ability to achieve the curriculum target.",
  "Pupil is on track to achieve the curriculum target.",
  "Pupil achieves expectations of the curriculum target.",
  "Pupil works towards exceeding expectations of the curriculum target.",
  "Pupil is on track to exceed expectations of the curriculum target.",
  "Pupil exceeds expectations of the curriculum target."
];

module.exports = { notis, poster, sembang, jadual, emel, teks, SPI_A2, SPI_B1_T3, SPI_B1_T4, ulasanBab };
