/* Rakam video satu minit Jejak TP English: mod "guru" (untuk landing) dan mod "keluarga" (Anak NaikGred English).
   Rakaman sebenar aplikasi (CDP screencast 360x779 @2x = 720x1558); kapsyen dan kad disuntik sebagai DOM; ffmpeg menyusun
   bingkai dan menambah muzik latar. Paparan keluarga memakai ?demo=keluarga (data rekaan, dilabel "Contoh paparan").

     node tools/rakam-video-english.js guru|keluarga <folder-keluar> [muzik.m4a] [seed]
   Pelayan: python -m http.server 8833 (dalam folder ini). Perlu playwright; ffmpeg dalam PATH atau FFMPEG. */
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const { execFileSync } = require("child_process");

const MOD = process.argv[2] === "keluarga" ? "keluarga" : "guru";
const KELUAR = path.resolve(process.argv[3] || ".");
const MUZIK = process.argv[4] && process.argv[4] !== "-" ? process.argv[4] : null;
const SEED = +(process.argv[5] || process.env.SEED || 7);
const BASE = process.env.BASE || "http://localhost:8833";
const FFMPEG = process.env.FFMPEG || "ffmpeg";
const BAB = "e1b1";
const FRAMES = path.join(KELUAR, "_bingkai_" + MOD);
fs.rmSync(FRAMES, { recursive: true, force: true }); fs.mkdirSync(FRAMES, { recursive: true });

const logo = (() => {
  const h = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const m = /<div id="ng-pembuka"[^>]*><img src="(data:image\/png;base64,[^"]+)"/.exec(h);
  return m ? m[1] : "";
})();

/* Tema: guru = teal/emas seperti video lain; keluarga = merah jambu Anak NaikGred */
const TEMA = MOD === "keluarga"
  ? { kapLatar: "#C2185B", kapSempadan: "#F6C9DB", kad1: "#FFF1F6", kad2: "#FFF1F6", teks: "#33121F", pil: "#C2185B", pilTeks: "#fff", em: "#C2185B" }
  : { kapLatar: "#0F3D36", kapSempadan: "#F5B544", kad1: "#0B2F2A", kad2: "#14564B", teks: "#fff", pil: "#F5B544", pilTeks: "#0B2F2A", em: "#F5B544" };

const PASANG = `(() => {
  if (window.__kap) return;
  const g = document.createElement("style");
  g.textContent = \`
   #__kap{position:fixed;left:12px;right:12px;bottom:14px;z-index:2147483000;background:${TEMA.kapLatar};color:#fff;border:2.5px solid ${TEMA.kapSempadan};
     border-radius:14px;padding:12px 14px;font:800 17px/1.25 "Baloo 2","Figtree",system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);opacity:0;pointer-events:none}
   #__kap.on{opacity:1}
   #__lencana{position:fixed;left:50%;top:58px;transform:translateX(-50%);z-index:2147483100;background:#33121Fcc;color:#fff;font:600 11px "Figtree",system-ui,sans-serif;
     padding:4px 12px;border-radius:99px;letter-spacing:.3px;white-space:nowrap;pointer-events:none;opacity:0}
   #__lencana.on{opacity:1}
   #__kad{position:fixed;inset:0;z-index:2147483600;background:linear-gradient(160deg,${TEMA.kad1},${TEMA.kad2});color:${TEMA.teks};display:flex;flex-direction:column;
     justify-content:center;padding:34px 28px;font-family:"Figtree",system-ui,sans-serif;opacity:0;pointer-events:none}
   #__kad.on{opacity:1}
   #__kad img{width:150px;margin-bottom:26px}
   #__kad h1{font:800 38px/1.08 "Baloo 2",system-ui,sans-serif;margin:0 0 8px}
   #__kad h1 em{font-style:normal;color:${TEMA.em};display:block}
   #__kad p{font-size:17px;line-height:1.4;margin:12px 0 0;opacity:.92}
   #__kad .besar{font:800 46px/1.08 "Baloo 2",system-ui,sans-serif}
   #__kad .pil{margin-top:22px;display:inline-block;align-self:flex-start;background:${TEMA.pil};color:${TEMA.pilTeks};font-weight:800;border-radius:10px;padding:10px 16px;font-size:17px}
  \`;
  document.head.appendChild(g);
  const kap = document.createElement("div"); kap.id = "__kap"; kap.setAttribute("aria-hidden", "true"); document.body.appendChild(kap);
  const len = document.createElement("div"); len.id = "__lencana"; len.setAttribute("aria-hidden", "true"); len.textContent = "Contoh paparan · data rekaan"; document.body.appendChild(len);
  const sorok = document.createElement("style"); sorok.textContent = "#barDaftar,[id^=barDaftar]{display:none!important}"; document.head.appendChild(sorok);
  const kad = document.createElement("div"); kad.id = "__kad"; kad.setAttribute("aria-hidden", "true"); document.body.appendChild(kad);
  window.__kap = t => { if (!t) { kap.classList.remove("on"); return; } kap.textContent = t; kap.classList.add("on"); };
  window.__len = on => len.classList.toggle("on", !!on);
  window.__kad = h => { if (!h) { kad.classList.remove("on"); return; } kad.innerHTML = h; kad.classList.add("on"); };
})()`;

