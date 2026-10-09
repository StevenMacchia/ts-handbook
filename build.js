// Builds the handbook's website into docs/ from README.md and chapters/*.md. No dependencies.
// GitHub Pages serves docs/ at https://stevenmacchia.com/ts-handbook/, one folder per chapter.
const fs = require("fs"), path = require("path");
const ROOT = __dirname, OUT = path.join(ROOT, "docs");
const HOME = "https://stevenmacchia.com/", SITE = HOME + "ts-handbook/", WRITING = HOME + "writing/";
const REPO = "https://github.com/stevenmacchia/ts-handbook", LINKEDIN = "https://www.linkedin.com/in/stevenmacchia";
const RESUME = HOME + "Steven_Macchia_Resume.pdf", EMAIL = "stevenamacchia@gmail.com";
// Cloudflare Web Analytics site tag, the same public ID the rest of stevenmacchia.com uses (no cookies)
const ANALYTICS = "6ed43d34957a49fcb90ec8e43f7db523";

// Shown under the title of every chapter that discusses law, and on the handbook's home page
const LEGAL_NOTE = "<b>General information, not legal advice.</b> Laws differ by country, change often and apply differently to each service. Check with your own legal team or outside counsel before acting on anything here.";
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8").replace(/\r/g, "");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slugify = s => s.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const section = (md, heading) => { const m = md.match(new RegExp(`^## ${heading}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "m")); return m ? m[1].trim() : ""; };

