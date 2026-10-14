/* Tangkapan skrin paparan murid untuk semakan visual (bukan ujian lulus/gagal).
     node tools/tangkap-skrin.js e1b1 [gelap]
   Disimpan dalam ../jejakenglish-skrin/. Perlu pelayan 8833. */
const { chromium } = require("playwright");
const fs = require("fs");
const bab = process.argv[2] || "e1b1", gelap = process.argv.includes("gelap");
const KELUAR = "../jejakenglish-skrin/";
(async () => {
  let html = fs.readFileSync("index.html", "utf8");
  fs.writeFileSync("index-uji.html", html.replace("SOALAN_SET=6", "SOALAN_SET=9"));
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block", colorScheme: gelap ? "dark" : "light" });
  await require("./_buka").bukaSemua(ctx);
  await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
  const p = await ctx.newPage();
  p.on("pageerror", e => console.log("pageerror: " + e.message));
  await p.goto("http://localhost:8833/index-uji.html?demo=murid", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1500);
  await p.fill("#namaBebas", "Aina"); await p.evaluate(()=>{const x=document.querySelector('[data-ting="1"]');if(x)x.click();});
  await p.click("text=Mula main"); await p.waitForTimeout(900);
  const sfx = (gelap ? "-gelap" : "");
  await p.screenshot({ path: KELUAR + bab + "-peta" + sfx + ".png", fullPage: false });
  const diambil = new Set();
  const ambil = async (k, penuh) => { if (diambil.has(k)) return; diambil.add(k); await p.screenshot({ path: KELUAR + bab + "-" + k + sfx + ".png", fullPage: !!penuh }); };
  let lg = 1;
  await p.click('[data-f="stop-1"]').catch(() => {}); await p.waitForTimeout(500);
  for (let l = 0; l < 420; l++) {
    const soalan = await p.$(".qtext"), aksi = await p.$('[data-f="aksi"]');
    if (!soalan) {
      if (aksi) { if (!diambil.has("keputusan" + lg)) { await ambil("keputusan" + lg); } await aksi.click().catch(() => {}); await p.waitForTimeout(350); continue; }
      lg++; const st = await p.$(`[data-f="stop-${lg}"]`); if (!st) break;
      await st.click().catch(() => {}); await p.waitForTimeout(500); continue;
    }
    const tq = (await soalan.innerText()).replace(/\s+/g, " ").trim();
    const q = await p.evaluate(({ id, tq }) => { const s = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      for (const a of window.BANK[id].aras) for (const q of a.soalan.concat([a.bos])) if (s(q.t) === tq) return q; return null; }, { id: bab, tq });
    if (!q) { console.log("tak jumpa: " + tq); break; }
    if (q.gbr) await ambil("gambar");
    if (/Figure 1/.test(q.t)) await ambil("figure", true);
    if (/Text 1/.test(q.t)) await ambil("teks", true);
    if (q.dengar) await ambil("dengar");
    const opt = await p.$$eval('[data-f^="opt-"]', els => els.map(e => ({ f: e.getAttribute("data-f"), t: e.querySelector("span:last-child").innerText.replace(/\s+/g, " ").trim() })));
    const ke = t => (opt.find(o => o.t === String(t).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()) || {}).f;
    let salahSengaja = q.j === "isi" && !diambil.has("isi-salah");
    if (q.j === "pilih") await p.click(`[data-f="${ke(q.p[q.b])}"]`);
    else if (q.j === "banyak" || q.j === "susun") for (const i of q.b) await p.click(`[data-f="${ke(q.p[i])}"]`);
    else if (q.j === "isi") await p.fill('[data-f="isi"]', salahSengaja ? "wrongg" : q.b[0]);
    if (q.j === "susun") await ambil("susun");
    await p.waitForTimeout(100);
    await p.click('[data-f="aksi"]').catch(() => {}); await p.waitForTimeout(450);
    if (salahSengaja) await ambil("isi-salah", true);
    if (q.dengar) await ambil("dengar-selepas", true);
    await p.click('[data-f="aksi"]').catch(() => {}); await p.waitForTimeout(380);
  }
  await b.close(); try { fs.unlinkSync("index-uji.html"); } catch (e) {}
  console.log("diambil:", [...diambil].join(", "));
})();