/* Rawak berbenih supaya soalan yang dipaparkan boleh diulang; suara disumbat supaya skrip tidak dipaparkan. */
const AWAL = `(() => {
  let a = ${SEED} >>> 0;
  Math.random = () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const palsu = { speak(u){ setTimeout(() => u.onstart && u.onstart(), 40); }, cancel(){}, getVoices(){ return []; }, onvoiceschanged: null };
  Object.defineProperty(window, "speechSynthesis", { value: palsu, configurable: true });
  Object.defineProperty(window, "SpeechSynthesisUtterance", { value: function(t){ this.text = t; }, configurable: true });
  try { localStorage.setItem("jm-bab", "${BAB}"); ${MOD === "keluarga" ? 'localStorage.setItem("cn-keluarga", "1");' : ""} } catch (e) {}
})()`;

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 360, height: 779 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: "block" });
  await ctx.addInitScript(AWAL);
  const p = await ctx.newPage();
  const ralat = []; p.on("pageerror", e => ralat.push(e.message));
  const cdp = await ctx.newCDPSession(p);
  const bingkai = [];
  cdp.on("Page.screencastFrame", async f => { bingkai.push({ t: f.metadata.timestamp, d: f.data }); cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }).catch(() => {}); });
  const tunggu = ms => p.waitForTimeout(ms);
  const pasang = () => p.evaluate(PASANG);
  let t0 = 0;
  const jejak = [];
  const kap = t => { if (t) { const s = (Date.now() - t0) / 1000; jejak.push([s, t]); console.log(`  ${s.toFixed(1)}s  ${t}`); } return p.evaluate(x => window.__kap && window.__kap(x), t); };
  const kad = h => p.evaluate(x => window.__kad && window.__kad(x), h);
  const lencana = on => p.evaluate(x => window.__len && window.__len(x), on);
  const teks = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const jenisDilihat = {};

  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "domcontentloaded" });
  await tunggu(1800); await pasang();
  t0 = Date.now();
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 88, maxWidth: 720, maxHeight: 1558, everyNthFrame: 1 });

  /* ---------- pembantu menjawab ---------- */
  async function jawabSatu(jeda, pilihan = {}) {
    const soalan = await p.$(".qtext"); if (!soalan) return false;
    const tq = teks(await soalan.evaluate(e => { const c = e.cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); return c.innerHTML; }));
    const cari = await p.evaluate(({ id, tq }) => {
      const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      for (const a of window.BANK[id].aras) for (const q of a.soalan.concat([a.bos])) if (strip(q.t) === tq) return { j: q.j, p: q.p ? q.p.map(x => strip(x)) : null, b: q.b, dengar: !!q.dengar, gbr: !!q.gbr };
      return null;
    }, { id: BAB, tq });
    if (!cari) throw new Error("soalan tidak dijumpai: " + tq.slice(0, 60));
    jenisDilihat[cari.j + (cari.gbr ? "+gbr" : "") + (cari.dengar ? "+dengar" : "")] = (jenisDilihat[cari.j + (cari.gbr ? "+gbr" : "") + (cari.dengar ? "+dengar" : "")] || 0) + 1;
    const optTeks = await p.$$eval('[data-f^="opt-"]', els => els.map(e => { const c = e.querySelector("span:last-child").cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); return { f: e.getAttribute("data-f"), t: c.innerText.replace(/\s+/g, " ").trim() }; }));
    const keOpt = t => (optTeks.find(o => o.t === t) || {}).f;
    await tunggu(jeda.baca);
    if (cari.dengar && pilihan.dengar) { await p.click('[data-f="dengar"]').catch(() => {}); await tunggu(850); }
    if (cari.j === "pilih") await p.click(`[data-f="${keOpt(cari.p[cari.b])}"]`);
    else if (cari.j === "banyak" || cari.j === "susun") for (const i of cari.b) { await p.click(`[data-f="${keOpt(cari.p[i])}"]`); await tunggu(360); }
    else if (cari.j === "isi") { const j = await p.evaluate(({ id, tq }) => { const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(); for (const a of window.BANK[id].aras) for (const q of a.soalan.concat([a.bos])) if (strip(q.t) === tq) return q.b[0]; }, { id: BAB, tq }); await p.type('[data-f="isi"]', j, { delay: 90 }); }
    await tunggu(320);
    await p.click('[data-f="aksi"]', { timeout: 4000 }).catch(() => {});
    await tunggu(jeda.lihat);
    await p.click('[data-f="aksi"]', { timeout: 3000 }).catch(() => {});
    await tunggu(300);
    return true;
  }
  async function balikKePeta() {
    for (let k = 0; k < 6; k++) {
      if (await p.$('[data-f="stop-1"]')) return;
      const x = await p.$("text=Balik ke peta");
      if (x) await x.click().catch(() => {}); else { const a = await p.$('[data-f="aksi"]'); if (a) await a.click().catch(() => {}); }
      await tunggu(450);
    }
  }
  async function keHentian(n) {
    await balikKePeta();
    const stop = await p.$(`[data-f="stop-${n}"]`);
    if (stop) { await stop.click().catch(() => {}); await tunggu(800); }
  }
  async function mulaMain() {
    await p.click("#namaBebas"); await p.type("#namaBebas", "Aina", { delay: 150 }); await tunggu(450);
    await p.evaluate(() => { const x = document.querySelector('[data-ting="1"]'); if (x) x.click(); });
    await tunggu(600); await p.click("text=Mula main"); await tunggu(2000);
  }
  async function tatalKe(sel, ofset, ms) {
    await p.evaluate(({ sel, ofset }) => { const e = document.querySelector(sel); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - ofset, behavior: "smooth" }); }, { sel, ofset });
    await tunggu(ms);
  }

  if (MOD === "guru") {
    await kad(`<img src="${logo}" alt=""><h1>Jejak TP English<em>Murid bermain, TP auto dijana.</em></h1><p>Bahasa Inggeris KSSM Tingkatan 1 hingga 5. Ikut Standard Prestasi DSKP.</p>`);
    await tunggu(5200); await kad(null); await tunggu(500);
    await kap("Murid bermain Bahasa Inggeris di telefon seperti permainan video.");
    await mulaMain();
    await kap("Kosa kata bergambar dan jawapan yang ditaip. Penjelasan selepas setiap jawapan.");
    await p.click('[data-f="stop-1"]'); await tunggu(900);
    for (let i = 0; i < 9; i++) { if (!(await jawabSatu(i === 0 ? { baca: 1000, lihat: 1100 } : i < 3 ? { baca: 420, lihat: 520 } : { baca: 110, lihat: 240 }))) break; }
    await tunggu(300);
    await kap("Hentian lulus. TP murid dijana secara automatik.");
    await tunggu(2400);
    await kap("Notis, poster dan jadual disediakan, seperti dalam peperiksaan.");
    await keHentian(3); await tunggu(600);
    for (let i = 0; i < 2; i++) { if (!(await jawabSatu({ baca: 1500, lihat: 900 }))) break; }
    await balikKePeta();
    await kap("Soalan mendengar dibaca oleh suara dalam telefon.");
    await keHentian(4); await tunggu(600);
    for (let i = 0; i < 2; i++) { if (!(await jawabSatu({ baca: 450, lihat: 1000 }, { dengar: true }))) break; }
    await kap(null); await tunggu(300);

    await p.goto(BASE + "/index.html?demo=cikgu", { waitUntil: "domcontentloaded" });
    await tunggu(1300); await pasang();
    await kap("Guru nampak TP setiap murid serta-merta.");
    await tunggu(1500);
    await tatalKe("button.row", 150, 2200);
    await kap("Ulasan PBD siap untuk disalin ke SPPB.");
    await p.click("button.row").catch(() => {}); await tunggu(900);
    await p.evaluate(() => { const l = Array.from(document.querySelectorAll("label,h3,h4,div,span,b")).find(e => /^Ulasan PBD$/.test((e.textContent || "").trim())); if (l) window.scrollTo({ top: l.getBoundingClientRect().top + scrollY - 80, behavior: "smooth" }); });
    await tunggu(2600);
    await kap("Soalan yang ramai murid tersilap dikesan serta-merta.");
    await p.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" })); await tunggu(700);
    await p.evaluate(() => { const t = document.getElementById("tabDiag"); if (t) t.click(); }); await tunggu(700);
    await p.evaluate(() => { const e = Array.from(document.querySelectorAll("#paneDiag button")).find(x => /^TP1/.test((x.textContent || "").trim())); if (e) window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - 70, behavior: "smooth" }); });
    await tunggu(1300);
    await p.evaluate(() => window.scrollBy({ top: 330, behavior: "smooth" })); await tunggu(1300);
    await kap(null);
    await kad(`<img src="${logo}" alt=""><h1>Bab 1 dan 2<em>percuma.</em></h1><p>Semua tingkatan, Tingkatan 1 hingga 5.</p><p><b>Menengah rendah atau menengah atas: RM23 setahun</b>, harga <i>Early Bird</i> hingga 31 Dis 2026.</p><div class="pil">jejaktpenglish.naikgred.com</div>`);
    await tunggu(5200);
  } else {
    await kad(`<div style="font:700 17px Lexend,sans-serif;color:#7D0F3A;margin-bottom:10px">Anak NaikGred</div><div style="font:500 20px Lexend,sans-serif;color:#7A4A5C">Anak kata:</div><div class="besar" style="color:#33121F">“Dah faham.”</div>`);
    await tunggu(2400);
    await kad(`<div class="besar" style="color:#C2185B">Betul ke?</div><p style="color:#7A4A5C;font-size:19px">Lihat bab yang sebenarnya masih lemah.</p>`);
    await tunggu(1900); await kad(null); await tunggu(400);
    await kap("Anak bermain English seperti permainan video.");
    await mulaMain();
    await kap("Kosa kata bergambar, bacaan dan jawapan yang ditaip.");
    await p.click('[data-f="stop-1"]'); await tunggu(800);
    for (let i = 0; i < 4; i++) { if (!(await jawabSatu(i === 0 ? { baca: 1000, lihat: 1100 } : { baca: 600, lihat: 800 }))) break; }
    await balikKePeta();
    await kap("Soalan mendengar dibaca oleh suara dalam telefon.");
    await keHentian(4); await tunggu(600);
    for (let i = 0; i < 2; i++) { if (!(await jawabSatu({ baca: 600, lihat: 1300 }, { dengar: true }))) break; }
    await kap(null); await tunggu(300);

    await p.goto(BASE + "/index.html?demo=keluarga", { waitUntil: "domcontentloaded" });
    await p.waitForSelector(".kel-anak", { timeout: 10000 });
    await tunggu(2300); await pasang(); await lencana(true);
    /* splash pembuka app mungkin masih ada; beri masa sebelum menatal */
    await tunggu(900);
    await tatalKe(".kel-anak", 120, 400); await kap("Setiap anak ada kad sendiri."); await tunggu(2100);
    await kap("Nampak bila anak terakhir bermain."); await tunggu(2000);
    await tatalKe(".kel-anak .kel-tindak", 120, 700); await kap("Satu tindakan untuk minggu ini."); await tunggu(2400);
    await tatalKe(".kel-anak .kel-lemah", 120, 700); await kap("Bab paling lemah. Fokus di sini."); await tunggu(2800);
    await p.click(".kel-anak .kel-semua summary").catch(() => {}); await tunggu(300);
    await tatalKe(".kel-anak .kel-semua", 160, 700); await kap("Markah setiap bab yang dicuba."); await tunggu(2800);
    await tatalKe(".kel-grid > .kel-anak:nth-child(2)", 120, 700); await kap("Sehingga 5 anak dalam satu akaun."); await tunggu(2600);
    await tatalKe(".kel-grid > .kel-anak:nth-child(2) .kel-wa", 300, 700); await kap("Hantar bab lemah kepada anak melalui WhatsApp."); await tunggu(2400);
    await kap(null); await lencana(false); await tunggu(300);
    await kad(`<div style="font:700 17px Lexend,sans-serif;color:#7D0F3A;margin-bottom:10px">Anak NaikGred English</div><div class="besar" style="color:#33121F"><span style="background:#F6C9DB;color:#7D0F3A;padding:0 8px;border-radius:8px">Tingkatan 1 hingga 5</span></div><p style="color:#7A4A5C;font-size:19px;margin-top:14px">KSSM · Bahasa Inggeris</p><p style="color:#33121F;font-size:19px">Sehingga 5 anak dalam satu akaun.<br>English, Sains, Matematik dan Sejarah.<br>Cuba percuma: seorang anak, Bab 1.</p><div style="font:800 44px Lexend,sans-serif;color:#C2185B;margin-top:8px">RM32 setahun</div><p style="color:#33121F;font-size:18px">Harga Early Bird sehingga 31 Disember.</p><div class="pil">naikgred.com/anak</div>`);
    await tunggu(5800);
  }
  const tTamat = Date.now() / 1000;
  await cdp.send("Page.stopScreencast"); await b.close();
  if (ralat.length) console.log("RALAT halaman:", ralat);
  console.log("jenis soalan dilihat:", JSON.stringify(jenisDilihat));

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
  fs.writeFileSync(path.join(KELUAR, `jejak-kapsyen-${MOD}.json`), JSON.stringify(jejak.map(([s, t]) => ({ s: +s.toFixed(1), t })), null, 1));
  const nama = MOD === "guru" ? "video-demo-english" : "video-keluarga-english";
  const keluarMp4 = path.join(KELUAR, nama + ".mp4");
  const args = ["-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", path.join(FRAMES, "senarai.txt")];
  if (MUZIK) args.push("-i", MUZIK);
  args.push("-vf", "fps=30,scale=720:1558:flags=lanczos,format=yuv420p", "-c:v", "libx264", "-crf", "24", "-preset", "medium", "-movflags", "+faststart");
  if (MUZIK) args.push("-af", `afade=t=in:d=1,afade=t=out:st=${Math.max(jumlah - 2.5, 0).toFixed(2)}:d=2.5`, "-c:a", "aac", "-b:a", "128k", "-shortest");
  args.push("-t", jumlah.toFixed(2), keluarMp4);
  execFileSync(FFMPEG, args, { stdio: "inherit" });
  execFileSync(FFMPEG, ["-v", "error", "-y", "-ss", MOD === "guru" ? "9.5" : "6.5", "-i", keluarMp4, "-frames:v", "1", "-q:v", "3", path.join(KELUAR, nama.replace("video-", "poster-") + ".jpg")], { stdio: "inherit" });
  fs.rmSync(FRAMES, { recursive: true, force: true });
  console.log("siap:", keluarMp4);
})().catch(e => { console.error(e); process.exit(1); });