/* ---------- Content ---------- */
const README = read("README.md");
const STATUS = {};
for (const m of README.matchAll(/^\| (\d+) \| \[.+?\]\(chapters\/(.+?)\) \| .+? \| (\w+) \|$/gm)) STATUS[m[2]] = m[3];
const PARTS = [...README.matchAll(/^### Part (\d+): (.+)$/gm)].map(m => m[2]);
const CH = fs.readdirSync(path.join(ROOT, "chapters")).filter(f => /^\d\d-.+\.md$/.test(f)).sort().map(file => {
  const lines = read("chapters/" + file).split("\n");
  const [, n, title] = lines[0].match(/^# (\d+)\. (.+)$/);
  const q = (lines.find(l => /^> \*\*.+\*\*$/.test(l)) || "").replace(/^> \*\*|\*\*$/g, "");
  const nav = lines.find(l => /^\*Part \d+: /.test(l)) || "";
  const part = +(nav.match(/^\*Part (\d+)/) || [0, 1])[1] - 1;
  // Optional "*For: ...*" line naming who the chapter is written for; falls back to a default for the part
  const forLine = lines.find(l => /^\*For: .+\*$/.test(l)) || "";
  const forText = forLine ? forLine.replace(/^\*For: |\*$/g, "") : "";
  // The footer starts at the last rule followed by the "Part of The T&S Handbook" credit
  let end = lines.length;
  for (let i = lines.length - 1; i > 0; i--) if (lines[i] === "---" && lines.slice(i).join("\n").includes("Part of [The T&S Handbook]")) { end = i; break; }
  const footer = lines.slice(end).join("\n");
  const updated = (footer.match(/Last (?:updated|reviewed): (\d{4}-\d{2}-\d{2})/) || [])[1];
  // A separate, honest "reviewed" date: only set when the footer says so explicitly, never guessed
  const reviewed = (footer.match(/Last reviewed: (\d{4}-\d{2}-\d{2})/) || [])[1] || "";
  const body = lines.slice(1, end).filter(l => l !== lines[0] && !/^> \*\*.+\*\*$/.test(l) && l !== nav && l !== forLine && !/^\*\*Status: /.test(l)).join("\n").trim();
  // A chapter that discusses law says so in its footer; its page then shows the legal notice under the title
  const legal = /not legal advice/i.test(footer);
  return {file, n: +n, slug: file.slice(3, -3), title, q, part, forText, body, updated, reviewed, legal, status: STATUS[file] || "Outline"};
});
const bySlugFile = Object.fromEntries(CH.map(c => [c.file, c]));
const bySlug = Object.fromEntries(CH.map(c => [c.slug, c]));
// Who a chapter is for: its own "*For: ...*" line if it has one, else a default for the part
const FOR_DEFAULT = ["founders and first safety hires", "safety leads building the function", "people running a team", "leads at scale or under regulation"];
for (const c of CH) c.forWho = c.forText || FOR_DEFAULT[c.part] || "";
// Chapters with a matching T&S Workbench tool for their template: an "Open in the workbench" link beside it. Skips chapters with no sensible match.
const WORKBENCH_LINK = {
  "choosing-vendors-and-tools": ["vendors", "vendor scorecard"],
  "writing-policy": ["policy", "policy drafting"],
  "crisis-response": ["tabletop", "incident tabletop"],
  "measuring-what-matters": ["metrics", "metrics framework"],
  "know-your-risks": ["premortem", "abuse pre-mortem"],
  "child-safety-and-age-assurance": ["coppa", "COPPA/child-safety check"],
  "regulation-and-compliance": ["dsa", "DSA readiness"],
  "transparency-reports-and-notices": ["transparency", "transparency report builder"],
  "budgets-roadmaps-and-making-the-case": ["maturity", "maturity model"],
  "detection-and-prevention": ["coverage", "harm coverage radar"],
};

// Optional private list of terms that must never be published (kept outside this repo); the build stops if one appears
const BLOCKED = path.join(ROOT, "..", "_build", "blocked-terms.txt");
if (fs.existsSync(BLOCKED)) {
  const terms = fs.readFileSync(BLOCKED, "utf8").split(/\r?\n/).map(t => t.trim()).filter(t => t && !t.startsWith("#"));
  const sources = ["README.md", "CHAPTER-TEMPLATE.md", "articles.md", "data/posts.json", "data/updates.json", ...CH.map(c => "chapters/" + c.file)].filter(f => fs.existsSync(path.join(ROOT, f)));
  const hits = sources.flatMap(f => terms.filter(t => new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(read(f))).map(t => `${f}: "${t}"`));
  if (hits.length) throw new Error("Blocked term found, nothing was built:\n" + hits.join("\n"));
}
const published = CH.filter(c => c.status === "Published").length, drafted = CH.filter(c => c.status === "Draft").length;

/* ---------- Living data: Steven's posts and the handbook's change log, kept up to date by the daily workflow ----------
   data/posts.json: newest first, {id, title, date, type, topic, url, point, chapters: [slugs]}
   data/updates.json: newest first, {date, kind, chapters: [slugs], post: id or null, summary}
   Both are optional. Every chapter slug must be a real chapter and every post id must exist, or the build stops. */
const loadJSON = f => fs.existsSync(path.join(ROOT, f)) ? JSON.parse(read(f)) : [];
const POSTS = loadJSON("data/posts.json").slice().sort((a, b) => b.date.localeCompare(a.date));
const UPDATES = loadJSON("data/updates.json").map(u => ({chapters: [], post: null, ...u})).sort((a, b) => b.date.localeCompare(a.date));
// data/glossary.json: {term, definition, link: a URL or null}. Terms that appear in handbook chapters, exported from the
// Workbench's own term dictionary (GT_MORE / MX_GLOSS). The first occurrence of each term in each chapter's prose is wrapped
// in <abbr class="gl" title="...">; /glossary/ lists them all.
const GLOSSARY = loadJSON("data/glossary.json").slice().sort((a, b) => a.term.localeCompare(b.term));
const postById = Object.fromEntries(POSTS.map(p => [p.id, p]));
{
  const bad = [];
  POSTS.forEach(p => (p.chapters || []).forEach(s => bySlug[s] || bad.push(`data/posts.json, post ${p.id}: no chapter has the slug "${s}"`)));
  UPDATES.forEach((u, i) => {
    u.chapters.forEach(s => bySlug[s] || bad.push(`data/updates.json, entry ${i + 1} (${u.date}): no chapter has the slug "${s}"`));
    if (u.post && !postById[u.post]) bad.push(`data/updates.json, entry ${i + 1} (${u.date}): no post has the id "${u.post}"`);
  });
  if (bad.length) throw new Error("Data problem, nothing was built:\n" + bad.join("\n"));
}
for (const c of CH) {
  c.posts = POSTS.filter(p => (p.chapters || []).includes(c.slug));
  c.changes = UPDATES.filter(u => u.chapters.includes(c.slug));
  // The chapter's own "Last updated" line or its latest log entry, whichever is later
  c.updatedAt = [c.updated, c.changes[0] && c.changes[0].date].filter(Boolean).sort().pop() || "";
}
const TODAY = new Date().toLocaleDateString("en-CA"); // local date as YYYY-MM-DD, the same calendar the workflow dates entries by
const daysAgo = d => Math.round((Date.parse(TODAY) - Date.parse(d)) / 864e5);
const KIND = {written: "Written", revised: "Revised", added: "Added", "new-principle": "New principle", "new-chapter": "New chapter", published: "Published"};
const kindLabel = k => KIND[k] || String(k).replace(/-/g, " ").replace(/^./, ch => ch.toUpperCase());
const fmtDate = s => new Date(s + "T12:00:00Z").toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric", timeZone: "UTC"});
const shortDate = s => new Date(s + "T12:00:00Z").toLocaleDateString("en-US", {month: "short", day: "numeric", timeZone: "UTC"});
const monthName = s => new Date(s + "T12:00:00Z").toLocaleDateString("en-US", {month: "long", year: "numeric", timeZone: "UTC"});
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
const numWord = n => n <= 20 ? WORDS[n] : String(n);
const plural = (n, one, many) => `${n} ${n === 1 ? one : many || one + "s"}`;

/* ---------- Markdown (the subset the handbook uses) ---------- */
const linker = depth => u => {
  if (/^(https?:|mailto:|#)/.test(u)) return u;
  const [p, hash] = u.split("#"), h = hash ? "#" + hash : "", base = p.split("/").pop(), up = depth ? "../" : "./";
  if (bySlugFile[base]) return up + bySlugFile[base].slug + "/" + h;
  // README headings link to the matching section of the handbook's home page, whose anchors are shorter
  if (base === "README.md" || p === "") return up + ({"#what-this-handbook-believes": "#believes", "#contents": "#contents"}[h] || h);
  if (base === "articles.md") return WRITING;
  if (base === "LICENSE") return "https://creativecommons.org/licenses/by/4.0/";
  return `${REPO}/blob/main/${p.replace(/^(\.\.\/)+/, "")}${h}`;
};
function inline(s, link) {
  const code = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => `\u0000${code.push(`<code>${esc(c)}</code>`) - 1}\u0000`);
  s = esc(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${esc(link(u.replace(/&amp;/g, "&")))}">${t}</a>`)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => code[i]);
}
function md(src, link) {
  const L = src.split("\n"), out = [];
  const isBlock = l => /^(#{1,4} |```|>|\||---+$|\s*[-*] |\s*\d+\. )/.test(l);
  for (let i = 0; i < L.length;) {
    const l = L[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if (/^```/.test(l)) { const buf = []; i++; while (i < L.length && !/^```/.test(L[i])) buf.push(L[i++]); i++; out.push(`<pre><code>${esc(buf.join("\n"))}</code></pre>`); continue; }
    if ((m = l.match(/^(#{1,4}) (.+)$/))) { const t = inline(m[2], link); out.push(`<h${m[1].length} id="${slugify(t)}">${t}</h${m[1].length}>`); i++; continue; }
    if (/^---+$/.test(l)) { out.push("<hr>"); i++; continue; }
    if (/^>/.test(l)) {
      const buf = []; while (i < L.length && /^>/.test(L[i])) buf.push(L[i++].replace(/^> ?/, ""));
      const joined = buf.join("\n");
      // "> **Story.** text" is a first-person passage from experience: a distinct callout, not a plain quote
      const story = joined.match(/^\*\*Story\.?\*\*\s*/);
      out.push(story ? `<blockquote class="story"><p class="lbl">From Steven's work</p>${md(joined.slice(story[0].length), link)}</blockquote>` : `<blockquote>${md(joined, link)}</blockquote>`);
      continue;
    }
    if (/^\|/.test(l)) {
      const rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
      const cells = r => r.replace(/^\||\|$/g, "").split("|").map(c => c.trim());
      const [head, , ...rest] = rows;
      const headCells = cells(head), headPlain = headCells.map(c => esc(c.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")));
      // data-label repeats the column header on every cell, read by the stacked phone layout below 640px (CSS only)
      out.push(`<div class="tbl"><table><thead><tr>${headCells.map(c => `<th>${inline(c, link)}</th>`).join("")}</tr></thead><tbody>${rest.map(r => `<tr>${cells(r).map((c, ci) => `<td data-label="${headPlain[ci] || ""}">${inline(c, link)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if ((m = l.match(/^(\s*)([-*]|\d+\.) /))) {
      const ind = m[1].length, ordered = /\d/.test(m[2]), items = [];
      while (i < L.length && (L[i].trim() === "" ? i + 1 < L.length && /^\s+\S/.test(L[i + 1]) : true)) {
        const x = L[i], mm = x.match(/^(\s*)([-*]|\d+\.) (.*)$/);
        if (mm && mm[1].length === ind) items.push([mm[3]]);
        else if (x.trim() === "" || (x.length - x.trimStart().length) > ind) items[items.length - 1].push(x.slice(Math.min(ind + 2, x.length - x.trimStart().length)));
        else break;
        i++;
      }
      const li = it => { const [first, ...more] = it; const nested = more.join("\n").trim(); return `<li>${inline(first, link)}${nested ? md(nested, link) : ""}</li>`; };
      const start = ordered ? +l.trim().match(/^\d+/)[0] : 1;
      out.push(ordered ? `<ol${start !== 1 ? ` start="${start}"` : ""}>${items.map(li).join("")}</ol>` : `<ul>${items.map(li).join("")}</ul>`);
      continue;
    }
    const buf = []; while (i < L.length && L[i].trim() && !(buf.length && isBlock(L[i]))) buf.push(L[i++].trim());
    out.push(`<p>${inline(buf.join(" "), link)}</p>`);
  }
  return out.join("\n");
}

/* ---------- Glossary: wrap the first occurrence of each term, per chapter, in the chapter's prose ----------
   Terms with an uppercase letter (acronyms, names) match case-sensitively; others match case-insensitively. Both kinds
   accept a trailing "s". Matches are found on the untouched text, longest term first, so multi-word terms win over a
   shorter term they contain, and only the first still-unused match per term is wrapped. */
const reEscape = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const GLOSS_BY_TERM = Object.fromEntries(GLOSSARY.map(g => [g.term, g]));
const GLOSS_BY_LOWER = Object.fromEntries(GLOSSARY.map(g => [g.term.toLowerCase(), g.term]));
const glossTerms = (loose) => GLOSSARY.filter(g => loose ? !/[A-Z]/.test(g.term) : /[A-Z]/.test(g.term)).map(g => g.term).sort((a, b) => b.length - a.length);
const GLOSS_RE = [
  glossTerms(false).length ? new RegExp(`\\b(${glossTerms(false).map(reEscape).join("|")})s?\\b`, "g") : null,
  glossTerms(true).length ? new RegExp(`\\b(${glossTerms(true).map(reEscape).join("|")})s?\\b`, "gi") : null,
].filter(Boolean);
// Wraps unused terms found in one run of plain text (never inside a tag); "used" is shared across a whole chapter
const glossMark = (text, used) => {
  if (!GLOSS_RE.length || !text) return text;
  const hits = [];
  for (const re of GLOSS_RE) { re.lastIndex = 0; let m; while ((m = re.exec(text))) hits.push({i: m.index, len: m[0].length, raw: m[1]}); }
  hits.sort((a, b) => a.i - b.i);
  let out = "", last = 0;
  for (const h of hits) {
    if (h.i < last) continue; // overlaps a term already wrapped earlier in this text
    const term = GLOSS_BY_TERM[h.raw] ? h.raw : GLOSS_BY_LOWER[h.raw.toLowerCase()];
    if (!term || used.has(term)) continue;
    used.add(term);
    out += text.slice(last, h.i) + `<abbr class="gl" title="${esc(GLOSS_BY_TERM[term].definition)}">${text.slice(h.i, h.i + h.len)}</abbr>`;
    last = h.i + h.len;
  }
  return out + text.slice(last);
};
// Skips headings, links and code, where a term shouldn't be marked; "used" tracks terms already wrapped in this chapter
const GLOSS_SKIP = new Set(["a", "code", "pre", "h1", "h2", "h3", "h4", "h5", "h6"]);
const glossWrapHTML = (html, used) => {
  let depth = 0;
  return html.split(/(<[^>]+>)/).map(tok => {
    const m = tok.match(/^<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>$/);
    if (m) {
      if (GLOSS_SKIP.has(m[1].toLowerCase()) && !m[2]) depth = Math.max(0, depth + (tok[1] === "/" ? -1 : 1));
      return tok;
    }
    return depth > 0 ? tok : glossMark(tok, used);
  }).join("");
};
// Only wraps terms inside <div class="prose">...</div> blocks (a chapter's actual prose, never the template panels,
// which aren't marked "prose"), finding each block's true matching close by counting nested <div>s.
const wrapProseGlossary = (html, used) => {
  const marker = '<div class="prose"'; let out = "", i = 0;
  while (true) {
    const start = html.indexOf(marker, i);
    if (start < 0) { out += html.slice(i); break; }
    out += html.slice(i, start);
    const openEnd = html.indexOf(">", start) + 1;
    const divRe = /<div[\s>]|<\/div>/g; divRe.lastIndex = openEnd;
    let depth = 1, m, closeIdx = -1;
    while ((m = divRe.exec(html))) { if (m[0].startsWith("<div")) depth++; else if (--depth === 0) { closeIdx = m.index; break; } }
    if (closeIdx < 0) { out += html.slice(start); break; }
    out += html.slice(start, openEnd) + glossWrapHTML(html.slice(openEnd, closeIdx), used) + "</div>";
    i = closeIdx + 6;
  }
  return out;
};

/* ---------- Page shell ---------- */
const CSS = `:root{--bg:#FFFFFF;--panel:#F3F2EF;--ink:#121212;--muted:#595959;--line:#DDDAD4;--strong:#B9B5AD;--blue:#1A47B8;--good:#067647;--mark:#EEF2FC}
*{box-sizing:border-box}
[hidden]{display:none!important}
.vh{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 "Instrument Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--blue)}
:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
summary:focus-visible{border-radius:2px}
.mono{font-family:"IBM Plex Mono",ui-monospace,monospace;font-variant-numeric:tabular-nums}
.wrap{max-width:1152px;margin:0 auto;padding:0 32px}
h1,h2,h3{margin:0;font-weight:600;letter-spacing:-.025em;line-height:1.05}
.top{display:flex;align-items:center;gap:28px;height:64px;border-bottom:1px solid var(--line)}
.top .mark{width:12px;height:12px;background:var(--ink);flex:none}
.top .name{font-weight:600;margin-right:auto}
.top a{color:var(--ink);text-decoration:none;font-size:15px}
.top a:hover{text-decoration:underline}
.top a[aria-current="page"]{font-weight:600}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:4px;border:1px solid var(--ink);background:#fff;color:var(--ink);text-decoration:none;font-weight:600;font-size:15px}
.btn:hover{background:var(--panel);text-decoration:none}
.btn.primary{background:var(--ink);color:#fff}
.btn.primary:hover{background:#2a2a2a}
.top .btn{padding:8px 14px;font-size:14px}
.lbl{font-size:13px;color:var(--muted);font-weight:500;margin:0}
.lbl a{color:inherit}
h3.lbl{letter-spacing:0;line-height:1.55}
.hero{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:64px;align-items:end;padding:88px 0 56px}
.hero h1{font-size:clamp(44px,6.5vw,80px);margin-top:18px}
.lead{margin:22px 0 0;font-size:clamp(18px,2.2vw,21px);line-height:1.45;max-width:44ch}
.sub{margin:14px 0 0;font-size:17px;color:var(--muted);max-width:58ch}
.cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:30px}
.cta .go{margin-left:8px;font-weight:500}
.open{border-top:1px solid var(--ink);padding-top:14px;font-size:14.5px;display:grid;gap:8px}
.open .sq{display:inline-block;width:8px;height:8px;background:var(--good);margin-right:9px}
.open span{color:var(--muted)}
.open .mono{font-size:12.5px}
/* Grid children must be allowed to shrink, or a wide table inside a step widens the page on phones */
.steps>li>*,.cs-h>*,.stages>*{min-width:0}
.legal{margin:0 0 32px;padding:14px 18px;background:var(--panel);border-left:3px solid var(--ink);border-radius:0 4px 4px 0;font-size:15px;line-height:1.5;max-width:86ch}
.legal b{font-weight:600}
.hh .legal{margin:16px 0 0;font-size:14px}
.proof{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;padding:24px 0 72px;border-top:1px solid var(--line)}
.proof div{display:grid;gap:4px;font-size:14.5px}
.proof b{font-weight:600}
.proof span{color:var(--muted)}
section{padding:0 0 88px}
.sec-h{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;align-items:end;padding-top:28px;border-top:1px solid var(--ink);margin-bottom:28px}
h2{font-size:36px}
.sec-h p{margin:0}
.sec-h .big{font-size:19px;font-weight:500}
.sec-h .intro{margin-top:10px;color:var(--muted);max-width:72ch}
.rows{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.rows li{display:grid;grid-template-columns:56px minmax(0,1fr) minmax(0,1.5fr);gap:32px;padding:20px 0;border-bottom:1px solid var(--line)}
.rows li>*{min-width:0}
.rows i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:13px;color:var(--muted);padding-top:2px}
.rows h3{font-size:17px;line-height:1.35;letter-spacing:-.01em}
.rows p{margin:0;color:var(--muted);font-size:15px}
.rows .from{display:block;margin-top:8px;font-size:13.5px}
.rows .from a{text-decoration:none}
.rows .from a:hover{text-decoration:underline}
/* Home: a short hero, then the contents as the main column with a sidebar beside them */
.hh{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:24px 64px;align-items:end;padding:56px 0 36px}
.hh h1{font-size:clamp(40px,5.5vw,64px);margin-top:14px}
.hh .lead{margin-top:16px;max-width:46ch}
.hh .sub{margin-top:10px;font-size:16px;max-width:60ch}
.hh .cta{margin-top:24px}
.status{margin:0;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:13px;line-height:1.7;color:var(--muted);text-align:right;white-space:nowrap}
.status .sq{display:inline-block;width:8px;height:8px;background:var(--ink);margin-right:8px;vertical-align:1px}
.status .sq.outline{background:var(--strong)}
.status .sq.published{background:var(--good)}
.home{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:0 64px;border-top:1px solid var(--ink);padding-top:24px}
.home>*{min-width:0}
.home>section{padding-bottom:80px;scroll-margin-top:16px}
.ch-h{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;margin-bottom:20px}
.ch-h .intro{margin:0;color:var(--muted);font-size:15px}
.part{margin:28px 0 0}
.part:first-of-type{margin-top:0}
.part h3.ph{display:flex;align-items:baseline;gap:12px;font-size:16px;font-weight:600;letter-spacing:0;line-height:1.3;margin:0 0 8px}
.ph i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:12px;font-weight:500;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;flex:none}
.toc{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.toc li{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:2px 16px;padding:12px 0;border-bottom:1px solid var(--line)}
.toc li>*{min-width:0}
.toc i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:13px;color:var(--muted);padding-top:3px}
.toc .t{font-size:17px;font-weight:600;line-height:1.3;letter-spacing:-.01em}
.toc .t a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--strong);text-underline-offset:3px}
.toc .t a::after{content:"";position:absolute;inset:0}
.toc li:hover .t a{text-decoration-color:var(--ink)}
.toc li:hover i{color:var(--ink)}
.toc .q{grid-column:2;margin:0;color:var(--muted);font-size:14.5px;line-height:1.45}
.toc .st{grid-column:3;grid-row:1/3;align-self:start;display:grid;gap:3px;justify-items:end;padding-top:3px;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--muted);white-space:nowrap}
.toc .st.published{color:var(--good)}
.filters{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 18px;flex-basis:100%;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:13px;color:var(--muted)}
.filters button{border:0;background:none;padding:0;margin:0;color:var(--muted);font:inherit;cursor:pointer;text-underline-offset:3px}
.filters button:hover{color:var(--ink);text-decoration:underline}
.filters button[aria-pressed="true"]{color:var(--ink);text-decoration:underline}
.side{align-self:start;position:sticky;top:24px;display:grid;gap:32px;padding-bottom:80px}
.sb .lbl{margin-bottom:6px}
.sl{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.sl li{display:grid;gap:3px;padding:10px 0;border-bottom:1px solid var(--line);font-size:15px;line-height:1.4}
.sl li>*{min-width:0}
.sl a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--strong);text-underline-offset:3px;font-weight:500;overflow-wrap:anywhere}
.sl a:hover{text-decoration-color:var(--ink)}
.sl time,.sl .k{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--muted)}
.sl.up li{grid-template-columns:48px minmax(0,1fr);gap:0 12px;align-items:baseline;font-size:14.5px}
.sl.up time{padding-top:1px}
.side .more{margin-top:10px;font-size:14.5px}
.side .more a+a{margin-left:14px}
.pr2{display:grid;grid-template-columns:1fr 1fr;gap:0 64px;align-items:start}
.pr{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.pr li{border-bottom:1px solid var(--line)}
.pr summary{display:grid;grid-template-columns:36px minmax(0,1fr) 14px;gap:12px;align-items:baseline;padding:11px 0;cursor:pointer;list-style:none;font-weight:600;font-size:16px;line-height:1.35;letter-spacing:-.01em}
.pr summary::-webkit-details-marker{display:none}
.pr summary i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:13px;font-weight:400;color:var(--muted)}
.pr summary::after{content:"▾";color:var(--muted);text-align:right}
.pr details[open] summary::after{content:"▴"}
.pr summary:hover{color:var(--blue)}
.pr .pb{padding:0 0 14px 48px;color:var(--muted);font-size:15px;line-height:1.5}
.pr .pb p{margin:0}
.pr .from{display:block;margin-top:6px;font-size:13.5px}
.pr .from a{text-decoration:none}
.pr .from a:hover{text-decoration:underline}
.ctl{margin:10px 0 0}
.ctl button{border:0;background:none;padding:0;margin:0;font:inherit;font-size:14.5px;font-weight:500;color:var(--blue);cursor:pointer}
.ctl button:hover{text-decoration:underline}
.st3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}
.st3 div{display:grid;gap:3px;align-content:start;font-size:14.5px}
.st3 b{font-weight:600}
.st3 span{color:var(--muted)}
.row2{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;padding-top:32px}
.row2 ul{margin:0;padding-left:20px;display:grid;gap:6px;max-width:70ch}
.row2 p{margin:0 0 10px;max-width:70ch}
.feed{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px 64px;align-items:start}
.feed .lbl{margin-bottom:8px}
.log{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.log>li{display:grid;grid-template-columns:120px minmax(0,1fr);gap:32px;padding:18px 0;border-bottom:1px solid var(--line)}
.log>li>*{min-width:0}
.log time,.posts time{display:block;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:13px;color:var(--muted);padding-top:3px;white-space:nowrap}
.log .k,.posts .k{display:block;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--muted)}
.log .k{margin-bottom:4px}
.posts .k{margin-top:4px}
.log .ch{display:block;font-weight:500;line-height:1.35}
.log .ch a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--strong);text-underline-offset:3px}
.log .ch a:hover{text-decoration-color:var(--ink)}
.log p{margin:6px 0 0;color:var(--muted);font-size:15px;max-width:72ch}
.log .meta,.posts .meta{font-size:13.5px}
.log .meta a,.posts .meta a{text-decoration:none}
.log .meta a:hover,.posts .meta a:hover{text-decoration:underline}
.log ol{list-style:none;margin:0;padding:0;display:grid;gap:20px}
.feed .log>li,.feed .posts li{grid-template-columns:64px minmax(0,1fr);gap:20px}
.more{margin:16px 0 0;font-size:15px;font-weight:500}
.more a{text-decoration:none}
.more a:hover{text-decoration:underline}
.ch-page section{padding-bottom:72px}
.ch-page .sec-h h2,.cs-h h2{font-size:32px;line-height:1.08}
.ch-hero{padding:72px 0 48px}
.ch-hero h1{font-size:clamp(40px,5.5vw,68px)}
.ch-hero .lead{max-width:40ch}
.open .sq.outline{background:var(--strong)}
.toc-d summary{cursor:pointer;color:var(--blue);font-weight:500;list-style:none}
.toc-d summary::-webkit-details-marker{display:none}
.toc-d summary::after{content:" ▾"}
.toc-d[open] summary::after{content:" ▴"}
.toc-list{margin-top:10px;font-size:14px;max-height:420px;overflow:auto;border-top:1px solid var(--line);padding-top:4px}
.toc-list p{margin:12px 0 4px;font-weight:600;font-size:13px;color:var(--ink)}
.toc-list ol{list-style:none;margin:0;padding:0}
.toc-list a{display:flex;gap:10px;padding:3px 0;color:var(--muted);text-decoration:none;line-height:1.35}
.toc-list a:hover{color:var(--ink);text-decoration:underline}
.toc-list a i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:12px;width:18px;flex:none;padding-top:1px}
.toc-list a[aria-current="page"]{color:var(--ink);font-weight:600}
.toc-list .more-l{margin:14px 0 6px;font-weight:500;border-top:1px solid var(--line);padding-top:10px}
.toc-list .more-l a{display:inline;padding:0;color:var(--blue)}
.proof .lbl{grid-column:1/-1}
.proof div{align-content:start}
.cs-h{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;padding-top:28px;border-top:1px solid var(--ink)}
.prose{max-width:72ch}
.prose p,.prose li{font-size:17px;line-height:1.65}
.prose p{margin:0 0 16px}
.prose>:last-child{margin-bottom:0}
.prose ul,.prose ol{margin:0 0 16px;padding-left:20px}
.prose li{margin:6px 0}
.prose li::marker{color:var(--muted)}
.prose h3,.prose h4{font-size:17px;letter-spacing:-.01em;line-height:1.3;margin:24px 0 8px}
.prose blockquote{margin:20px 0;padding:2px 0 2px 18px;border-left:3px solid var(--ink)}
.prose blockquote.story{padding:24px 28px;border-left:0}
.prose blockquote.story>:last-child{margin-bottom:0}
.prose code{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.88em;background:var(--panel);padding:1px 5px;border-radius:3px}
abbr.gl{font-style:normal;text-decoration:underline dotted;text-decoration-color:var(--strong);text-underline-offset:3px;cursor:help}
.prose pre{background:var(--panel);padding:16px;border-radius:4px;overflow:auto}
.prose pre code{background:none;padding:0}
.prose hr{border:0;border-top:1px solid var(--line);margin:28px 0}
.prose a,.src a,.posts h3 a,.posts h4 a,.log .ch a{overflow-wrap:anywhere}
.tbl{overflow-x:auto;max-width:100%;margin:4px 0 20px}
.tbl table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.5}
.tbl th{text-align:left;vertical-align:bottom;font-size:13px;font-weight:500;color:var(--muted);padding:0 16px 10px 0;border-bottom:1px solid var(--ink);position:sticky;top:0;background:var(--bg)}
.tbl td{text-align:left;vertical-align:top;padding:12px 16px 12px 0;border-bottom:1px solid var(--line)}
.tbl td:first-child{font-weight:500}
/* Below 640px, each row becomes a card with the header repeated as a label beside every value (CSS only, data-label on each td) */
@media (max-width:640px){
  .tbl{overflow-x:visible}
  .tbl table{display:block;width:100%}
  .tbl thead{display:none}
  .tbl tbody{display:block}
  .tbl tr{display:block;margin:0 0 14px;padding:4px 14px;border:1px solid var(--line);border-radius:10px}
  .tbl tr:last-child{margin-bottom:0}
  .tbl td{display:grid;grid-template-columns:minmax(0,38%) minmax(0,1fr);gap:2px 14px;padding:10px 0;border-bottom:1px solid var(--line)}
  .tbl td:first-child{padding-top:10px}
  .tbl td:last-child{border-bottom:0;padding-bottom:10px}
  .tbl td::before{content:attr(data-label);font-size:12px;font-weight:600;color:var(--muted)}
  .tbl td:empty::before{content:none}
}
.stages{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px;background:var(--panel);border-radius:4px;padding:32px}
.stages h3{font-size:20px;line-height:1.2}
.stages .d{margin:8px 0 0;color:var(--muted);font-size:14px}
.stages .lbl{margin:22px 0 6px}
.stages .v{margin:0;font-size:15px}
.jump-row{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;margin:-6px 0 28px}
.jump{list-style:none;margin:0;padding:0;display:grid;gap:7px;font-size:14px;line-height:1.45}
.jump a{display:grid;grid-template-columns:28px minmax(0,1fr);align-items:baseline;color:var(--muted);text-decoration:none}
.jump a:hover{color:var(--ink);text-decoration:underline}
.jump i{font-family:"IBM Plex Mono",ui-monospace,monospace;font-style:normal;font-size:12px}
.steps{list-style:none;margin:0;padding:0}
.steps>li{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;padding:32px 0;border-bottom:1px solid var(--line);scroll-margin-top:24px}
.steps>li:first-child{padding-top:4px}
.steps .n{display:block;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:13px;color:var(--muted);margin-bottom:10px}
.steps h3{font-size:22px;line-height:1.2;letter-spacing:-.02em}
.tpl{background:var(--panel);border-radius:4px;padding:24px 28px;margin:0 0 16px}
.tpl .lbl{margin:0 0 6px}
.tpl h3{font-size:18px;line-height:1.3;margin:0 0 6px}
.tpl>p:not(.lbl){margin:0 0 14px;color:var(--muted);font-size:15px;max-width:72ch}
.tpl .tbl{margin-bottom:0}
.cards{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px}
.cards>*{grid-column:span 2}
/* Balance the last rows so no card sits alone: 4 cards read 2/2, 7 read 3/2/2, 5 read 3/2 */
.cards>:first-child:nth-last-child(3n+1)~:nth-last-child(-n+4),.cards>:first-child:nth-last-child(4),.cards>:first-child:nth-last-child(3n+2)~:nth-last-child(-n+2),.cards>:first-child:nth-last-child(2){grid-column:span 3}
@media (max-width:900px){.cards>*{grid-column:1/-1!important}}
@media (min-width:901px) and (max-width:1100px){.cards>*{grid-column:auto!important}.cards>:last-child:nth-child(odd){grid-column:1/-1!important}}
@media print{.cards>*{grid-column:auto!important}.cards>:last-child:nth-child(odd){grid-column:1/-1!important}}
/* Bigger tap areas on phones for small links, without moving anything */
@media (max-width:900px){.chg a,footer a,.card h3 a{padding-block:10px}.toc-d summary,button.lnk{padding-block:11px;margin-block:-11px}}
.card{display:grid;gap:6px;align-content:start;padding:18px 20px;border:1px solid var(--line);border-radius:4px;min-width:0}
.card .k{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;color:var(--muted)}
.card h3{font-size:17px;line-height:1.3;letter-spacing:-.01em}
.card h3 a,.posts h3 a,.posts h4 a,.src a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--strong);text-underline-offset:3px}
.card h3 a:hover,.posts h3 a:hover,.posts h4 a:hover,.src a:hover{text-decoration-color:var(--ink)}
.card p{margin:0;color:var(--muted);font-size:14.5px}
.posts{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.posts li{display:grid;grid-template-columns:120px minmax(0,1fr);gap:32px;padding:18px 0;border-bottom:1px solid var(--line)}
.posts li>*{min-width:0}
.posts h3,.posts h4{font-size:17px;line-height:1.35;letter-spacing:-.01em;margin:0;font-weight:600}
.posts p{margin:6px 0 0;color:var(--muted);font-size:15px;max-width:72ch}
.more-d{margin:0}
.more-d summary{list-style:none;cursor:pointer;color:var(--blue);font-weight:500;font-size:15px;padding:16px 0;border-bottom:1px solid var(--line)}
.more-d summary::-webkit-details-marker{display:none}
.more-d summary::after{content:" ▾"}
.more-d[open] summary::after{content:" ▴"}
.more-d[open] summary{border-bottom:0}
.sub-h{margin:36px 0 10px}
.sub-h:first-of-type{margin-top:0}
.src{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.src li{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:32px;padding:14px 0;border-bottom:1px solid var(--line);font-size:15px}
.src li span{color:var(--muted)}
.src a,.src b{font-weight:500}
.cover li{grid-template-columns:56px minmax(0,1fr)}
.cover p{color:var(--ink);font-size:16px}
.story{background:var(--panel);border-radius:4px;padding:28px 32px}
.story>.lbl{margin:0 0 10px;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)}
.pn{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.pn a{display:grid;gap:4px;padding:18px 20px;border:1px solid var(--line);border-radius:4px;color:var(--ink);text-decoration:none;min-width:0}
.pn a:hover{background:var(--panel)}
.pn a span{font-size:13px;color:var(--muted)}
.pn a b{font-weight:600;line-height:1.3}
.pn .next{text-align:right;grid-column:2}
footer{background:var(--ink);color:#fff;padding:56px 0}
footer .wrap{display:grid;grid-template-columns:300px minmax(0,1fr);gap:64px;align-items:baseline}
footer h2{color:#fff}
footer .c{display:flex;flex-wrap:wrap;gap:22px;font-size:17px}
footer .c a{color:#fff}
footer .fine{grid-column:1/-1;margin-top:28px;font-size:13px;color:#A8A6A1;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
footer .fine a{color:#A8A6A1}
footer :focus-visible{outline-color:#fff}
/* Search: a box in the hero (hidden without JS), results in a panel below it. Home: beside the status line; chapters: in the status box. */
.hs{display:grid;gap:18px;justify-items:end}
.srch{position:relative;margin:0;width:100%;max-width:320px;font-size:15px}
.hs .srch{max-width:320px;width:320px}
.sbox{position:relative}
.sbox svg{position:absolute;left:12px;top:50%;width:16px;height:16px;margin-top:-8px;color:var(--muted);pointer-events:none}
.srch input{width:100%;height:40px;margin:0;padding:0 40px 0 36px;border:1px solid var(--strong);border-radius:4px;background:#fff;color:var(--ink);font:inherit;font-size:15px;-webkit-appearance:none;appearance:none}
.srch input::placeholder{color:var(--muted);opacity:1}
.srch input:hover{border-color:var(--ink)}
.srch input:focus{border-color:var(--ink)}
.srch input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}
.srch .kbd{position:absolute;right:10px;top:50%;margin-top:-10px;height:20px;padding:0 6px;border:1px solid var(--line);border-radius:3px;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11.5px;line-height:18px;color:var(--muted);pointer-events:none}
.srch input:focus~.kbd{display:none}
@media (hover:none),(pointer:coarse){.srch .kbd{display:none}}
.sres{position:absolute;z-index:5;top:100%;right:0;margin-top:8px;width:min(540px,calc(100vw - 40px));max-height:min(520px,72vh);overflow:auto;padding:14px 18px 8px;background:#fff;border:1px solid var(--strong);border-radius:4px;box-shadow:0 12px 32px rgba(18,18,18,.12);text-align:left;white-space:normal}
.sres .lbl{margin:0 0 8px}
.sres ol{list-style:none;margin:0;padding:0}
.sres .grp{margin:0}
.sres .glbl{margin:14px 0 2px;padding-top:10px;border-top:1px solid var(--line);font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:11.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)}
.sres .grp:first-child .glbl{margin-top:0;padding-top:0;border-top:0}
.sres .gi{list-style:none;margin:0;padding:0}
.sres .it{padding:8px 0;border-top:1px solid var(--line)}
.sres .it:first-child{border-top:0}
.sres .it a{display:block;color:var(--ink);text-decoration:none}
.sres .it a:hover b,.sres .it a:focus-visible b{text-decoration:underline}
.sres .it b{display:block;font-weight:600;font-size:15px;line-height:1.3;letter-spacing:-.01em}
.sres .it span{display:block;color:var(--muted);font-size:13.5px;margin-top:2px}
.sres mark{background:var(--mark);color:var(--ink);font-weight:600;border-radius:2px;padding:0 1px}
.open .srch{margin-top:6px}
/* Quiet actions styled as links: the print control on chapter pages */
.lnk{border:0;background:none;padding:0;margin:0;font:inherit;color:var(--blue);font-weight:500;cursor:pointer;text-align:left;text-underline-offset:3px}
.lnk:hover{text-decoration:underline}
.open .lnk{font-size:14.5px;justify-self:start}
/* Copy button on each template panel (hidden without JS) */
.tph{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:-4px 0 4px}
.tph .lbl{margin:0}
.tph-actions{display:flex;gap:8px}
.copy,.dl{flex:none;font:inherit;font-size:13px;font-weight:500;line-height:1.2;padding:5px 10px;border:1px solid var(--strong);border-radius:4px;background:#fff;color:var(--ink);cursor:pointer}
.copy:hover,.dl:hover{border-color:var(--ink)}
.copy[data-done="1"]{color:var(--good);border-color:var(--good)}
.copy[data-done="0"]{color:var(--muted)}
.wb-link{margin:0 0 20px}
/* Spine: prev/next chapter nav already in .pn. Outline ("On this page"), read progress and the suggest-a-change link */
.continue{margin:0 0 20px}
.toc li.read .t{position:relative}
.toc li.read .t::before{content:"✓ ";color:var(--good);font-weight:700}
.suggest{margin:10px 0 0;font-size:14px}
.suggest a{text-decoration:none}
.suggest a:hover{text-decoration:underline}
.toc-rail-d{margin:0 0 28px;border:1px solid var(--line);border-radius:12px;padding:6px 18px;background:var(--panel);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.toc-rail-d summary{cursor:pointer;padding:12px 0;font-weight:600;font-size:14.5px;list-style:none;color:var(--ink)}
.toc-rail-d summary::-webkit-details-marker{display:none}
.toc-rail-d summary::after{content:" ▾";color:var(--muted)}
.toc-rail-d[open] summary::after{content:" ▴"}
.toc-rail-d ol{list-style:none;margin:0;padding:0 0 14px}
.toc-rail-d li{padding:4px 0}
.toc-rail-d a{color:var(--muted);text-decoration:none;font-size:14px;line-height:1.5}
.toc-rail-d a:hover{color:var(--ink);text-decoration:underline}
.toc-rail-d a.on{color:var(--blue);font-weight:600}
@media (min-width:1101px){
  /* Narrow the reading column just enough to dock a rail beside it (960 + 24 gap + 160 rail = 1144, fits from 1101 up), and
     tighten the step/section label column so a step's text doesn't lose half its width to the rail. */
  .ch-page .wrap{max-width:960px;margin-left:calc((100vw - 1144px)/2);margin-right:0}
  .ch-page .sec-h,.ch-page .cs-h,.ch-page .steps>li,.ch-page .jump-row{grid-template-columns:220px minmax(0,1fr)}
  .toc-rail{position:fixed;top:132px;left:calc((100vw - 1144px)/2 + 984px);width:160px;max-height:calc(100vh - 160px);overflow:auto;z-index:2}
  .toc-rail-d{border:0;background:none;padding:0;backdrop-filter:none;margin:0}
  .toc-rail-d summary{display:none}
  .toc-rail-d>ol{display:block!important;padding:0}
  .toc-rail-d::before{content:"On this page";display:block;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
}
.pf{display:none}
@media (max-width:900px){.hs{justify-items:start}.hs .srch,.srch{width:100%;max-width:none}.sres{position:static;width:auto;max-height:none;margin-top:10px;box-shadow:none}.hero{grid-template-columns:1fr;gap:28px;padding:48px 0 36px}.hh{grid-template-columns:1fr;gap:18px;padding:40px 0 28px}.status{text-align:left;white-space:normal}.home{grid-template-columns:1fr;padding-top:20px}.home>section{padding-bottom:48px}.side{position:static;padding-bottom:56px}.proof{grid-template-columns:1fr;gap:16px;padding-bottom:48px}.sec-h,.row2,.cs-h,.steps>li,.jump-row,footer .wrap{grid-template-columns:1fr;gap:16px}.jump-row{gap:8px;margin:-4px 0 20px}.rows li{grid-template-columns:40px minmax(0,1fr);gap:4px 12px}.rows li>:nth-child(n+3){grid-column:2}.toc li{grid-template-columns:34px minmax(0,1fr);gap:2px 12px}.toc .st{grid-column:2;grid-row:auto;display:flex;gap:12px;justify-items:start;padding-top:4px}.pr2,.st3{grid-template-columns:1fr}.pr2{gap:0}.pr+.pr{border-top:0}.wrap{padding:0 20px}.top{gap:16px}.top a:not(.btn){display:none}.top a.name{display:inline}.top .btn{margin-left:auto}section,.ch-page section{padding-bottom:56px}.ch-hero{padding:40px 0 32px}.stages{grid-template-columns:1fr;gap:28px;padding:22px}.cards{grid-template-columns:1fr}.feed{grid-template-columns:1fr;gap:40px}.posts li,.src li,.log>li,.feed .log>li,.feed .posts li{grid-template-columns:1fr;gap:4px}.posts time,.log time{padding-top:0}.posts .k{display:inline;margin:0 0 0 10px}.steps>li{gap:12px;padding:24px 0}.pn{grid-template-columns:1fr}.pn .next{grid-column:1;text-align:left}}
@media (min-width:901px) and (max-width:1100px){.cards,.proof{grid-template-columns:repeat(2,minmax(0,1fr))}.home{grid-template-columns:minmax(0,1fr) 260px;gap:0 40px}}
@media (max-height:640px){.side{position:static}}
@media (prefers-reduced-motion: reduce){*{scroll-behavior:auto}}
/* ---------- Aurora: the same light as the workbench and the personal site. Tokens, the wash, frosted panels, Inter, one violet accent ---------- */
:root{--bg:#F7F8FC;--panel:rgba(255,255,255,.72);--ink:#15172B;--muted:#636A85;--line:rgba(21,23,43,.10);--strong:rgba(21,23,43,.22);--blue:#6D5DF6;--good:#1FA971;--mark:rgba(109,93,246,.14);--navy:#10121F;
  --wash:radial-gradient(900px 420px at 72% -10%, rgba(109,93,246,.26), transparent 62%), radial-gradient(700px 380px at 22% 0%, rgba(255,160,120,.26), transparent 60%);
  --shadow:0 1px 1px rgba(21,23,43,.04), 0 10px 30px rgba(21,23,43,.07)}
body{background:var(--wash), var(--bg);background-repeat:no-repeat;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
h1,h2,h3{letter-spacing:-.022em}
h1{background:linear-gradient(100deg, var(--ink) 35%, var(--blue) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;width:fit-content}
.top{border-bottom-color:var(--line)}
.top .mark{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#6D5DF6,#FF9A7A)}
.btn{border-radius:10px;border-color:var(--line);background:#fff;box-shadow:0 1px 2px rgba(21,23,43,.05)}
.btn:hover{background:#fff;border-color:var(--strong);box-shadow:var(--shadow)}
.btn.primary,.btn.primary:hover{background:linear-gradient(135deg,#6D5DF6,#9B6BFF);border-color:transparent;color:#fff;box-shadow:0 6px 18px rgba(109,93,246,.35)}
.btn.primary:hover{background:linear-gradient(135deg,#7A6BFF,#A77DFF)}
.card,.sbox,.tpl,.hs,.cover{background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.sec-h,.open{border-top-color:var(--line)}
.open .sq,.focus li::before{border-radius:50%;background:var(--blue)}
.status{border-radius:999px}
.filters button[aria-pressed="true"],.toc a[aria-current="page"]{color:var(--blue)}
a:focus-visible,button:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
footer{background:var(--navy);background-image:radial-gradient(700px 300px at 80% 120%, rgba(109,93,246,.35), transparent 60%)}
footer .fine{color:#A0A6C0}
.legal{border-left-color:var(--blue);border-radius:0 12px 12px 0}
.prose blockquote{border-left-color:var(--blue)}
.status .sq{border-radius:50%;background:var(--blue)}
.open .sq{border-radius:50%}
.jump{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 28px}
.jump li{line-height:1.4}
.jump i{margin-right:8px;color:var(--blue)}
@media (max-width:640px){.jump{grid-template-columns:1fr}}
/* Print, or save as PDF: the chapter alone, without navigation or controls, with outside links' addresses shown */
@media print{
@page{margin:18mm 16mm}
html{scroll-behavior:auto}
body{font-size:11pt;line-height:1.45;color:#000;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
header,footer,.pn,.toc-d,.jump-row,.srch,.sres,.chg,.fresh,.filters,.side,.cta,.ctl,.copy,.dl,.lnk,.btn,.open .sq,#changes,#new,.more,.more-d summary,.toc-rail,.continue,.wb-link,.suggest{display:none!important}
.wrap{max-width:none;padding:0}
a{color:inherit}
.hero,.ch-hero,.hh{display:block;padding:0 0 14pt}
.ch-hero .lbl{font-size:9.5pt}
.ch-hero h1{font-size:26pt;letter-spacing:-.02em}
.ch-hero .lead{font-size:13pt;max-width:none;margin-top:10pt}
.open{margin-top:14pt;padding-top:8pt;border-top:1px solid #000;font-size:10pt;gap:4pt}
.legal{background:none;border:1px solid #999;border-left:3px solid #000;font-size:10pt;margin-bottom:16pt;max-width:none;break-inside:avoid}
.proof{gap:10pt 16pt;padding:12pt 0 16pt;border-top:1px solid #000;font-size:10pt;break-inside:avoid}
section,.ch-page section{padding:0 0 18pt}
.sec-h,.cs-h,.steps>li,.row2{grid-template-columns:1fr;gap:6pt}
.sec-h{padding-top:10pt;margin-bottom:10pt;border-top:1px solid #000;break-after:avoid;break-inside:avoid}
.sec-h .big{font-size:12pt}
h1,h2,h3,h4{break-after:avoid}
h2,.ch-page .sec-h h2,.cs-h h2{font-size:17pt}
.prose{max-width:none}
.prose p,.prose li{font-size:11pt;line-height:1.5}
.prose pre{white-space:pre-wrap;border:1px solid #999;background:none}
.prose code{background:none;border:1px solid #ccc}
.stages{grid-template-columns:repeat(3,minmax(0,1fr));gap:10pt;padding:10pt;background:none;border:1px solid #999;break-inside:avoid}
.stages h3{font-size:12pt}
.stages .v,.stages .d{font-size:9.5pt}
.steps>li{padding:10pt 0;break-inside:avoid}
.steps h3{font-size:14pt}
.tpl,.story,.card{background:none;border:1px solid #999;break-inside:avoid}
.tpl{padding:12pt 14pt}
.cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:8pt}
.rows li,.src li,.posts li,.log>li{break-inside:avoid}
.rows li{grid-template-columns:36pt minmax(0,1fr) minmax(0,1.4fr);gap:12pt;padding:8pt 0}
.rows p,.card p,.src li{font-size:10pt}
.tbl{overflow:visible;margin-bottom:12pt}
.tbl table{break-inside:avoid;font-size:9.5pt}
.tbl thead{display:table-header-group}
.tbl tr{break-inside:avoid}
.tbl th{font-size:8.5pt}
.tbl td{padding:5pt 8pt 5pt 0}
main a[href^="http"]::after{content:" (" attr(href) ")";font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:8pt;color:#444;word-break:break-all;font-weight:400}
.pf{display:block;margin-top:24pt;padding-top:8pt;border-top:1px solid #000;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:8.5pt;color:#444}
}`;

const ICON = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#121212"/><text x="16" y="21.5" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">SM</text></svg>');
const page = ({title, desc, url, depth, body, script = ""}) => {
  const up = depth ? "../" : "./";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="author" content="Steven Macchia">
<link rel="canonical" href="${url}">
<link rel="alternate" type="application/atom+xml" title="The T&amp;S Handbook: updates" href="${SITE}updates/feed.xml">
<meta property="og:type" content="article"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${HOME}og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${HOME}og-image.png">
<meta name="theme-color" content="#6D5DF6">
<link rel="icon" href="${ICON}">
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${ANALYTICS}"}'></script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap">
<style>
${CSS}
</style>
</head>
<body>
<header><div class="wrap"><nav class="top"><span class="mark" aria-hidden="true"></span><a class="name" href="${HOME}">Steven Macchia</a><a href="${HOME}#projects">Projects</a><a href="${up}" aria-current="page">Handbook</a><a href="${WRITING}">Writing</a><a href="${HOME}#experience">Experience</a><a href="${LINKEDIN}">LinkedIn</a><a class="btn" href="${RESUME}" download>Download resume</a></nav></div></header>
<main>
${body}
</main>
<footer><div class="wrap"><h2>Get in touch.</h2><div class="c"><a href="mailto:${EMAIL}">${EMAIL}</a><a href="${LINKEDIN}">LinkedIn</a><a href="${RESUME}" download>Resume</a></div><div class="fine"><span>© ${new Date().getFullYear()} Steven Macchia · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · <a href="${REPO}">Source</a> · <a href="${up}updates/">Updates</a> · <a href="${up}glossary/">Glossary</a></span><span>Written with AI assistance · Not legal advice: check with your own legal team · Visits counted without cookies</span></div></div></footer>
${script ? `<script>${script}</script>\n` : ""}</body>
</html>
`;
};
const dot = () => published ? "" : drafted ? "draft" : "outline";

/* ---------- Shared rows: a change from updates.json, a post from posts.json ----------
   "up" is the path prefix to the handbook root from the page being built ("./" or "../") */
const chLinks = (slugs, up) => {
  const cs = slugs.map(s => bySlug[s]).sort((a, b) => a.n - b.n);
  return cs.length <= 3 ? cs.map(c => `<a href="${up}${c.slug}/">${c.n}. ${esc(c.title)}</a>`).join(", ")
    : `${cs.length} chapters (${cs.map(c => `<a href="${up}${c.slug}/" title="${esc(c.title)}">${c.n}</a>`).join(", ")})`;
};
// except: the slug of the chapter the row sits on (its other chapters show as "Also"), or true to hide chapters
const updateBody = (u, up, except = "") => {
  const slugs = except === true ? [] : u.chapters.filter(s => s !== except), p = u.post && postById[u.post];
  // On a chapter's own page, a change shared with a few other chapters names them; one shared with many just says so
  const ch = !slugs.length ? "" : except ? (slugs.length > 3 ? `With ${slugs.length} other chapters` : "Also: " + chLinks(slugs, up)) : chLinks(slugs, up);
  return `<span class="k">${esc(kindLabel(u.kind))}</span>${ch ? `<span class="ch">${ch}</span>` : ""}<p>${esc(u.summary)}</p>${p ? `<p class="meta"><a href="${esc(p.url)}">Read the post: ${esc(p.title)} →</a></p>` : ""}`;
};
const updateRow = (u, up, {except = "", short = false} = {}) => `<li><time datetime="${u.date}">${short ? shortDate(u.date) : fmtDate(u.date)}</time><div>${updateBody(u, up, except)}</div></li>`;
const postRow = (p, up, {except = "", h = "h3", short = false} = {}) => {
  const others = (p.chapters || []).filter(s => s !== except);
  return `<li><div><time datetime="${p.date}">${short ? shortDate(p.date) : fmtDate(p.date)}</time>${short ? "" : `<span class="k">${esc(p.type)}</span>`}</div><div><${h}><a href="${esc(p.url)}">${esc(p.title)}</a></${h}><p>${esc(p.point)}</p>${others.length ? `<p class="meta">${except ? "Also in" : "In the handbook"}: ${chLinks(others, up)}</p>` : ""}</div></li>`;
};
// The latest few posts, then the rest behind a native disclosure, so a chapter with 30 posts stays short
const SHOW_POSTS = 5;
const postsList = (ps, up, except) => {
  const row = p => postRow(p, up, {except}), rest = ps.slice(SHOW_POSTS);
  return `<ol class="posts">${ps.slice(0, SHOW_POSTS).map(row).join("")}</ol>` + (rest.length ? `<details class="more-d"><summary>Show ${plural(rest.length, "more post")}</summary><ol class="posts">${rest.map(row).join("")}</ol></details>` : "");
};

/* ---------- Home of the handbook ---------- */
const link0 = linker(0);
const believes = section(README, "What this handbook believes");
const principles = [...believes.matchAll(/^(\d+)\. \*\*(.+?)\*\* (.+?) \*\((.+)\)\*$/gm)].map(m => ({n: m[1], head: m[2], text: m[3], from: m[4]}));
const stages = [...section(README, "How to read it").matchAll(/^\| \*\*(.+?)\*\* \| (.+?) \|$/gm)].map(m => [m[1], m[2]]);
const sideList = (depth, current) => { const up = depth ? "../" : "./";
  return PARTS.map((p, pi) => `<p>Part ${pi + 1}: ${esc(p)}</p><ol>${CH.filter(c => c.part === pi).map(c => `<li><a href="${up}${c.slug}/"${c === current ? ' aria-current="page"' : ""}><i>${c.n}</i><span>${esc(c.title)}</span></a></li>`).join("")}</ol>`).join("") + `<p class="more-l"><a href="${up}updates/">What changed recently →</a></p>`; };

const STATUS_ORDER = ["Published", "Draft", "Outline"];
const statuses = [...new Set(CH.map(c => c.status))].sort((a, b) => STATUS_ORDER.indexOf(a) - STATUS_ORDER.indexOf(b));
const countOf = s => CH.filter(c => c.status === s).length;
// A quiet marker on contents rows when the chapter's text changed in the last week. Linking a post ("added") doesn't count,
// or a busy week would mark most of the list; those show under "What's new" and on the chapter's own page.
const TEXT_KINDS = ["written", "revised", "published", "new-chapter"];
// A marker only means something when it singles a chapter out, so book-wide changes (more than half the chapters) don't add one
const fresh = c => { const u = c.changes.find(x => TEXT_KINDS.includes(x.kind) && x.chapters.length <= CH.length / 2); if (!u || daysAgo(u.date) > 7) return "";
  return `<span class="fresh">${u.kind === "new-chapter" ? "New" : "Updated " + shortDate(u.date)}</span>`; };
const outlines = CH.length - published - drafted;
const headline = !outlines ? `${CH.length} chapters` : published + drafted ? `${published + drafted} of ${CH.length} chapters written` : `Outlines for all ${CH.length} chapters`;
const latestPosts = POSTS.filter(p => (p.chapters || []).length).slice(0, 4);
// The full change log sits at the bottom of the page; the sidebar beside the contents shows a short teaser of it
const whatsNew = UPDATES.length || latestPosts.length ? `<section id="new"><div class="wrap">
  <div class="sec-h"><h2>What's new</h2><div><p class="big">${UPDATES.length ? `Updated ${fmtDate(UPDATES[0].date)}` : `Latest post ${fmtDate(latestPosts[0].date)}`}</p><p class="intro">The handbook grows as Steven writes. Posts are linked to the chapters they inform, and chapters are written and revised from them. <a href="./updates/">Every change, by date →</a></p></div></div>
  <div class="feed">
${UPDATES.length ? `    <div><h3 class="lbl">Latest changes</h3><ol class="log">${UPDATES.slice(0, 5).map(u => updateRow(u, "./", {short: true})).join("")}</ol><p class="more"><a href="./updates/">All updates →</a></p></div>` : ""}
${latestPosts.length ? `    <div><h3 class="lbl">Latest posts</h3><ol class="posts">${latestPosts.map(p => postRow(p, "./", {h: "h4", short: true})).join("")}</ol><p class="more"><a href="${WRITING}">All writing →</a></p></div>` : ""}
  </div>
</div></section>` : "";
const filters = statuses.length > 1 ? `<div class="filters" id="filters" hidden><span>Show</span><button type="button" aria-pressed="true" data-f="all">All ${CH.length}</button>${statuses.map(s => `<button type="button" aria-pressed="false" data-f="${s.toLowerCase()}">${esc(s)} ${countOf(s)}</button>`).join("")}</div>` : "";
// Status filter (only when statuses differ), then an "Open all" toggle for the principles; both are hidden without JS
const INDEX_JS = `(function(){var f=document.getElementById('filters');if(!f)return;f.hidden=false;var bs=[].slice.call(f.querySelectorAll('button')),rows=[].slice.call(document.querySelectorAll('.toc li')),parts=[].slice.call(document.querySelectorAll('.part'));bs.forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-f');bs.forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});rows.forEach(function(r){r.hidden=k!=='all'&&r.getAttribute('data-status')!==k;});parts.forEach(function(p){p.hidden=!p.querySelector('.toc li:not([hidden])');});});});})();
(function(){var b=document.getElementById('xall');if(!b)return;var ds=[].slice.call(document.querySelectorAll('#believes details'));if(!ds.length)return;b.hidden=false;function sync(){var all=ds.every(function(d){return d.open});b.textContent=all?'Close all':'Open all';b.setAttribute('data-open',String(all));}b.addEventListener('click',function(){var open=b.getAttribute('data-open')!=='true';ds.forEach(function(d){d.open=open});sync();});ds.forEach(function(d){d.addEventListener('toggle',sync)});sync();})();`;
// Reading progress on the home page: a check on chapters read (localStorage "tsh:read", set from each chapter page) and a
// "Continue from chapter N" button when a chapter was last opened (localStorage "tsh:last"). Degrades silently without storage.
const PROGRESS_HOME_JS = `(function(){var read=[];try{read=JSON.parse(localStorage.getItem('tsh:read')||'[]')}catch(e){}
read.forEach(function(s){var li=document.querySelector('.toc li[data-slug="'+s+'"]');if(li)li.classList.add('read')});
var last=null;try{last=localStorage.getItem('tsh:last')}catch(e){}
if(!last)return;var li=document.querySelector('.toc li[data-slug="'+last+'"]'),row=document.getElementById('continue-row'),btn=document.getElementById('continue-btn');
if(!li||!row||!btn)return;var a=li.querySelector('.t a'),num=li.querySelector('i');if(!a||!num)return;
btn.href=a.getAttribute('href');btn.textContent='Continue from chapter '+parseInt(num.textContent,10);row.hidden=false;})();`;

/* ---------- Search, copy and print: small vanilla scripts, each a progressive enhancement over a page that works without them ---------- */
// The search box (hidden until the script runs). "up" is the path to the handbook root, where search.json lives.
const searchForm = up => `<form class="srch" role="search" data-up="${up}" hidden><label class="vh" for="q">Search the handbook. Press slash to jump here.</label><div class="sbox"><svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="7" cy="7" r="4.6"/><path d="M10.4 10.4 14 14"/></svg><input type="search" id="q" name="q" placeholder="Search the handbook" autocomplete="off" spellcheck="false"><span class="kbd" aria-hidden="true">/</span></div><p class="vh" role="status"></p><div class="sres" hidden><p class="lbl" aria-hidden="true"></p><ol></ol></div></form>`;
// Loads search.json on first focus (one combined index for the handbook's chapters, Steven's posts, the Workbench tools and
// the updates log) and ranks items by where the words appear (title, then summary/tags/part, then the body text). Results
// are grouped by kind, chapters first, each group with a small label; a snippet under each title has the words marked.
const SEARCH_JS = `(function(){var f=document.querySelector('form.srch');if(!f||!window.fetch||!window.Promise)return;var q=f.querySelector('input'),res=f.querySelector('.sres'),cnt=res.querySelector('.lbl'),list=res.querySelector('ol'),live=f.querySelector('[role=status]'),up=f.getAttribute('data-up'),data=null,loading=null;f.hidden=false;
var KIND_ORDER=['chapter','post','tool','update'],KIND_LABEL={chapter:'Chapter',post:'Post',tool:'Tool',update:'Update'};
function load(){if(!loading)loading=fetch(up+'search.json').then(function(r){if(!r.ok)throw new Error(r.status);return r.json()}).then(function(d){data=d.items.map(function(it){return {kind:it.kind,title:it.title,url:it.url,ti:it.title.toLowerCase(),h:((it.summary||'')+' '+(it.tags||[]).join(' ')+' '+(it.part||'')).toLowerCase(),tx:(it.text||'').toLowerCase(),snipsrc:it.text||it.summary||''}})},function(){cnt.textContent=live.textContent='Search is unavailable right now.';list.textContent='';res.hidden=false});return loading}
function count(h,t){var n=0,i=-1;while(n<9&&(i=h.indexOf(t,i+1))>-1)n++;return n}
function rx(s){return s.replace(/[.*+?^$()|[\\]\\\\{}]/g,'\\\\$&')}
function search(terms){var out=[];data.forEach(function(it){var sc=0,hit=false;terms.forEach(function(t){if(it.ti.indexOf(t)>-1){sc+=20;hit=true}else if(it.h.indexOf(t)>-1){sc+=8;hit=true}var n=count(it.tx,t);if(n){sc+=2+n;hit=true}});if(hit)out.push({it:it,sc:sc})});out.sort(function(a,b){return b.sc-a.sc});return out}
function snip(it,terms){var text=it.snipsrc,low=it.tx,pos=-1;terms.forEach(function(t){var i=low.indexOf(t);if(i>-1&&(pos<0||i<pos))pos=i});if(pos<0)return text.slice(0,160)+(text.length>160?'\\u2026':'');var a=Math.max(0,pos-70),b=Math.min(text.length,pos+130);if(a>0){var sp=text.indexOf(' ',a);if(sp>-1&&sp<pos)a=sp+1}if(b<text.length){var e=text.lastIndexOf(' ',b);if(e>pos)b=e}return (a>0?'\\u2026':'')+text.slice(a,b)+(b<text.length?'\\u2026':'')}
function mark(el,text,re){text.split(re).forEach(function(p,i){if(!p)return;if(i%2){var m=document.createElement('mark');m.textContent=p;el.appendChild(m)}else el.appendChild(document.createTextNode(p))})}
function el(tag,cls,parent){var e=document.createElement(tag);if(cls)e.className=cls;if(parent)parent.appendChild(e);return e}
function render(){var v=q.value.trim(),terms=v.toLowerCase().split(/\\s+/).filter(function(t,i,a){return t.length>1&&a.indexOf(t)===i});if(!terms.length){res.hidden=true;list.textContent='';live.textContent='';return}
load().then(function(){if(!data)return;var hits=search(terms),re=new RegExp('('+terms.map(rx).join('|')+')','ig'),byKind={};hits.forEach(function(h){(byKind[h.it.kind]=byKind[h.it.kind]||[]).push(h)});
var n=hits.length,msg=n?(n===1?'1 result for ':n+' results for ')+'\\u201c'+v+'\\u201d':'Nothing found for \\u201c'+v+'\\u201d. Try a shorter or different word.';list.textContent='';cnt.textContent=live.textContent=msg;
KIND_ORDER.forEach(function(k){var arr=byKind[k];if(!arr||!arr.length)return;var grp=el('li','grp',list);el('p','glbl',grp).textContent=KIND_LABEL[k]+(arr.length>1?'s':'');var gi=el('ol','gi',grp);arr.slice(0,6).forEach(function(h){var li=el('li','it',gi),a=el('a','',li);a.href=h.it.url;mark(el('b','',a),h.it.title,re);mark(el('span','',a),snip(h.it,terms),re)})});
res.hidden=false})}
q.addEventListener('input',render);
q.addEventListener('focus',function(){load();if(q.value.trim()&&list.children.length)res.hidden=false});
f.addEventListener('submit',function(e){e.preventDefault();render();load().then(function(){var a=list.querySelector('a');if(a&&!res.hidden)a.focus()})});
f.addEventListener('keydown',function(e){var links=[].slice.call(list.querySelectorAll('a')),i=links.indexOf(document.activeElement);if(e.key==='Escape'){e.preventDefault();if(res.hidden){q.value='';q.blur()}else{res.hidden=true;q.focus()}}else if(e.key==='ArrowDown'&&links.length&&!res.hidden){e.preventDefault();links[Math.min(i+1,links.length-1)].focus()}else if(e.key==='ArrowUp'&&i>-1){e.preventDefault();if(i)links[i-1].focus();else q.focus()}});
document.addEventListener('keydown',function(e){if(e.key!=='/'||e.ctrlKey||e.metaKey||e.altKey)return;var t=e.target,n=t.tagName;if(n==='INPUT'||n==='TEXTAREA'||n==='SELECT'||t.isContentEditable)return;e.preventDefault();q.focus();q.select()});
document.addEventListener('click',function(e){if(!f.contains(e.target))res.hidden=true});})();`;
// Copy buttons on template panels: the block's Markdown sits in the panel's data-md attribute. Clipboard API first, execCommand as the fallback.
const COPY_JS = `(function(){var bs=[].slice.call(document.querySelectorAll('.tpl[data-md] .copy'));if(!bs.length)return;var live=document.createElement('p');live.className='vh';live.setAttribute('role','status');document.body.appendChild(live);function say(t){live.textContent='';setTimeout(function(){live.textContent=t},60)}
function legacy(s){var ta=document.createElement('textarea');ta.value=s;ta.setAttribute('readonly','');ta.setAttribute('aria-hidden','true');ta.style.cssText='position:fixed;top:-2000px;left:0;opacity:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy')}catch(e){}document.body.removeChild(ta);return ok}
bs.forEach(function(b){var md=b.closest('.tpl').getAttribute('data-md'),t;b.hidden=false;b.addEventListener('click',function(){var done=function(ok){b.textContent=ok?'Copied':'Copy failed';b.setAttribute('data-done',ok?'1':'0');say(ok?'Template copied as Markdown.':'Copying failed. Select the template and copy it by hand.');clearTimeout(t);t=setTimeout(function(){b.textContent='Copy';b.removeAttribute('data-done')},1800)};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(md).then(function(){done(true)},function(){done(legacy(md))});else done(legacy(md))})});})();`;
// "Print or save as PDF" (hidden without JS; Ctrl+P prints the same stylesheet). Collapsed post lists open for the print and close again after.
const PRINT_JS = `(function(){var b=document.querySelector('.print');if(!b)return;b.hidden=false;b.addEventListener('click',function(){window.print()});var opened=[];window.addEventListener('beforeprint',function(){opened=[].filter.call(document.querySelectorAll('details.more-d'),function(d){return !d.open});opened.forEach(function(d){d.open=true})});window.addEventListener('afterprint',function(){opened.forEach(function(d){d.open=false});opened=[]})})();`;
// Download a template panel as its own Markdown file (a Blob, no server round trip). Next to each Copy button.
const DOWNLOAD_JS = `(function(){var bs=[].slice.call(document.querySelectorAll('.tpl[data-md] .dl'));if(!bs.length||!window.Blob)return;bs.forEach(function(b){b.hidden=false;b.addEventListener('click',function(){var tpl=b.closest('.tpl'),md=tpl.getAttribute('data-md'),name=tpl.getAttribute('data-name')||'template';var blob=new Blob([md],{type:'text/markdown'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name+'.md';document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(function(){URL.revokeObjectURL(url)},1000)})})})();`;
// "On this page": a collapsed <details> above the content below 1100px, forced open into the sticky right rail above it (a
// native <details> only opens on user action or the "open" attribute, so JS sets that once the wide layout applies), and
// highlights the section currently in view with IntersectionObserver. No dependencies.
const OUTLINE_JS = `(function(){var nav=document.querySelector('.toc-rail');if(!nav)return;var d=nav.querySelector('.toc-rail-d');if(d&&window.matchMedia){var mq=window.matchMedia('(min-width:1101px)'),sync=function(){if(mq.matches)d.open=true};sync();(mq.addEventListener?mq.addEventListener('change',sync):mq.addListener(sync))}
if(!window.IntersectionObserver)return;var map={};[].slice.call(nav.querySelectorAll('a')).forEach(function(a){map[a.getAttribute('href').slice(1)]=a});var secs=[].slice.call(document.querySelectorAll('main section[id]')).filter(function(s){return map[s.id]});if(!secs.length)return;var obs=new IntersectionObserver(function(entries){entries.forEach(function(en){var a=map[en.target.id];if(a)a.classList.toggle('on',en.isIntersecting)})},{rootMargin:'-15% 0px -70% 0px'});secs.forEach(function(s){obs.observe(s)})})();`;
// Marks the chapter read in localStorage ("tsh:read") once the reader reaches its last section, and remembers it as the last-opened
// chapter ("tsh:last") for the home page's "Continue from chapter N" button. All degrades silently when storage is unavailable.
const progressChapterJS = (slug, lastId) => `(function(){try{localStorage.setItem('tsh:last','${slug}')}catch(e){}
if(!${lastId ? "true" : "false"}||!window.IntersectionObserver)return;var el=document.getElementById('${lastId}');if(!el)return;
var obs=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){try{var r=JSON.parse(localStorage.getItem('tsh:read')||'[]');if(r.indexOf('${slug}')===-1){r.push('${slug}');localStorage.setItem('tsh:read',JSON.stringify(r))}}catch(e){}obs.disconnect()}})},{threshold:0.1});
obs.observe(el)})();`;

// Sidebar teaser of a change: its date, kind and scope; the summary itself is in "What's new" below
const scope = u => { const cs = u.chapters.map(s => bySlug[s]).sort((a, b) => a.n - b.n);
  return !cs.length ? "The handbook" : cs.length <= 2 ? cs.map(c => `<a href="./${c.slug}/">${c.n}. ${esc(c.title)}</a>`).join(", ") : `${cs.length} chapters`; };
const sidePosts = latestPosts.slice(0, 3), sideUpdates = UPDATES.slice(0, 3);
const sidebar = sidePosts.length || sideUpdates.length ? `<aside class="side" aria-label="Latest posts and updates">
${sidePosts.length ? `  <div class="sb"><h3 class="lbl">Latest posts</h3><ol class="sl">${sidePosts.map(p => `<li><a href="${esc(p.url)}">${esc(p.title)}</a><span class="k"><time datetime="${p.date}">${shortDate(p.date)}</time> · ${esc(p.type)}</span></li>`).join("")}</ol><p class="more"><a href="${WRITING}">All writing →</a></p></div>` : ""}
${sideUpdates.length ? `  <div class="sb"><h3 class="lbl">Recent updates</h3><ol class="sl up">${sideUpdates.map(u => `<li><time datetime="${u.date}">${shortDate(u.date)}</time><span>${esc(kindLabel(u.kind))} · ${scope(u)}</span></li>`).join("")}</ol><p class="more"><a href="#new">What's new ↓</a><a href="./updates/">All updates →</a></p></div>` : ""}
</aside>` : "";
const fromLinks = p => (p.from.match(/\[[^\]]+\]\([^)\s]+\)/g) || []).map(l => inline(l, link0)).join(" · ");
const principleRow = p => `<li><details><summary><i>${p.n.padStart(2, "0")}</i><span>${inline(p.head, link0)}</span></summary><div class="pb"><p>${inline(p.text, link0)}</p><span class="from">From: ${fromLinks(p)}</span></div></details></li>`;
const half = Math.ceil(principles.length / 2);

const indexBody = `<div class="wrap">
  <div class="hh">
    <div>
      <p class="lbl">Free and open · By <a href="${HOME}">Steven Macchia</a>, Trust &amp; Safety leader</p>
      <h1>The T&amp;S Handbook</h1>
      <p class="lead">How do you build and run a Trust &amp; Safety team, from the first hire to a regulated program at scale?</p>
      <p class="sub">A practitioner's handbook in ${CH.length} chapters for founders, product leaders and new Trust &amp; Safety leads. No sign-up.</p>
      <p class="legal"><b>General information, not legal advice.</b> Check with your own legal team before acting on anything here.</p>
      <div class="cta"><a class="btn primary" href="./${CH[0].slug}/">Start with chapter 1</a><a class="go" href="#believes">What it believes →</a></div>
    </div>
    <div class="hs">${searchForm("./")}<p class="status"><i class="sq ${dot()}" aria-hidden="true"></i>${headline}${UPDATES.length ? `<br>Updated ${fmtDate(UPDATES[0].date)} · <a href="#new">What's new</a>` : ""}</p></div>
  </div>
</div>
<div class="wrap home">
<section id="contents">
  <p class="continue" id="continue-row" hidden><a class="btn primary" id="continue-btn" href="#"></a></p>
  <div class="ch-h"><h2>Contents</h2><p class="intro">${CH.length} chapters in ${PARTS.length} parts. Read Part 1 in order. After that, go to the chapter for the problem in front of you.</p>${filters}</div>
${PARTS.map((p, pi) => `  <div class="part"><h3 class="ph"><i>Part ${pi + 1}</i>${esc(p)}</h3><ol class="toc">
${CH.filter(c => c.part === pi).map(c => `    <li data-status="${c.status.toLowerCase()}" data-slug="${c.slug}"><i>${String(c.n).padStart(2, "0")}</i><span class="t"><a href="./${c.slug}/">${esc(c.title)}</a></span><p class="q">${esc(c.q)}</p><span class="st ${c.status.toLowerCase()}">${c.status === "Outline" ? `<span>Outline</span>` : ""}${fresh(c)}</span></li>`).join("\n")}
  </ol></div>`).join("\n")}
</section>
${sidebar}
</div>
<section id="believes"><div class="wrap">
  <div class="sec-h"><h2>What it believes</h2><div><p class="big">${numWord(principles.length).replace(/^./, ch => ch.toUpperCase())} principles behind every chapter</p><p class="intro">Each one comes from something Steven has written. Open a principle for the full line and the posts behind it. The posts are collected on the <a href="${WRITING}">writing page</a>.</p><p class="ctl"><button type="button" id="xall" hidden>Open all</button></p></div></div>
  <div class="pr2">
    <ol class="pr">${principles.slice(0, half).map(principleRow).join("")}</ol>
    <ol class="pr" start="${half + 1}">${principles.slice(half).map(principleRow).join("")}</ol>
  </div>
</div></section>
<section id="about"><div class="wrap">
  <div class="sec-h"><h2>Who it's for</h2><div><p class="big">Anyone who just became responsible for keeping people safe</p></div></div>
  <div class="row2"><span></span><div>${md(section(README, "Who it's for"), link0)}</div></div>
  <div class="row2"><p class="lbl">How to read it</p><div><p>Each chapter covers one part of the job: what good looks like at your stage, how to do it, the mistakes that cost teams most, a template to start from, and the <a href="${HOME}ts-workbench/">T&amp;S Workbench</a> tool that does the work with you.</p><p class="lbl">Every chapter shows what good looks like at three stages</p><div class="st3">${stages.map(([s, t]) => `<div><b>${esc(s)}</b><span>${inline(t, link0)}</span></div>`).join("")}</div></div></div>
  <div class="row2"><p class="lbl">Goes with</p><div><p>The handbook explains the job. <a href="${HOME}ts-workbench/">T&amp;S Workbench</a> gives you free, private tools to do it, and every chapter links the ones that go with it.</p></div></div>
</div></section>
${whatsNew}`;

/* ---------- Write ---------- */
fs.rmSync(OUT, {recursive: true, force: true});
fs.mkdirSync(OUT, {recursive: true});
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
fs.writeFileSync(path.join(OUT, "index.html"), page({title: "The T&S Handbook · Steven Macchia", desc: "How to build and run a Trust & Safety team, from the first hire to a regulated program at scale. A free, open handbook in progress by Steven Macchia.", url: SITE, depth: 0, body: indexBody, script: INDEX_JS + "\n" + SEARCH_JS + "\n" + PROGRESS_HOME_JS}));

/* ---------- Chapter pages: each section uses the same components as the rest of the site ---------- */
const STAGE_D = Object.fromEntries(stages);
const splitSections = body => {
  const out = []; let cur = null;
  for (const l of body.split("\n")) { const m = l.match(/^## (.+)$/); if (m) out.push(cur = {title: m[1].trim(), lines: []}); else if (cur) cur.lines.push(l); }
  return out.map(s => ({title: s.title, md: s.lines.join("\n").trim()}));
};
const bullets = src => src.split("\n").filter(l => /^- /.test(l)).map(l => l.slice(2).trim());
// "**Bold lead.** The rest" → ["Bold lead", "The rest"]
const lead = s => { const m = s.match(/^\*\*(.+?)\*\*:?\s*(.*)$/); return m ? [m[1].replace(/[.:]$/, ""), m[2]] : ["", s]; };
const tableRows = src => src.split("\n").filter(l => /^\|/.test(l)).map(r => r.replace(/^\||\|$/g, "").split("|").map(c => c.trim())).filter((r, i) => i !== 1);
// Template blocks: each starts with a bold name on its own line
const tplBlocks = src => src.split(/\n(?=\*\*)/).map(b => b.trim()).filter(Boolean);
const tplName = block => { const m = block.match(/^\*\*(.+?)\*\*/); return m ? m[1].replace(/\.$/, "") : ""; };
// Markdown to plain text for the search index: links keep their text, table cells are joined with "·", whitespace collapses
const plain = s => s.replace(/```[\s\S]*?```/g, " ").split("\n").filter(l => !/^\|[\s:|-]+\|$/.test(l)).join("\n")
  .replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "").replace(/^\s*(?:[-*]|\d+\.)\s+/gm, "")
  .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*|`/g, "").replace(/(^|[^\w])\*(?!\s)([^*\n]+?)\*(?!\w)/g, "$1$2")
  .replace(/^\s*\|\s*|\s*\|\s*$/gm, "").replace(/\s*\|\s*/g, " · ").replace(/\s+/g, " ").replace(/(?:\s*·\s*){2,}/g, " · ").replace(/^\s*·\s*|\s*·\s*$/g, "").trim();
const head = (title, big) => `<div class="sec-h"><h2>${esc(title)}</h2>${big ? `<p class="big">${big}</p>` : "<span></span>"}</div>`;
const prose = (s, link) => `<div class="cs-h"><h2>${esc(s.title)}</h2><div class="prose">${md(s.md, link)}</div></div>`;
const SECTION = {
  "What good looks like": (s, link) => {
    const [hdr, ...rows] = tableRows(s.md);
    return head(s.title, "What you have, and what you can show, at each stage") + `<div class="stages">${hdr.slice(1).map((st, i) => `<div><h3>${esc(st)}</h3>${STAGE_D[st] ? `<p class="d">${inline(STAGE_D[st], link)}</p>` : ""}${rows.map(r => `<p class="lbl">${inline(r[0].replace(/\*\*/g, ""), link)}</p><p class="v">${inline(r[i + 1] || "", link)}</p>`).join("")}</div>`).join("")}</div>`;
  },
  "How to do it": (s, link) => {
    const [intro, ...parts] = s.md.split(/^### /m);
    const steps = parts.map((x, i) => { const [t, ...rest] = x.split("\n"), m = t.match(/^(\d+)\.\s*(.+)$/); return {n: m ? m[1] : String(i + 1), t: m ? m[2] : t, md: rest.join("\n").trim()}; });
    // Long step lists get a jump list, so a reader can land on the step they need
    const jump = steps.length > 5 ? `<div class="jump-row"><p class="lbl">Jump to a step</p><ol class="jump">${steps.map(st => `<li><a href="#step-${st.n}"><i>${st.n.padStart(2, "0")}</i>${inline(st.t, link)}</a></li>`).join("")}</ol></div>` : "";
    return head(s.title, `${steps.length} steps`) + jump + (intro.trim() ? `<div class="prose" style="margin:0 0 24px">${md(intro.trim(), link)}</div>` : "") +
      `<ol class="steps">${steps.map(st => `<li id="step-${st.n}"><div><span class="n">Step ${st.n.padStart(2, "0")}</span><h3>${inline(st.t, link)}</h3></div><div class="prose">${md(st.md, link)}</div></li>`).join("")}</ol>`;
  },
  "Mistakes to avoid": (s, link) => head(s.title, "And what to do instead") +
    `<ol class="rows">${bullets(s.md).map((b, i) => { const [h, t] = lead(b); return `<li><i>${String(i + 1).padStart(2, "0")}</i><h3>${inline(h, link)}</h3><p>${inline(t, link)}</p></li>`; }).join("")}</ol>`,
  // Each block becomes a panel with an anchor (tpl-N), a Copy button and a Download button; the block's own Markdown rides along
  // in data-md for both buttons, and data-name names the file. A chapter with a matching Workbench tool gets a link to open it.
  "Start from this template": (s, link, c) => head(s.title, "Copy it, fill it in, make it yours") +
    (WORKBENCH_LINK[c.slug] ? `<p class="wb-link"><a class="btn" href="${HOME}ts-workbench/#${WORKBENCH_LINK[c.slug][0]}">Open the ${esc(WORKBENCH_LINK[c.slug][1])} in the workbench →</a></p>` : "") +
    tplBlocks(s.md).map((block, i) => {
    const lines = block.split("\n"), m = lines[0].match(/^\*\*(.+?)\*\*\s*(.*)$/), name = plain(tplName(block)) || "this template";
    const file = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `template-${i + 1}`;
    return `<div class="tpl" id="tpl-${i + 1}" data-md="${esc(block)}" data-name="${esc(file)}"><div class="tph"><p class="lbl">Template</p><div class="tph-actions"><button type="button" class="copy" hidden aria-label="Copy ${esc(name)} as Markdown">Copy</button><button type="button" class="dl" hidden aria-label="Download ${esc(name)} as Markdown">Download</button></div></div>${m ? `<h3>${inline(m[1].replace(/\.$/, ""), link)}</h3>${m[2] ? `<p>${inline(m[2], link)}</p>` : ""}${md(lines.slice(1).join("\n").trim(), link)}` : md(block, link)}</div>`;
  }).join(""),
  "Do it with": (s, link) => {
    const RANK = {"Workbench tool": 0, Metric: 1, Reference: 2};
    const cards = bullets(s.md).map(b => {
      const m = b.match(/^\*\*\[(.+?)\]\((.+?)\)\*\*\s*(\(metric\))?:?\s*(.*)$/);
      if (!m) return {kind: "", html: `<div class="card"><p>${inline(b, link)}</p></div>`};
      const kind = m[3] ? "Metric" : /ts-workbench\/#/.test(m[2]) ? "Workbench tool" : "Reference";
      return {kind, html: `<div class="card"><span class="k">${kind}</span><h3><a href="${esc(link(m[2]))}">${esc(m[1])}</a></h3>${m[4] ? `<p>${inline(m[4].charAt(0).toUpperCase() + m[4].slice(1), link)}</p>` : ""}</div>`};
    });
    // Tools first, then metrics, then references, so a long list reads in one pass
    cards.sort((a, b) => (a.kind in RANK ? RANK[a.kind] : 3) - (b.kind in RANK ? RANK[b.kind] : 3));
    return head(s.title, "Free tools and metrics that go with this chapter") + `<div class="cards">${cards.map(x => x.html).join("")}</div>`;
  },
  "Further reading": (s, link, c) => {
    const groups = []; let g = null;
    for (const l of s.md.split("\n")) {
      if (/^- /.test(l)) { if (!g) groups.push(g = {h: "", items: []}); g.items.push(l.slice(2).trim()); }
      else if (l.trim()) groups.push(g = {h: l.trim().replace(/:$/, ""), items: []});
    }
    // On the site, Steven's posts come from data/posts.json (newest first); the Markdown list is what GitHub shows
    const isMine = gr => /^from steven/i.test(gr.h);
    if (c.posts.length && !groups.some(isMine)) groups.unshift({h: "From Steven's writing", items: []});
    return head(s.title, "Steven's posts on this topic, and sources worth the time") + groups.map(gr => {
      if (isMine(gr) && c.posts.length) return `<p class="lbl sub-h">From Steven's writing · ${plural(c.posts.length, "post")}</p>` + postsList(c.posts, "../", c.slug);
      const parsed = gr.items.map(it => it.match(/^\*\*\[(.+?)\]\((.+?)\)\*\*\s*(?:\((\w{3} \d{1,2}, \d{4})\))?:?\s*(.*)$/));
      const list = parsed.every(p => p && p[3])
        ? `<ol class="posts">${parsed.map(p => `<li><time>${esc(p[3])}</time><div><h3><a href="${esc(link(p[2]))}">${esc(p[1])}</a></h3><p>${inline(p[4], link)}</p></div></li>`).join("")}</ol>`
        : `<ul class="src">${gr.items.map((it, i) => parsed[i] ? `<li><a href="${esc(link(parsed[i][2]))}">${esc(parsed[i][1])}</a><span>${inline(parsed[i][4], link)}</span></li>` : `<li><span>${inline(it, link)}</span></li>`).join("")}</ul>`;
      return (gr.h ? `<p class="lbl sub-h">${esc(gr.h)}</p>` : "") + list;
    }).join("");
  },
  "What this chapter will cover": (s, link) => head("What it will cover", "This chapter isn't written yet. Here's the outline.") +
    `<ol class="rows cover">${bullets(s.md).map((b, i) => `<li><i>${String(i + 1).padStart(2, "0")}</i><p>${inline(b, link)}</p></li>`).join("")}</ol>`,
  "From the field": (s, link) => head(s.title) + `<div class="story prose"><p class="lbl">From Steven's work</p>${md(s.md, link)}</div>`
};
const STATUS_TEXT = {Outline: "Outline: not written yet", Published: "Published"};
const SHOW_CHANGES = 5;

for (const c of CH) {
  const link = linker(1), prev = CH[c.n - 2], next = CH[c.n];
  const secs = splitSections(c.body), minute = secs.find(s => s.title === "In one minute");
  const words = c.body.replace(/\]\([^)]*\)/g, "]").split(/\s+/).filter(w => /[a-z]/i.test(w)).length;
  const changes = c.changes.length ? `<section id="changes"><div class="wrap"><div class="sec-h"><h2>Recent changes</h2><div><p class="big">${plural(c.changes.length, "change")} to this chapter, newest first</p><p class="intro">The <a href="../updates/">updates page</a> has every change to the handbook, by date.</p></div></div><ol class="log">${c.changes.slice(0, SHOW_CHANGES).map(u => updateRow(u, "../", {except: c.slug})).join("")}</ol>${c.changes.length > SHOW_CHANGES ? `<p class="more"><a href="../updates/">All ${plural(c.changes.length, "change")} on the updates page →</a></p>` : ""}</div></section>\n` : "";
  // "On this page": the chapter's own h2 sections (not "In one minute", already at the top). Sticky in the right rail above
  // 1100px, a collapsed <details> above the content below it; highlighted by section in view via OUTLINE_JS.
  const outlineSecs = secs.filter(s => s !== minute), outlineLabel = s => s.title === "What this chapter will cover" ? "What it will cover" : s.title;
  const outlineNav = outlineSecs.length > 1 ? `<div class="wrap"><nav class="toc-rail" aria-label="On this page"><details class="toc-rail-d"><summary>On this page</summary><ol>${outlineSecs.map(s => `<li><a href="#${slugify(s.title)}">${esc(outlineLabel(s))}</a></li>`).join("")}</ol></details></nav></div>\n` : "";
  const lastId = outlineSecs.length ? slugify(outlineSecs[outlineSecs.length - 1].title) : "";
  // The status badge: honest about review, not just authorship. Never a date that wasn't actually recorded.
  const reviewBadge = c.status === "Outline" ? `<div><i class="sq outline" aria-hidden="true"></i><b>${esc(STATUS_TEXT.Outline)}</b></div>`
    : `<div><i class="sq${c.reviewed ? "" : " outline"}" aria-hidden="true"></i><b>${c.reviewed ? `Reviewed ${fmtDate(c.reviewed)}` : "Draft, reviewed soon"}</b></div>`;
  const body = `<div class="ch-page">
<div class="wrap">
  <div class="hero ch-hero">
    <div>
      <p class="lbl"><a href="../">The T&amp;S Handbook</a> · Part ${c.part + 1}: ${esc(PARTS[c.part])}</p>
      <h1>${esc(c.title)}</h1>
      <p class="lead">${esc(c.q)}</p>
    </div>
    <div>
      <div class="open">${reviewBadge}<span>Chapter ${c.n} of ${CH.length}${c.status !== "Outline" ? ` · About ${Math.max(1, Math.round(words / 230))} minutes` : ""}</span><span>For: ${esc(c.forWho)}</span>${c.updatedAt ? `<span>Updated ${fmtDate(c.updatedAt)}${c.changes.length ? `<span class="chg"> · <a href="#changes">What changed</a></span>` : ""}</span>` : ""}<details class="toc-d"><summary>All chapters</summary><div class="toc-list">${sideList(1, c)}</div></details>${searchForm("../")}<button type="button" class="lnk print" hidden>Print or save as PDF</button></div>
    </div>
  </div>
${c.legal ? `  <p class="legal" role="note">${LEGAL_NOTE}</p>
` : ""}${minute ? `  <div class="proof" id="in-one-minute"><p class="lbl">In one minute</p>${bullets(minute.md).map(b => { const [h, t] = lead(b); return `<div><b>${inline(h, link)}</b><span>${inline(t.charAt(0).toUpperCase() + t.slice(1), link)}</span></div>`; }).join("")}</div>\n` : ""}</div>
${outlineNav}${secs.filter(s => s !== minute).map(s => `<section id="${slugify(s.title)}"><div class="wrap">${(SECTION[s.title] || prose)(s, link, c)}</div></section>`).join("\n")}
${changes}<section><div class="wrap"><nav class="pn" aria-label="Chapters">${prev ? `<a href="../${prev.slug}/"><span>← Part ${prev.part + 1} · Chapter ${prev.n}</span><b>${esc(prev.title)}</b></a>` : `<a href="../"><span>← Contents</span><b>Back to all ${CH.length} chapters</b></a>`}${next ? `<a class="next" href="../${next.slug}/"><span>Part ${next.part + 1} · Chapter ${next.n} →</span><b>${esc(next.title)}</b></a>` : `<a class="next" href="../updates/"><span>Updates →</span><b>What changed recently</b></a>`}</nav></div></section>
<div class="wrap"><p class="pf">${SITE}${c.slug}/ · The T&amp;S Handbook by Steven Macchia · CC BY 4.0 · General information, not legal advice</p><p class="suggest"><a href="${REPO}/blob/main/chapters/${c.file}">Suggest a change on GitHub →</a></p></div>
</div>`;
  const glossed = wrapProseGlossary(body, new Set()); // first occurrence of each term, within this chapter's prose only
  fs.mkdirSync(path.join(OUT, c.slug), {recursive: true});
  fs.writeFileSync(path.join(OUT, c.slug, "index.html"), page({title: `${c.n}. ${c.title} · The T&S Handbook`, desc: c.q, url: SITE + c.slug + "/", depth: 1, body: glossed, script: SEARCH_JS + "\n" + COPY_JS + "\n" + PRINT_JS + "\n" + DOWNLOAD_JS + "\n" + OUTLINE_JS + "\n" + progressChapterJS(c.slug, lastId)}));
}

/* ---------- Search index: one combined index for all three properties (the handbook, the writing page and the Workbench) ----------
   {generated, items: [{kind, title, url, summary, date, tags, part, text}]}, read by SEARCH_JS above. "kind" is one of
   "chapter" (all 19, with the "In one minute" text as the summary and the chapter body as text), "post" (from
   ../linkedin-posts/posts.json, linked to its slug in ../stevenmacchia.github.io/writing/slugs.json), "tool" (the Workbench
   routes, a static list kept in step with src/partNav.js's ROUTE_LABEL and the tool cards in src/partH4.js and partAI.js) and
   "update" (data/updates.json). Kept well under 600KB by capping "text" at 2000 characters and "summary" at 200. */
const truncate = (s, n) => { s = (s || "").trim(); if (s.length <= n) return s; const cut = s.slice(0, n - 1); const sp = cut.lastIndexOf(" "); return (sp > n * 0.6 ? cut.slice(0, sp) : cut) + "…"; };

// The Workbench's tool cards (src/partH4.js: the ten "tool(...)" cards plus notice/appeal/transparency from src/partAI.js's
// AI_TOOLS), named from src/partNav.js's ROUTE_LABEL. A static list: the workbench isn't read at build time (see CLAUDE.md).
const WB = "https://stevenmacchia.com/ts-workbench/#";
const TOOLS = [
  {route: "premortem", title: "Abuse pre-mortem", summary: "Profile a product and see how it will be misused before launch."},
  {route: "maturity", title: "Program maturity", summary: "Rate your program in eight areas and get a roadmap for the biggest gaps."},
  {route: "coverage", title: "Coverage radar", summary: "See where your products' risk outruns the defenses you have in place."},
  {route: "tabletop", title: "Incident tabletop", summary: "Rehearse a crisis and learn from every call, with the law behind it."},
  {route: "policy", title: "Policy stress-tester", summary: "Paste a rule to find vague words, missing exceptions and hard edge cases."},
  {route: "coppa", title: "COPPA readiness", summary: "Check children's privacy against the amended Rule, with drafts for Legal."},
  {route: "dsa", title: "DSA readiness", summary: "Find which EU Digital Services Act duties apply to you, article by article, with drafts for Legal."},
  {route: "vendors", title: "Vendor scorecard", summary: "Choose a moderation vendor on evidence, with RFP questions."},
  {route: "eval", title: "Classifier eval", summary: "Build a labeled test set from a rule and see where a moderation classifier fails, with what to change."},
  {route: "metrics", title: "Metrics framework", summary: "A reference for learning: the numbers a T&S program runs on, and how to measure each one."},
  {route: "notice", title: "Enforcement notice writer", summary: "Draft a clear, fair notice to a user whose content or account you actioned, and check it against what a statement of reasons needs to include."},
  {route: "appeal", title: "Appeal reviewer", summary: "Get a structured second opinion on a user's appeal: each part of the rule tested against the facts, the user's arguments weighed fairly, and a suggested reply."},
  {route: "transparency", title: "Transparency report", summary: "Build the transparency report the EU Digital Services Act asks for: the right sections for your type of service, a completeness check, and a summary written by Claude."},
];

const chapterItems = CH.map(c => {
  const minuteSec = splitSections(c.body).find(s => s.title === "In one minute");
  return {kind: "chapter", title: c.title, url: SITE + c.slug + "/", summary: truncate(minuteSec ? plain(bullets(minuteSec.md).join(" ")) : c.q, 200),
    date: c.updatedAt || null, tags: [], part: PARTS[c.part] || null, text: truncate(plain(c.body), 2000)};
});

// Posts: ../linkedin-posts/posts.json, linked to the writing page via ../stevenmacchia.github.io/writing/slugs.json. A post
// missing from slugs.json gets the same lowercase, hyphenated slug build-writing.js would derive, and the fallback is logged.
const slugify2 = s => String(s).toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "post";
const LP_POSTS_FILE = path.join(ROOT, "..", "linkedin-posts", "posts.json"), LP_SLUGS_FILE = path.join(ROOT, "..", "stevenmacchia.github.io", "writing", "slugs.json");
const LP_POSTS = fs.existsSync(LP_POSTS_FILE) ? JSON.parse(fs.readFileSync(LP_POSTS_FILE, "utf8")) : [];
const LP_SLUGS = fs.existsSync(LP_SLUGS_FILE) ? JSON.parse(fs.readFileSync(LP_SLUGS_FILE, "utf8")).posts || {} : {};
const postItems = LP_POSTS.map(p => {
  let slug = LP_SLUGS[p.id];
  if (!slug) { slug = slugify2(p.title); console.log(`search index: post "${p.id}" has no slug in writing/slugs.json, derived "${slug}"`); }
  return {kind: "post", title: p.title, url: `${WRITING}${slug}/`, summary: truncate(p.point, 200), date: p.date, tags: p.themes || [], part: null, text: truncate(p.body || p.point, 2000)};
});

const updateItems = UPDATES.map(u => ({kind: "update", title: kindLabel(u.kind), url: SITE + "updates/", summary: truncate(u.summary, 200), date: u.date, tags: [kindLabel(u.kind)], part: null, text: truncate(u.summary, 2000)}));

const toolItems = TOOLS.map(t => ({kind: "tool", title: t.title, url: WB + t.route, summary: truncate(t.summary, 200), date: null, tags: [], part: null, text: truncate(t.summary, 2000)}));

const SEARCH_INDEX = {generated: TODAY, items: [...chapterItems, ...postItems, ...toolItems, ...updateItems]};
fs.writeFileSync(path.join(OUT, "search.json"), JSON.stringify(SEARCH_INDEX));

/* ---------- Updates: the whole change log by month and day, plus an Atom feed ---------- */
const months = [];
for (const u of UPDATES) {
  let m = months.find(x => x.m === u.date.slice(0, 7)); if (!m) months.push(m = {m: u.date.slice(0, 7), days: []});
  let d = m.days.find(x => x.d === u.date); if (!d) m.days.push(d = {d: u.date, items: []});
  d.items.push(u);
}
// A stable anchor for each entry: its date and its number within that day, counted from the oldest
const anchor = u => { const day = UPDATES.filter(x => x.date === u.date); return `u-${u.date}-${day.length - day.indexOf(u)}`; };
const linkedPosts = POSTS.filter(p => (p.chapters || []).length).length;
const updatesBody = `<div class="ch-page">
<div class="wrap">
  <div class="hero ch-hero">
    <div>
      <p class="lbl"><a href="../">The T&amp;S Handbook</a> · Updates</p>
      <h1>What changed, and when</h1>
      <p class="lead">Every change to the handbook, newest first: chapters written and revised, posts linked to the chapters they inform, and new principles.</p>
      <div class="cta"><a class="btn primary" href="../">Back to the handbook</a><a class="btn" href="${LINKEDIN}">Follow on LinkedIn</a><a class="go" href="./feed.xml">Atom feed →</a></div>
    </div>
    <div>
      <div class="open"><div><i class="sq ${dot()}" aria-hidden="true"></i><b>${UPDATES.length ? `${plural(UPDATES.length, "change")} since ${fmtDate(UPDATES[UPDATES.length - 1].date)}` : "No changes logged yet"}</b></div>${UPDATES.length ? `<span>Latest: ${fmtDate(UPDATES[0].date)}</span>` : ""}<span>${headline}</span><span>${plural(linkedPosts, "post")} linked to chapters</span></div>
    </div>
  </div>
</div>
${months.map(m => `<section><div class="wrap"><div class="sec-h"><h2>${monthName(m.days[0].d)}</h2><p class="big">${plural(m.days.reduce((a, d) => a + d.items.length, 0), "change")}</p></div><ol class="log days">${m.days.map(d => `<li><time datetime="${d.d}">${fmtDate(d.d)}</time><ol>${d.items.map(u => `<li id="${anchor(u)}">${updateBody(u, "../")}</li>`).join("")}</ol></li>`).join("")}</ol></div></section>`).join("\n")}
${UPDATES.length ? "" : `<section><div class="wrap"><p class="sub">Nothing logged yet. Changes will appear here as chapters are written and posts are linked.</p></div></section>`}
</div>`;
fs.mkdirSync(path.join(OUT, "updates"), {recursive: true});
fs.writeFileSync(path.join(OUT, "updates", "index.html"), page({title: "Updates · The T&S Handbook", desc: "Every change to The T&S Handbook, newest first: chapters written and revised, posts linked to the chapters they inform, and new principles.", url: SITE + "updates/", depth: 1, body: updatesBody}));

const feedTitle = u => { const cs = u.chapters.map(s => bySlug[s]).sort((a, b) => a.n - b.n);
  return `${kindLabel(u.kind)}: ${cs.length ? cs.slice(0, 3).map(c => `${c.n}. ${c.title}`).join(", ") + (cs.length > 3 ? ` and ${cs.length - 3} more` : "") : "The T&S Handbook"}`; };
fs.writeFileSync(path.join(OUT, "updates", "feed.xml"), `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>The T&amp;S Handbook: updates</title>
  <subtitle>Every change to the handbook, newest first.</subtitle>
  <link href="${SITE}updates/feed.xml" rel="self"/>
  <link href="${SITE}updates/"/>
  <id>${SITE}updates/</id>
  <updated>${UPDATES.length ? UPDATES[0].date : TODAY}T12:00:00Z</updated>
  <author><name>Steven Macchia</name><uri>${HOME}</uri></author>
${UPDATES.slice(0, 50).map(u => { const p = u.post && postById[u.post], one = u.chapters.length === 1 && bySlug[u.chapters[0]];
  return `  <entry>
    <title>${esc(feedTitle(u))}</title>
    <link href="${one ? `${SITE}${one.slug}/#changes` : `${SITE}updates/#${anchor(u)}`}"/>
    <id>${SITE}updates/#${anchor(u)}</id>
    <updated>${u.date}T12:00:00Z</updated>
    <summary>${esc(u.summary + (p ? ` Read the post: ${p.title} (${p.url})` : ""))}</summary>
  </entry>`; }).join("\n")}
</feed>
`);

/* ---------- Glossary: every term from data/glossary.json, A to Z ---------- */
const glossaryBody = `<div class="ch-page">
<div class="wrap">
  <div class="hero ch-hero">
    <div>
      <p class="lbl"><a href="../">The T&amp;S Handbook</a> · Glossary</p>
      <h1>Glossary</h1>
      <p class="lead">Acronyms and Trust &amp; Safety jargon used across the handbook, in plain language.</p>
      <div class="cta"><a class="btn primary" href="../">Back to the handbook</a></div>
    </div>
    <div><div class="open"><div><i class="sq" aria-hidden="true"></i><b>${plural(GLOSSARY.length, "term")}</b></div><span>The first time a term appears in a chapter, it's underlined; hover or focus it for this same definition.</span></div></div>
  </div>
</div>
<section><div class="wrap">
  <ul class="src">${GLOSSARY.map(g => `<li id="${slugify(g.term)}">${g.link ? `<a href="${esc(g.link)}">${esc(g.term)}</a>` : `<b>${esc(g.term)}</b>`}<span>${esc(g.definition)}</span></li>`).join("")}</ul>
</div></section>
</div>`;
fs.mkdirSync(path.join(OUT, "glossary"), {recursive: true});
fs.writeFileSync(path.join(OUT, "glossary", "index.html"), page({title: "Glossary · The T&S Handbook", desc: "Acronyms and Trust & Safety jargon used across the handbook, in plain language.", url: SITE + "glossary/", depth: 1, body: glossaryBody}));

// A small public index of the chapters for other sites (the Workbench) to read: status and dates stay honest without a rebuild there
fs.writeFileSync(path.join(OUT, "chapters.json"), JSON.stringify({generated: TODAY, handbook: SITE, updates: SITE + "updates/", parts: PARTS,
  chapters: CH.map(c => ({n: c.n, slug: c.slug, title: c.title, question: c.q, part: c.part + 1, status: c.status, updated: c.updatedAt || null, posts: c.posts.length, url: SITE + c.slug + "/"}))}, null, 1) + "\n");
console.log(`built ${CH.length} chapters, the updates page, the glossary (${GLOSSARY.length} terms) and the feed into docs/ (${published} published, ${drafted} unreviewed, ${UPDATES.length} updates, ${POSTS.length} posts)`);
console.log(`search.json: ${SEARCH_INDEX.items.length} items (${chapterItems.length} chapters, ${postItems.length} posts, ${toolItems.length} tools, ${updateItems.length} updates), ${(fs.statSync(path.join(OUT, "search.json")).size / 1024).toFixed(1)} KB`);
