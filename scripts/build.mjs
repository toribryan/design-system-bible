import { cp, mkdir, readFile, writeFile } from "node:fs/promises";

const markdown = await readFile("content/design-system-bible.md", "utf8");
const template = await readFile("src/template.html", "utf8");
const data = JSON.stringify(markdown).replaceAll("</", "<\\/");

if (!template.includes("/*__DATA__*/")) throw new Error("src/template.html is missing the /*__DATA__*/ placeholder");

await mkdir("dist", { recursive: true });
await writeFile("dist/index.html", template.replace("/*__DATA__*/", () => data));
await cp("public", "dist", { recursive: true });

console.log(`Built dist/index.html (${Math.round(markdown.length / 1024)} KB of content)`);
