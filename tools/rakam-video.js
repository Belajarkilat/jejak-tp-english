/* Rakam video demo satu minit untuk landing: murid bermain, TP dijana, paparan guru.
   Rakaman sebenar aplikasi (CDP screencast pada 360x779 @2x = 720x1558), kapsyen dan kad pembuka/penutup
   disuntik sebagai DOM, kemudian ffmpeg menyusun bingkai dan menambah muzik latar.

     node tools/rakam-video.js <folder-keluar> [muzik.aac]
   Pelayan: python -m http.server 8833 (dalam folder ini). Perlu playwright dan ffmpeg dalam PATH.
   Hasil: <folder-keluar>/video-demo-sejarah.mp4 dan poster video-demo-poster-sejarah.jpg */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const KELUAR = path.resolve(process.argv[2] || ".");
const MUZIK = process.argv[3];
const BASE = process.env.BASE || "http://localhost:8833";
const BAB = "s3b1";           // Bab 1 ialah percuma; ada garis masa dalam hentian 2
const FRAMES = path.join(KELUAR, "_bingkai");
fs.rmSync(FRAMES, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const logo = (() => {
  const h = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const m = /<div id="ng-pembuka"[^>]*><img src="(data:image\/png;base64,[^"]+)"/.exec(h);
  return m ? m[1] : "";
})();

