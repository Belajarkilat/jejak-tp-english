/* Jalankan fail SQL pada projek Supabase melalui Management API (token dalam .claude/.env). Cegah salah projek.
     node tools/jalan-sql.js <ref> [--simpan] fail1.sql fail2.sql ...
   Tanpa --simpan: seluruh skrip dibalut BEGIN ... ROLLBACK (ujian kering; tiada perubahan disimpan). */
const fs = require("fs");
const env = Object.fromEntries(fs.readFileSync("C:/Users/Hasfi/.claude/.env", "utf8").split(/\r?\n/).filter(l => /^[A-Z_]+=/.test(l.trim())).map(l => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const [ref, ...baki] = process.argv.slice(2);
const simpan = baki.includes("--simpan"), fail = baki.filter(x => !x.startsWith("--"));
if (ref !== "noaeagitwklnpmyhhhtn") { console.error("Hanya projek jejaktpmath dibenarkan oleh alat ini"); process.exit(2); }
(async () => {
  let sql = fail.map(f => `-- ===== ${f}\n` + fs.readFileSync(f, "utf8")).join("\n");
  sql = simpan ? sql : "begin;\n" + sql + "\nrollback;";
  const r = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, { method: "POST", headers: { Authorization: "Bearer " + env.SUPABASE_ACCESS_TOKEN, "Content-Type": "application/json" }, body: JSON.stringify({ query: sql }) });
  const t = await r.text();
  console.log(r.status, t.slice(0, 1500));
  process.exit(r.ok ? 0 : 1);
})();
