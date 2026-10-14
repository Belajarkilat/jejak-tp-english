/* Senarai kedudukan panjang jawapan betul bagi setiap soalan pilih: node tools/panjang.js e1b1 */
const bab = require(require("path").resolve("sumber", process.argv[2] + ".js"));
let n = 0, pjg = 0, pdk = 0;
bab.aras.forEach(a => a.soalan.concat([a.bos]).forEach((q, k) => {
  if (q.j !== "pilih") return;
  const L = q.p.map(x => x.length), b = L[q.b], lain = L.filter((_, i) => i !== q.b);
  const tag = b > Math.max(...lain) ? "PANJANG" : b < Math.min(...lain) ? "pendek" : "tengah";
  n++; if (tag === "PANJANG") pjg++; if (tag === "pendek") pdk++;
  console.log(`H${a.n} ${k < 8 ? "S" + (k + 1) : "BOS"}  ${tag.padEnd(7)} ${b} | ${lain.join("/")} | ${q.p[q.b]}`);
}));
console.log(`\n${n} soalan pilih: paling panjang ${pjg} (${Math.round(100 * pjg / n)}%), paling pendek ${pdk} (${Math.round(100 * pdk / n)}%)`);
