/* Audit rajah (pelajaran DLP Sains: rajah tertinggal senyap).
   Untuk setiap bab:
   1. Setiap hentian yang ada lampiran: SETIAP soalan hentian itu mesti menyebut "Figure n"/"Text n"
      (kalau tidak, lampiranUntuk() menyorok rajah dan murid tidak nampak bahan soalan).
   2. Setiap soalan yang menyebut Figure/Text mesti berada dalam hentian yang ada lampiran.
   3. Rujukan mesti sepadan dengan kapsyen: soalan "Figure 1" hanya jika kapsyen lampiran "Figure 1"; "Text 1" jika "Text 1".
   4. Soalan yang menyebut "Look at the picture" / "the picture" mesti ada medan gbr.
     node tools/audit-rajah.js [id ...]   (tanpa hujah = semua sumber/e*.js) */
const fs = require("fs"), path = require("path");
const ids = process.argv.length > 2 ? process.argv.slice(2)
  : fs.readdirSync("sumber").filter(f => /^e\db\d+\.js$/.test(f)).map(f => f.replace(".js", ""));
let gagal = 0;
const sebut = q => (String(q.t) + " " + String(q.arahan || "") + " " + (q.p || []).join(" "));
for (const id of ids) {
  const b = require(path.resolve("sumber", id + ".js"));
  b.aras.forEach(a => {
    const qs = a.soalan.concat([a.bos]);
    const lam = a.lampiran ? b.lampiran[a.lampiran] : null;
    const kap = lam ? (String(lam).match(/<figcaption>((?:Figure|Text) \d)/) || [])[1] : null;
    qs.forEach((q, i) => {
      const m = sebut(q).match(/\b(Figure|Text) \d\b/);
      const di = `${id} H${a.n}.${i + 1}`;
      if (lam && !m) { gagal++; console.log(`✗ ${di}: hentian berlampiran tetapi soalan tidak menyebut ${kap} -> rajah disorok`); }
      if (!lam && m) { gagal++; console.log(`✗ ${di}: menyebut ${m[0]} tetapi hentian tiada lampiran`); }
      if (lam && m && kap && m[0] !== kap) { gagal++; console.log(`✗ ${di}: menyebut ${m[0]} tetapi kapsyen ialah ${kap}`); }
      if (/\bthe picture\b|\bthis picture\b/i.test(String(q.t)) && !q.gbr) { gagal++; console.log(`✗ ${di}: menyebut picture tetapi tiada gbr`); }
      if (q.dengar && !/^Listen/i.test(String(q.t))) { gagal++; console.log(`✗ ${di}: soalan dengar mesti bermula "Listen"`); }
    });
    if (lam && !kap) { gagal++; console.log(`✗ ${id} H${a.n}: lampiran tiada kapsyen Figure/Text`); }
  });
}
console.log(gagal ? `\n${gagal} masalah rajah` : `Audit rajah: ${ids.length} bab bersih`);
process.exit(gagal ? 1 : 0);
