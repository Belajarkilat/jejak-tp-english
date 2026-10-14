/* Uji paparan contoh keluarga (?demo=keluarga) dan ambil tangkapan skrin. Perlu pelayan 8833. */
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  for (const tema of ["light", "dark"]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block", colorScheme: tema });
    const p = await ctx.newPage(); const ralat = [];
    p.on("pageerror", e => ralat.push(e.message));
    await p.goto("http://localhost:8833/index.html?demo=keluarga", { waitUntil: "domcontentloaded" });
    await p.waitForSelector(".kel-anak", { timeout: 8000 }).catch(() => ralat.push("kad anak tidak dipapar"));
    await p.waitForTimeout(800);
    const r = await p.evaluate(() => ({ kad: document.querySelectorAll(".kel-anak").length, lebih: document.documentElement.scrollWidth - innerWidth,
      eyebrow: (document.querySelector(".guruhd .eyebrow") || {}).textContent, teksSejarah: /Sejarah|cikgu/i.test(document.querySelector("#guruAkaun").innerText) }));
    console.log(tema, JSON.stringify(r), ralat.join(" | "));
    await p.screenshot({ path: `../jejakenglish-skrin/keluarga-${tema}.png`, fullPage: true });
    await ctx.close();
  }
  await b.close();
})();
