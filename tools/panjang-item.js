/* Cetak pilihan penuh bagi item yang jawapan betulnya terlalu menonjol (panjang). Bantuan semakan.
     node tools/panjang-item.js e3b2 [nisbah=1.25] */
const path = require("path");
const id = process.argv[2], had = +(process.argv[3] || 1.25);
const b = require(path.resolve("sumber", id + ".js"));
b.aras.forEach(a => a.soalan.concat([a.bos]).forEach((q, i) => {
  if (q.j !== "pilih") return;
  const len = q.p.map(x => x.length), betul = len[q.b];
  const lain = len.filter((_, k) => k !== q.b), maks = Math.max(...lain), purata = lain.reduce((x, y) => x + y, 0) / lain.length;
  if (betul > maks || betul / purata >= had) console.log(`H${a.n}.${i + 1} (${betul} vs ${lain.join("/")}) ${q.t.slice(0, 50)}\n   ${JSON.stringify(q.p)} b:${q.b}`);
}));