/* Pembantu overlay: dipasang dalam setiap halaman selepas navigasi. */
const PASANG = `(() => {
  if (window.__kap) return;
  const gaya = document.createElement("style");
  gaya.textContent = \`
   #__kap{position:fixed;left:12px;right:12px;bottom:14px;z-index:2147483000;background:#0F3D36;color:#fff;border:2.5px solid #F5B544;
     border-radius:14px;padding:12px 14px;font:800 17px/1.25 "Baloo 2","Figtree",system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);
     opacity:0;transform:none;pointer-events:none}
   #__kap.on{opacity:1;transform:none}
   #__kad{position:fixed;inset:0;z-index:2147483600;background:linear-gradient(160deg,#0B2F2A,#14564B);color:#fff;display:flex;flex-direction:column;
     justify-content:center;padding:34px 28px;font-family:"Figtree",system-ui,sans-serif;opacity:0;pointer-events:none}
   #__kad.on{opacity:1}
   #__kad img{width:150px;margin-bottom:26px}
   #__kad h1{font:800 38px/1.08 "Baloo 2",system-ui,sans-serif;margin:0 0 8px}
   #__kad h1 em{font-style:normal;color:#F5B544;display:block}
   #__kad p{font-size:17px;line-height:1.4;margin:12px 0 0;opacity:.92}
   #__kad .pil{margin-top:22px;display:inline-block;align-self:flex-start;background:#F5B544;color:#0B2F2A;font-weight:800;border-radius:10px;padding:10px 16px;font-size:17px}
  \`;
  document.head.appendChild(gaya);
  const kap = document.createElement("div"); kap.id = "__kap"; kap.setAttribute("aria-hidden", "true"); document.body.appendChild(kap);
  const kad = document.createElement("div"); kad.id = "__kad"; kad.setAttribute("aria-hidden", "true"); document.body.appendChild(kad);
  window.__kap = t => { if (!t) { kap.classList.remove("on"); return; } kap.textContent = t; kap.classList.add("on"); };
  window.__kad = h => { if (!h) { kad.classList.remove("on"); return; } kad.innerHTML = h; kad.classList.add("on"); };
})()`;

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 360, height: 779 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: "block" });
  await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, BAB);
  const p = await ctx.newPage();
  const ralat = []; p.on("pageerror", e => ralat.push(e.message));
  const cdp = await ctx.newCDPSession(p);
  const bingkai = [];
  cdp.on("Page.screencastFrame", async f => {
    bingkai.push({ t: f.metadata.timestamp, d: f.data });
    cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }).catch(() => {});
  });
  const tunggu = ms => p.waitForTimeout(ms);
  const pasang = async () => { await p.evaluate(PASANG); };
  let t0 = 0;
  const kap = t => { if (t) console.log(`  ${((Date.now() - t0) / 1000).toFixed(1)}s  ${t}`); return p.evaluate(x => window.__kap && window.__kap(x), t); };
  const kad = h => p.evaluate(x => window.__kad && window.__kad(x), h);
  const teks = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "domcontentloaded" });
  await tunggu(1800);
  await pasang();
  t0 = Date.now();
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 88, maxWidth: 720, maxHeight: 1558, everyNthFrame: 1 });

  /* 1. kad pembuka */
  await kad(`<img src="${logo}" alt=""><h1>Jejak TP English<em>Murid bermain, TP auto dijana.</em></h1><p>Bahasa Inggeris KSSM Tingkatan 1 hingga 5. Ikut Standard Prestasi DSKP.</p>`);
  await tunggu(5500);
  await kad(null); await tunggu(500);

  /* 2. skrin nama dan peta */
  await kap("Murid bermain Sejarah di telefon seperti permainan video.");
  await p.click("#namaBebas"); await p.type("#namaBebas", "Aina", { delay: 160 }); await tunggu(500);
  await p.evaluate(() => { const b = document.querySelector('[data-ting="3"]'); if (b) b.click(); });
  await tunggu(700);
  await p.click("text=Mula main"); await tunggu(2200);

  /* 3. jawab soalan: pembantu */
  async function jawabSatu(jeda) {
    const soalan = await p.$(".qtext");
    if (!soalan) return false;
    const tq = teks(await soalan.evaluate(e => { const c = e.cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); return c.innerHTML; }));
    const cari = await p.evaluate(({ id, tq }) => {
      const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      for (const a of window.BANK[id].aras) for (const q of a.soalan.concat([a.bos])) {
        if (strip(q.t) === tq) return { j: q.j, p: q.p ? q.p.map(x => strip(x)) : null, b: q.b };
      }
      return null;
    }, { id: BAB, tq });
    if (!cari) throw new Error("soalan tidak dijumpai: " + tq.slice(0, 60));
    const optTeks = await p.$$eval('[data-f^="opt-"]', els => els.map(e => { const c = e.querySelector("span:last-child").cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); return { f: e.getAttribute("data-f"), t: c.textContent.replace(/\s+/g, " ").trim() }; }));
    const keOpt = t => (optTeks.find(o => o.t === t) || {}).f;
    await tunggu(jeda.baca);
    if (cari.j === "pilih") await p.click(`[data-f="${keOpt(cari.p[cari.b])}"]`);
    else if (cari.j === "banyak" || cari.j === "susun") for (const i of cari.b) { await p.click(`[data-f="${keOpt(cari.p[i])}"]`); await tunggu(380); }
    else if (cari.j === "buka") await p.fill('[data-f="buka"]', "Perjanjian London 1824 membahagikan Alam Melayu kepada pengaruh British dan Belanda. Pembahagian ini menyebabkan Kepulauan Melayu terbahagi dua.");
    await tunggu(350);
    await p.click('[data-f="aksi"]', { timeout: 4000 }).catch(() => {});
    await tunggu(jeda.lihat);
    await p.click('[data-f="aksi"]', { timeout: 3000 }).catch(() => {});
    await tunggu(300);
    return true;
  }
  async function keHentian(n) {
    for (let k = 0; k < 6; k++) {
      if (await p.$(".qtext")) return;
      const aksi = await p.$('[data-f="aksi"]');
      if (aksi) { await aksi.click().catch(() => {}); await tunggu(350); continue; }
      const stop = await p.$(`[data-f="stop-${n}"]`);
      if (stop) { await stop.click().catch(() => {}); await tunggu(700); return; }
      await tunggu(300);
    }
  }

  /* 4. hentian 1 */
  await kap("Soalan ikut DSKP, dengan penjelasan selepas setiap jawapan.");
  await p.click('[data-f="stop-1"]'); await tunggu(900);
  for (let i = 0; i < 9; i++) { if (!(await jawabSatu(i === 0 ? { baca: 1100, lihat: 1200 } : i < 3 ? { baca: 700, lihat: 800 } : { baca: 450, lihat: 600 }))) break; }
  /* skrin lulus */
  await tunggu(300);
  await kap("Hentian lulus. TP murid dijana secara automatik.");
  await tunggu(3000);

  /* 5. hentian 2: garis masa */
  await kap("Garis masa dan petikan sumber, seperti dalam peperiksaan.");
  await keHentian(2); await tunggu(500);
  for (let i = 0; i < 2; i++) { if (!(await jawabSatu({ baca: 1700, lihat: 1300 }))) break; }
  await kap(null); await tunggu(300);

  /* 6. paparan guru */
  async function tatalKe(sel, ofset, ms) {
    await p.evaluate(({ sel, ofset }) => { const e = document.querySelector(sel); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - ofset, behavior: "smooth" }); }, { sel, ofset });
    await tunggu(ms);
  }
  await p.goto(BASE + "/index.html?demo=cikgu", { waitUntil: "domcontentloaded" });
  await tunggu(1300); await pasang();
  await kap("Guru nampak TP setiap murid serta-merta.");
  await tunggu(1500);
  await tatalKe("button.row", 150, 3000);
  await kap("Ulasan PBD siap untuk disalin ke SPPB.");
  await p.click("button.row"); await tunggu(900);
  await p.evaluate(() => { const l = Array.from(document.querySelectorAll("label,h3,h4,div,span,b")).find(e => /^Ulasan PBD$/.test((e.textContent||"").trim())); if (l) window.scrollTo({ top: l.getBoundingClientRect().top + scrollY - 160, behavior: "smooth" }); });
  await tunggu(3400);
  await kap("Soalan yang ramai murid tersilap dikesan serta-merta.");
  await p.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" })); await tunggu(700);
  await p.evaluate(() => { const t = document.getElementById("tabDiag"); if (t) t.click(); });
  await tunggu(700);
  await p.evaluate(() => { const e = Array.from(document.querySelectorAll("#paneDiag button")).find(x => /^TP1/.test((x.textContent||"").trim())); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - 70, behavior: "smooth" }); });
  await tunggu(1700);
  await p.evaluate(() => window.scrollBy({ top: 330, behavior: "smooth" })); await tunggu(1700);

  /* 7. kad penutup */
  await kap(null);
  await kad(`<img src="${logo}" alt=""><h1>Bab 1 dan 2<em>percuma.</em></h1><p>Semua tingkatan, Tingkatan 1 hingga 5.</p><p><b>Menengah rendah (T1-T3) atau menengah atas (T4-T5): RM23 setahun</b>, harga perintis hingga 31 Dis 2026.</p><span class="pil">jejaktpenglish.naikgred.com</span>`);
  await tunggu(5800);
  const tTamat = Date.now() / 1000;

  await cdp.send("Page.stopScreencast");
  await b.close();
  if (ralat.length) console.log("RALAT halaman:", ralat);

  /* susun bingkai */
  bingkai.forEach((f, i) => fs.writeFileSync(path.join(FRAMES, String(i).padStart(5, "0") + ".jpg"), Buffer.from(f.d, "base64")));
  const senarai = [];
  bingkai.forEach((f, i) => {
    const dur = i < bingkai.length - 1 ? bingkai[i + 1].t - f.t : Math.max(tTamat - f.t, 1.0);
    senarai.push(`file '${path.join(FRAMES, String(i).padStart(5, "0") + ".jpg").replace(/\\/g, "/")}'`, `duration ${Math.max(dur, 0.001).toFixed(4)}`);
  });
  senarai.push(`file '${path.join(FRAMES, String(bingkai.length - 1).padStart(5, "0") + ".jpg").replace(/\\/g, "/")}'`);
  fs.writeFileSync(path.join(FRAMES, "senarai.txt"), senarai.join("\n"));
  const jumlah = Math.max(tTamat, bingkai[bingkai.length - 1].t + 1.0) - bingkai[0].t;
  console.log(`bingkai: ${bingkai.length}, tempoh ~${jumlah.toFixed(1)}s`);
  const keluarMp4 = path.join(KELUAR, "video-demo-sejarah.mp4");
  const args = ["-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", path.join(FRAMES, "senarai.txt")];
  if (MUZIK) args.push("-i", MUZIK);
  args.push("-vf", "fps=30,scale=720:1558:flags=lanczos,format=yuv420p", "-c:v", "libx264", "-crf", "23", "-preset", "medium", "-movflags", "+faststart");
  if (MUZIK) args.push("-af", `afade=t=in:d=1,afade=t=out:st=${Math.max(jumlah - 2.5, 0).toFixed(2)}:d=2.5`, "-c:a", "aac", "-b:a", "128k", "-shortest");
  args.push("-t", jumlah.toFixed(2), keluarMp4);
  execFileSync("ffmpeg", args, { stdio: "inherit" });
  /* poster: bingkai peta murid (selepas kad pembuka) */
  execFileSync("ffmpeg", ["-v", "error", "-y", "-ss", "9.5", "-i", keluarMp4, "-frames:v", "1", "-q:v", "3", path.join(KELUAR, "video-demo-poster-sejarah.jpg")], { stdio: "inherit" });
  fs.rmSync(FRAMES, { recursive: true, force: true });
  console.log("siap:", keluarMp4);
})().catch(e => { console.error(e); process.exit(1); });
