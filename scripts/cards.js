// Share cards: docs/<slug>/card.png, 1200x630, rendered from scripts/og-chapter.html with headless Chrome.
// A card is re-rendered only when its inputs (title, chapter number, part, the template file) change; the hash is kept
// in data/cards.json. build.js wipes docs/ on every run, so it hands in the PNGs it saved beforehand (`old`).
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const {execFileSync} = require("child_process");
const CHROME = process.env.CHROME_PATH || ["C:", "Program Files", "Google", "Chrome", "Application", "chrome.exe"].join(path.sep);
const TEMPLATE = path.join(__dirname, "og-chapter.html");
const hashOf = (...parts) => crypto.createHash("sha1").update(parts.join("|")).digest("hex").slice(0, 12);

module.exports = function renderCards({root, out, chapters, parts, old}) {
  const storePath = path.join(root, "data", "cards.json");
  const store = fs.existsSync(storePath) ? JSON.parse(fs.readFileSync(storePath, "utf8")) : {};
  const tpl = fs.readFileSync(TEMPLATE, "utf8").split(String.fromCharCode(13)).join("");
  const fileUrl = "file:///" + TEMPLATE.split(path.sep).join("/");
  let rendered = 0, failed = 0, bytes = 0, present = 0;
  const have = {};
  for (const c of chapters) {
    const eyebrow = `Chapter ${c.n} · Part ${c.part + 1}: ${parts[c.part]}`;
    const hash = hashOf(c.title, eyebrow, tpl);
    const dest = path.join(out, c.slug, "card.png");
    fs.mkdirSync(path.dirname(dest), {recursive: true});
    if (old[c.slug] && store[c.slug] === hash) { fs.writeFileSync(dest, old[c.slug]); }
    else {
      try {
        execFileSync(CHROME, ["--headless=new", "--hide-scrollbars", "--disable-gpu", "--window-size=1200,630", "--virtual-time-budget=4000",
          `--screenshot=${dest}`, `${fileUrl}?title=${encodeURIComponent(c.title)}&eyebrow=${encodeURIComponent(eyebrow)}`], {stdio: "ignore"});
        store[c.slug] = hash; rendered++;
      } catch (e) { failed++; console.warn(`Could not render the card for ${c.slug} (${e.message.split(String.fromCharCode(10))[0]}); its og:image falls back to the site card.`); }
    }
    if (fs.existsSync(dest)) { have[c.slug] = true; present++; bytes += fs.statSync(dest).size; }
  }
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2) + "\n");
  return {have, rendered, failed, present, bytes};
};
