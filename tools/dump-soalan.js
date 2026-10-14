/* Cetak semua soalan sesuatu bab dalam bentuk ringkas untuk semakan guru pakar.
     node tools/dump-soalan.js e1b1 [e1b2 ...] */
const path = require("path");
for (const id of process.argv.slice(2)) {
  const b = require(path.resolve("sumber", id + ".js"));
  console.log(`\n=== ${id} ${b.kod}`);
  b.aras.forEach(a => {
    console.log(`-- H${a.n} ${a.tempat}`);
    a.soalan.concat([a.bos]).forEach((q, i) => {
      const t = String(q.t).replace(/\s+/g, " ");
      let o = "";
      if (q.j === "pilih") o = q.p.map((x, k) => (k === q.b ? "*" : "") + x).join(" | ");
      else if (q.j === "banyak") o = q.p.map((x, k) => (q.b.includes(k) ? "*" : "") + x).join(" | ");
      else if (q.j === "susun") o = "ORDER: " + q.b.map(k => q.p[k]).join(" > ");
      else if (q.j === "isi") o = "ACCEPT: " + q.b.join(" / ");
      console.log(`${a.n}.${i + 1} [${q.j}] ${t}${q.dengar ? " {SAY: " + q.dengar + "}" : ""}${q.gbr ? " {PIC " + q.gbr + "}" : ""}\n    ${o}\n    u: ${String(q.u).slice(0, 120)}`);
    });
  });
}
