/* Alat sementara: senarai item pilih yang jawapan betulnya paling panjang, dengan cadangan pemendekan
   pada kata hubung. Guna: node tools/_potong.js s5b1 [--guna 1,3,5] */
const fs = require("fs");
const id = process.argv[2];
const idx = process.argv.indexOf("--guna");
const guna = (idx > 0 ? process.argv[idx + 1] : "").split(",").filter(Boolean).map(Number);
const b = require("../sumber/" + id + ".js");
const KATA = [" dan ", " tetapi ", " untuk ", " kerana ", " yang ", " dengan ", " secara ", " selepas ", " supaya ", " dalam ", " ke "];
const calon = [];
b.aras.forEach(a => a.soalan.concat([a.bos]).forEach((q, i) => {
  if (q.j !== "pilih") return;
  const L = q.p.map(x => x.length), c = L[q.b], m = Math.max(...L.filter((_, k) => k !== q.b));
  if (c <= m) return;
  const asal = q.p[q.b];
  let terbaik = null;
  for (const k of KATA) {
    const j = asal.lastIndexOf(k);
    if (j > 10) {
      const t = asal.slice(0, j);
      if (t.length < m && t.split(" ").length >= 2) { if (!terbaik || t.length > terbaik.length) terbaik = t; }
    }
  }
  calon.push({ ref: "H" + a.n + (i === a.soalan.length ? "B" : "S" + (i + 1)), asal, baru: terbaik, pil: q.p, m });
}));
calon.forEach((c, n) => console.log((n + 1) + " " + c.ref + " [" + c.asal.length + ">" + c.m + "] " + JSON.stringify(c.asal) + " -> " + (c.baru ? JSON.stringify(c.baru) : "(tiada)")));
if (guna.length) {
  const p = "sumber/" + id + ".js";
  let s = fs.readFileSync(p, "utf8");
  const lari = x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  for (const n of guna) {
    const c = calon[n - 1];
    if (!c || !c.baru) { console.log("langkau " + n); continue; }
    const re = new RegExp('(j:"pilih",t:"(?:[^"\\\\]|\\\\.)*",p:\\[)' + lari(JSON.stringify(c.asal)));
    if (!re.test(s)) { console.log("tiada padanan " + n); continue; }
    s = s.replace(re, (_, pre) => pre + JSON.stringify(c.baru));
  }
  fs.writeFileSync(p, s);
  console.log("diterapkan: " + guna.join(","));
}
