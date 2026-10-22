# The Design System Bible

A practical reference for building, running and scaling design systems, published at [designsystembible.com](https://designsystembible.com).

## How it works

- `content/design-system-bible.md` is the book. Edit this to change what the site says.
- `src/template.html` is the page: layout, search, contents and the graph view.
- `npm run build` embeds the markdown into the template and writes `dist/index.html`. The page renders the markdown in the browser with marked, and draws the graph with d3.

Each `# ` heading in the markdown becomes a part, in this order, so the `CHAPTERS` list in the template has to match the headings. Cross-references written as a part name plus a section number (for example "Decision Frameworks 3.1") become links automatically.

## Develop

```sh
npm run dev
```

Pushes to `main` deploy to Vercel.
