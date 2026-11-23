# The Design System Bible

A practical reference for building, running and scaling design systems, published at [designsystembible.com](https://designsystembible.com).

## How it works

- `content/design-system-bible.md` is the book. Edit this to change what the site says.
- `content/chapters.json` lists the parts in order. Each `# ` heading in the markdown becomes a part, so the list has to match the headings; the build stops if the counts differ.
- `src/template.html` is the page: layout, the command menu, contents, keyboard shortcuts and the graph view.
- `npm run build` embeds the markdown and chapter list into the template and writes `dist/index.html`. The page renders the markdown in the browser with marked, and draws the graph with d3.

The build also writes plain Markdown for agents and LLMs: `dist/llms.txt` indexes the book, `dist/md/<slug>.md` holds each part, and `dist/design-system-bible.md` is the whole book.

Cross-references written as a part name plus a section number (for example "Decision Frameworks 3.1") become links automatically.

## Keyboard

Press `?` on the site for the full list. `/` or `⌘K` opens the command menu; start a query with `>` for commands only, or add `in:<part>` to search one part. `j`/`k` move between sections, `[`/`]` between parts, `y` copies a link and `m` copies the section as Markdown.

## Develop

```sh
npm run dev
```

Pushes to `main` deploy to Vercel.
