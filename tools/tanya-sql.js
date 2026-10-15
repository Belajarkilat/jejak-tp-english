/* Soal selidik baca sahaja pada projek jejaktpmath: node tools/tanya-sql.js "select ..." */
const fs = require("fs");
const env = Object.fromEntries(fs.readFileSync("C:/Users/Hasfi/.claude/.env", "utf8").split(/\r?\n/).filter(l => /^[A-Z_]+=/.test(l.trim())).map(l => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
(async () => {
  const q = process.argv[2];
  if (!/^\s*(select|with)\b/i.test(q)) { console.error("Hanya SELECT dibenarkan"); process.exit(2); }
  const r = await fetch("https://api.supabase.com/v1/projects/noaeagitwklnpmyhhhtn/database/query", { method: "POST", headers: { Authorization: "Bearer " + env.SUPABASE_ACCESS_TOKEN, "Content-Type": "application/json" }, body: JSON.stringify({ query: q }) });
  console.log(r.status, (await r.text()).slice(0, 3000)); setTimeout(() => process.exit(0), 50);
})();
