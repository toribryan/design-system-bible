import { cp, mkdir, readFile, writeFile } from "node:fs/promises";

const SITE = "https://designsystembible.com";
const markdown = await readFile("content/design-system-bible.md", "utf8");
const chapters = JSON.parse(await readFile("content/chapters.json", "utf8"));
const template = await readFile("src/template.html", "utf8");

for (const slot of ["/*__DATA__*/", "/*__CHAPTERS__*/"]) {
  if (!template.includes(slot)) throw new Error(`src/template.html is missing the ${slot} placeholder`);
}

// Splits the book at its "# " headings, skipping fenced code, the same way the page does.
const parts = [];
let fence = false;
for (const line of markdown.split("\n")) {
  if (/^\s*(```|~~~)/.test(line)) fence = !fence;
  if (!fence && line.startsWith("# ")) parts.push({ title: line.slice(2).trim(), lines: [] });
  else if (parts.length) parts.at(-1).lines.push(line);
}
if (parts.length !== chapters.length) {
  throw new Error(`content/chapters.json lists ${chapters.length} parts but the markdown has ${parts.length} "# " headings`);
}

const json = (value) => JSON.stringify(value).replaceAll("</", "<\\/");
await mkdir("dist/md", { recursive: true });
await writeFile("dist/index.html", template.replace("/*__DATA__*/", () => json(markdown)).replace("/*__CHAPTERS__*/", () => json(chapters)));
await cp("public", "dist", { recursive: true });

// Plain Markdown for agents and LLMs: the whole book, one file per part, and an llms.txt index.
await writeFile("dist/design-system-bible.md", markdown);
const index = [];
for (const [i, part] of parts.entries()) {
  const { slug, name } = chapters[i];
  const body = part.lines.join("\n").replace(/\n-{3,}\s*$/, "").trim();
  await writeFile(`dist/md/${slug}.md`, `# ${part.title}\n\n${body}\n\nSource: ${SITE}/#${slug}\n`);
  const lead = (body.split("\n").find((l) => l.trim() && !/^[#|>*\-_]/.test(l.trim()) && !l.includes("@")) ?? "").replace(/\*\*|`/g, "");
  const short = lead.length > 160 ? lead.slice(0, lead.lastIndexOf(" ", 160)).replace(/[.,;:]$/, "") + "…" : lead;
  index.push(`- [${name}](${SITE}/md/${slug}.md)${short ? `: ${short}` : ""}`);
}
await writeFile(
  "dist/llms.txt",
  `# The Design System Bible\n\n> A practical reference for building, running and scaling design systems, from tokens and components to governance and working with AI agents.\n\nEach part is a plain Markdown file. The whole book is one file at ${SITE}/design-system-bible.md.\n\n## Parts\n\n${index.join("\n")}\n`
);

console.log(`Built dist/index.html, dist/llms.txt and ${parts.length} Markdown parts (${Math.round(markdown.length / 1024)} KB of content)`);
