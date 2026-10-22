# The Design System Bible

Oct 20, 2026 · @Tori Bryan

A practical reference for building, running and scaling design systems, from what a token is and how 61 components are built to governing a system and working with AI agents. The tabs run from fundamentals to operating at scale. Pick the reading path that fits you, or jump to a question below.

If you're catching up, New in 2026 is a one-page briefing on what changed from 2025 through October 2026 and what to do about it.

## How the bible is organized

| Tab | What it covers | Open it when |
| --- | --- | --- |
| Worked Example | One component (Combobox) followed from request to adoption, with a link to every tab it touches | You want to see how the whole bible fits together |
| Foundations | What a design system is and its types, principles, tokens, patterns and content, accessibility, internationalization, data visualization, brand expression | You're learning the basics or setting up the foundations |
| Components | Component fundamentals and React component engineering | You're designing or building components |
|  └ Component A–Z | 61 standard components: usage, accessibility, props, composition | You need the details of one component |
|  └ Component Composition | How parts fit together in code and Figma, and how every component is built | You're designing a component's API or a pattern |
| Design to Code | Design–code parity, building the system in Figma, documentation | You're building the Figma library or connecting it to code |
|  └ System Architectures | How tokens, packages, Figma and docs fit together, with diagrams | You're choosing a technical setup |
| Governance | Where governance fits, decision rights, intake, contribution, RFCs, enforcement, versioning, support policy | You're running a system with several teams |
|  └ Decision Frameworks | How to make the calls system owners face most often | You're facing a hard call |
|  └ Workflows and Playbooks | Step-by-step playbooks for recurring work | You need the steps for a release, audit, migration, or your first 90 days |
| Strategy and Leadership | Charter, team, roadmap, funding, stakeholders, maturity, adoption, reporting | You're leading the system as a program |
| Agentic Design Systems | Building systems agents can use, and building products with agents | You're bringing AI into design or engineering |
| Reference | Who's who, books and methods, public systems, checklists and glossary | You want to go deeper or look something up |

## Reading paths

| If you are… | Read in this order |
| --- | --- |
| New to design systems | Foundations 1–3 → Components 1 → skim Component A–Z → Reference 2 (books) |
| A product designer using a system | Foundations 4–5 → Component A–Z → Component Composition 1–4 → Agentic Design Systems 6–8 |
| A designer building the system | Foundations → Components 1 → Component Composition → Design to Code 2 → Workflows and Playbooks |
| An engineer building the system | Components 2 → Component Composition → System Architectures → Agentic Design Systems 3–5 |
| A system lead or staff designer | Governance → Decision Frameworks → Strategy and Leadership → Workflows and Playbooks |
| Bringing in AI agents | Agentic Design Systems → Component Composition 13 → Design to Code 2 (handoff) |
| Starting or inheriting a system | Workflows and Playbooks 10 → Worked Example → Strategy and Leadership 1–3 → Governance 2–3 |

## If you read only five things

1. Foundations section 3: tokens and their tiers.
2. Components section 1: the component contract and its states.
3. Component Composition section 2: the composition API patterns.
4. Governance sections 1 and 3: where governance fits, and who decides what.
5. Decision Frameworks section 2: the quick reference of common decisions.

## Quick answers

| Question | Where to look |
| --- | --- |
| Does this belong in the system? | Decision Frameworks 3.1 |
| What props should a Select (or any component) have? | Component A–Z |
| Compound components, slots or props? | Component Composition 2 and 13 |
| How do I set up variables and components in Figma? | Design to Code 2 |
| How should token files and packages be structured? | System Architectures 2 and 4 |
| How do we ship a breaking change? | Governance 10, Decision Frameworks 6.1 |
| Who decides what? | Governance 3 |
| How do we add a new component, end to end? | Workflows and Playbooks 2 |
| How do designers prototype with the Figma MCP server? | Agentic Design Systems 8 |
| How do we prove the system's value? | Strategy and Leadership 7 and 8 |
| How does it all fit together? | Worked Example |
| How do we support RTL and other languages? | Foundations 6 |
| What colors should charts use? | Foundations 7 |
| I just inherited a system. Where do I start? | Workflows and Playbooks 10 |
| What should I read next? | Reference 2 |

## Keeping this current

Tool versions, Figma plan limits and AI workflows go out of date first, so review those tabs every quarter and the rest twice a year. When you review a tab, update its row here and add a line to the changelog.

| Tab | Last reviewed | Next review | What goes stale first |
| --- | --- | --- | --- |
| New in 2026 | Oct 20, 2026 | Jan 20, 2027 | Release timeline, standards status, what to do now |
| Agentic Design Systems | Oct 20, 2026 | Jan 20, 2027 | Tool landscape, MCP servers, config file formats |
| Design to Code | Oct 20, 2026 | Jan 20, 2027 | Figma features and plan gating |
| Components | Oct 20, 2026 | Jan 20, 2027 | React library landscape, styling approaches |
| Reference | Oct 20, 2026 | Jan 20, 2027 | Public systems list, people's roles, links |
| Foundations | Oct 22, 2026 | Apr 20, 2027 | WCAG references, chart library names |
| System Architectures | Oct 20, 2026 | Apr 20, 2027 | Token tooling, build pipeline examples |
| Component A–Z | Oct 20, 2026 | Apr 20, 2027 | Props that track a headless library's API |
| Component Composition | Oct 20, 2026 | Apr 20, 2027 | `render` / `asChild` conventions |
| Governance | Oct 20, 2026 | Apr 20, 2027 | Rarely: process, not tools |
| Decision Frameworks | Oct 20, 2026 | Apr 20, 2027 | AI decisions (section 9) |
| Workflows and Playbooks | Oct 22, 2026 | Apr 20, 2027 | Tool steps inside playbooks |
| Strategy and Leadership | Oct 20, 2026 | Apr 20, 2027 | Adoption metrics and benchmarks |
| Worked Example | Oct 22, 2026 | Apr 22, 2027 | Section numbers it links to |

### Changelog

| Date | Change |
| --- | --- |
| Oct 22, 2026 | Edited the prose in every tab for clarity; fixed two section references in Governance |
| Oct 22, 2026 | Added the Worked Example tab (Combobox, request to adoption) |
| Oct 22, 2026 | Foundations: added Brand expression (section 3), Internationalization and localization (section 6), Data visualization (section 7) |
| Oct 22, 2026 | Workflows and Playbooks: added First 90 days (section 10) |
| Oct 22, 2026 | Start here: new reading path and quick answers, this review table and changelog |

---

# New in 2026

This tab collects the changes from 2025 through October 2026 that matter most to design system teams: what shipped, what it changes, and what to do about it. The details live in the other tabs.

## 1. The big shifts at a glance

Seven shifts define the period, and most system teams will feel all of them. The table orders them roughly by how much they change day-to-day work.

| Shift | What changed | What to do |
| --- | --- | --- |
| Systems got a second audience: AI agents | Major public systems ship MCP servers; agent rules files are standard; generators build from real components (section 7) | Build the machine-readable layer: typed props, token descriptions, Code Connect, an MCP or skill, a rules file |
| Tokens got a standard | DTCG 2025.10 is stable; Figma imports and exports it natively (section 3) | Move your token source to DTCG JSON and generate everything from it |
| Accessibility became law | The EAA applies in the EU; its standard moves to WCAG 2.2; WCAG 2.2 is an ISO standard (section 3) | Target WCAG 2.2 AA and publish per-component conformance |
| Figma caught up with code | Slots, extended collections, DTCG import, Check designs, Code Connect UI, MCP write-to-canvas (section 4) | Rebuild the library to mirror code props, slots and token tiers |
| Headless + zero-runtime CSS is the default | Base UI v1, shadcn defaults to it, styled-components in maintenance, Primer moved to CSS Modules (section 5) | Plan the move off runtime CSS-in-JS; wrap a maintained headless library |
| The browser does more of the work | Popover, invoker commands, `@scope`, container and style queries reached Baseline (section 3) | Adopt them inside components so products get them without changing |
| Platform design languages changed | Liquid Glass (with user-controlled transparency), Material 3 Expressive, adaptive-first Android (section 6) | Add material and motion tokens; test every component across transparency, contrast and window sizes |

## 2. Timeline

*[Diagram: key releases · Jan 2025 to Oct 2026]*

The changes came in clusters. Mid-2025 brought new platform design languages and the EU accessibility law. October 2025 alone brought the stable tokens spec, React Compiler and Figma's biggest design-systems release. In 2026, agents and their context formats arrived.

## 3. Standards and regulation: the floor got higher and more legal

### Design tokens have a stable standard

The [W3C Design Tokens Community Group spec 2025.10](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) became the first stable version on Oct 28, 2025, with theming and multi-brand support, Display P3 and OKLCH color, and aliases. It's a Community Group spec, not a W3C Recommendation, but Figma, Style Dictionary (v5, adding 2025.10 support through 2026), Tokens Studio, Penpot, Sketch, Framer, Supernova, zeroheight and Knapsack back it. For the first time, tokens have a vendor-neutral file format.

### Accessibility moved from best practice to law

| Change | Date | What it means for system teams |
| --- | --- | --- |
| [European Accessibility Act](https://digital-strategy.ec.europa.eu/en/news/eu-becomes-more-accessible-all) applies | June 28, 2025 | E-commerce, banking, e-books, telecoms and transport ticketing sold in the EU must be accessible. A system used in EU consumer products now carries a legal floor. |
| [EN 301 549 V4.1.1](https://www.deque.com/blog/en-301-549-v4-1-1-is-final-what-changed-what-it-means-and-what-you-should-do/), the standard behind the EAA, moves to WCAG 2.2 | Published Sept 2026; citation in the EU Official Journal expected around late 2026 | WCAG 2.2 AA becomes the European target. Build to it now. |
| [WCAG 2.2 becomes ISO/IEC 40500:2025](https://www.w3.org/WAI/news/2025-10-21/wcag22-iso) | Oct 21, 2025 | Laws and procurement rules can cite 2.2 directly. |
| [US DOJ delays the ADA Title II web rule](https://plantemoran.com/explore-our-thinking/insight/2026/04/doj-extends-ada-title-ii-web-accessibility-compliance-deadlines) | Apr 20, 2026 | Public entities serving 50,000+ people now have until Apr 26, 2027 (smaller ones until Apr 26, 2028). The standard is still WCAG 2.1 AA. |
| [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/) | Still a working draft (latest Sept 10, 2026) | Not citable for compliance. Content meeting WCAG 2.2 AA is expected to meet most of its minimum level. Track it; build to 2.2 AA. |

### The web platform caught up with component libraries

Native features now cover much of what component libraries used to build in JavaScript. Status is from [webstatus.dev](https://webstatus.dev) (web-features data) as of Oct 20, 2026; "Baseline" means it works in all major browsers.

| Feature | Status | Replaces |
| --- | --- | --- |
| Popover API | Baseline since Jan 2025 | Custom top-layer and light-dismiss code for menus, popovers, toasts |
| Invoker commands (`command` / `commandfor`) | Baseline since Dec 2025 | JS to open and close dialogs and popovers |
| Container size queries | Baseline, widely available, since Aug 2025 | Viewport-only responsive components |
| Container style queries | Baseline since May 2026 | JS-driven variant and theme switching |
| `@scope` | Baseline since Mar 2026 | Naming conventions and tooling for scoped component styles |
| `contrast-color()` | Baseline since Apr 2026 | Hand-picked text colors on brand fills |
| `field-sizing` | Baseline since June 2026 | Auto-growing textarea scripts |
| View transitions (same document) | Baseline since Oct 2025 | Animation libraries for state changes |
| CSS anchor positioning | Conflicting data: reported Baseline in Jan 2026, now marked limited | Floating UI-style positioning; ship with a fallback |
| Customizable `<select>` (`appearance: base-select`) | Chrome and Safari 27; not Firefox | Custom select implementations, once Firefox ships |
| `popover="hint"`, interest invokers (`interestfor`), `dialog closedby` | Partial support | Tooltip and hover-card JS, later |

Adopt the Baseline features behind your component APIs so products get them for free, and keep watching the partial ones.

## 4. Design tools: Figma closed most of the gap with code

Figma's 2025–2026 releases removed the biggest reasons design libraries drifted from code: content regions can now be real slots, tokens can round-trip as DTCG JSON, multi-brand theming is native, and the library can lint itself. Full details are in Design to Code, section 2.

| Change | Status (Oct 2026) | Why it matters |
| --- | --- | --- |
| [Slots](https://help.figma.com/hc/en-us/articles/38231200344599) | Generally available, June 2026 | Components get real content regions that match code slots, so the "placeholder swap" hack can go |
| [Extended collections](https://help.figma.com/hc/en-us/articles/36346281624471) | Shipped Nov 2025, Enterprise | Native multi-brand theming: brands override values of a shared collection |
| DTCG import/export of variables | Shipped late 2025 | Tokens move between code and Figma in the standard format, without plugins |
| More variable modes | Professional 10, Organization 20 per collection | Light, dark, high contrast, density and brands fit in one collection |
| [Check designs](https://help.figma.com/hc/en-us/articles/39592284074263-Check-designs-in-Figma) | Shipped; contrast, library-mismatch and detach checks added June 2026 | A built-in linter for hard-coded values and detached components |
| [Grid auto layout](https://help.figma.com/hc/en-us/articles/31289469907863-Use-the-grid-auto-layout-flow) | Shipped at Config 2025 | Row-and-column layouts that behave like CSS grid |
| [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect) UI | Shipped; Professional and up | Map components to code inside Figma, with AI help |
| [Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) and write-to-canvas | Server GA; write-to-canvas in beta | Agents read designs with real component code, and can now build in Figma from your library |
| [Figma agent](https://www.figma.com/blog/figma-agent-and-design-systems/) and library guidelines | Open beta, Config June 2026 | Audits, bulk swaps and docs drafting; markdown rules attached to a library steer it |

## 5. Code and tooling: headless by default, zero-runtime styling, agent-aware workbenches

The React ecosystem settled on a clear default for component libraries: a headless primitive layer, CSS-variable tokens, and no runtime CSS-in-JS. Full details are in Components, section 2.

| Change | Date | Why it matters |
| --- | --- | --- |
| [React Compiler 1.0](https://react.dev/blog/2025/10/07/react-compiler-1) | Oct 7, 2025 | Automatic memoization; stop hand-writing `useMemo`/`useCallback` in new components |
| React 19: `ref` as a prop | Stable since Dec 2024; `forwardRef` on a deprecation path | Simpler component signatures; plan the `forwardRef` removal |
| [Base UI v1](https://infoq.com/news/2026/02/baseui-v1-accessible/) | Dec 11, 2025 (35 components; v1.9 by Oct 2026) | A maintained headless layer from the Radix, Floating UI and MUI teams |
| [shadcn/ui defaults to Base UI](https://ui.shadcn.com/docs/changelog) | July 2026 | The most-copied component starter moved off Radix as its default |
| [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4) | Jan 2025 | Tokens declared in CSS with `@theme`, every token a CSS variable |
| [styled-components in maintenance mode](https://opencollective.com/styled-components/updates/a-whole-new-world) | Mar 2025 | Runtime CSS-in-JS is no longer a reasonable choice for new libraries |
| [Storybook 10](https://storybook.js.org/blog/storybook-10/) and [Storybook MCP](https://storybook.js.org/docs/ai/mcp/overview) | Oct 28, 2025; MCP in 10.3, Apr 2026 (preview) | ESM-only, Vitest-based testing, and a manifest agents can query and test against |

Large systems are already moving: [Primer React v38](https://github.com/primer/react/discussions/7086) (Oct 27, 2025) replaced styled-components with CSS Modules and removed the `sx` prop, and [Tailwind](https://tailwindcss.com/blog) kept shipping through v4.3 (May 2026).

## 6. Visual languages and public systems: material, motion and adaptive layouts

The two biggest platform design languages both changed in ways that touch tokens. Apple added a translucent material that changes with user settings, and Google made motion and shape first-class.

### Apple Liquid Glass

| When | What happened |
| --- | --- |
| [June 9, 2025](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) | Announced at WWDC25: a translucent material that reflects and refracts what's behind it, across all Apple platforms (version 26), with new SwiftUI, UIKit and AppKit APIs |
| Sept 15, 2025 | Shipped to users with iOS 26 |
| Nov 3, 2025 | iOS 26.1 added a Clear / Tinted setting; Tinted raises opacity and contrast. Reduce Transparency and Increase Contrast still apply. |
| [June 8, 2026](https://www.macrumors.com/2026/06/10/how-liquid-glass-is-changing-in-ios-27/) | WWDC26 revised it for iOS 27 (shipped Sept 14, 2026): more diffusion behind glass, a transparency slider from ultra clear to fully tinted. Apps built with the Xcode 27 SDK reportedly can no longer opt out (source: an Apple developer-forum answer, not release notes). |

Native libraries now need material and layering tokens, and text contrast over moving content becomes a core problem. Treat translucency as a user preference on a range (clear, tinted, reduced transparency, increased contrast), and test every component in each.

### Google Material 3 Expressive and Android 17

- [Material 3 Expressive](https://blog.google/products-and-platforms/platforms/android/material-3-expressive-android-wearos-launch/) (May 13, 2025): spring-based motion physics, shape morphing, emphasized type, updated dynamic color and refreshed components; shipped with Android 16 and reached Pixel phones in Sept 2025. Google calls it an extension, not Material 4. In Jetpack Compose, the Expressive APIs were still in beta (Material3 1.5) as of Oct 2026.
- [Android 17](https://android-developers.googleblog.com/2026/06/Android-17.html) (June 16, 2026) is "adaptive-first": apps targeting it can't opt out of resizing on screens 600dp and wider. Components must work at any window size.

On both platforms, motion and shape become tokens as well as guidelines, and adaptive layouts are no longer optional on Android.

### Public systems

| System | Change | Date |
| --- | --- | --- |
| [GOV.UK Design System](https://design-system.service.gov.uk/community/whats-new) | Brand refresh (header, footer, service navigation) in May 2025; GOV.UK Frontend v6.0 with a new type scale and brand palette | Feb 9, 2026 |
| [Shopify Polaris](https://shopify.dev/changelog/polaris-unified-web-components-are-now-stable) | Unified web components stable across Admin, Checkout, Customer Accounts and POS | Oct 1, 2025 |
| [GitHub Primer](https://github.com/primer/react/discussions/7086) | Primer React v38 moved from styled-components to CSS Modules | Oct 27, 2025 |
| [IBM Carbon](https://www.carbondesignsystem.com/carbon-next) | Carbon v12 ("Carbon Next") previewed: new visual expression and motion, AI agent skills and guardrails, standard token names. Not released; v11 is current. | Page updated Aug 2026 |
| [USWDS](https://www.nextgov.com/people/2026/09/gsas-web-design-system-head-replaced-treasury-ai-engineer/416035/) | Leadership change at GSA; contributors lost repository access and published an open letter | Sept 2026 |

## 7. AI and agents: design systems got a second audience

This is the biggest change of the period. AI agents now read design systems as much as people do, and mature systems ship tooling for them. Full details are in Agentic Design Systems.

| Change | Date | Why it matters |
| --- | --- | --- |
| MCP servers from major public systems | 2025–2026 | [Atlassian](https://atlassian.design/get-started/develop/with-ai), [Carbon](https://carbondesignsystem.com/developing/carbon-mcp/overview/), [Primer](https://primer.style/product/getting-started/foundations/mcp), [Polaris](https://shopify.dev/docs/api/polaris/using-mcp), [Storybook](https://storybook.js.org/docs/ai/mcp/overview) and [shadcn](https://ui.shadcn.com/docs/mcp) let agents query components and tokens instead of guessing |
| Agent context files | Ongoing | `AGENTS.md` / `CLAUDE.md` rules files and `llms.txt` became the standard entry points for agents |
| [Atlassian's DESIGN.md vs MCP test](https://www.atlassian.com/blog/how-we-build/atlassians-design-md-is-here-what-we-learned-testing-portable-design-context-in-practice) | June 2026 | Retrieval through MCP used far fewer tokens than one big context file; the best evidence so far on how to feed agents |
| [v0 Design Systems 2.0](https://v0.app/docs/design-systems-2) | 2026 | Prototyping tools that build only from your verified components and props |
| [Figma Make kits](https://help.figma.com/hc/en-us/articles/43602393097239-Write-design-system-guidelines-for-Make-kits) | 2026 | Figma's prototyping tool can use your real npm package and guidelines |

What practitioners report ([zeroheight, State of AI in Design Systems 2026](https://zeroheight.com/resources/state-of-ai-in-design-systems/)): 82% of teams use AI in some form; 48% run an MCP server, but only 17% rate their docs "very AI-ready"; 59% see AI-built UI bypassing the system. Documentation is where teams are happiest with AI; design generation scores worst.

## 8. What to do about it

A prioritized list for a system team planning the next two or three quarters. "Now" items protect you from risk or unblock everything else; "Next" items pay off over the year; "Watch" items aren't ready to adopt.

### Now

- [ ] Audit components against WCAG 2.2 AA (target sizes, focus appearance, dragging alternatives) and publish conformance per component
- [ ] Move the token source to DTCG 2025.10 JSON; regenerate CSS, native and Figma outputs from it
- [ ] Add descriptions to every token and JSDoc to every prop, so people and agents can use them
- [ ] Write a short `AGENTS.md` rules template for consuming repos and set up an MCP server or skill for the system
- [ ] If you're on runtime CSS-in-JS, decide the migration target (CSS Modules, Tailwind v4 or zero-runtime) and the order

### Next

- [ ] Rebuild Figma components with native slots and code-matching properties; map them with Code Connect
- [ ] Adopt Popover, invoker commands, container queries and `@scope` inside components where Baseline allows
- [ ] Move to a maintained headless layer (Base UI, React Aria or Radix) behind your own API
- [ ] For native apps: add material and motion tokens; test with Liquid Glass transparency settings and Android adaptive layouts
- [ ] Turn on Figma Check designs (or a lint plugin) and code lint rules for raw values
- [ ] Pilot agent-assisted workflows (audits, docs, a designer prototyping kit) with an evaluation set

### Watch

- [ ] WCAG 3.0 drafts (not citable yet)
- [ ] Customizable `<select>`, `popover="hint"`, interest invokers and anchor positioning until all browsers ship them
- [ ] Carbon v12, Material on Compose, and Liquid Glass changes in future OS releases
- [ ] Agent context formats (DESIGN.md vs MCP vs skills) as more teams publish results

---

# Worked Example: Combobox

One component followed from a team's request to adoption across products, with a link at each step to the tab that explains it. Use it to see how the bible fits together, or as a template for your own first component. The company, teams and numbers are illustrative.

## 1. The request and the scope call

The Checkout team asks for a searchable country picker; within a week, Admin asks for a user-assignment field and Search asks for tag entry. All three need the same thing: a text input that filters a list of options.

| Step | What happened | Where it's explained |
| --- | --- | --- |
| Intake | Checkout files a request through the intake form: "Select with search, 250 countries." Triage scores it on reach, impact and effort | Governance section 5 |
| Spot the pattern | Triage finds the Admin and Search requests and two local combobox builds already in production, one of them inaccessible | Governance section 5 |
| Does it belong? | Used by 3+ teams, hard to get right (ARIA combobox pattern, async loading, keyboard), and a known accessibility risk. Yes, as core | Decision Frameworks 3.1 |
| Variant or new component? | Not a Select variant. Select picks from a fixed list; Combobox lets you type to filter and may allow free text, so its keyboard model and role differ. New component | Decision Frameworks 3.2 |
| Scope | In: single select, multi-select with chips, async options, empty and loading states. Out (for now): creating new options inline, grouped virtualized lists over 1,000 items | Component A–Z (Combobox) |

One request became one component serving three teams because triage looked past the ticket to the pattern. Checkout gets an interim answer (keep their local build, behind a flag) so the system doesn't block their launch.

## 2. Designing the API and the Figma component

A new core component with a public API is a hard-to-reverse decision, so it goes through a short RFC before anyone builds.

The RFC (Governance section 7) proposes a compound API, lists the three teams' use cases, and names the open question: should free text be allowed? Comments run for one week. The decision: free text is off by default and enabled with `allowCustomValue`, recorded as an ADR.

The API (Component Composition sections 2, 3 and 13) uses compound parts, because teams need to put custom content in options (avatars for Admin, flags for Checkout) without a growing list of props.

```tsx
<Combobox.Root value={country} onValueChange={setCountry} items={countries}>
  <Combobox.Label>Country</Combobox.Label>
  <Combobox.Input placeholder="Search countries" />
  <Combobox.Popup>
    <Combobox.Empty>No countries match</Combobox.Empty>
    <Combobox.List>
      {(item) => (
        <Combobox.Item value={item}>
          <Flag code={item.code} /> {item.name}
        </Combobox.Item>
      )}
    </Combobox.List>
  </Combobox.Popup>
</Combobox.Root>
```

The contract (Components section 1) covers the default, hover, focus, open, disabled, read-only, invalid and loading states. The keyboard follows the WAI-ARIA combobox pattern (arrows move, Enter selects, Escape closes then clears, Home/End in the input). The component builds on the headless primitive the system already uses instead of starting from scratch.

For internationalization (Foundations section 6), filtering uses locale-aware matching ("é" matches "e"), sorting uses `Intl.Collator`, the popup and chips mirror in RTL, and every string ("No countries match", "Remove {name}") is a prop.

In Figma (Design to Code section 2), Combobox is one component set with variants for size and state, boolean properties for label and helper text, and nested instances for the option row and chip so teams can swap content. Variables bind every color, radius and spacing value. A designer from Admin pairs on it so the multi-select chips work for their real data.

## 3. Building, testing and documenting

The build follows the new-component playbook (Workflows and Playbooks section 2), with design and code moving in parallel and meeting at a parity review.

| Step | What happened | Where it's explained |
| --- | --- | --- |
| Build | Engineer builds on the headless primitive, styles with tokens only, ships it in the `labs` tier first | Components section 2 |
| Test | Unit tests for filtering and selection; interaction tests for keyboard; axe in CI; visual regression in light, dark and RTL; pseudo-localized story | Components section 2, Foundations section 6 |
| Accessibility review | Screen reader pass in VoiceOver and NVDA finds that the result count isn't announced. Fixed with a polite live region ("12 results") | Workflows and Playbooks section 9 |
| Parity review | Designer and engineer compare the Figma component and the coded one state by state; two spacing mismatches fixed in Figma | Design to Code section 1 |
| Docs | Page covers when to use it (and when Select is better), anatomy, props, keyboard, accessibility notes, content guidelines and three live examples | Design to Code section 3 |
| Agent-ready | Component added to the guidelines file and Code Connect mapping so agents and the Figma MCP server pick Combobox, not a custom build | Agentic Design Systems sections 3–5 |

The team caught the accessibility bug before release because the review was a required step. Writing "when to use Select instead" in the docs prevents the most common misuse.

## 4. Releasing, adopting and what came after

Shipping is only the midpoint. The component pays off once the local builds are gone.

| Step | What happened | Where it's explained |
| --- | --- | --- |
| Release | Ships as a minor version (new, additive) in `labs`, with a changelog entry and a short demo at design crit | Workflows and Playbooks section 5, Governance section 10 |
| Pilot | Checkout swaps its local build first; Admin follows two sprints later. Their feedback adds an `onInputValueChange` callback for server-side search | Workflows and Playbooks section 1 |
| Promote | After two products use it for a release with no open bugs, it moves from `labs` to `core` | Workflows and Playbooks section 1 |
| Retire the forks | Both local comboboxes are deprecated with a codemod and a removal date one major version out | Workflows and Playbooks section 6 |
| Measure | Adoption tracked as instances in code and Figma; support questions about it tracked in office hours | Strategy and Leadership section 8 |

Six months later, a team asks for inline "create new option". That was the scope item deferred in step 1, so it goes back through triage instead of straight into the component, and ships as an additive prop after a short RFC. When a different team wants Combobox to look different on their marketing page, the call follows the divergence framework (Decision Frameworks section 5).

### The whole path at a glance

1. Request → triage spots the pattern across teams
2. Scope call: belongs in the system, new component, core
3. RFC → API decision recorded as an ADR
4. Figma and code built in parallel, tokens only
5. Tests, accessibility review, parity review, docs, agent context
6. Minor release in `labs` → pilot → promote to `core`
7. Deprecate local forks → measure adoption → iterate through intake

---

# Foundations

The ideas everything else builds on: what a design system is and the kinds that exist, the principles that settle arguments, tokens and the foundation set, patterns and content, and accessibility as a property of the whole system.

## 1. What a design system is

A design system is a product that serves product teams. It holds shared decisions, encoded as tokens, components and guidance, plus the people and process that keep them true. A Figma library, a component package and a style guide are each one layer of a design system; none of them is the whole thing.

| Term | What it is | What it lacks on its own |
| --- | --- | --- |
| Style guide | Rules for brand and visual language, usually a static document | Nothing enforces it in the product |
| Pattern library | Documented solutions to recurring UX problems | Often not tied to shipping code |
| Component library | Reusable UI in design and/or code | The why: when to use what, and who decides |
| Design system | All of the above, versioned, governed and supported as a product | (This is the whole thing) |

The layers, from the bottom up:

1. **Foundations.** Design tokens: color, type, space, radius, elevation, motion. The raw decisions.
2. **Components.** Buttons, inputs, dialogs: foundations assembled into reusable, accessible parts.
3. **Patterns.** Forms, empty states, navigation, data tables: components assembled to solve a user problem.
4. **Content and voice.** How the product talks, at every layer.
5. **Documentation.** The usage rules that make the other layers usable without asking someone.
6. **Governance.** Who decides, how changes get in, and how releases go out. Without it the system decays.

### Types of design systems

There's no single taxonomy. Systems vary along several independent dimensions, and every real system combines them (Carbon, for example, is a public, enterprise, multi-framework, packaged, centrally governed product system).

**By purpose and audience**

| Type | Serves | Examples |
| --- | --- | --- |
| Product (internal) | One company's product teams | Most company systems |
| Enterprise / multi-product | Many products and orgs inside one company | IBM Carbon, Atlassian |
| Platform / ecosystem | Third-party developers building on a platform, so their apps feel native | Shopify Polaris, Salesforce Lightning |
| Public sector | Government services, with accessibility and plain language at the core | GOV.UK, USWDS |
| General-purpose / open source | Anyone, as a starting point | Material Design, Bootstrap |
| Brand / marketing | Marketing sites, campaigns, brand expression | Brand guidelines plus web components for marketing pages |

**By depth (what it contains)**

| Type | Contains |
| --- | --- |
| Style guide | Visual and brand rules, usually static |
| Token-only / foundations | Tokens and guidance; teams build their own components |
| Component library | Reusable UI in design and/or code |
| Pattern library | Documented solutions to recurring UX problems |
| Full design system | All of the above plus docs, governance, releases and support |

**By strictness and structure** (Alla Kholmatova's [Design Systems](https://www.smashingmagazine.com/design-systems-book/))

| Dimension | One end | Other end |
| --- | --- | --- |
| Rules | Strict: detailed specs, strong process, little deviation | Loose: guidance and examples, room for experimentation |
| Parts | Modular: interchangeable parts reused across many contexts | Integrated: parts optimized for one product or context |
| Organization | Centralized: one team owns it | Distributed: owned across product teams |

**By brand architecture**

| Type | How it works |
| --- | --- |
| Single-brand | One look, one set of tokens |
| Multi-brand / themeable | Shared components, brand-specific token layers (see the System Architectures tab) |
| White-label | Built to be re-skinned by customers or partners |

**By technology and distribution**

| Type | Examples |
| --- | --- |
| Styled framework | MUI, Bootstrap, Chakra |
| Headless / unstyled primitives | Radix, Base UI, React Aria, Ark UI |
| Copy-in / open code | shadcn/ui |
| Utility-first foundation | Tailwind CSS used as the token and styling layer |
| Framework-agnostic | Web components (Shopify Polaris today, Adobe Spectrum Web Components) |
| Native / multi-platform | SwiftUI and Compose libraries sharing tokens (Fluent, Material) |

**By governance model:** solitary, centralized, federated or hybrid (see the Governance tab).

**By consumer:** human-first (docs for people) or agent-ready (machine-readable tokens, typed APIs, MCP servers and rules files alongside the docs; see the Agentic Design Systems tab).

A team needs a system when the cost of inconsistency becomes visible: the same control built three ways, designers redrawing the same screens, accessibility bugs fixed one screen at a time, or a rebrand that would mean touching every file. A single product with one designer usually needs a token file and a few components, not a program. Several products, several squads, or a platform other teams build on need the full thing.

Treat the system as a product. It has users (designers and engineers), a roadmap, releases, support and success metrics. A system run as one team's side project stalls once that team's priorities move.

## 2. Principles

A good principle settles an argument between two reasonable options. If nobody would ever argue the opposite, it is a value statement, not a principle.

Test each principle:

- **Is the opposite defensible?** "Clarity over density" passes, because some products should be dense. "Be accessible" fails, because nobody argues for inaccessible.
- **Does it name a trade-off?** Write it as "X over Y" or "X, even when Y".
- **Can you point to a decision it made?** Every principle should have at least one real example in the docs.
- **Is the list short?** Keep it to three to five. With ten principles, none of them get used.

| Weak | Strong | Why the strong one works |
| --- | --- | --- |
| Simple | Fewer options over more flexibility. Add a prop only after three teams need it. | Tells you what to refuse |
| Consistent | Consistent behavior over consistent looks. A delete confirms the same way everywhere, even when it looks different. | Says what must match and what may vary |
| Accessible | Accessible by default. Consumers should not need to add ARIA to use a component correctly. | Puts the burden on the system, not the user |
| Beautiful | Content first. Chrome recedes so data reads first. | Resolves layout fights |
| Scalable | Composable over configurable. Prefer small parts that combine over one component with 20 props. | Shapes the API |

Open the docs site with the principles. Quote them in review comments and decision records. When a principle stops settling arguments, rewrite or remove it.

## 3. Foundations and design tokens

Tokens are named design decisions stored as data, so a change made in one place reaches every platform. Structure them in tiers: raw values at the bottom, meaning in the middle, component-specific choices on top. Components should read only the upper tiers.

### Token tiers

| Tier | Also called | Example | Who uses it |
| --- | --- | --- | --- |
| Primitive | Global, base, reference, option | `color.blue.600 = #2563eb` | Only other tokens. Never components. |
| Semantic | Alias, system, decision | `color.action.primary = {color.blue.600}` | Components, product code |
| Component | Specific | `button.primary.bg = {color.action.primary}` | One component. Add only when a component must diverge. |

Theming happens at the semantic tier. A dark theme, a high-contrast theme or a second brand changes which primitive each semantic token points to, and nothing above that tier changes.

### Naming

- **Pattern:** `category.property.variant.state`, e.g. `color.text.secondary`, `color.bg.danger.hover`, `space.inset.md`.
- **Name by purpose, not appearance.** `color.text.danger`, never `color.text.red`. Names based on appearance break on the first rebrand or dark mode.
- **Pick one scale vocabulary and keep it:** t-shirt (`sm/md/lg`), numeric steps (`100–900`), or multiples (`space.4 = 16px`). Mixing them is the most common naming mess.
- **Plan for in-between values.** Numeric steps (`100, 200`) leave room for `150`; t-shirt sizes do not.
- **Format:** store tokens as W3C DTCG JSON (`$value`, `$type`) and transform them with Style Dictionary or a similar tool into CSS variables, iOS, Android and Figma variables.

### Modes and themes

- **Modes** change the value of the same semantic token: light / dark, high-contrast, density (compact / comfortable), brand A / brand B.
- Design dark mode as its own palette, not an inversion. Surfaces get lighter as they rise; saturated accents usually need lighter, less saturated values.
- **High contrast** is a separate mode, not a re-tint: text at 7:1, borders at 3:1, and states told apart by more than color.

### The foundation set

| Foundation | What to define | Rules that hold up |
| --- | --- | --- |
| Color | Primitive ramps, then semantic roles: text, background/surface, border, action, status (success, warning, danger, info), focus | Every text token names the backgrounds it is allowed on, and each pair meets 4.5:1 (3:1 at 24px+) |
| Typography | Families, a type scale, line heights, weights, letter spacing, as composite styles (`text.body.md`) | 5–8 sizes is plenty. Set line height per style, not globally. Test with real content in every language you ship. |
| Spacing | A base unit (4px or 8px) and a scale; inset, stack and inline roles if useful | Use layout gap, not ad-hoc margins. Snap to the scale; exceptions get a token or don't ship. |
| Sizing | Control heights, icon sizes, touch targets | Touch targets at least 44×44 (iOS) or 48×48 (Material) |
| Radius | 3–5 steps plus full | Nested corners: inner radius = outer radius minus padding |
| Elevation | Shadow levels tied to layer meaning (raised, overlay, modal) | Pair shadow with z-index tokens so depth and stacking agree |
| Motion | Durations (fast / base / slow), easings (enter, exit, standard), and when to use each | Exits faster than entrances. Honor reduced motion: replace movement with a fade or nothing. |
| Breakpoints | Named widths and layout grid per breakpoint | Prefer container queries for components; breakpoints for page layout |
| Iconography | One icon set, stroke width, sizes, optical alignment | Icons that carry meaning get a label or accessible name |

### Brand expression

The foundations above make the product consistent; brand expression makes it recognizable. Brand foundations are usually co-owned with brand or marketing, so name the owner of each one and link to that owner's source of truth instead of copying it.

| Foundation | What to define | Rules that hold up |
| --- | --- | --- |
| Logo | Lockups, clear space, minimum sizes, approved backgrounds, favicon and app icon | Ship the logo as a component (`<Logo variant="mark" />`) with its accessible name, so nobody exports it from a slide deck |
| Illustration | Style (line weight, palette subset, perspective), spot vs. hero sizes, where illustration belongs | Save it for specific moments: empty states, onboarding, errors, marketing. Decorative illustrations get `alt=""` |
| Photography | Subject, lighting, crop ratios, diversity and representation, treatment (overlays, duotone) | Define aspect-ratio tokens and focal-point cropping so images don't break layouts. Text over images needs a scrim that meets contrast |
| Brand color in UI | Which brand colors may appear in product UI, and where | Brand color is usually expressive, not semantic: keep it out of status and actions unless it passes contrast as an action color |
| Expressive type | A display face or weights used only for headlines and marketing | Map it to tokens (`text.display.*`) so product UI can't drift into it by accident |
| Brand moments | Celebrations, milestones, loading and empty states where personality shows | List the allowed moments. Personality in every screen becomes noise; in none, the product feels generic |

If the system serves several brands, brand expression is where themes differ most; see System Architectures section 3.

## 4. Patterns and content design

Patterns are where a system earns most of its value, because they decide how a product behaves as well as how it looks. Document each one as the problem, the recommended solution, the components it uses, and the cases where it does not apply.

### Core patterns to define early

| Pattern | Decisions to make once |
| --- | --- |
| Forms | Label placement, required vs. optional marking (mark the minority), when to validate (on blur, then live once an error shows), where errors appear, the submit-button states |
| Errors | Inline vs. banner vs. page; what the message must contain (what happened, how to fix it); never blame the user |
| Empty states | First-use vs. no-results vs. cleared; each gets a sentence saying why it's empty and one action |
| Loading | Skeletons for known layouts, spinners for short unknown waits, progress for long tasks; no layout shift |
| Destructive actions | Confirm only when it can't be undone; otherwise act and offer undo |
| Notifications | Toast vs. banner vs. inline vs. modal, by urgency and whether action is required |
| Navigation | Global vs. local nav, breadcrumbs, where the back action goes |
| Data display | Tables vs. lists vs. cards; sorting, filtering, pagination vs. infinite scroll, bulk actions |
| Search | Instant vs. submit, scoping, no-results recovery |
| Onboarding | Progressive disclosure over tours |

### Voice and tone

Voice stays constant; tone changes with the moment. Define voice as three or four traits, each written as "this, not that" (e.g. "direct, not curt"). Then show how tone shifts across moments: success, error, empty, destructive, waiting.

### UI copy rules worth standardizing

- **Casing.** Pick sentence case or title case for buttons and headings, and use it everywhere.
- **Buttons say what happens.** Verb + noun: "Save draft", "Delete project". Avoid "OK", "Yes", "Submit".
- **The confirmation echoes the action.** "Delete project?" → "Delete" / "Cancel", never "Yes" / "No".
- **Errors say how to fix it.** "Enter a date after today", not "Invalid date".
- **Name things the way users do.** "Notifications", not "Webhook config".
- **Terminology list.** Use one word per concept ("delete", "remove" and "archive" each mean something specific). Keep a glossary in the docs.
- **Write for translation.** Leave 30–40% room for text expansion, don't build sentences from fragments, and avoid idioms.

## 5. Accessibility as a system property

The system is the cheapest place to fix accessibility: fix it once in a component and every screen inherits the fix. Treat WCAG 2.2 AA as the floor, and state in the docs what the system guarantees and what product teams still own.

| Layer | What the system guarantees |
| --- | --- |
| Tokens | Each text/background pair meets 4.5:1 (3:1 for 24px+ or 19px+ bold); UI borders, icons and focus rings meet 3:1 against adjacent colors; state never relies on hue alone |
| Focus | A visible focus ring on every interactive element, in every theme, at least 2px with 3:1 contrast. `:focus-visible`, never `outline: none` without a replacement. |
| Keyboard | Every component follows its WAI-ARIA Authoring Practices pattern: Tab between widgets, arrow keys within (roving tabindex), Escape closes, Enter/Space activates |
| Semantics | Native elements first (`button`, `a`, `input`, `dialog`). ARIA only where HTML has no equivalent. Correct roles, names and states built in. |
| Overlays | Dialogs trap focus, restore it on close, label themselves, and make the background inert. Popovers and menus position themselves without stealing focus unexpectedly. |
| Motion | Every animation respects `prefers-reduced-motion`. No flashing above 3 times per second. |
| Targets | Pointer targets at least 24×24 CSS px (WCAG 2.2), with 44px recommended on touch |
| Forms | Labels programmatically tied to inputs, errors announced and linked with `aria-describedby`, required state exposed |
| Text | Survives 200% zoom and 400% reflow (320px wide) without loss; respects user font size (use rem) |

Product teams still own page structure and headings, landmark regions, alt text, meaningful link text, reading order, and correct use of the components.

Test at three levels:

1. **Automated:** axe in unit tests and Storybook, plus lint rules (`eslint-plugin-jsx-a11y`). It misses whole classes of issues (focus order, meaningful names, usable flows), so treat it as a floor.
2. **Manual:** keyboard-only pass and a screen reader pass (VoiceOver + Safari, NVDA + Firefox or Chrome) on every new component.
3. **People:** usability sessions with disabled users before major components or patterns ship.

Publish an accessibility section on each component page: keyboard map, screen reader behavior, and known limitations.

## 6. Internationalization and localization

Build every component to work in any language and direction from day one, because retrofitting RTL and text expansion later means touching every component. Internationalization (i18n) is the system's job: components that flex. Localization (l10n) is the product's job: translated strings and local content.

### What the system owns

| Concern | What to build in | Rule that holds up |
| --- | --- | --- |
| Direction (RTL) | Arabic, Hebrew, Persian and Urdu read right to left; layouts mirror | Use CSS logical properties everywhere: `margin-inline-start`, `padding-block`, `inset-inline-end`, `text-align: start`. Never `left`/`right` in component CSS |
| Mirrored icons | Arrows, chevrons, back/forward, progress and undo flip in RTL | Flip icons that show direction. Don't flip clocks, checkmarks, media play buttons, logos or brand marks |
| Text expansion | Translations run longer than English: German and Finnish often 30%+, short labels up to 200% | No fixed widths on buttons, tabs or menu items. Truncate with a tooltip or full text on focus, never mid-word clipping |
| Text contraction and height | CJK is shorter but often needs more line height; Thai and Devanagari have tall ascenders and descenders | Set line height per script if you ship them. Test that diacritics are not clipped by `overflow: hidden` |
| Fonts | Latin-only families leave other scripts on a fallback font | Define a font stack per script as tokens (`font.family.body.ar`, `font.family.body.ja`), loaded by `lang` |
| Formatting | Dates, times, numbers, currency, units, lists and plurals differ by locale | Components take values, not preformatted strings, and format with `Intl` (`DateTimeFormat`, `NumberFormat`, `PluralRules`, `ListFormat`, `RelativeTimeFormat`) |
| Input | Names, addresses and phone numbers don't follow one shape | No first/last name split by default. Address and phone fields follow the locale, not a US template |
| Sorting | Alphabetical order differs by language | Sort with `Intl.Collator`, not string comparison |

### Component rules

- Every string a component renders comes in as a prop or slot: labels, aria-labels, "Close", "Show more", "3 of 10". No hard-coded English inside the system.
- Strings that combine values ("Page 3 of 10") are full messages with placeholders, never concatenated fragments, since word order changes by language.
- Set `dir` and `lang` at the root and let components read them; don't make teams pass a `rtl` prop.
- Number inputs, date pickers and calendars take a locale: first day of week, digits (Arabic-Indic numerals), 12 vs. 24 hour.
- Carousels, sliders, steppers and progress bars run in reading direction; keyboard arrows follow it too.

### Testing

1. **Pseudo-localization in CI:** run stories with accented, 40% longer strings (`[Ŝéţţîñĝš ţîţļé ~~~]`) to catch fixed widths and hard-coded text.
2. **RTL story for every component:** a Storybook toolbar toggle for `dir="rtl"`, plus a visual regression snapshot in RTL.
3. **Real-language spot checks:** at least one long language (German), one RTL (Arabic) and one CJK (Japanese) before a component is marked stable.

In Figma, keep a page of pseudo-localized and RTL examples for each component, and use auto layout so frames grow with the text instead of clipping it.

## 7. Data visualization

Charts need their own color, type and interaction rules: the UI palette was built for status and actions, not for telling eight data series apart. Define chart foundations once so every dashboard in the product reads as one system.

### Chart color palettes

| Palette | Use it for | How to build it |
| --- | --- | --- |
| Categorical | Unrelated series: products, regions, teams | 6–8 hues with similar lightness, ordered so the first 3–4 are most distinct. Past 8 series, group into "Other" or use small multiples |
| Sequential | Ordered values low to high: heatmaps, choropleths | One hue (or two adjacent) stepping from light to dark, 5–9 steps, evenly spaced in perceived lightness (use OKLCH) |
| Diverging | Values around a meaningful midpoint: change vs. target, sentiment | Two sequential ramps meeting at a neutral middle. Don't use red/green as the only pair |
| Status | Good / warning / bad thresholds on a chart | Reuse the system's status semantics, but tune them as chart tokens so they don't clash with series colors |
| Emphasis | One series that matters against the rest | A strong color for the focus series, neutral gray for context |

**Tokens:** keep chart colors in their own semantic group (`chart.categorical.1–8`, `chart.sequential.blue.100–900`, `chart.diverging.neg/neutral/pos`, `chart.gridline`, `chart.axis`, `chart.label`) with values for every mode. Dark mode needs its own tuned values, not inverted ones.

### Choosing a chart

| The question | Chart |
| --- | --- |
| How does one value change over time? | Line (area only when the total matters) |
| How do items compare on one measure? | Bar, sorted, horizontal when labels are long |
| What makes up a whole? | Stacked bar or a single 100% bar; pie only for 2–3 parts |
| How are two measures related? | Scatter |
| How are values distributed? | Histogram or box plot |
| What's the single number right now? | Stat tile with the trend and comparison period |
| Where on a range is a value? | Meter or bullet chart |

### Accessible charts

- Don't rely on color alone: add direct labels, patterns or shapes, and markers on lines.
- Graphical elements meet 3:1 contrast against the background (WCAG 1.4.11); text labels meet 4.5:1.
- Check the categorical palette for color-vision deficiency (protanopia, deuteranopia, tritanopia) with a simulator.
- Every chart has a text alternative: a one-sentence summary of the takeaway, plus a data table view or download.
- Tooltips work on keyboard focus, not only hover, and the chart can be navigated point by point.
- Honor reduced motion: no animated draw-in.

### What the system ships

- **Chart tokens** and a palette validator in CI.
- **A wrapper** around one charting library (Recharts, Visx, ECharts or Highcharts) that applies tokens, typography, gridlines, tooltips and the accessible table. Teams don't style the library directly.
- **Stat tile, sparkline, meter and legend** components, plus empty, loading and error states for charts.
- **Number formatting rules:** abbreviations (1.2K, 3.4M), decimals, units, and axis label density, using `Intl.NumberFormat` so they localize (section 6).

---

# Components

How to design and build components: the contract every component makes, and how to engineer a React component library in 2026. Two tabs nest under this one: Component A–Z, a field guide to 61 standard components with props, and Component Composition, which covers how parts fit together in code and Figma.

## 1. Component fundamentals

A component is a contract: a name, an API, a set of states, and a promise about behavior and accessibility. Design the contract before the pixels.

### Anatomy

Document every component as named parts: container, label, leading icon, trailing icon, helper text, and so on. Use the same part names in Figma layers, code slots and docs. Handoff from design to code depends on those shared names, and so does AI tooling.

### API design

- **Variants for mutually exclusive looks, booleans for independent toggles.** `variant="primary" | "secondary" | "ghost"`, not `primary`, `secondary`, `ghost` booleans that can conflict.
- **Name props by intent.** `tone="danger"` over `color="red"`; `size="sm"` over `small`.
- **Same prop, same name, everywhere.** If Button has `size`, so do Input and Select, with the same values.
- **Composition over configuration.** When a component grows past roughly 10 props or keeps gaining `showX` / `hideY` flags, split it into parts (`<Card><Card.Header/><Card.Body/></Card>`) or add slots.
- **Slots for content you can't predict.** Give a leading/trailing slot instead of `iconName`, `badgeText`, `avatarUrl`.
- **Controlled and uncontrolled.** Inputs, tabs and disclosures should accept `value` + `onChange`, and also work with only `defaultValue`.
- **Pass through native attributes and refs.** A Button must accept `type`, `aria-*`, `data-*` and forward its ref.
- **Escape hatches, used sparingly.** `className` / `style` overrides are allowed but tracked; heavy use signals that the API is missing something.

### The states matrix

Spec every cell for every interactive component, in every theme:

| State | Notes |
| --- | --- |
| Default |  |
| Hover | Pointer only; never the only way to reveal information |
| Focus-visible | Keyboard focus ring, visible on every background (3:1) |
| Active / pressed |  |
| Selected / checked | Plus indeterminate where it applies |
| Disabled | Explain why when you can; consider read-only instead |
| Loading | Keeps size stable; announces to screen readers |
| Error / invalid | Message plus icon, never color alone |
| Read-only | Copyable, not editable |
| Empty / overflow | Long text, truncation, wrapping, zero items, 1,000 items |

### Component, pattern, or neither?

1. Is it used in three or more places, by more than one team? If not, keep it local to the product.
2. Is the behavior the same everywhere? If it differs per use, it is a pattern built from components.
3. Can it be built from existing components? Then document it as a pattern or recipe first, and promote it to a component only once the recipe has stabilized.
4. Is it a product-specific composite, such as an invoice row? Then it belongs to the product, built on system parts.

Tier the library so everyone can see what's core: **core** (owned, fully supported), **extended** (contributed, supported with less rigor), **labs** (experimental, may change or disappear).

## 2. React component engineering

Build branded components on top of a headless primitive library, style them with CSS-variable tokens through Tailwind v4 or a zero-runtime tool, and ship ESM with one entry per component. That is the 2026 default. The sections below cover the decisions within it.

### Current libraries (October 2026)

| Area | Status |
| --- | --- |
| React 19 | `ref` is a normal prop on function components; `forwardRef` will be deprecated. `<Context>` renders as its own provider. ([react.dev](https://react.dev/blog/2024/12/05/react-19)) |
| React Compiler | 1.0 stable since Oct 7, 2025. Auto-memoizes at build time, works with React 17+. ([react.dev](https://react.dev/blog/2025/10/07/react-compiler-1)) |
| Base UI | v1 stable (`@base-ui/react`), from the Radix, Floating UI and MUI teams. ([InfoQ](https://infoq.com/news/2026/02/baseui-v1-accessible/)) |
| Radix Primitives | Still maintained, unified `radix-ui` package. Docs still show `forwardRef`. ([radix-ui.com](https://www.radix-ui.com/primitives/docs/guides/composition)) |
| shadcn/ui | Made Base UI its default in July 2026; Radix and React Aria still supported. CLI v4; private registries. ([changelog](https://ui.shadcn.com/docs/changelog)) |
| React Aria | `react-aria-components`: unstyled, state data attributes, strongest i18n and touch handling. ([react-aria.adobe.com](https://react-aria.adobe.com/getting-started)) |
| Ark UI | Headless, state-machine based, works in React, Solid, Vue, Svelte. ([ark-ui.com](https://ark-ui.com/)) |
| Tailwind CSS | v4 (Jan 2025): config in CSS via `@theme`, every token emitted as a CSS variable. ([tailwindcss.com](https://tailwindcss.com/blog/tailwindcss-v4)) |
| Storybook | 10 (Oct 2025): ESM-only, CSF Factories, Vitest integration. ([storybook.js.org](https://storybook.js.org/blog/storybook-10/)) |
| styled-components | Maintenance mode since March 2025. Don't start new libraries on runtime CSS-in-JS. ([Open Collective](https://opencollective.com/styled-components/updates/a-whole-new-world)) |

### Architecture

1. **Behavior primitives** (Base UI, React Aria, Radix, Ark) own accessibility, focus and keyboard.
2. **Branded components** wrap them with tokens and variants. This is your package.
3. **Patterns and recipes** compose branded components into larger units.

Don't hand-roll Dialog, Combobox, Menu or Select behavior unless you're prepared to own APG conformance testing forever.

- **Compound components** over prop piles: `Dialog.Root / Trigger / Popup / Title` sharing context, not `<Dialog title footer showClose …>`.
- **Composition hooks:** Radix uses `asChild` (merges props onto the child); Base UI uses `render` (an element or a `(props, state) => …` function). Either way the custom child must accept `ref` and spread props onto its DOM node.
- **Polymorphism:** avoid a generic `as` prop on interactive components; the typing is slow and refs get messy. Use `render`/`asChild` instead, and keep `as` for layout and type primitives with a narrow union (`'h1' | 'h2' | 'p' | 'span'`).

```tsx
// Radix
<Tooltip.Trigger asChild><MyButton>Hover</MyButton></Tooltip.Trigger>
// Base UI
<Menu.Trigger render={<MyButton size="md" />}>Open</Menu.Trigger>
```

### API conventions

```tsx
type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({ className, variant, size, ref, ...props }: ButtonProps) {
  return (
    <button
      ref={ref}
      data-slot="button"
      className={cn(button({ variant, size }), className)}
      {...props}
    />
  );
}
```

- **Extend native props** and spread `...props` last; merge `className` so consumers can extend. If you still support React 18, keep `forwardRef` with `ComponentPropsWithoutRef`.
- **Controlled and uncontrolled:** `value` / `defaultValue` / `onValueChange`, or `open` / `defaultOpen` / `onOpenChange`, via a `useControllableState` hook.
- **Naming:** booleans are adjectives (`disabled`, `open`); events are `on<Thing>Change`; variants are semantic (`variant="danger"`); sizes use one scale everywhere (`sm | md | lg`).
- **Variants:** cva for single-element components; tailwind-variants when you need slots; both with a `cn` helper (clsx + tailwind-merge).
- **Style state with data attributes**, not JS: `[data-state="open"]`, `[data-disabled]`, `[data-pressed]`, which primitives already emit.

### Styling approaches

| Approach | Strengths | Costs | Server Components |
| --- | --- | --- | --- |
| CSS variables + tokens (the base for all) | Runtime theming, no JS, inherits through the DOM | Not type-checked unless generated | Yes |
| Tailwind v4 | Tokens as CSS vars via `@theme`; fast; matches shadcn ecosystem | Long class strings; consumers need Tailwind or your compiled CSS | Yes |
| CSS Modules | Plain CSS, scoped, works anywhere | Variants by hand; untyped tokens | Yes |
| vanilla-extract | Zero runtime, typed theme contracts, recipes | Build plugin; styles in `.css.ts` | Yes |
| Panda CSS | Build-time atomic CSS, typed tokens, recipes | Values must be static; codegen step | Yes |
| StyleX | Compile-time atomic CSS, collision-free, scales well | Strict authoring rules; build plugin | Yes |
| Runtime CSS-in-JS (styled-components, Emotion) | Familiar, dynamic | Render-time cost; RSC friction; styled-components in maintenance | Partial |

### Accessibility in components

- Follow the [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) per widget: one tab stop per composite widget, arrows inside, using roving tabindex or `aria-activedescendant`.
- Modals: trap focus, restore it to the trigger, close on Escape, make the background inert, portal to `body`.
- Never `div onClick`; never remove outlines without a `:focus-visible` replacement; never rely on color alone.

### Server Components

- `'use client'` marks a module boundary: that file and its imports become client code.
- Put it at the top of each interactive component's entry file; keep presentational components (`Text`, `Card`, `Badge`) free of it so they render on the server.
- Bundle one file per component (`preserveModules`-style) so the directive survives. Props crossing the boundary must be serializable.

### Theming

```css
@import "tailwindcss";
@theme { --color-bg: oklch(0.99 0 0); --color-fg: oklch(0.2 0 0); }
[data-theme="dark"] { --color-bg: oklch(0.18 0 0); --color-fg: oklch(0.96 0 0); }
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

- Components read semantic variables only. Nest `[data-theme]` on any element for scoped sub-themes.
- Prevent the dark-mode flash: set `data-theme` before paint with an inline head script (localStorage, then `prefers-color-scheme`) or from a cookie on the server. Set `color-scheme` too.

### Testing and docs

- **Storybook:** CSF stories, `play` functions for interaction tests via Vitest, the a11y addon set to fail CI (`parameters.a11y.test = 'error'`).
- **Visual regression:** Chromatic (cloud, TurboSnap tests only changed stories) or Playwright `toHaveScreenshot()` (self-hosted).
- **Unit tests:** Testing Library, querying `getByRole` first and `getByTestId` last; add `jest-axe` / `vitest-axe`.
- **Figma Code Connect:** maps Figma components and props to real code in Dev Mode and feeds Figma's MCP server for agents. ([docs](https://developers.figma.com/docs/code-connect/))

### Packaging and release

```json
{
  "type": "module",
  "sideEffects": ["**/*.css"],
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./button": { "types": "./dist/button.d.ts", "import": "./dist/button.js" },
    "./styles.css": "./dist/styles.css"
  },
  "peerDependencies": { "react": "^19", "react-dom": "^19" }
}
```

- ESM, one entry per component, React as a peer dependency. List CSS in `sideEffects` or it gets tree-shaken away.
- [Changesets](https://github.com/changesets/changesets) for versions and changelogs; every breaking change ships with a codemod (jscodeshift or ts-morph) and a migration guide.

|  | Copy-paste (shadcn registry) | npm package |
| --- | --- | --- |
| Ownership | Consumers own and edit the code | The system team owns it |
| Updates | Manual or diff-based; drift likely | `npm update` plus codemods |
| Consistency | Lower | Higher |
| Best for | Small teams, heavy customization, starter kits | Many product teams, compliance, a11y guarantees |

A common hybrid: tokens and primitives on npm, higher-level compositions through a private shadcn registry.

### Performance

- Split context by change frequency (state vs. actions); use selector stores (`useSyncExternalStore`) in large compound components.
- With React Compiler 1.0, stop adding `useMemo` / `useCallback` by hand in new code; pin the compiler version.
- Avoid barrel files that import everything; lazy-load heavy parts (date pickers, rich text); track bundle size per entry in CI.

---

# Component A–Z

A field guide to the components nearly every design system ships, meant to learn from rather than copy. Each entry covers what the component is for, when to reach for something else, its anatomy, the variants and states it needs, how it must behave for keyboard and screen reader users, and the mistakes teams make most often. Names vary between systems; aliases are listed after each name.

Accessibility links point to the [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/), the reference most systems follow. To compare real implementations side by side, browse the [Component Gallery](https://component.gallery/).

Each entry ends with how the component is composed, a props table, and a short React example. Union values are written with commas (\`"sm", "md", "lg"\`), and — means no default. The APIs are illustrative, blending how Radix, Base UI, React Aria and the big public systems shape these components rather than copying any one library. They follow the conventions from the React section of the Components tab:

- Compound parts (`Dialog.Root`, `Dialog.Trigger`) for anything with more than one moving piece; a single component with props for simple ones.
- Controlled and uncontrolled pairs: `value` / `defaultValue` / `onValueChange`, `open` / `defaultOpen` / `onOpenChange`.
- Shared vocabulary: `size` (`sm | md | lg`), `variant` for emphasis, `tone` for meaning (`neutral | info | success | warning | danger`), `disabled`, `invalid`.
- Every component also accepts its native HTML attributes, `className` and `ref`, which aren't repeated in each entry.

## A

### Accordion

*Also: expander, collapsible section.* A vertical stack of headers that each show or hide a panel of content.

- **Use when:** content is long, divides into clear sections, and most people need only one or two of them (FAQs, settings groups, filters).
- **Avoid when:** people need to compare sections, or the content is short enough to just show. Essential info hidden behind clicks is harder to find.
- **Anatomy:** header (trigger button + title + chevron), panel, optional divider between items.
- **Variants and states:** single-open vs. multiple-open; bordered vs. flush; collapsed, expanded, hover, focus, disabled.
- **Accessibility:** each header is a `button` inside a heading element, with `aria-expanded` and `aria-controls`. Enter/Space toggles; Up/Down/Home/End between headers is optional. See [APG Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
- **Pitfalls:** making the whole panel area clickable; animating height so slowly it feels broken; nesting accordions inside accordions; collapsing everything by default when one section is what everyone needs.

* **Composition:** Root → Item → Header → Trigger, plus Content. The header is a real heading so its level can be set per page.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `type` | `"single"`, `"multiple"` | `"single"` | Whether one or many items can be open |
| Root `value` | `string` or `string[]` | — | Open item(s), controlled |
| Root `defaultValue` | `string` or `string[]` | — | Open item(s) on first render |
| Root `onValueChange` | `(value) => void` | — | Called when items open or close |
| Root `collapsible` | `boolean` | `false` | Single mode: allow closing the open item |
| Root `disabled` | `boolean` | `false` | Disables every item |
| Item `value` | `string` | required | Unique id for the item |
| Item `disabled` | `boolean` | `false` | Disables this item |
| Header `level` | `1`–`6` | `3` | Heading level wrapping the trigger |
| Content `keepMounted` | `boolean` | `false` | Keep closed content in the DOM (find-in-page, SEO) |

```tsx
<Accordion.Root type="single" collapsible defaultValue="billing">
  <Accordion.Item value="billing">
    <Accordion.Header level={3}>
      <Accordion.Trigger>Billing</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>Invoices are sent on the 1st.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

### Alert

*Also: inline message, callout, notice.* A static message inside the page that tells people about something important in context.

- **Use when:** a status relates to a specific area: a form that failed to save, a feature in beta, a warning before an action.
- **Avoid when:** the message is system-wide (use a Banner) or temporary feedback on an action (use a Toast).
- **Anatomy:** container, status icon, title, body, optional actions, optional dismiss button.
- **Variants and states:** info, success, warning, danger (sometimes neutral); dismissible or not; with or without title.
- **Accessibility:** if it appears dynamically and is urgent, use `role="alert"` (assertive) or `role="status"` (polite). Static alerts present on load need no live role. Carry status in the icon and text, not color alone. See [APG Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).
- **Pitfalls:** stacking several alerts so none stand out; using `role="alert"` for everything so screen readers interrupt constantly; vague text ("Something went wrong") with no next step.

* **Composition:** Root with Title, Description and Actions parts, so actions can be any buttons.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"info"`, `"success"`, `"warning"`, `"danger"`, `"neutral"` | `"info"` | Sets color and default icon |
| `variant` | `"subtle"`, `"solid"`, `"outline"` | `"subtle"` | Visual weight |
| `icon` | `ReactNode` or `false` | tone icon | Override or hide the icon |
| `onDismiss` | `() => void` | — | Shows a close button when set |
| `dismissLabel` | `string` | `"Dismiss"` | Accessible name for the close button |
| `live` | `"off"`, `"polite"`, `"assertive"` | `"off"` | Announce when the alert appears after load |

```tsx
<Alert tone="warning" onDismiss={hide}>
  <Alert.Title>Payment method expiring</Alert.Title>
  <Alert.Description>Your card ends in 4242 and expires this month.</Alert.Description>
  <Alert.Actions><Button size="sm">Update card</Button></Alert.Actions>
</Alert>
```

### Avatar

*Also: user image, profile picture.* A small image, initials or icon that represents a person or entity.

- **Use when:** identifying who did something (comments, assignees, account menus).
- **Avoid when:** the person's name is already right there and the image adds nothing; decorative avatars that slow lists down.
- **Anatomy:** circular or rounded frame, image, fallback (initials, then a generic icon), optional status indicator.
- **Variants and states:** sizes (often 4–6), shape, with status dot (online, away), avatar group with an overflow "+3".
- **Accessibility:** give the image alt text with the name, or empty alt when the name is shown next to it. Status dots need a text equivalent.
- **Pitfalls:** initials colors that fail contrast; broken-image flashes before the fallback loads; avatar groups where the overflow count isn't reachable by keyboard.

* **Composition:** Root → Image + Fallback, so the fallback shows while loading or on error. AvatarGroup wraps any number of avatars.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | — | Image URL |
| `name` | `string` | — | Used for alt text and initials |
| `size` | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"` | `"md"` | Diameter |
| `shape` | `"circle"`, `"square"` | `"circle"` | Square for organizations and bots |
| `status` | `"online"`, `"away"`, `"busy"`, `"offline"` | — | Adds a status dot with text equivalent |
| `decorative` | `boolean` | `false` | Empty alt when the name is shown beside it |
| Group `max` | `number` | — | Avatars shown before "+N" |
| Group `size` | same as `size` | `"md"` | Applied to every child |

```tsx
<AvatarGroup max={3}>
  <Avatar name="Ada Lovelace" src="/ada.jpg" />
  <Avatar name="Grace Hopper" />
  <Avatar name="Alan Turing" status="online" />
</AvatarGroup>
```

## B

### Badge

*Also: counter, indicator, dot.* A small label or number attached to another element to show status or a count.

- **Use when:** showing unread counts, a "New" marker, or a compact status on an item.
- **Avoid when:** the label needs interaction (use a Tag or Chip) or is long.
- **Anatomy:** container, label or number, or a dot only.
- **Variants and states:** tones (neutral, info, success, warning, danger), solid vs. subtle, dot vs. count, max count ("99+").
- **Accessibility:** a count on an icon needs the meaning in the accessible name ("Notifications, 3 unread"), not just "3". Dots need visually hidden text.
- **Pitfalls:** badges everywhere so nothing stands out; confusing Badge with Tag; color-only meaning.

* **Composition:** usually anchored to another element; Badge.Anchor positions it at the corner.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"neutral"`, `"info"`, `"success"`, `"warning"`, `"danger"` | `"neutral"` | Meaning and color |
| `variant` | `"solid"`, `"subtle"` | `"solid"` | Visual weight |
| `count` | `number` | — | Number to show |
| `max` | `number` | `99` | Shows "99+" above this |
| `showZero` | `boolean` | `false` | Render when count is 0 |
| `dot` | `boolean` | `false` | Dot only, no number |
| `label` | `string` | — | Accessible text, required for dots and bare numbers |

```tsx
<Badge.Anchor>
  <IconButton icon={<BellIcon />} label="Notifications" />
  <Badge count={3} max={99} label="3 unread notifications" />
</Badge.Anchor>
```

### Banner

*Also: global alert, announcement bar, system message.* A full-width message at the top of the page or app about something that affects the whole experience.

- **Use when:** system-wide states: outage, trial ending, unverified email, maintenance window.
- **Avoid when:** the message is about one part of the page (Alert) or one action (Toast).
- **Anatomy:** full-width container, icon, message, optional action link, optional dismiss.
- **Variants and states:** info, warning, danger, promotional; persistent vs. dismissible (and whether dismissal is remembered).
- **Accessibility:** place it early in the DOM so it's read first; use `role="status"` or `role="alert"` only if it appears after load. The dismiss button needs a label.
- **Pitfalls:** banner stacks that push content down; dismissals that reappear on every page; marketing banners styled like warnings.

* **Composition:** a single component whose children are the message, with an Action part; the app shell places it above the header.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"info"`, `"warning"`, `"danger"`, `"promo"` | `"info"` | Meaning and color |
| `onDismiss` | `() => void` | — | Shows a close button when set |
| `dismissKey` | `string` | — | Remembers dismissal under this key |
| `icon` | `ReactNode` or `false` | tone icon | Override or hide the icon |
| Action `href` / `onClick` | `string` / `() => void` | — | One link or button per banner |

```tsx
<Banner tone="warning" dismissKey="maintenance-oct" onDismiss={track}>
  Scheduled maintenance Sunday 02:00–04:00 UTC.
  <Banner.Action href="/status">See status</Banner.Action>
</Banner>
```

### Breadcrumb

*Also: breadcrumbs, trail.* A row of links showing where the current page sits in the hierarchy.

- **Use when:** content is deeply nested and people jump in from search or links (docs, ecommerce categories, file systems).
- **Avoid when:** the hierarchy is flat or the product is task-based rather than location-based. It doesn't replace a back button.
- **Anatomy:** list of links, separators, current page (not a link).
- **Variants and states:** truncated middle (with an overflow menu) for deep trails; with or without the current page shown.
- **Accessibility:** a `nav` with `aria-label="Breadcrumb"` containing an ordered list; the current item has `aria-current="page"`. Separators are decorative (CSS or `aria-hidden`). See [APG Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).
- **Pitfalls:** showing history instead of hierarchy; tiny tap targets on mobile; separators read aloud as "slash slash".

* **Composition:** Root (nav + ol) → Item → Link, with `render`/`asChild` so the router's link can be used.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `label` | `string` | `"Breadcrumb"` | Name of the nav landmark |
| Root `separator` | `ReactNode` | chevron | Decorative separator |
| Root `maxItems` | `number` | — | Collapses middle items into a menu |
| Item `current` | `boolean` | last item | Marks the current page (`aria-current`) |
| Link `href` | `string` | — | Destination |
| Link `render` | `ReactElement` | — | Render as the router's link component |

```tsx
<Breadcrumb maxItems={4}>
  <Breadcrumb.Item><Breadcrumb.Link render={<RouterLink to="/" />}>Home</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Item><Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Item current>Q3 roadmap</Breadcrumb.Item>
</Breadcrumb>
```

### Button

*Also: CTA.* A control that performs an action when pressed.

- **Use when:** triggering an action: save, submit, open a dialog, delete.
- **Avoid when:** the result is navigation to another page (use a Link, even if styled like a button).
- **Anatomy:** container, label, optional leading or trailing icon, optional loading spinner.
- **Variants and states:** emphasis (primary, secondary, tertiary/ghost, link-style), tone (default, danger), sizes, icon positions, full-width. States: default, hover, focus-visible, active, disabled, loading, and toggled (see Toggle button).
- **Accessibility:** use a native `button` (`type="button"` unless it submits). Enter and Space activate. Loading should keep the button's width and announce progress; prefer `aria-disabled` with an explanation over a silent `disabled` when people need to learn why. See [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/).
- **Pitfalls:** more than one primary per view; vague labels ("OK", "Submit"); `div` buttons; disabled buttons with no reason given; hit areas under 24px.

* **Composition:** a single element; icons go in props, not free-form children, so spacing stays consistent.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"primary"`, `"secondary"`, `"tertiary"` | `"secondary"` | Emphasis |
| `tone` | `"default"`, `"danger"` | `"default"` | Meaning |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Height and padding |
| `iconStart` / `iconEnd` | `ReactNode` | — | Icons before or after the label |
| `loading` | `boolean` | `false` | Shows a spinner, keeps width, blocks clicks |
| `disabled` | `boolean` | `false` | Not interactive |
| `focusableWhenDisabled` | `boolean` | `false` | Keeps it reachable so a tooltip can explain why |
| `fullWidth` | `boolean` | `false` | Fills its container |
| `type` | `"button"`, `"submit"`, `"reset"` | `"button"` | Native button type |
| `render` | `ReactElement` | — | Render as another element, e.g. a link |

```tsx
<Button variant="primary" iconStart={<PlusIcon />} loading={saving}>
  Create project
</Button>
<Button variant="secondary" render={<a href="/docs" />}>Read the docs</Button>
```

### Button group

*Also: action group, split button (a related variant).* A set of related buttons laid out together.

- **Use when:** a few related actions belong together (Save / Cancel, a split button with a main action plus a menu of alternatives).
- **Avoid when:** only one option can be selected at a time (use a Segmented control or Radio group).
- **Anatomy:** container, buttons, optional attached styling (shared borders), optional overflow menu.
- **Variants and states:** attached vs. spaced, horizontal vs. vertical, split button.
- **Accessibility:** a plain group can use `role="group"` with a label. If it behaves like a toolbar (arrow keys move between buttons), use the Toolbar pattern instead.
- **Pitfalls:** button order that changes between dialogs (pick one convention for primary placement and keep it); too many buttons instead of an overflow menu.

* **Composition:** wraps Buttons; a split button is a Button plus a Dropdown menu trigger inside an attached group.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Accessible name for the group |
| `attached` | `boolean` | `false` | Joins buttons with shared borders |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Layout direction |
| `size` | `"sm"`, `"md"`, `"lg"` | — | Passed to every child button |
| `variant` | Button variants | — | Passed to every child button |
| `disabled` | `boolean` | `false` | Disables every child |

```tsx
<ButtonGroup attached variant="secondary" label="Save options">
  <Button onClick={save}>Save</Button>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger render={<IconButton icon={<ChevronDownIcon />} label="More save options" />} />
    <DropdownMenu.Content>
      <DropdownMenu.Item onSelect={saveAsDraft}>Save as draft</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</ButtonGroup>
```

## C

### Calendar

*Also: month view, date grid.* A grid of days for viewing or choosing dates. It is the core of a Date picker and also works on its own.

- **Use when:** the day of the week or nearby dates matter (booking, scheduling, seeing availability).
- **Avoid when:** people know the date already, like a birth date. A typed text field is faster.
- **Anatomy:** month/year header, previous/next controls, weekday labels, day cells, optional footer (Today, Clear).
- **Variants and states:** single date, range, multiple dates; one or two months; day states: today, selected, in range, range start/end, disabled, outside month, focused.
- **Accessibility:** a `grid` with arrow keys moving by day, Page Up/Down by month, Home/End to week start/end. Each day's accessible name is the full date. Announce month changes. See [APG Date picker dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/).
- **Pitfalls:** week start fixed to Sunday regardless of locale; disabled days with no explanation; tiny cells on mobile.

* **Composition:** Root → Header (Prev, Heading, Next) + Grid → Cell. Cells accept a render function so apps can add prices or dots.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `mode` | `"single"`, `"range"`, `"multiple"` | `"single"` | Selection behavior |
| `value` / `defaultValue` | `CalendarDate`, range, or array | — | Selected date(s); use a date-only type |
| `onValueChange` | `(value) => void` | — | Called on selection |
| `minValue` / `maxValue` | `CalendarDate` | — | Selectable bounds |
| `isDateUnavailable` | `(date) => boolean` | — | Marks specific days unavailable |
| `visibleMonths` | `number` | `1` | Months shown side by side |
| `focusedValue` / `onFocusChange` | `CalendarDate` | today | Which month and day has focus |
| `locale` | `string` | app locale | Month names and formats |
| `firstDayOfWeek` | `"sun"` … `"sat"` | from locale | Override the week start |

```tsx
<Calendar.Root mode="range" value={range} onValueChange={setRange} visibleMonths={2}>
  <Calendar.Header><Calendar.Prev /><Calendar.Heading /><Calendar.Next /></Calendar.Header>
  <Calendar.Grid>{(date) => <Calendar.Cell date={date} />}</Calendar.Grid>
</Calendar.Root>
```

### Card

*Also: tile, panel.* A container that groups content and actions about one subject.

- **Use when:** showing a collection of similar, self-contained items people browse or compare (products, projects, articles).
- **Avoid when:** content is a continuous flow or a dense list; cards waste space where a table or list scans faster. Don't wrap every section of a page in a card.
- **Anatomy:** container, optional media, header (title, meta), body, footer actions.
- **Variants and states:** elevated, outlined, filled; static vs. clickable (whole card is a link); horizontal vs. vertical; selected, hover, focus.
- **Accessibility:** for a clickable card, make the title the real link and stretch its hit area with CSS, so screen readers don't read the whole card as one link. Avoid nested interactive elements inside a fully clickable card.
- **Pitfalls:** cards inside cards; inconsistent heights in a grid; multiple competing click targets; heading levels that skip.

* **Composition:** Root → Media, Header (Title, Description), Body, Footer. A clickable card uses a stretched link on the title.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"elevated"`, `"outlined"`, `"filled"` | `"outlined"` | Surface style |
| `padding` | `"none"`, `"sm"`, `"md"`, `"lg"` | `"md"` | Inner spacing |
| `orientation` | `"vertical"`, `"horizontal"` | `"vertical"` | Media above or beside content |
| `selected` | `boolean` | `false` | Selected styling in selectable grids |
| `as` | `"article"`, `"section"`, `"div"`, `"li"` | `"div"` | Semantic element |
| Link `href` | `string` | — | Makes the whole card clickable via the title |
| Media `src` / `alt` | `string` | — | Image; empty alt if decorative |

```tsx
<Card variant="outlined">
  <Card.Media src="/cover.jpg" alt="" />
  <Card.Header>
    <Card.Title><Card.Link href="/projects/42">Checkout redesign</Card.Link></Card.Title>
    <Card.Description>Updated 2 days ago</Card.Description>
  </Card.Header>
  <Card.Footer><Tag tone="info">In review</Tag></Card.Footer>
</Card>
```

### Carousel

*Also: slider, slideshow.* A set of items shown one (or a few) at a time, with controls to move between them.

- **Use when:** browsing a set of visual items where seeing all at once isn't important (a product's photos).
- **Avoid when:** the content matters. Most people don't advance past the first slide, so key messages in a hero carousel go unseen.
- **Anatomy:** viewport, slides, previous/next buttons, position indicators, optional play/pause.
- **Variants and states:** single vs. multi-item, looping or not, auto-rotating or manual.
- **Accessibility:** never auto-rotate without a pause control (and stop on hover and focus). Slides are labeled "3 of 8"; the viewport is a region with a label. See [APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).
- **Pitfalls:** auto-rotation; swipe-only navigation; indicator dots too small to tap.

* **Composition:** Root → Viewport → Slide; Prev, Next, Indicators and PlayPause are separate parts you place where you want.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Name of the carousel region |
| `index` / `defaultIndex` | `number` | `0` | Current slide |
| `onIndexChange` | `(index) => void` | — | Called when the slide changes |
| `slidesPerView` | `number` | `1` | Slides visible at once |
| `loop` | `boolean` | `false` | Wrap from last to first |
| `autoplay` | `false` or `{ intervalMs }` | `false` | Auto-advance; requires PlayPause |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Scroll direction |
| Slide `label` | `string` | "n of N" | Accessible slide name |

```tsx
<Carousel.Root label="Product photos" loop>
  <Carousel.Viewport>
    {photos.map((p) => <Carousel.Slide key={p.id}><img src={p.src} alt={p.alt} /></Carousel.Slide>)}
  </Carousel.Viewport>
  <Carousel.Prev /><Carousel.Indicators /><Carousel.Next />
</Carousel.Root>
```

### Checkbox

*Also: tick box.* A control for turning an independent option on or off, or selecting several items from a set.

- **Use when:** each option is independent, including a single opt-in ("I agree to the terms"), or multiple items can be chosen.
- **Avoid when:** only one option can be chosen (Radio group), or the change takes effect immediately like a setting (Switch).
- **Anatomy:** box, check or dash mark, label, optional description, group legend.
- **Variants and states:** unchecked, checked, indeterminate (for "select all" with partial selection), disabled, invalid, focus.
- **Accessibility:** native `input type="checkbox"` with a `label`. Groups use `fieldset` and `legend`. Space toggles. The label is part of the hit area. See [APG Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).
- **Pitfalls:** labels that aren't clickable; negative wording ("Don't send me emails"); indeterminate used as a third user-selectable state.

* **Composition:** single checkboxes take `label` as a prop; CheckboxGroup wraps checkboxes and owns the value array.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `checked` / `defaultChecked` | `boolean`, `"indeterminate"` | `false` | State |
| `onCheckedChange` | `(checked) => void` | — | Called on toggle |
| `label` | `ReactNode` | — | Visible label (part of the hit area) |
| `description` | `ReactNode` | — | Helper text below the label |
| `name` / `value` | `string` | — | Form submission |
| `required` / `disabled` / `invalid` | `boolean` | `false` | States |
| Group `legend` | `string` | required | Group label |
| Group `value` / `onValueChange` | `string[]` | `[]` | Checked values |

```tsx
<CheckboxGroup legend="Notify me about" value={topics} onValueChange={setTopics}>
  <Checkbox value="mentions" label="Mentions" />
  <Checkbox value="replies" label="Replies" description="Only on threads you started" />
</CheckboxGroup>
```

### Chip

*Also: filter chip, input chip, pill.* A compact element representing an input, filter or choice that people can select or remove.

- **Use when:** showing applied filters, entered values (email recipients), or quick choices.
- **Avoid when:** it's a read-only label (use Tag or Badge) or a primary action (use Button).
- **Anatomy:** container, label, optional leading icon or avatar, optional remove button.
- **Variants and states:** filter (toggle), input (removable), choice (single select), suggestion; selected, hover, focus, disabled.
- **Accessibility:** filter chips are toggle buttons (`aria-pressed`); removable chips need a remove button labeled "Remove \[value\]"; a set of chips that act as one control should support arrow keys. Backspace in a chip input removes the last chip.
- **Pitfalls:** Chip, Tag and Badge used interchangeably across one product; remove "x" too small; no way to clear all.

* **Composition:** ChipGroup → Chip, so the group owns selection and keyboard behavior.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | Id inside a group |
| `selected` / `onSelectedChange` | `boolean` | `false` | Filter chips outside a group |
| `onRemove` | `() => void` | — | Makes it removable |
| `removeLabel` | `string` | `"Remove {label}"` | Accessible name of the remove button |
| `icon` / `avatar` | `ReactNode` | — | Leading visual |
| `size` | `"sm"`, `"md"` | `"md"` | Height |
| `disabled` | `boolean` | `false` | Not interactive |
| Group `selectionMode` | `"none"`, `"single"`, `"multiple"` | `"none"` | Group selection |
| Group `value` / `onValueChange` | `string` or `string[]` | — | Selected chips |
| Group `label` | `string` | required | Group name |

```tsx
<ChipGroup label="Filter by status" selectionMode="multiple" value={statuses} onValueChange={setStatuses}>
  <Chip value="open">Open</Chip>
  <Chip value="blocked">Blocked</Chip>
</ChipGroup>
<Chip onRemove={() => removeRecipient(id)} removeLabel="Remove ada@example.com">ada@example.com</Chip>
```

### Color picker

*Also: color input, swatch picker.* A control for choosing a color from swatches, a spectrum or a typed value.

- **Use when:** people customize colors (themes, labels, charts, design tools).
- **Avoid when:** a short list of named options would do (label colors); offer swatches only.
- **Anatomy:** trigger swatch, popover, saturation/brightness area, hue slider, optional alpha slider, value input (hex, RGB, HSL), preset swatches, optional eyedropper.
- **Variants and states:** swatches only, full picker, inline vs. popover.
- **Accessibility:** every 2D area and slider must have a keyboard path (arrow keys) and a text input fallback. Swatches need names, not just colors.
- **Pitfalls:** no typed input; no recent colors; letting users pick text colors with no contrast warning.

* **Composition:** Root → Trigger + Content containing Area, HueSlider, AlphaSlider, Input and Swatches; teams drop the parts they don't need.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `Color` or `string` | — | Current color |
| `onValueChange` | `(color) => void` | — | Called while dragging |
| `onValueCommit` | `(color) => void` | — | Called on release |
| `format` | `"hex"`, `"rgb"`, `"hsl"`, `"oklch"` | `"hex"` | Value format for Input |
| `alpha` | `boolean` | `false` | Show the alpha slider |
| Swatches `colors` | `{ name, value }[]` | — | Named presets |
| Trigger `label` | `string` | required | Accessible name |

```tsx
<ColorPicker.Root value={color} onValueChange={setColor} format="hex">
  <ColorPicker.Trigger label="Label color" />
  <ColorPicker.Content>
    <ColorPicker.Area /><ColorPicker.HueSlider />
    <ColorPicker.Input />
    <ColorPicker.Swatches colors={brandSwatches} />
  </ColorPicker.Content>
</ColorPicker.Root>
```

### Combobox

*Also: autocomplete, typeahead, searchable select.* A text input combined with a list of suggestions that filters as you type.

- **Use when:** choosing from a long list (countries, users, tags), or a select where typing is faster than scrolling. Can allow free text or restrict to options.
- **Avoid when:** there are fewer than about 10 options (Select or Radio group is simpler).
- **Anatomy:** label, input, optional toggle button, listbox popup, options, optional groups, empty state, loading state.
- **Variants and states:** single vs. multi-select (with chips), free text vs. restricted, async results; open, closed, loading, no results, invalid.
- **Accessibility:** input has `role="combobox"`, `aria-expanded`, `aria-controls`, and `aria-activedescendant` pointing to the highlighted option. Down arrow opens and moves; Enter selects; Escape closes then clears. Announce result counts. See [APG Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).
- **Pitfalls:** one of the hardest widgets to get right, so build on a proven primitive. Common bugs: focus moving into the list, Enter submitting the form, no "no results" message.

* **Composition:** Root → Label + Input + Trigger + Popup → List → Group / Item, plus Empty and Loading. Items take a render function for rich rows.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `items` | `T[]` | — | Options (or compose Items) |
| `itemToString` | `(item) => string` | — | Text used for the input and filtering |
| `value` / `defaultValue` | `T`, `T[]`, or `null` | `null` | Selected item(s) |
| `onValueChange` | `(value) => void` | — | Called on selection |
| `inputValue` / `onInputChange` | `string` | `""` | Typed text; use for async search |
| `filter` | `(item, input) => boolean` or `null` | contains | `null` when the server filters |
| `multiple` | `boolean` | `false` | Multi-select with chips |
| `allowsCustomValue` | `boolean` | `false` | Accept text not in the list |
| `open` / `onOpenChange` | `boolean` | — | Popup state |
| `loading` | `boolean` | `false` | Shows the Loading part |
| `required` / `disabled` / `invalid` | `boolean` | `false` | States |

```tsx
<Combobox.Root items={countries} itemToString={(c) => c.name} value={country} onValueChange={setCountry}>
  <Combobox.Label>Country</Combobox.Label>
  <Combobox.Input placeholder="Start typing" />
  <Combobox.Popup>
    <Combobox.List>{(c) => <Combobox.Item key={c.code} value={c}>{c.name}</Combobox.Item>}</Combobox.List>
    <Combobox.Empty>No countries match.</Combobox.Empty>
  </Combobox.Popup>
</Combobox.Root>
```

### Command palette

*Also: command menu, quick switcher, ⌘K menu.* A searchable list of actions and destinations opened with a keyboard shortcut.

- **Use when:** a product has many actions and power users who prefer the keyboard (editors, dev tools, admin apps).
- **Avoid when:** it would be the only way to reach a feature. It should supplement visible navigation.
- **Anatomy:** modal dialog, search input, grouped results, shortcut hints, empty state, optional nested pages.
- **Variants and states:** global vs. contextual; nested commands; recent items.
- **Accessibility:** a dialog containing a combobox and listbox. Focus goes to the input; arrows move; Enter runs; Escape closes and returns focus. Show the shortcut in the UI.
- **Pitfalls:** shortcuts that clash with browser or screen reader keys; fuzzy search that hides exact matches; no discoverability.

* **Composition:** Dialog wrapping Input → List → Group → Item, plus Empty. Pages for nested commands push onto a stack.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `open` / `onOpenChange` | `boolean` | `false` | Dialog state |
| `shortcut` | `string` | `"mod+k"` | Global key to open |
| `label` | `string` | required | Dialog name |
| `search` / `onSearchChange` | `string` | `""` | Query text |
| `filter` | `(value, search, keywords) => number` | fuzzy | Ranking function |
| `loop` | `boolean` | `true` | Arrow keys wrap |
| Item `onSelect` | `() => void` | — | Runs the command |
| Item `keywords` | `string[]` | — | Extra search terms |
| Item `shortcut` | `string` | — | Hint shown on the right |
| Group `heading` | `string` | — | Group label |

```tsx
<Command.Dialog open={open} onOpenChange={setOpen} shortcut="mod+k" label="Command menu">
  <Command.Input placeholder="Search actions" />
  <Command.List>
    <Command.Group heading="Projects">
      <Command.Item onSelect={newProject} shortcut="mod+n" keywords={["create"]}>New project</Command.Item>
    </Command.Group>
    <Command.Empty>No results.</Command.Empty>
  </Command.List>
</Command.Dialog>
```

### Context menu

*Also: right-click menu.* A menu of actions for an item, opened by right-click, long-press or a keyboard shortcut.

- **Use when:** offering shortcuts to actions for an item in dense interfaces (files, canvas objects, table rows).
- **Avoid when:** it's the only way to reach the actions. Always offer the same actions elsewhere, such as an overflow button.
- **Anatomy:** menu surface, items with icons and shortcut hints, separators, submenus, checkable items.
- **Variants and states:** same as Dropdown menu; disabled items.
- **Accessibility:** follows the menu pattern; open via Shift+F10 or the Menu key too. See [APG Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
- **Pitfalls:** hijacking the browser's right-click where people expect copy/paste; no touch equivalent.

* **Composition:** Root → Trigger (wraps the target area) + Content → Item, Separator, Sub. Share the item list with the overflow menu so both stay in sync.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `onOpenChange` | `(open) => void` | — | Called on open and close |
| Root `modal` | `boolean` | `true` | Blocks outside interaction while open |
| Trigger `disabled` | `boolean` | `false` | Turns off the menu for this area |
| Item `onSelect` | `() => void` | — | Action |
| Item `tone` | `"default"`, `"danger"` | `"default"` | Destructive styling |
| Item `shortcut` | `string` | — | Shortcut hint |
| Item `disabled` | `boolean` | `false` | Not selectable |

```tsx
<ContextMenu.Root>
  <ContextMenu.Trigger render={<FileRow file={file} />} />
  <ContextMenu.Content>
    <ContextMenu.Item shortcut="mod+d" onSelect={duplicate}>Duplicate</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item tone="danger" onSelect={remove}>Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

## D

### Data table

*Also: data grid.* A table with tools for working with data: sorting, filtering, selection, pagination, inline actions. (For plain tabular content, see Table.)

- **Use when:** people scan, compare and act on many records with several attributes each.
- **Avoid when:** there are only a few attributes (a List is easier), or on small screens without a plan for reflow.
- **Anatomy:** toolbar (search, filters, bulk actions), header row with sort controls, rows, cells, selection checkboxes, row actions, pagination or infinite scroll, empty and loading states.
- **Variants and states:** density (compact, default, comfortable), sticky header and first column, expandable rows, resizable and reorderable columns, inline editing; row hover, selected, focused.
- **Accessibility:** a native `table` with `th` and `scope` for read-only data. Use the `grid` pattern only if cells are interactive and you implement arrow-key navigation. Sortable headers are buttons with `aria-sort`. Announce bulk-selection counts. See [APG Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
- **Pitfalls:** horizontal scroll with no sticky identifiers; numbers left-aligned (right-align numbers, use tabular figures); row-click and checkbox-click doing different things with no cue; losing selection across pages.

* **Composition:** most systems pair a headless table engine (e.g. TanStack Table) with styled parts: Toolbar, Table, Header, Row, Cell, Pagination. Columns are defined as data, and the parts handle rendering.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `data` | `T[]` | required | Rows |
| `columns` | `ColumnDef<T>[]` | required | `id`, `header`, `cell`, `sortable`, `align`, `width`, `pin` |
| `getRowId` | `(row) => string` | index | Stable ids for selection |
| `sorting` / `onSortingChange` | `{ id, desc }[]` | `[]` | Sort state |
| `selection` / `onSelectionChange` | `Set<string>` | empty | Selected row ids |
| `pagination` / `onPaginationChange` | `{ page, pageSize }` | — | Page state; omit for infinite scroll |
| `rowCount` | `number` | `data.length` | Total for server-side paging |
| `density` | `"compact"`, `"default"`, `"comfortable"` | `"default"` | Row height |
| `stickyHeader` | `boolean` | `true` | Header stays visible on scroll |
| `loading` | `boolean` | `false` | Shows skeleton rows |
| `emptyState` | `ReactNode` | — | Shown when there are no rows |
| `toolbar` | `ReactNode` | — | Search, filters, bulk actions |
| `caption` | `string` | required | Accessible table name |

```tsx
<DataTable
  data={orders}
  getRowId={(o) => o.id}
  columns={[
    { id: "customer", header: "Customer", cell: (o) => o.customer.name, sortable: true },
    { id: "total", header: "Total", cell: (o) => formatMoney(o.total), align: "end" },
  ]}
  sorting={sorting} onSortingChange={setSorting}
  selection={selected} onSelectionChange={setSelected}
  toolbar={<DataTable.BulkActions><Button tone="danger">Cancel orders</Button></DataTable.BulkActions>}
  emptyState={<EmptyState title="No orders yet" />}
/>
```

### Date picker

*Also: date input, date field.* A field for entering a date by typing, choosing from a calendar, or both.

- **Use when:** collecting a date in a form.
- **Avoid when:** you only need month/year (use two selects) or a known date like a birthday (three text fields or one masked input is faster than a calendar).
- **Anatomy:** label, input (or segmented day/month/year fields), calendar button, Calendar popover, hint text showing the format, error message.
- **Variants and states:** single date, date range (often two inputs plus a two-month calendar), with time, presets ("Last 7 days").
- **Accessibility:** typing must always work; the calendar is an addition. Show the expected format in the hint. The popover is a dialog that returns focus to the button. See [APG Date picker dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/).
- **Pitfalls:** ambiguous formats (03/04 is March or April depending on locale); blocking typed input; time zones ignored.

* **Composition:** a DateField (typed segments) + a Popover holding a Calendar. Because the parts are separate, a team can ship the field without the calendar.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Field label |
| `value` / `defaultValue` | `CalendarDate` or range | — | Selected date |
| `onValueChange` | `(value) => void` | — | Called on change |
| `minValue` / `maxValue` | `CalendarDate` | — | Bounds, enforced and announced |
| `isDateUnavailable` | `(date) => boolean` | — | Blocked days |
| `granularity` | `"day"`, `"hour"`, `"minute"` | `"day"` | Adds time segments |
| `presets` | `{ label, value }[]` | — | Quick picks like "Last 7 days" |
| `description` / `errorMessage` | `ReactNode` | — | Format hint and error |
| `open` / `onOpenChange` | `boolean` | — | Calendar popover state |
| `required` / `disabled` / `invalid` | `boolean` | `false` | States |

```tsx
<DatePicker label="Start date" value={start} onValueChange={setStart} minValue={today}>
  <DatePicker.Field />
  <DatePicker.Trigger />
  <DatePicker.Popover><Calendar.Root /></DatePicker.Popover>
</DatePicker>
```

### Dialog

*Also: modal, modal dialog, alert dialog.* A window over the page that people must deal with before they can return to it.

- **Use when:** a short task or a decision that should interrupt the flow, such as confirming a destructive action or filling in a small form.
- **Avoid when:** the content is long or complex (use a page), the information needs no response (use an inline message), or it only shows more detail (use a Drawer or Popover).
- **Anatomy:** scrim/overlay, container, title, body, footer actions, close button.
- **Variants and states:** sizes, alert dialog (requires a response, no dismiss by clicking outside), full-screen on mobile, scrolling body with sticky header and footer.
- **Accessibility:** `role="dialog"` (or `alertdialog`) with `aria-modal`, labeled by its title. Focus moves inside on open, is trapped while open, and returns to the trigger on close. Escape closes. The background is inert. See [APG Dialog (modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).
- **Pitfalls:** dialogs on top of dialogs; confirm dialogs for reversible actions (use undo); buttons labeled Yes/No; losing the user's input when the scrim is clicked.

* **Composition:** Root → Trigger + Portal → Overlay + Content → Title, Description, Body, Footer, Close. Title is required because it labels the dialog.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `open` / `defaultOpen` | `boolean` | `false` | State |
| Root `onOpenChange` | `(open) => void` | — | Called on open and close |
| Root `role` | `"dialog"`, `"alertdialog"` | `"dialog"` | Alert dialogs require a response |
| Root `modal` | `boolean` | `true` | Traps focus and makes the page inert |
| Content `size` | `"sm"`, `"md"`, `"lg"`, `"fullscreen"` | `"md"` | Width |
| Content `initialFocus` | `RefObject` | first focusable | Where focus lands on open |
| Content `finalFocus` | `RefObject` | trigger | Where focus returns on close |
| Content `dismissOnOutsideClick` | `boolean` | `true` | Set false for forms and alert dialogs |
| Content `dismissOnEscape` | `boolean` | `true` | Escape closes |

```tsx
<Dialog.Root role="alertdialog" open={open} onOpenChange={setOpen}>
  <Dialog.Trigger render={<Button tone="danger">Delete project</Button>} />
  <Dialog.Content size="sm">
    <Dialog.Title>Delete “Q3 roadmap”?</Dialog.Title>
    <Dialog.Description>This removes 14 files. You can't undo this.</Dialog.Description>
    <Dialog.Footer>
      <Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
      <Button tone="danger" onClick={remove}>Delete</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

### Disclosure

*Also: show/hide, details, expandable section.* A single button that shows or hides one piece of content. An Accordion is a group of these.

- **Use when:** hiding secondary details ("Show more", advanced options, a long description).
- **Avoid when:** the hidden content is something most people need.
- **Anatomy:** trigger button with chevron, content region.
- **Variants and states:** expanded, collapsed; inline text link style vs. button style.
- **Accessibility:** a `button` with `aria-expanded` and `aria-controls`, or the native `details`/`summary` element. See [APG Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).
- **Pitfalls:** "Show more" that doesn't change to "Show less"; collapsing content that makes the page jump.

* **Composition:** Root → Trigger + Panel. Accordion is built from the same primitive.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `open` / `defaultOpen` | `boolean` | `false` | State |
| `onOpenChange` | `(open) => void` | — | Called on toggle |
| `disabled` | `boolean` | `false` | Trigger not interactive |
| Panel `keepMounted` | `boolean` | `false` | Keep hidden content in the DOM |

```tsx
<Collapsible.Root>
  <Collapsible.Trigger>Advanced options</Collapsible.Trigger>
  <Collapsible.Panel keepMounted>…</Collapsible.Panel>
</Collapsible.Root>
```

### Divider

*Also: separator, rule, hr.* A thin line that separates groups of content.

- **Use when:** separating groups that spacing alone can't distinguish, or items in menus and lists.
- **Avoid when:** whitespace does the job. Too many dividers make a page feel like a spreadsheet.
- **Anatomy:** line, optional label ("or").
- **Variants and states:** horizontal, vertical, inset, with label.
- **Accessibility:** decorative dividers are hidden from assistive tech; semantic ones use `hr` or `role="separator"`.
- **Pitfalls:** dividers used instead of a real heading structure; low-contrast lines that disappear in dark mode.

* **Composition:** a single element; the label variant renders text between two lines.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Direction |
| `decorative` | `boolean` | `true` | Hidden from assistive tech |
| `inset` | `boolean` or `"start"` | `false` | Indents to align with content |
| `label` | `ReactNode` | — | Text in the middle, e.g. "or" |

```tsx
<Divider />
<Divider label="or" decorative={false} />
```

### Drawer

*Also: sheet, side panel, flyout, bottom sheet.* A panel that slides in from an edge of the screen.

- **Use when:** showing detail or a secondary task while keeping the main page's context (record details, filters, settings, mobile navigation).
- **Avoid when:** the task needs full attention (Dialog) or full space (a page).
- **Anatomy:** panel, header with title and close, scrollable body, optional footer actions, optional scrim.
- **Variants and states:** side (left, right, bottom, top), modal (with scrim, focus trapped) vs. non-modal (page stays interactive), resizable, snap points for bottom sheets.
- **Accessibility:** modal drawers follow the Dialog rules. Non-modal drawers are a labeled region; focus moves in on open and back on close.
- **Pitfalls:** drawers that cover the content they relate to; no way to close on mobile without the X; no deep-link support.

* **Composition:** the same parts as Dialog (Trigger, Content, Header, Title, Body, Footer, Close), so teams learn one shape for both.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `open` / `onOpenChange` | `boolean` | `false` | State |
| `side` | `"start"`, `"end"`, `"top"`, `"bottom"` | `"end"` | Edge it slides from (logical, so it flips in RTL) |
| `modal` | `boolean` | `true` | With scrim and focus trap, or alongside the page |
| `size` | `"sm"`, `"md"`, `"lg"`, `"full"` | `"md"` | Width or height |
| `resizable` | `boolean` | `false` | Drag handle on the inner edge |
| `snapPoints` | `(number or string)[]` | — | Bottom sheet stops, e.g. `["40%", 1]` |
| `dismissOnOutsideClick` | `boolean` | `true` | Close on scrim click |

```tsx
<Drawer.Root side="end" modal={false} open={!!selectedId} onOpenChange={(o) => !o && clear()}>
  <Drawer.Content size="md">
    <Drawer.Header><Drawer.Title>Order #1042</Drawer.Title><Drawer.Close /></Drawer.Header>
    <Drawer.Body><OrderDetails id={selectedId} /></Drawer.Body>
  </Drawer.Content>
</Drawer.Root>
```

### Dropdown menu

*Also: menu, menu button, overflow menu, kebab menu.* A button that opens a list of actions.

- **Use when:** grouping secondary actions ("More", row actions, account menu).
- **Avoid when:** people are choosing a value for a form field (that's a Select) or navigating the site (use links in a disclosure).
- **Anatomy:** trigger button, menu surface, items (icon, label, shortcut), group labels, separators, submenus, checkable and radio items.
- **Variants and states:** item states: hover, focus, disabled, checked; destructive item tone.
- **Accessibility:** trigger has `aria-haspopup="menu"` and `aria-expanded`. Arrow keys move, type-ahead jumps, Enter activates, Escape closes and returns focus. Items are `menuitem`, `menuitemcheckbox` or `menuitemradio`. See [APG Menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).
- **Pitfalls:** using the menu role for navigation links (screen readers switch modes); hiding the primary action in a menu; menus clipped by scroll containers.

* **Composition:** Root → Trigger + Content → Item, Group, Label, Separator, CheckboxItem, RadioGroup → RadioItem, Sub → SubTrigger + SubContent.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `open` / `onOpenChange` | `boolean` | `false` | State |
| Root `modal` | `boolean` | `true` | Blocks outside interaction while open |
| Content `side` | `"top"`, `"bottom"`, `"left"`, `"right"` | `"bottom"` | Placement |
| Content `align` | `"start"`, `"center"`, `"end"` | `"start"` | Alignment to trigger |
| Content `sideOffset` | `number` | `4` | Gap in px |
| Item `onSelect` | `() => void` | — | Action |
| Item `tone` | `"default"`, `"danger"` | `"default"` | Destructive styling |
| Item `shortcut` | `string` | — | Hint on the right |
| Item `disabled` | `boolean` | `false` | Not selectable |
| CheckboxItem `checked` / `onCheckedChange` | `boolean` | `false` | Toggle item |
| RadioGroup `value` / `onValueChange` | `string` | — | One-of-many items |

```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger render={<IconButton icon={<MoreIcon />} label="More actions" />} />
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onSelect={rename}>Rename</DropdownMenu.Item>
    <DropdownMenu.CheckboxItem checked={pinned} onCheckedChange={setPinned}>Pinned</DropdownMenu.CheckboxItem>
    <DropdownMenu.Separator />
    <DropdownMenu.Item tone="danger" onSelect={remove}>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

## E

### Empty state

*Also: zero state, blank slate.* What a view shows when it has no content.

- **Use when:** always. Every list, table, search and dashboard needs one.
- **Avoid when:** n/a, but keep it proportional: a small table doesn't need a full-page illustration.
- **Anatomy:** optional illustration or icon, headline, one sentence explaining why it's empty, primary action.
- **Variants and states:** first use (nothing created yet), no results (search or filters), cleared (inbox zero), no permission, error.
- **Accessibility:** the message is real text, not baked into an image. Focus doesn't jump to it unexpectedly.
- **Pitfalls:** one generic "No data" message for every case; no way forward; no-results states that don't show which filters are active.

* **Composition:** props for the text and an Actions slot for buttons, so each view supplies its own next step.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `kind` | `"first-use"`, `"no-results"`, `"cleared"`, `"error"`, `"no-access"` | `"first-use"` | Picks default icon and tone |
| `title` | `string` | required | Short headline |
| `description` | `ReactNode` | — | Why it's empty |
| `illustration` | `ReactNode` or `false` | kind icon | Visual |
| `size` | `"inline"`, `"page"` | `"inline"` | Scale to the container |
| `headingLevel` | `2`–`6` | `3` | Heading level of the title |

```tsx
<EmptyState kind="no-results" title="No orders match these filters" description="Status: Refunded · Last 7 days">
  <EmptyState.Actions><Button variant="secondary" onClick={clearFilters}>Clear filters</Button></EmptyState.Actions>
</EmptyState>
```

## F

### File upload

*Also: dropzone, file input, uploader.* A control for selecting files from the device and uploading them.

- **Use when:** collecting documents, images or data files.
- **Avoid when:** n/a, but say up front what's accepted.
- **Anatomy:** label, drop area, browse button, accepted types and size hint, file list with name, size, progress, remove and retry.
- **Variants and states:** single vs. multiple, button-only vs. dropzone, image previews; idle, drag-over, uploading, success, error per file.
- **Accessibility:** a real `input type="file"` behind a visible button; drag-and-drop is an extra, never the only way. Announce progress and errors.
- **Pitfalls:** rejecting a file only after upload; errors with no reason ("Upload failed"); no way to cancel.

* **Composition:** Root → Dropzone (with Trigger inside) + List → FileItem (name, size, progress, error, actions). The app owns the upload transport; the component shows state.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `accept` | `string[]` | any | File types (`.pdf`, `image/*`) |
| `maxSize` | `number` (bytes) | — | Per-file limit, checked before upload |
| `maxFiles` | `number` | — | Total limit |
| `multiple` | `boolean` | `false` | Allow several files |
| `onFilesAccepted` | `(files) => void` | — | Valid files to upload |
| `onFilesRejected` | `(rejections) => void` | — | Invalid files with reasons |
| List `files` | `{ id, name, size, status, progress, error }[]` | — | Controlled list |
| List `onRemove` / `onRetry` | `(id) => void` | — | Per-file actions |
| `disabled` | `boolean` | `false` | Not interactive |

```tsx
<FileUpload.Root accept={[".pdf", ".png"]} maxSize={10_000_000} multiple onFilesAccepted={startUploads}>
  <FileUpload.Dropzone>
    Drag files here or <FileUpload.Trigger>browse</FileUpload.Trigger>
    <FileUpload.Hint>PDF or PNG, up to 10 MB</FileUpload.Hint>
  </FileUpload.Dropzone>
  <FileUpload.List files={uploads} onRemove={cancel} onRetry={retry} />
</FileUpload.Root>
```

### Form field

*Also: field, form control wrapper.* The wrapper that gives every input its label, hint, error message and layout.

- **Use when:** around every text input, select, textarea, checkbox group or radio group in a form, so they all behave the same.
- **Avoid when:** n/a. Building fields without it is how forms drift.
- **Anatomy:** label, optional "(optional)" marker, hint text, control, error message, optional character count.
- **Variants and states:** label on top (most readable) vs. inline; default, focus, filled, invalid, disabled, read-only.
- **Accessibility:** label tied to the control (`for`/`id`), hint and error linked with `aria-describedby`, `aria-invalid` on errors, required state exposed. Errors appear next to the field and in a summary for long forms.
- **Pitfalls:** placeholder used as the label (it disappears); errors shown only by red border; validating while the user is still typing the first time.

* **Composition:** Field → Label, Control, Description, Error. The field generates ids and wires `aria-describedby` and `aria-invalid` into whatever control sits inside it.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `invalid` | `boolean` | `false` | Shows Error and sets `aria-invalid` |
| Root `required` | `boolean` | `false` | Marks and enforces required |
| Root `optional` | `boolean` | `false` | Shows "(optional)" instead |
| Root `disabled` | `boolean` | `false` | Passed to the control |
| Root `id` | `string` | generated | Control id |
| Root `name` | `string` | — | Form field name |
| Label `hidden` | `boolean` | `false` | Visually hidden label |
| Control `render` | `ReactElement` | Input | The control to wire up |
| Error `match` | validity key | — | Show only for a specific validation error |

```tsx
<Field.Root invalid={!!errors.email}>
  <Field.Label>Work email</Field.Label>
  <Field.Control render={<Input type="email" autoComplete="email" />} />
  <Field.Description>We'll send the invite here.</Field.Description>
  <Field.Error>{errors.email}</Field.Error>
</Field.Root>
```

## H

### Header

*Also: app bar, top bar, navbar, masthead.* The persistent bar at the top of an app or site holding identity, primary navigation and global actions.

- **Use when:** nearly always; it anchors the layout.
- **Avoid when:** the flow needs focus (checkout, onboarding). A reduced header with just the logo and an exit keeps people on task.
- **Anatomy:** logo/product name, primary nav, search, global actions (notifications, help), account menu, mobile menu button.
- **Variants and states:** fixed vs. scrolling, condensed on scroll, transparent over hero, responsive collapse into a menu.
- **Accessibility:** use the `header` landmark with a `nav` inside, labeled if there's more than one nav. Provide a "Skip to main content" link before it. Current page link has `aria-current="page"`.
- **Pitfalls:** sticky headers that eat mobile screen height; icon-only actions without labels; too many items at once.

* **Composition:** a layout shell with slots: Brand, Nav, Search, Actions, Account, MobileMenu. Products fill the slots; the system owns spacing and responsive collapse.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `sticky` | `boolean` | `true` | Stays at the top on scroll |
| `condenseOnScroll` | `boolean` | `false` | Shrinks height after scrolling |
| `variant` | `"default"`, `"transparent"` | `"default"` | Transparent over hero media |
| `mobileBreakpoint` | `"sm"`, `"md"`, `"lg"` | `"md"` | Below this, nav collapses into the menu |
| Nav `items` | `{ label, href, icon? }[]` | — | Primary destinations |
| Nav `currentPath` | `string` | — | Drives `aria-current` |
| `skipLinkTarget` | `string` | `"#main"` | Target of the skip link rendered first |

```tsx
<AppHeader sticky>
  <AppHeader.Brand href="/"><Logo /></AppHeader.Brand>
  <AppHeader.Nav items={primaryNav} currentPath={pathname} />
  <AppHeader.Actions>
    <SearchButton /><NotificationsButton />
  </AppHeader.Actions>
  <AppHeader.Account user={user} />
</AppHeader>
```

## I

### Icon

*Also: glyph, pictogram.* A small symbol that represents an action, object or status.

- **Use when:** reinforcing a label, helping people scan, or showing universally understood actions (close, search, settings).
- **Avoid when:** the meaning is ambiguous. Most icons beyond a handful aren't universally understood, so pair them with text.
- **Anatomy:** a single SVG on a consistent grid (commonly 16, 20, 24px) with consistent stroke weight.
- **Variants and states:** sizes, outline vs. filled (filled often means "selected"), color follows the text color by default.
- **Accessibility:** decorative icons are `aria-hidden`. An icon that stands alone and carries meaning needs an accessible name, usually supplied by its parent control (see Icon button). If it conveys meaning, it needs 3:1 non-text contrast.
- **Pitfalls:** mixing icon sets; using one icon for different meanings; icon fonts (they break with custom fonts and dyslexia tools; use SVG).

* **Composition:** leaf; other components take icons as props or slots (`iconStart`, `icon`). One component per icon tree-shakes better than one `Icon name="…"`.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `size` | `"xs"`, `"sm"`, `"md"`, `"lg"` or `number` | `"md"` | 12 / 16 / 20 / 24px |
| `label` | `string` | — | Accessible name; omit for decorative icons (`aria-hidden`) |
| `color` | token name | `currentColor` | Override the inherited color |
| `strokeWidth` | `number` | set-wide | Only for stroke-based sets |
| `name` | icon name union | — | Only for a single `Icon` component API |

```tsx
<SearchIcon size="sm" />                       {/* decorative */}
<WarningIcon size="md" label="Warning" />      {/* meaningful */}
```

### Icon button

*Also: icon-only button.* A button whose visible content is only an icon.

- **Use when:** space is tight and the action is common and well understood (close, more, edit, play), especially in toolbars.
- **Avoid when:** the action is uncommon or ambiguous; add a text label.
- **Anatomy:** button container (often invisible until hover), icon, tooltip.
- **Variants and states:** ghost, outlined, filled; sizes; toggle (pressed) state.
- **Accessibility:** must have an accessible name via `aria-label` or visually hidden text. A tooltip helps sighted users but doesn't replace the label. Keep the hit area at least 24px, or 44px on touch.
- **Pitfalls:** missing labels (the most common accessibility bug in design systems); icon-only primary actions; tiny hit areas.

* **Composition:** Button + Icon + Tooltip, composed internally so no one can ship an unlabeled icon button. Making `label` required lets the API do the accessibility work.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | required | The icon |
| `label` | `string` | required | Accessible name and tooltip text |
| `variant` | `"primary"`, `"secondary"`, `"ghost"` | `"ghost"` | Emphasis |
| `tone` | `"default"`, `"danger"` | `"default"` | Meaning |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Hit area 28 / 36 / 44px |
| `pressed` / `onPressedChange` | `boolean` | — | Makes it a toggle |
| `showTooltip` | `boolean` | `true` | Show the label as a tooltip |
| `loading` / `disabled` | `boolean` | `false` | States |

```tsx
<IconButton icon={<TrashIcon />} label="Delete comment" tone="danger" variant="ghost" />
```

### Input

*Also: text field, text input.* A single-line field for entering text.

- **Use when:** collecting short free-form text: names, emails, search terms, numbers.
- **Avoid when:** the answer is one of a known set (Select, Radio), or long (Textarea).
- **Anatomy:** label, container, value, placeholder (optional), prefix/suffix (icon, unit, currency), clear button, helper text, error message. Usually wrapped in Form field.
- **Variants and states:** sizes, types (`email`, `tel`, `url`, `password` with show/hide); default, hover, focus, filled, disabled, read-only, invalid.
- **Accessibility:** visible label tied to the input; correct `type`, `inputmode` and `autocomplete` so mobile keyboards and autofill work. Don't block paste.
- **Pitfalls:** placeholder as label; field width that doesn't hint at expected length; masks that fight the user's typing.

* **Composition:** InputGroup wraps Input with addons (icons, units, buttons); Field supplies the label and messages.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `string` | — | Text |
| `onValueChange` | `(value) => void` | — | Called on input |
| `type` | `"text"`, `"email"`, `"tel"`, `"url"`, `"password"`, `"search"` | `"text"` | Native type |
| `inputMode` / `autoComplete` | native values | — | Mobile keyboard and autofill |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Height |
| `prefix` / `suffix` | `ReactNode` | — | Inline adornments |
| `clearable` | `boolean` | `false` | Shows a clear button when filled |
| `revealable` | `boolean` | `true` for passwords | Show/hide password toggle |
| `readOnly` / `disabled` / `invalid` | `boolean` | `false` | States |

```tsx
<Field.Root>
  <Field.Label>Budget</Field.Label>
  <InputGroup>
    <InputGroup.Addon>$</InputGroup.Addon>
    <Input inputMode="decimal" value={budget} onValueChange={setBudget} />
    <InputGroup.Addon>USD</InputGroup.Addon>
  </InputGroup>
</Field.Root>
```

## K

### Kbd

*Also: keyboard key, shortcut hint.* Inline text styled as a keyboard key to show shortcuts.

- **Use when:** documenting or hinting keyboard shortcuts in menus, tooltips and help.
- **Avoid when:** n/a; keep it small and secondary.
- **Anatomy:** key cap, key label, separator for combos ("⌘ K").
- **Variants and states:** OS-aware labels (⌘ on Mac, Ctrl elsewhere).
- **Accessibility:** use the `kbd` element; symbols like ⌘ need text equivalents for screen readers ("Command").
- **Pitfalls:** showing Mac symbols to Windows users.

* **Composition:** leaf; used inside Tooltip, Dropdown menu items and Command palette items.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `keys` | `string[]` | required | e.g. `["mod", "k"]`; `mod` resolves to ⌘ or Ctrl |
| `size` | `"sm"`, `"md"` | `"sm"` | Key cap size |
| `platform` | `"auto"`, `"mac"`, `"other"` | `"auto"` | Override platform detection |

```tsx
<Kbd keys={["mod", "shift", "p"]} />
```

## L

### Link

*Also: anchor, hyperlink, text link.* Text that navigates to another page, section or resource.

- **Use when:** the result is navigation.
- **Avoid when:** the result is an action on the current page (use Button).
- **Anatomy:** text, underline, optional external-link icon.
- **Variants and states:** inline (in prose, always underlined) vs. standalone; subtle vs. default; visited, hover, focus, active.
- **Accessibility:** a real `a href`. Link text makes sense out of context (not "click here"). Links opening a new tab say so. Inline links must be distinguishable by more than color (underline). See [APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/).
- **Pitfalls:** removing underlines in body text; links styled as buttons, and buttons styled as links, with no rule behind it.

* **Composition:** leaf. The router integration is the main design decision: a `render` prop, or a system-level provider that tells Link which router component to use.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | required | Destination |
| `variant` | `"inline"`, `"standalone"`, `"subtle"` | `"inline"` | Inline links are always underlined |
| `external` | `boolean` | auto by domain | Adds icon, `target="_blank"`, `rel`, "opens in new tab" |
| `render` | `ReactElement` | — | Render as the router's link |
| `iconEnd` | `ReactNode` | — | e.g. arrow for standalone links |

```tsx
<Link href="/settings/billing" render={<RouterLink to="/settings/billing" />}>Billing settings</Link>
<Link href="https://status.example.com" external>Status page</Link>
```

### List

*Also: list view, item list, stacked list.* A vertical set of related items, each usually a row with consistent structure.

- **Use when:** showing items with one or two key attributes (messages, contacts, settings rows, notifications).
- **Avoid when:** people compare many attributes across items (Data table) or browse visually (Card grid).
- **Anatomy:** container, items, each with leading element (icon, avatar, checkbox), primary text, secondary text, trailing element (meta, action, chevron), dividers.
- **Variants and states:** static, interactive (each row a link or button), selectable; dense vs. comfortable; item hover, selected, focus.
- **Accessibility:** use `ul`/`ol` so screen readers announce the count. Interactive rows contain one primary link or button. Selectable lists become Listbox.
- **Pitfalls:** whole-row click plus separate buttons with no visible difference; truncating the text people need.

* **Composition:** List → Item → Start (icon, avatar, checkbox), Content (Title, Description), End (meta, action). Slots keep alignment consistent across rows.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| List `as` | `"ul"`, `"ol"` | `"ul"` | List element |
| List `density` | `"compact"`, `"default"`, `"comfortable"` | `"default"` | Row height |
| List `dividers` | `boolean` | `false` | Lines between rows |
| Item `href` / `onClick` | `string` / `() => void` | — | Makes the row interactive |
| Item `selected` | `boolean` | `false` | Selected styling |
| Item `disabled` | `boolean` | `false` | Not interactive |

```tsx
<List dividers>
  <List.Item href="/people/ada">
    <List.Start><Avatar name="Ada Lovelace" /></List.Start>
    <List.Content><List.Title>Ada Lovelace</List.Title><List.Description>Engineering</List.Description></List.Content>
    <List.End><Tag>Admin</Tag></List.End>
  </List.Item>
</List>
```

### Listbox

*Also: selectable list, option list.* A list of options where one or more can be selected. It's the popup inside Select and Combobox, and can also appear inline.

- **Use when:** selecting from a visible list (transfer lists, inline pickers).
- **Avoid when:** a native Select, Checkbox or Radio group would do.
- **Anatomy:** container, options, optional groups with labels, selection indicator.
- **Variants and states:** single vs. multi-select; option hover, focused, selected, disabled.
- **Accessibility:** `role="listbox"` with `option` children and `aria-selected`. Arrow keys move, type-ahead jumps, Space toggles in multi-select. See [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).
- **Pitfalls:** putting links or buttons inside options; no visible focus separate from selection.

* **Composition:** Listbox → Section (with title) → Option. The same parts are reused inside Select and Combobox popups.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Accessible name |
| `selectionMode` | `"single"`, `"multiple"` | `"single"` | Selection |
| `value` / `defaultValue` | `string` or `string[]` | — | Selected options |
| `onValueChange` | `(value) => void` | — | Called on selection |
| `items` | `T[]` | — | Data-driven options |
| `disabledKeys` | `string[]` | `[]` | Options that can't be selected |
| `orientation` | `"vertical"`, `"horizontal"` | `"vertical"` | Arrow-key axis |
| Option `value` | `string` | required | Option id |
| Option `textValue` | `string` | text content | For type-ahead when content is rich |

```tsx
<Listbox label="Assign reviewers" selectionMode="multiple" value={reviewers} onValueChange={setReviewers}>
  <Listbox.Section title="Design">
    <Listbox.Option value="tori" textValue="Tori"><Avatar name="Tori" size="sm" /> Tori</Listbox.Option>
  </Listbox.Section>
</Listbox>
```

## M

### Menu bar

*Also: application menu.* A horizontal row of menus (File, Edit, View) like a desktop app's.

- **Use when:** building desktop-class web apps with many commands (editors, IDEs, design tools).
- **Avoid when:** it's website navigation. Site nav is a list of links, not an ARIA menubar.
- **Anatomy:** bar, top-level menu triggers, Dropdown menus with items, submenus, shortcuts.
- **Variants and states:** open, closed; items checked, disabled.
- **Accessibility:** `role="menubar"`; Left/Right move between menus, Down opens, and once one menu is open, moving across opens the neighbor. See [APG Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
- **Pitfalls:** using menubar semantics for a marketing site's nav, which confuses screen reader users who expect app behavior.

* **Composition:** Menubar → Menu → Trigger + Content → Items. It's a Dropdown menu repeated inside a roving-focus bar, so every Dropdown menu part and prop applies.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `onValueChange` | `string` or `null` | `null` | Which menu is open |
| `loop` | `boolean` | `true` | Arrow keys wrap across menus |
| `label` | `string` | — | Accessible name |
| Menu `value` | `string` | auto | Menu id |

```tsx
<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item shortcut="mod+n" onSelect={newFile}>New file</Menubar.Item>
      <Menubar.Item shortcut="mod+s" onSelect={save}>Save</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
```

## N

### Navigation

*Also: sidebar, side nav, nav rail, top nav, tab bar (mobile).* The persistent structure people use to move between the main areas of a product.

- **Use when:** always; choose the form by the number of destinations and the device.
- **Avoid when:** n/a, but don't mix several competing navs at the same level.
- **Anatomy:** container, items (icon and label), section labels, nested items, active indicator, collapse toggle, footer (account, settings).
- **Variants and states:** top nav (few sections), sidebar (many sections, nested), collapsible rail (icons only), mobile bottom tab bar (3–5 items), hamburger drawer; item states: hover, active/current, focus, expanded.
- **Accessibility:** a `nav` landmark, labeled when there's more than one; links with `aria-current="page"`; nested groups as disclosures, not menus; collapsed rails still need accessible names. See [APG Disclosure navigation example](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).
- **Pitfalls:** hiding everything behind a hamburger on desktop; icon-only rails with no tooltips; no clear sign of the current location.

* **Composition:** SideNav → Section (with heading) → Item, and Group (a disclosure) → Item for nesting. Data-driven items keep the nav in sync with routes.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Names the nav landmark |
| `currentPath` | `string` | — | Drives `aria-current` and active styling |
| `items` | `NavItem[]` | — | Data-driven tree (or compose children) |
| `collapsed` / `onCollapsedChange` | `boolean` | `false` | Icon-only rail |
| `variant` | `"sidebar"`, `"rail"`, `"top"`, `"bottom-tabs"` | `"sidebar"` | Layout |
| Item `href` / `icon` / `badge` | `string` / `ReactNode` / `ReactNode` | — | Destination and adornments |
| Group `label` / `defaultOpen` | `string` / `boolean` | — / `false` | Nested section |

```tsx
<SideNav label="Main" currentPath={pathname} collapsed={collapsed} onCollapsedChange={setCollapsed}>
  <SideNav.Item href="/" icon={<HomeIcon />}>Home</SideNav.Item>
  <SideNav.Section heading="Workspace">
    <SideNav.Group label="Projects" icon={<FolderIcon />}>
      <SideNav.Item href="/projects/active">Active</SideNav.Item>
      <SideNav.Item href="/projects/archived">Archived</SideNav.Item>
    </SideNav.Group>
  </SideNav.Section>
</SideNav>
```

### Number input

*Also: stepper input, spin button, quantity input.* A field for numbers, often with increment and decrement buttons.

- **Use when:** small numeric values with a clear range (quantity, number of guests).
- **Avoid when:** the "number" is an identifier (card numbers, ZIP codes, phone): use a text Input with `inputmode="numeric"`. For large ranges where precision doesn't matter, consider a Slider.
- **Anatomy:** label, input, minus/plus buttons, unit suffix, helper text.
- **Variants and states:** with or without steppers; min, max and step; at min or max (button disabled), invalid.
- **Accessibility:** `role="spinbutton"` (native `input type="number"` has quirks, so many systems use a text input with `inputmode`). Up/Down change the value by one step, Page Up/Down by a larger step, and Home/End jump to min/max. See [APG Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).
- **Pitfalls:** the scroll wheel changing values by accident; ignoring locale decimal separators (1,5 vs 1.5).

* **Composition:** Root → Decrement + Input + Increment, usually inside Field.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `number` or `null` | `null` | `null` means empty |
| `onValueChange` | `(value) => void` | — | Called on change |
| `min` / `max` | `number` | — | Bounds |
| `step` / `largeStep` | `number` | `1` / `10` | Arrow and Page Up/Down increments |
| `formatOptions` | `Intl.NumberFormatOptions` | — | Currency, percent, units |
| `locale` | `string` | app locale | Decimal and grouping separators |
| `allowWheelScrub` | `boolean` | `false` | Scroll wheel changes value |
| `hideSteppers` | `boolean` | `false` | Remove the buttons |
| `required` / `disabled` / `invalid` | `boolean` | `false` | States |

```tsx
<NumberField label="Guests" min={1} max={12} value={guests} onValueChange={setGuests}>
  <NumberField.Decrement /><NumberField.Input /><NumberField.Increment />
</NumberField>
```

## P

### Pagination

*Also: pager.* Controls for moving between pages of a long set of results.

- **Use when:** people need to know where they are in a result set or return to a specific spot (tables, search results).
- **Avoid when:** people browse casually in a feed (infinite scroll or "Load more" may suit better).
- **Anatomy:** previous/next, page numbers with truncation, current page, optional page-size select, optional "Showing 21–40 of 312".
- **Variants and states:** full, compact ("Page 2 of 16"), simple prev/next only, "Load more".
- **Accessibility:** a `nav` labeled "Pagination"; links or buttons with clear names ("Page 3", "Next page"); current page has `aria-current="page"`. Move focus to the results when the page changes.
- **Pitfalls:** tiny number targets; disabled Prev on page 1 with no visual cue; page state not in the URL.

* **Composition:** a single component for most uses; parts (Prev, Pages, Next, PageSize, Summary) for custom layouts.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `page` / `defaultPage` | `number` | `1` | Current page |
| `onPageChange` | `(page) => void` | — | Called on navigation |
| `pageCount` | `number` | — | Total pages (or `total` + `pageSize`) |
| `siblingCount` | `number` | `1` | Pages shown around the current one |
| `pageSize` / `onPageSizeChange` | `number` | — | Shows a page-size select |
| `variant` | `"full"`, `"compact"`, `"simple"` | `"full"` | Numbers, "2 of 16", or prev/next only |
| `getPageHref` | `(page) => string` | — | Render real links |
| `summary` | `ReactNode` | — | e.g. "Showing 21–40 of 312" |
| `label` | `string` | `"Pagination"` | Nav landmark name |

```tsx
<Pagination
  page={page} pageCount={16} onPageChange={setPage}
  getPageHref={(p) => `?page=${p}`}
  summary={`Showing ${from}–${to} of ${total}`}
/>
```

### Popover

*Also: popup, flyout, overlay panel.* A small non-modal surface anchored to a trigger, holding rich or interactive content.

- **Use when:** showing extra content or quick controls in context (a filter panel, a profile preview, a quick edit).
- **Avoid when:** it's a single line of help text (Tooltip), a list of actions (Dropdown menu), or a task needing full attention (Dialog).
- **Anatomy:** trigger, surface, optional arrow, content, optional close button.
- **Variants and states:** placement (top, bottom, start, end) with collision handling; click or hover trigger.
- **Accessibility:** the trigger is a button with `aria-expanded`; the popover is labeled; Escape closes and returns focus; focus moves into it if it has interactive content. The native HTML `popover` attribute handles much of this.
- **Pitfalls:** hover-only triggers with interactive content (unusable on touch and keyboard); popovers clipped by overflow containers.

* **Composition:** Root → Trigger + Portal → Content → Title, Arrow, Close. Tooltip, Dropdown menu, Select and Date picker use the same positioning primitive.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `open` / `defaultOpen` / `onOpenChange` | `boolean` | `false` | State |
| `modal` | `boolean` | `false` | Trap focus and block the page |
| `trigger` | `"click"`, `"hover"` | `"click"` | Hover only for non-essential previews |
| Content `side` | `"top"`, `"bottom"`, `"left"`, `"right"` | `"bottom"` | Placement |
| Content `align` | `"start"`, `"center"`, `"end"` | `"center"` | Alignment |
| Content `sideOffset` | `number` | `8` | Gap in px |
| Content `collisionPadding` | `number` | `8` | Space kept from viewport edges |
| Content `initialFocus` | `RefObject` or `false` | first focusable | Focus on open |
| Content `arrow` | `boolean` | `false` | Show a pointer |

```tsx
<Popover.Root>
  <Popover.Trigger render={<Button variant="secondary" iconStart={<FilterIcon />}>Filters</Button>} />
  <Popover.Content side="bottom" align="start">
    <Popover.Title>Filter orders</Popover.Title>
    <OrderFilters />
    <Popover.Close render={<Button size="sm">Apply</Button>} />
  </Popover.Content>
</Popover.Root>
```

### Progress

*Also: progress bar, progress indicator, meter (related).* A bar or ring showing how far a task has gone.

- **Use when:** a task takes more than a few seconds and progress can be measured (uploads, installs, multi-step processing).
- **Avoid when:** progress can't be measured and it's short (use a Spinner); for a static measurement like storage used, use a meter.
- **Anatomy:** track, fill, optional label and percentage, optional time remaining.
- **Variants and states:** linear vs. circular; determinate vs. indeterminate; in progress, success, error, paused.
- **Accessibility:** `progressbar` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and a label; announce completion. Static measurements use `meter`. See [APG Meter](https://www.w3.org/WAI/ARIA/apg/patterns/meter/).
- **Pitfalls:** fake progress that stalls at 99%; no error state; announcing every percent to screen readers.

* **Composition:** Root → Label + Track → Indicator, plus Value text. Meter is a sibling component for static measurements.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` or `null` | `null` | `null` is indeterminate |
| `max` | `number` | `100` | Upper bound |
| `label` | `string` | required | What is progressing |
| `formatValue` | `(value, max) => string` | percent | Text for Value and `aria-valuetext` |
| `shape` | `"linear"`, `"circular"` | `"linear"` | Bar or ring |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Thickness or diameter |
| `tone` | `"default"`, `"success"`, `"danger"` | `"default"` | End states |
| Meter `low` / `high` / `optimum` | `number` | — | Thresholds for meters |

```tsx
<Progress.Root value={uploaded} max={total}>
  <Progress.Label>Uploading 3 files</Progress.Label>
  <Progress.Value>{(v) => `${Math.round((v / total) * 100)}%`}</Progress.Value>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
```

## R

### Radio group

*Also: radio buttons, option group.* A set of options where exactly one can be chosen.

- **Use when:** choosing one of 2–6 options and people benefit from seeing them all at once.
- **Avoid when:** there are many options (Select or Combobox), or several can be chosen (Checkbox).
- **Anatomy:** group label (legend), radios, option labels, optional descriptions.
- **Variants and states:** vertical vs. horizontal, card-style radios ("tiles"); unselected, selected, focus, disabled, invalid.
- **Accessibility:** native `input type="radio"` sharing a `name`, inside `fieldset`/`legend`. Tab enters the group once; arrow keys move and select. See [APG Radio group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).
- **Pitfalls:** no default when one is clearly sensible (or a default that biases a sensitive choice); using radios, which can't be unselected, for optional questions.

* **Composition:** RadioGroup → Radio. The group owns the value and arrow-key behavior; individual radios never manage state.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Group `legend` | `string` | required | Group label |
| Group `value` / `defaultValue` | `string` | — | Selected option |
| Group `onValueChange` | `(value) => void` | — | Called on selection |
| Group `name` | `string` | generated | Form field name |
| Group `orientation` | `"vertical"`, `"horizontal"` | `"vertical"` | Layout |
| Group `variant` | `"default"`, `"card"` | `"default"` | Tile-style radios |
| Group `required` / `disabled` / `invalid` | `boolean` | `false` | States |
| Radio `value` | `string` | required | Option value |
| Radio `label` / `description` | `ReactNode` | — | Text |
| Radio `disabled` | `boolean` | `false` | Single option disabled |

```tsx
<RadioGroup legend="Billing cycle" value={cycle} onValueChange={setCycle} variant="card">
  <Radio value="monthly" label="Monthly" description="$12 per seat" />
  <Radio value="yearly" label="Yearly" description="$120 per seat, 2 months free" />
</RadioGroup>
```

### Rating

*Also: star rating.* A control for giving or displaying a score on a small scale.

- **Use when:** collecting quick feedback or showing an average score.
- **Avoid when:** you need nuanced feedback; pair with a text field.
- **Anatomy:** set of symbols (stars), optional value label, optional count of ratings.
- **Variants and states:** read-only vs. interactive, half-steps, sizes; hover preview.
- **Accessibility:** interactive ratings are a radio group ("3 stars" per option); read-only ones have a text equivalent ("4.5 out of 5, 210 reviews").
- **Pitfalls:** hover-only preview; no way to clear a rating.

* **Composition:** a single component that renders a radio group internally (interactive) or text plus icons (read-only).

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `number` | `0` | Current score |
| `onValueChange` | `(value) => void` | — | Called on rate |
| `max` | `number` | `5` | Scale size |
| `allowHalf` | `boolean` | `false` | Half steps |
| `readOnly` | `boolean` | `false` | Display mode |
| `count` | `number` | — | Number of ratings (read-only) |
| `label` | `string` | required | Accessible name |
| `getLabel` | `(n) => string` | `"n stars"` | Per-option text |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Symbol size |

```tsx
<Rating label="Rate this article" value={score} onValueChange={setScore} />
<Rating readOnly value={4.5} count={210} />
```

## S

### Search

*Also: search field, search bar.* An input for finding content by keyword, usually with suggestions and a results view.

- **Use when:** a product has more content than navigation can expose.
- **Avoid when:** n/a, but scope it: say what it searches ("Search orders").
- **Anatomy:** search landmark, input with search icon, clear button, optional scope selector, suggestions popup (Combobox), submit.
- **Variants and states:** global vs. local filter, instant vs. on submit, expanding icon-to-field; empty, typing, loading, results, no results.
- **Accessibility:** wrap in a `search` landmark (or `role="search"`); `input type="search"` with a label (visually hidden is fine); suggestions follow the Combobox pattern; announce result counts.
- **Pitfalls:** searching only titles; no-results states that offer no help; losing the query when people go back.

* **Composition:** SearchField (Input + icon + clear) is the base; SearchCombobox adds the suggestion popup using the Combobox props; results pages own the rest.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Accessible name (visually hidden by default) |
| `value` / `defaultValue` | `string` | `""` | Query |
| `onValueChange` | `(value) => void` | — | Called while typing |
| `onSubmit` | `(value) => void` | — | Called on Enter |
| `debounceMs` | `number` | `0` | Delay before `onValueChange` |
| `placeholder` | `string` | `"Search"` | Hint, not a label |
| `scope` / `onScopeChange` | `string` | — | Optional scope selector |
| `loading` | `boolean` | `false` | Spinner in the field |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Height |

```tsx
<SearchField label="Search orders" value={q} onValueChange={setQ} onSubmit={runSearch} debounceMs={250} />
```

### Segmented control

*Also: toggle group, button toggle group, tab switcher.* A compact row of connected buttons where one option is selected.

- **Use when:** switching between 2–5 views or modes of the same content (Day / Week / Month, List / Grid).
- **Avoid when:** options are form answers (Radio group) or separate content areas (Tabs).
- **Anatomy:** track, segments (label and/or icon), selected indicator.
- **Variants and states:** single vs. multi-select, icon-only, full width; segment hover, selected, focus, disabled.
- **Accessibility:** implement as a radio group (single select) or toggle buttons with `aria-pressed` (multi). Icon-only segments need labels.
- **Pitfalls:** labels that truncate; using it for navigation that changes the URL (that's Tabs).

* **Composition:** SegmentedControl → Item. Same shape as RadioGroup, styled as connected buttons.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Group name |
| `value` / `defaultValue` | `string` or `string[]` | — | Selected segment(s) |
| `onValueChange` | `(value) => void` | — | Called on change |
| `selectionMode` | `"single"`, `"multiple"` | `"single"` | Radio or toggle behavior |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Height |
| `fullWidth` | `boolean` | `false` | Segments share the width |
| Item `value` | `string` | required | Segment id |
| Item `icon` / `label` | `ReactNode` / `string` | — | `label` required when icon-only |
| Item `disabled` | `boolean` | `false` | Not selectable |

```tsx
<SegmentedControl label="View" value={view} onValueChange={setView}>
  <SegmentedControl.Item value="list" icon={<ListIcon />} label="List" />
  <SegmentedControl.Item value="grid" icon={<GridIcon />} label="Grid" />
</SegmentedControl>
```

### Select

*Also: dropdown, picker, select menu.* A control that opens a list of options so people can choose one (sometimes several).

- **Use when:** choosing one from about 5–15 known options where space is tight.
- **Avoid when:** there are fewer than \~5 options (Radio group shows them all), or very many (Combobox lets people type).
- **Anatomy:** label, trigger showing the value, chevron, Listbox popup, options, optional groups.
- **Variants and states:** native vs. custom, sizes, with icons in options; placeholder, open, selected, disabled, invalid.
- **Accessibility:** the native `select` is the most robust, especially on mobile. Custom selects follow the select-only combobox pattern: Space/Enter/Down opens, type-ahead jumps, Escape closes. See [APG Select-only combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
- **Pitfalls:** custom selects with no type-ahead; long lists without search; a placeholder like "Select…" that can be submitted as a value.

* **Composition:** Root → Label + Trigger (Value + Icon) + Popup → Group → Item (ItemText, ItemIndicator). The popup reuses the Listbox parts.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `string` or `string[]` | `null` | Selection |
| `onValueChange` | `(value) => void` | — | Called on selection |
| `items` | `{ value, label }[]` | — | Data-driven options (or compose Items) |
| `multiple` | `boolean` | `false` | Multi-select |
| `name` | `string` | — | Native form submission |
| `open` / `onOpenChange` | `boolean` | — | Popup state |
| `required` / `disabled` / `invalid` | `boolean` | `false` | States |
| Value `placeholder` | `string` | — | Shown when empty; never submitted |
| Item `value` / `disabled` | `string` / `boolean` | — | Option |

```tsx
<Select.Root value={role} onValueChange={setRole} name="role">
  <Select.Label>Role</Select.Label>
  <Select.Trigger><Select.Value placeholder="Choose a role" /></Select.Trigger>
  <Select.Popup>
    <Select.Item value="viewer">Viewer</Select.Item>
    <Select.Item value="editor">Editor</Select.Item>
    <Select.Item value="admin">Admin</Select.Item>
  </Select.Popup>
</Select.Root>
```

### Skeleton

*Also: skeleton loader, placeholder, shimmer.* Gray shapes that mimic the layout of content while it loads.

- **Use when:** the layout is known and loading takes more than a moment (lists, cards, profiles).
- **Avoid when:** loading is near-instant (it flashes) or the layout is unknown (Spinner).
- **Anatomy:** shapes for text lines, avatars, media; optional shimmer animation.
- **Variants and states:** text, circle, rectangle; static vs. animated.
- **Accessibility:** hide skeleton shapes from assistive tech and mark the region `aria-busy="true"`, with a visually hidden "Loading" message. Respect reduced motion (no shimmer).
- **Pitfalls:** skeletons that don't match the real layout, causing a layout jump; skeletons that never resolve on error.

* **Composition:** primitives compose into component-shaped skeletons. The best systems ship skeleton variants of their own components (`<List.Skeleton rows={5} />`) so the shape always matches.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `shape` | `"text"`, `"circle"`, `"rect"` | `"text"` | Placeholder shape |
| `width` / `height` | `number` or `string` | fills | Dimensions |
| `lines` | `number` | `1` | Text lines (last one shorter) |
| `animated` | `boolean` | `true` | Shimmer; off under reduced motion |
| Root `loading` | `boolean` | required | Swap skeleton for content |
| Root `label` | `string` | `"Loading"` | Announced while busy |

```tsx
<Skeleton.Root loading={isLoading} label="Loading team">
  <List.Skeleton rows={5} withAvatar />
  <TeamList members={members} />
</Skeleton.Root>
```

### Slider

*Also: range, range slider.* A control for choosing a value (or a range) by dragging along a track.

- **Use when:** the exact value matters less than the relative position, and immediate feedback helps (volume, brightness, price range filters).
- **Avoid when:** precise values are needed; pair with a number input or use one instead.
- **Anatomy:** track, filled range, thumb (one or two), optional ticks and labels, value tooltip or input.
- **Variants and states:** single vs. range, continuous vs. stepped, horizontal vs. vertical; thumb hover, focus, dragging, disabled.
- **Accessibility:** `role="slider"` (or native `input type="range"`) with min, max, value and `aria-valuetext` for readable values ("$40"). Arrow keys step; Page Up/Down jump; Home/End go to the ends. See [APG Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/).
- **Pitfalls:** thumbs too small to grab on touch; range thumbs that can cross; no typed entry.

* **Composition:** Root → Track → Range + Thumb (one per value), plus optional Marks and Output.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Accessible name |
| `value` / `defaultValue` | `number` or `number[]` | `min` | Array for ranges |
| `onValueChange` | `(value) => void` | — | Called while dragging |
| `onValueCommit` | `(value) => void` | — | Called on release |
| `min` / `max` / `step` | `number` | `0` / `100` / `1` | Scale |
| `largeStep` | `number` | `10` | Page Up/Down increment |
| `minStepsBetweenThumbs` | `number` | `0` | Keeps range thumbs apart |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Direction |
| `getAriaValueText` | `(value) => string` | — | e.g. "$40" |
| `marks` | `{ value, label }[]` | — | Tick labels |
| Thumb `label` | `string` | — | Name per thumb in ranges |

```tsx
<Slider.Root label="Price" value={range} onValueChange={setRange} onValueCommit={applyFilter} min={0} max={500} step={10}
  getAriaValueText={(v) => `$${v}`}>
  <Slider.Track><Slider.Range /></Slider.Track>
  <Slider.Thumb label="Minimum price" /><Slider.Thumb label="Maximum price" />
  <Slider.Output />
</Slider.Root>
```

### Spinner

*Also: loader, loading indicator, activity indicator.* An animated indicator that something is happening, with unknown duration.

- **Use when:** waiting a short, unknown time (under \~10 seconds) for something to load or finish.
- **Avoid when:** progress is measurable (Progress) or the layout is known (Skeleton).
- **Anatomy:** animated ring or dots, optional label.
- **Variants and states:** sizes; inline (inside a button) vs. page-level.
- **Accessibility:** provide a text label ("Loading results"), announce it once with `role="status"` instead of on a loop; respect reduced motion with a slower or static fallback.
- **Pitfalls:** full-page spinners for partial updates; spinners that appear for 50ms and flash (delay showing them by \~300ms).

* **Composition:** leaf; Button uses it internally for `loading`, so teams rarely place it by hand inside controls.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `"Loading"` | Announced text |
| `size` | `"xs"`, `"sm"`, `"md"`, `"lg"` | `"md"` | Diameter |
| `delayMs` | `number` | `300` | Wait before showing, avoids flashes |
| `tone` | `"default"`, `"inverse"` | `"default"` | Inverse for dark surfaces |

```tsx
<Spinner label="Loading results" delayMs={300} />
```

### Stepper

*Also: steps, progress steps, wizard steps.* An indicator of progress through a multi-step process, sometimes navigable.

- **Use when:** a task is split into a few ordered steps (checkout, onboarding, setup).
- **Avoid when:** the steps aren't truly sequential, or there are more than \~6 steps (group them).
- **Anatomy:** steps with number or icon, labels, connectors, current, completed and upcoming states, optional descriptions.
- **Variants and states:** horizontal vs. vertical, linear (must go in order) vs. non-linear; step states: upcoming, current, complete, error, disabled.
- **Accessibility:** an ordered list; the current step has `aria-current="step"`; completed and error states have text, not just icons. Steps that are links behave as links.
- **Pitfalls:** step labels that are numbers only; letting people jump ahead to steps that depend on earlier ones.

* **Composition:** Stepper → Step (Indicator, Title, Description) with Separators between. The form content lives outside; the stepper only shows and controls position.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `currentStep` / `defaultStep` | `number` | `0` | Active step index |
| `onStepChange` | `(index) => void` | — | Makes steps navigable |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Layout |
| `linear` | `boolean` | `true` | Prevent jumping ahead |
| Step `title` | `string` | required | Step name |
| Step `description` | `ReactNode` | — | Secondary text |
| Step `status` | `"upcoming"`, `"current"`, `"complete"`, `"error"` | derived | Override computed status |
| Step `href` | `string` | — | Step as a link |

```tsx
<Stepper currentStep={step} onStepChange={setStep} linear>
  <Stepper.Step title="Account" status="complete" />
  <Stepper.Step title="Billing" status="current" />
  <Stepper.Step title="Review" />
</Stepper>
```

### Switch

*Also: toggle, toggle switch.* A control that turns a setting on or off, taking effect immediately.

- **Use when:** a binary setting applies instantly, like a light switch (enable notifications, dark mode).
- **Avoid when:** the change only applies after Save (use a Checkbox), or the options aren't clearly on/off.
- **Anatomy:** track, thumb, label, optional on/off text or icons, optional description.
- **Variants and states:** sizes; on, off, focus, disabled, loading (while the setting saves).
- **Accessibility:** `role="switch"` with `aria-checked`, or a native checkbox with switch styling. The label describes the setting, not the state ("Notifications", not "On"). Space toggles. See [APG Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).
- **Pitfalls:** switches inside forms that need Save; color as the only on/off cue; labels that change with state.

* **Composition:** Root → Thumb, with label as a prop; settings pages compose switches in a List.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `checked` / `defaultChecked` | `boolean` | `false` | State |
| `onCheckedChange` | `(checked) => void` | — | Called on toggle |
| `label` | `ReactNode` | required | Names the setting, not the state |
| `description` | `ReactNode` | — | Helper text |
| `size` | `"sm"`, `"md"` | `"md"` | Track size |
| `loading` | `boolean` | `false` | While an async save runs |
| `disabled` | `boolean` | `false` | Not interactive |
| `name` / `value` | `string` | — | Form submission |

```tsx
<Switch label="Email notifications" description="Weekly summary and mentions"
  checked={emailOn} onCheckedChange={saveEmailSetting} loading={saving} />
```

## T

### Table

*Also: simple table.* Rows and columns of read-only information. (For sorting, selection and actions, see Data table.)

- **Use when:** content is tabular: specs, pricing, schedules, comparisons.
- **Avoid when:** it's for layout, or there's only one meaningful column (List).
- **Anatomy:** caption, header row, body rows, cells, optional footer (totals).
- **Variants and states:** striped, bordered, compact; responsive approaches (horizontal scroll, stacked rows on mobile).
- **Accessibility:** native `table`, `caption`, `th` with `scope`. Complex headers use `headers`/`id`. Scrollable tables need a focusable, labeled scroll container. See [APG Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/).
- **Pitfalls:** div-based tables; numbers not right-aligned; missing captions, so screen reader users don't know what the table is about.

* **Composition:** a thin styled wrapper over native elements: Table → Caption, Head → Row → HeaderCell, Body → Row → Cell, Foot. Data table builds on these same parts.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `caption` | `ReactNode` | required | Table name (can be visually hidden) |
| `density` | `"compact"`, `"default"`, `"comfortable"` | `"default"` | Row height |
| `striped` | `boolean` | `false` | Alternate row shading |
| `stickyHeader` | `boolean` | `false` | Header stays visible |
| `scrollLabel` | `string` | caption | Names the focusable scroll region |
| Cell `align` | `"start"`, `"center"`, `"end"` | `"start"` | Alignment |
| Cell `numeric` | `boolean` | `false` | Right-aligned, tabular figures |
| HeaderCell `scope` | `"col"`, `"row"` | `"col"` | Header association |

```tsx
<Table caption="Plan comparison">
  <Table.Head><Table.Row><Table.HeaderCell>Plan</Table.HeaderCell><Table.HeaderCell numeric>Price</Table.HeaderCell></Table.Row></Table.Head>
  <Table.Body>
    <Table.Row><Table.HeaderCell scope="row">Team</Table.HeaderCell><Table.Cell numeric>$12</Table.Cell></Table.Row>
  </Table.Body>
</Table>
```

### Tabs

*Also: tab bar, tab strip.* A set of labels that switch between panels of related content in the same place.

- **Use when:** content splits into a few peer sections people don't need to see at once (Overview / Activity / Settings).
- **Avoid when:** people need to compare sections, the steps are sequential (Stepper), or the tabs are really site navigation (use a nav with links).
- **Anatomy:** tab list, tabs (label, optional icon or count), selected indicator, panels.
- **Variants and states:** line vs. contained/pill, horizontal vs. vertical, scrollable with overflow; tab hover, selected, focus, disabled.
- **Accessibility:** `tablist` with `tab` elements (`aria-selected`, `aria-controls`) and `tabpanel`s. Tab moves into the list once; Left/Right move between tabs; activation is automatic or manual (Enter). See [APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).
- **Pitfalls:** tabs inside tabs; too many tabs wrapping onto two lines; using the tabs role for links that change the URL.

* **Composition:** Root → List → Tab (+ Indicator) and a Panel per value. For route-based tabs, use a nav of links styled as tabs instead.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| Root `value` / `defaultValue` | `string` | first tab | Selected tab |
| Root `onValueChange` | `(value) => void` | — | Called on change |
| Root `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Arrow-key axis and layout |
| Root `activationMode` | `"automatic"`, `"manual"` | `"automatic"` | Manual when panels are expensive |
| Root `variant` | `"line"`, `"contained"` | `"line"` | Visual style |
| List `label` | `string` | — | Names the tab list |
| Tab `value` | `string` | required | Tab id |
| Tab `icon` / `count` | `ReactNode` / `number` | — | Adornments |
| Tab `disabled` | `boolean` | `false` | Not selectable |
| Panel `keepMounted` | `boolean` | `false` | Keep hidden panels in the DOM |

```tsx
<Tabs.Root defaultValue="overview">
  <Tabs.List label="Project sections">
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="activity" count={12}>Activity</Tabs.Tab>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Panel value="overview">…</Tabs.Panel>
  <Tabs.Panel value="activity">…</Tabs.Panel>
</Tabs.Root>
```

### Tag

*Also: label, lozenge, pill.* A small, read-only label that categorizes or describes an item.

- **Use when:** showing categories, statuses or attributes on items ("Draft", "Design", "Overdue").
- **Avoid when:** it's removable or selectable (Chip) or a count (Badge).
- **Anatomy:** container, label, optional icon or color dot.
- **Variants and states:** tones (neutral, info, success, warning, danger, plus decorative category colors), subtle vs. solid, sizes.
- **Accessibility:** status tags need text that stands alone (not just a color); category colors must meet contrast for their text.
- **Pitfalls:** dozens of category colors with no meaning; tags that look clickable but aren't.

* **Composition:** leaf; a TagGroup only handles wrapping and "+3 more" truncation. No click or remove props: that's Chip.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"neutral"`, `"info"`, `"success"`, `"warning"`, `"danger"` | `"neutral"` | Status meaning |
| `color` | named palette color | — | Category color (no status meaning) |
| `variant` | `"subtle"`, `"solid"` | `"subtle"` | Visual weight |
| `size` | `"sm"`, `"md"` | `"md"` | Height |
| `icon` | `ReactNode` | — | Leading icon or dot |
| Group `max` | `number` | — | Tags shown before "+N more" |

```tsx
<Tag tone="warning" icon={<ClockIcon />}>Overdue</Tag>
<Tag color="plum">Design</Tag>
```

### Textarea

*Also: multi-line text field.* A field for entering longer, multi-line text.

- **Use when:** collecting comments, descriptions or messages.
- **Avoid when:** the input is short (Input) or needs formatting (a rich text editor).
- **Anatomy:** label, field, helper text, character count, error message, resize handle.
- **Variants and states:** fixed rows, auto-growing, resizable; default, focus, filled, disabled, read-only, invalid, at character limit.
- **Accessibility:** a native `textarea` with a label; character limits announced politely (not on every keystroke) and enforced with a message, not by silently cutting text.
- **Pitfalls:** tiny initial height; hard limits that drop pasted text without telling the user.

* **Composition:** inside Field like Input; the character count is a Field part so it's linked to the control for screen readers.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `value` / `defaultValue` | `string` | — | Text |
| `onValueChange` | `(value) => void` | — | Called on input |
| `rows` | `number` | `3` | Initial height |
| `autoResize` | `boolean` | `false` | Grows with content |
| `minRows` / `maxRows` | `number` | — | Auto-resize bounds |
| `resize` | `"none"`, `"vertical"` | `"vertical"` | Manual resize handle |
| `maxLength` | `number` | — | Character limit |
| `readOnly` / `disabled` / `invalid` | `boolean` | `false` | States |
| Field.Count `threshold` | `number` | — | Only show the count near the limit |

```tsx
<Field.Root>
  <Field.Label>Description</Field.Label>
  <Field.Control render={<Textarea autoResize minRows={3} maxRows={10} maxLength={500} />} />
  <Field.Count />
</Field.Root>
```

### Toast

*Also: snackbar, notification (transient).* A brief message that appears temporarily to confirm an action or report a background event.

- **Use when:** confirming a completed action ("Message sent") or offering a quick undo.
- **Avoid when:** the message is critical, requires a decision, or contains information people must read (use an Alert or Dialog). Never put the only path to something in a toast.
- **Anatomy:** container, icon, message, optional action (Undo), close button, optional progress.
- **Variants and states:** success, info, warning, error; stacked queue; position (usually bottom or top corner).
- **Accessibility:** announced via a polite live region (`role="status"`). Don't auto-dismiss toasts that contain actions, or give people enough time (pause on hover and focus) and a keyboard shortcut to reach them. Moving focus to a toast is usually wrong.
- **Pitfalls:** errors in toasts that disappear before they're read; several toasts stacking at once; toasts covering the mobile nav.

* **Composition:** imperative, because toasts are triggered by events, not rendered in place. One Toaster at the app root renders the Viewport (the live region); each toast is Root → Title, Description, Action, Close.

**Props: `toast(options)`**

| Option | Type / values | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | required | Main message |
| `description` | `ReactNode` | — | Extra detail |
| `tone` | `"neutral"`, `"success"`, `"warning"`, `"danger"` | `"neutral"` | Meaning |
| `action` | `{ label, onClick }` | — | One action, e.g. Undo |
| `duration` | `number` (ms) or `Infinity` | `5000` | Paused on hover and focus |
| `id` | `string` | generated | Update or dedupe a toast |

**Props: `<Toaster>`**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `placement` | `"top-start"` … `"bottom-end"` | `"bottom-end"` | Screen corner |
| `max` | `number` | `3` | Visible at once; the rest queue |
| `hotkey` | `string[]` | `["F8"]` | Jumps focus to the toasts |

```tsx
// once, at the app root
<Toaster placement="bottom-end" max={3} hotkey={["F8"]} />

// anywhere
toast({
  title: "Message archived",
  action: { label: "Undo", onClick: unarchive },
});
```

### Toggle button

*Also: pressed button, toggle.* A button that stays pressed or unpressed, switching a mode or formatting.

- **Use when:** turning a mode on or off in a toolbar (Bold, Mute, Show grid).
- **Avoid when:** it's a setting (Switch) or one option of several (Segmented control).
- **Anatomy:** button, icon and/or label, pressed indicator.
- **Variants and states:** unpressed, pressed, hover, focus, disabled.
- **Accessibility:** `aria-pressed="true|false"`; the label stays the same in both states ("Bold"). Changing the label instead ("Mute"/"Unmute") also works, but never do both. See [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/).
- **Pitfalls:** pressed state indicated only by a subtle color shift.

* **Composition:** a Button with pressed state; ToggleGroup (in Toolbar) and Segmented control build on it.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `pressed` / `defaultPressed` | `boolean` | `false` | State |
| `onPressedChange` | `(pressed) => void` | — | Called on toggle |
| `label` | `string` | required | Stays the same in both states |
| `icon` | `ReactNode` | — | Icon |
| `variant` | `"ghost"`, `"secondary"` | `"ghost"` | Emphasis |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | Size |
| `disabled` | `boolean` | `false` | Not interactive |

```tsx
<ToggleButton icon={<BoldIcon />} label="Bold" pressed={isBold} onPressedChange={toggleBold} />
```

### Toolbar

*Also: action bar, command bar.* A container that groups controls acting on content, usually icon buttons, toggles and menus.

- **Use when:** an editor or view has many related actions (text formatting, canvas tools, table bulk actions).
- **Avoid when:** there are only one or two actions.
- **Anatomy:** container, groups of controls, separators, overflow menu.
- **Variants and states:** horizontal vs. vertical, floating vs. fixed, responsive overflow.
- **Accessibility:** `role="toolbar"` with a label. Tab enters and leaves it as one stop; arrow keys move between controls (roving tabindex). See [APG Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).
- **Pitfalls:** every button a separate tab stop; overflowing actions hidden with no menu.

* **Composition:** Toolbar → Button, ToggleGroup, Separator, Link and Dropdown menu triggers. The toolbar manages roving focus across whatever controls it contains.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Accessible name |
| `orientation` | `"horizontal"`, `"vertical"` | `"horizontal"` | Arrow-key axis |
| `loop` | `boolean` | `true` | Focus wraps at the ends |
| `overflow` | `"menu"`, `"scroll"`, `"wrap"` | `"menu"` | What happens when space runs out |
| ToggleGroup `selectionMode` | `"single"`, `"multiple"` | `"single"` | Toggle behavior |
| ToggleGroup `value` / `onValueChange` | `string` or `string[]` | — | Pressed items |

```tsx
<Toolbar label="Text formatting">
  <Toolbar.ToggleGroup selectionMode="multiple" value={marks} onValueChange={setMarks}>
    <Toolbar.Toggle value="bold" icon={<BoldIcon />} label="Bold" />
    <Toolbar.Toggle value="italic" icon={<ItalicIcon />} label="Italic" />
  </Toolbar.ToggleGroup>
  <Toolbar.Separator />
  <Toolbar.Button icon={<LinkIcon />} label="Insert link" onClick={insertLink} />
</Toolbar>
```

### Tooltip

*Also: hint, info tip.* A small label that appears on hover or focus to describe an element.

- **Use when:** naming icon-only buttons or giving a brief supplementary hint.
- **Avoid when:** the content is essential, long, or interactive (use a Popover or inline text). Touch devices don't hover.
- **Anatomy:** trigger, bubble, optional arrow, short text.
- **Variants and states:** placement; delay before showing (\~300–700ms) and instant switching between neighbors.
- **Accessibility:** shown on both hover and keyboard focus, dismissible with Escape, and stays open while the pointer moves onto it (WCAG 1.4.13). The text is linked with `aria-describedby` (or is the accessible name for icon buttons). No interactive content inside. See [APG Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).
- **Pitfalls:** tooltips on disabled buttons (they often can't receive focus); tooltips repeating the visible label; essential info only in a tooltip.

* **Composition:** Root → Trigger + Content (+ Arrow), or a single `<Tooltip content="…">` wrapper for the common case. Icon button composes it internally.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | required | Short, non-interactive text |
| `side` | `"top"`, `"bottom"`, `"left"`, `"right"` | `"top"` | Placement |
| `align` | `"start"`, `"center"`, `"end"` | `"center"` | Alignment |
| `delayMs` | `number` | `500` | Hover delay before showing |
| `open` / `onOpenChange` | `boolean` | — | Controlled state |
| `disabled` | `boolean` | `false` | Turn off the tooltip |
| Provider `skipDelayMs` | `number` | `300` | Instant switching between neighbors |

```tsx
<Tooltip content="Copy link" side="top">
  <IconButton icon={<LinkIcon />} label="Copy link" showTooltip={false} />
</Tooltip>
```

### Tree view

*Also: tree, nested list, file tree.* A hierarchical list where items can expand to show children.

- **Use when:** navigating or selecting within deep hierarchies (file systems, org charts, nested categories, layers panels).
- **Avoid when:** the hierarchy is only one or two levels (use grouped lists or Accordion).
- **Anatomy:** nodes with expand chevron, icon, label, optional actions; indentation guides; selection.
- **Variants and states:** single vs. multi-select, with checkboxes (with indeterminate parents), lazy-loaded children; expanded, collapsed, selected, focused, loading.
- **Accessibility:** `tree` and `treeitem` with `aria-expanded`, `aria-level` and selection states. Up/Down move, Right expands or goes to first child, Left collapses or goes to parent, type-ahead jumps. See [APG Tree view](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).
- **Pitfalls:** using tree semantics for plain nested navigation links (a list of disclosures is simpler); indentation too small to see the levels.

* **Composition:** Tree → Item → Chevron, Icon, Label, Actions, plus nested Items. A render function per item keeps data and presentation separate.

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | required | Accessible name |
| `items` | `{ id, children? }[]` | — | Nested data |
| `expanded` / `defaultExpanded` | `Set<string>` | empty | Open nodes |
| `onExpandedChange` | `(ids) => void` | — | Called on expand or collapse |
| `selectionMode` | `"none"`, `"single"`, `"multiple"` | `"single"` | Selection |
| `selected` / `onSelectedChange` | `Set<string>` | empty | Selected nodes |
| `loadChildren` | `(id) => Promise` | — | Lazy loading |
| `virtualized` | `boolean` | `false` | For very large trees |
| Item `id` / `textValue` | `string` | required | Node id and type-ahead text |

```tsx
<Tree label="Files" items={fileTree} expanded={open} onExpandedChange={setOpen} selectionMode="single">
  {(node) => (
    <Tree.Item id={node.id} textValue={node.name}>
      <Tree.Chevron /><FileIcon type={node.type} /><Tree.Label>{node.name}</Tree.Label>
    </Tree.Item>
  )}
</Tree>
```

## V

### Visually hidden

*Also: screen-reader-only, sr-only.* A utility that hides text visually while keeping it available to screen readers.

- **Use when:** adding context that sighted users get from layout: labels for icon buttons, "(opens in new tab)", table captions, skip links (shown on focus).
- **Avoid when:** the information would help everyone; then show it.
- **Anatomy:** a wrapper with the standard clip pattern (1px, clipped, absolutely positioned), not `display: none`.
- **Variants and states:** always hidden vs. visible on focus (for skip links).
- **Accessibility:** this is the accessibility tool; `display: none` and `visibility: hidden` hide content from screen readers too.
- **Pitfalls:** overusing it to stuff extra words into labels; hidden text that contradicts the visible text.

* **Composition:** leaf utility used inside other components (Icon button labels, Link's "opens in new tab", Table captions).

**Props**

| Prop | Type / values | Default | Description |
| --- | --- | --- | --- |
| `focusable` | `boolean` | `false` | Becomes visible on focus (skip links) |
| `as` | `"span"`, `"div"`, `"h2"` … | `"span"` | Element to render |

```tsx
<a href="#main"><VisuallyHidden focusable>Skip to main content</VisuallyHidden></a>
<span>Revenue <VisuallyHidden>(in thousands of dollars)</VisuallyHidden></span>
```

---

**Commonly confused pairs**

| These | The difference |
| --- | --- |
| Button vs. Link | Button does something; Link goes somewhere |
| Checkbox vs. Switch | Checkbox applies on submit; Switch applies immediately |
| Select vs. Combobox | Select picks from a list; Combobox lets you type to filter |
| Dropdown menu vs. Select | Menu runs actions; Select sets a value |
| Tooltip vs. Popover | Tooltip is a short, non-interactive label; Popover holds content and controls |
| Dialog vs. Drawer | Dialog interrupts; Drawer keeps page context |
| Alert vs. Banner vs. Toast | Alert is in context; Banner is app-wide; Toast is temporary feedback |
| Badge vs. Tag vs. Chip | Badge is a count or dot; Tag is a read-only label; Chip is interactive |
| Tabs vs. Segmented control | Tabs switch content areas; Segmented control switches the view of the same content |
| Progress vs. Spinner vs. Skeleton | Measurable vs. unknown duration vs. known layout |
| Accordion vs. Disclosure | Accordion is a group of disclosures |

---

# Component Composition

Composition lets a design system stay small while products stay flexible. Instead of one component that does everything through props, the system offers parts that fit together. This tab covers designing composable components in code and in Figma, the API patterns behind them, and the traps to avoid. Examples use React; the ideas carry to other frameworks.

## 1. Configuration vs composition

*[Diagram: configuration to composition · 5 API styles]*

Configuration means one component controlled by props. It's easy to use, easy to lint and hard to misuse, but every new need becomes a new prop. Composition means small parts the consumer assembles. It's flexible without changes to the system, but there's more to learn and more ways to put things together wrong. Good systems choose deliberately, per component. Simple leaves stay configured; anything with regions or parts becomes composable, with a convenience wrapper for the common case if needed.

A configured component should become composable when its prop list keeps growing with layout props (`imagePosition`, `footerAlign`, `showDivider`), or when teams detach and rebuild it to rearrange parts.

## 2. The composition API patterns

Six patterns cover almost every composable component. Most systems use several: props for simple leaves, compound components for anything with parts, and an element-control pattern (`render` or `asChild`) so parts can become links or custom components.

| Pattern | What it looks like | Strengths | Costs | Use for |
| --- | --- | --- | --- | --- |
| **Props (configuration)** | `<Alert tone="warning" title="…" />` | Simple, hard to misuse, easy to document and lint | Grows a prop for every request; rigid layout | Leaf components: Button, Badge, Tag, Spinner |
| **Compound components** | `<Tabs.Root><Tabs.List><Tabs.Tab/>…` | Consumers control structure and order; each part has a small API | More to learn; parts can be misassembled | Anything with parts: Dialog, Tabs, Menu, Select, Accordion |
| **Slots** | `<Card media={…} actions={…}>` or `<Card.Media/>` | Flexible content in fixed positions | Layout stays fixed; slot content can break the design | Containers with known regions: Card, List item, Field, Page header |
| **Render props / children as function** | `<Calendar.Grid>{(date) => <Cell/>}</Calendar.Grid>` | Consumer renders each item with access to internal state | Harder to read; less common now | Repeated items needing state: grid cells, list rows, virtualization |
| **Element control (`asChild`, `render`)** | `<Dialog.Trigger render={<Button/>}/>` | Swap the element without wrapper divs; keeps behavior and accessibility | Child must forward refs and spread props | Triggers, links styled as buttons, router integration |
| **Headless hooks** | `const { getInputProps } = useCombobox()` | Total control of markup | Consumers own markup, styling and a11y wiring | Rare custom builds; internal implementation of the system itself |

Start with props. Switch to compound parts as soon as consumers need to reorder, omit or wrap parts, or once a component passes about ten props. Expose headless hooks only if you're prepared to support people building their own markup.

## 3. Compound components in depth

A compound component is a set of parts that share state through context. The root owns state; each part reads what it needs and renders one piece of the UI.

### Anatomy of a compound API

```tsx
<Tabs.Root value={tab} onValueChange={setTab}>   {/* owns state, provides context */}
  <Tabs.List label="Project sections">            {/* groups triggers, owns keyboard nav */}
    <Tabs.Tab value="overview">Overview</Tabs.Tab>  {/* reads + sets state */}
    <Tabs.Tab value="activity">Activity</Tabs.Tab>
    <Tabs.Indicator />                             {/* optional visual part */}
  </Tabs.List>
  <Tabs.Panel value="overview">…</Tabs.Panel>      {/* shows when selected */}
  <Tabs.Panel value="activity">…</Tabs.Panel>
</Tabs.Root>
```

### Naming parts consistently

Use the same part names across the library so learning one component teaches the rest:

| Part | Role | Appears in |
| --- | --- | --- |
| `Root` | Owns state and context; usually renders no DOM or a wrapper | Every compound component |
| `Trigger` | Opens, toggles or activates | Dialog, Popover, Menu, Select, Tooltip, Accordion |
| `Content` / `Popup` / `Panel` | The thing that appears | Dialog, Popover, Menu, Tabs, Accordion |
| `Portal` | Renders content elsewhere in the DOM | Overlays |
| `Title`, `Description` | Accessible name and description | Dialog, Alert, Toast, Card |
| `Item` | A repeated entry | Menu, Select, Accordion, List, Tree |
| `Label`, `Control`, `Error` | Form wiring | Field, Checkbox, Slider |
| `Close`, `Indicator`, `Arrow` | Small functional or visual pieces | Overlays, Tabs, Checkbox |

### Implementation sketch

```tsx
const TabsContext = React.createContext<TabsCtx | null>(null);

function useTabs(part: string) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error(`<Tabs.${part}> must be used inside <Tabs.Root>`);
  return ctx;
}

function Root({ value, defaultValue, onValueChange, children }: RootProps) {
  const [current, setCurrent] = useControllableState({ value, defaultValue, onChange: onValueChange });
  const baseId = React.useId();
  return <TabsContext value={{ current, setCurrent, baseId }}>{children}</TabsContext>;
}

function Tab({ value, children, ...props }: TabProps) {
  const { current, setCurrent, baseId } = useTabs("Tab");
  const selected = current === value;
  return (
    <button role="tab" id={`${baseId}-tab-${value}`} aria-controls={`${baseId}-panel-${value}`}
      aria-selected={selected} data-state={selected ? "active" : "inactive"}
      tabIndex={selected ? 0 : -1} onClick={() => setCurrent(value)} {...props}>
      {children}
    </button>
  );
}

export const Tabs = { Root, List, Tab, Panel, Indicator };
```

### Rules

- **State lives at the Root;** parts never hold their own copy.
- **Fail loudly in development** when a part is used outside its root or a required part (like `Dialog.Title`) is missing.
- **Parts render one element each** and accept native props, `className` and `ref`.
- **Keep parts optional where you can,** with sensible defaults (an Indicator you can omit, a Portal that defaults on).
- **Offer a convenience wrapper** for the 80% case only if it's built from the same parts: `<SimpleTabs items={…} />` that renders `Tabs.Root` and friends.
- **Don't inspect children** (`React.Children.map`, checking `child.type`) to find parts; it breaks with wrappers and fragments. Use context instead.

## 4. Slots in depth

A slot is a named place in a component where the consumer supplies content. Slots keep the layout, spacing and accessibility wiring in the system while letting the content vary.

### Three ways to express slots in React

```tsx
// 1. Props as slots — simplest, clearly named, easy to type
<ListItem start={<Avatar name="Ada" />} title="Ada Lovelace" end={<Tag>Admin</Tag>} />

// 2. Slot parts — compound style, consumers control order of optional regions
<Card>
  <Card.Media src="/cover.jpg" alt="" />
  <Card.Header><Card.Title>Checkout redesign</Card.Title></Card.Header>
  <Card.Footer><Button>Open</Button></Card.Footer>
</Card>

// 3. children as the main slot, plus named props for the rest
<PageHeader title="Orders" actions={<Button variant="primary">New order</Button>}>
  <Breadcrumb>…</Breadcrumb>
</PageHeader>
```

| Use | When |
| --- | --- |
| Props as slots | A fixed layout with 2–4 regions, each a single node (List item, Field adornments) |
| Slot parts | Regions that are optional, repeatable, or need their own props (Card, Dialog, Alert) |
| `children` + named props | One main content region plus a few fixed extras (Page header, Banner) |

### Slot rules

- **Name slots by position or role,** consistently: `start` / `end` (not `left` / `right`, which break in RTL), `title`, `description`, `actions`, `media`.
- **The component owns the spacing** around slots; slot content brings no outer margin.
- **Constrain slot content in docs and types** when it matters: "`actions` takes up to two Buttons" or a typed prop (`actions: ReactElement<ButtonProps>[]`).
- **Mark slots for styling and tests** with `data-slot="actions"` so CSS and tests don't depend on DOM structure.
- **Mirror slots in Figma** with native slots (generally available since mid-2026), and set their preferred instances to what the docs allow (see section 9).

## 5. Polymorphism and element control

Parts often need to render as something else: a menu trigger that's your Button, a breadcrumb link that's your router's Link, a heading at the right level. There are three approaches.

| Approach | Example | Pros | Cons |
| --- | --- | --- | --- |
| `as` prop | `<Text as="h2">` | Familiar, concise | Hard to type generically; props of the target leak in; refs get messy |
| `asChild` (Radix) | `<Dialog.Trigger asChild><Button/></Dialog.Trigger>` | Child stays a normal element; no wrapper | Child must forward ref and spread props; magic merging is implicit |
| `render` (Base UI) | `<Menu.Trigger render={<Button size="sm"/>} />` | Explicit; also accepts `(props, state) => element` | Slightly more verbose |

By default, use `render` (or `asChild`) for interactive parts, and keep a narrow `as` union for layout and text primitives only (`as?: "h1" | "h2" | "h3" | "p" | "span"`).

### What merging must do

When a part renders as your element, the system merges its props into the element's props:

- **Event handlers** are chained (both run), with the consumer's first so it can call `preventDefault()`.
- **`className`** values are concatenated; **`style`** objects are merged.
- **Refs** are merged so both the part and the consumer get the node.
- **ARIA and data attributes** from the part win, because they carry the accessibility contract (`aria-expanded`, `data-state`).

```tsx
// The child must accept and spread props, and accept ref (React 19: ref is a prop)
function Button({ ref, className, ...props }: ButtonProps) {
  return <button ref={ref} className={cn(buttonStyles(), className)} {...props} />;
}

<Popover.Trigger render={<Button variant="secondary" />}>Filters</Popover.Trigger>
// renders: <button class="…" aria-expanded="false" aria-haspopup="dialog" data-state="closed">Filters</button>
```

Rendering an interactive part as a non-interactive element (`render={<div/>}`) silently breaks keyboard access, so warn about it in development.

## 6. Headless hooks and prop getters

Most compound components sit on a hook that holds the logic. Some systems expose these hooks so teams can build fully custom markup with the same behavior.

```tsx
function CustomToggle(props: ToggleOptions) {
  const { pressed, getButtonProps } = useToggle(props);
  return (
    <button {...getButtonProps({ className: "my-toggle", onClick: track })}>
      {pressed ? "On" : "Off"}
    </button>
  );
}
```

- **Prop getters** (`getButtonProps(userProps)`) return the merged ARIA attributes, handlers and ids, so the consumer can't forget them.
- **Expose hooks sparingly.** Every hook is a public API you must keep stable, and the consumers who use them take on their own styling and accessibility testing.
- **Use them internally** even if you don't expose them: one hook per behavior (`useDisclosure`, `useListNavigation`, `useControllableState`) keeps parts thin and consistent.
- **Prefer adopting proven hooks** (React Aria's hooks, Base UI's internals) over writing your own for complex widgets.

## 7. Layout composition

Components shouldn't position themselves. The space *between* components belongs to the parent that arranges them, which is why most systems ship a few layout primitives.

| Primitive | Does | Key props |
| --- | --- | --- |
| `Stack` | Vertical flow with consistent gaps | `gap` (space token), `align` |
| `Inline` / `Cluster` | Horizontal flow that wraps | `gap`, `align`, `justify`, `wrap` |
| `Grid` | Columns, responsive | `columns` (number or per breakpoint), `gap`, `minItemWidth` |
| `Box` | One element with token-based padding, background, radius | `padding`, `surface`, `radius`, `as` |
| `Container` | Max width and side gutters | `size` |
| `Divider` | Separation between stacked items | `inset` |

```tsx
<Container size="md">
  <Stack gap="6">
    <PageHeader title="Billing" actions={<Button>Download invoices</Button>} />
    <Grid columns={{ base: 1, md: 2 }} gap="4">
      <PlanCard />
      <PaymentMethodCard />
    </Grid>
  </Stack>
</Container>
```

### Rules

- **No outer margins on components.** A Button never has `margin-top`; the Stack around it sets the gap.
- **Gaps come from space tokens only,** passed as token names (`gap="4"`), not pixels.
- **Inner padding belongs to the component;** outer spacing belongs to the layout.
- **Prefer CSS `gap`** (flex and grid) over margins between siblings.
- **Mirror it in Figma:** auto layout frames with gap and padding bound to spacing variables are the Figma equivalent of Stack and Inline.
- **Don't over-abstract:** if teams already use Tailwind or CSS grid well, a couple of primitives (Stack, Inline) may be all you need.

## 8. From parts to patterns

*[Diagram: a pattern decomposed · settings dialog]*

Composition stacks up through the layers: tokens feed primitives, primitives feed components, components compose into patterns, and patterns into pages. A pattern like this settings dialog is a recipe, not a new component. It's documented with code and a Figma template and should introduce no new styles. If a pattern needs a style the parts can't produce, that's a missing prop or slot on a part, not a reason to add CSS to the pattern.

```tsx
export function NotificationSettingsDialog({ settings, onToggle, ...props }: Props) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content size="md">
        <Dialog.Title>Notifications</Dialog.Title>
        <Dialog.Description>Choose what we email you about.</Dialog.Description>
        <Dialog.Body>
          <Stack gap="4">
            {settings.map((s) => (
              <List.Item key={s.id}>
                <List.Content><List.Title id={s.id}>{s.label}</List.Title></List.Content>
                <List.End><Switch aria-labelledby={s.id} checked={s.on} onCheckedChange={(on) => onToggle(s.id, on)} /></List.End>
              </List.Item>
            ))}
          </Stack>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close render={<Button variant="secondary" />}>Cancel</Dialog.Close>
          <Button variant="primary">Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

## 9. Composition in Figma

Figma has its own composition tools, and they should line up with code: the same parts, the same names and the same places where content can change.

| Code concept | Figma equivalent | Notes |
| --- | --- | --- |
| Compound parts (`Dialog.Title`, `Dialog.Footer`) | Nested instances of base components inside the main component | Name layers with the part names so the MCP server and Code Connect see them |
| Slot | Native slot property (Convert to slot) | Set preferred instances to what docs allow; min/max children if relevant |
| Prop on a nested part | Exposed nested instance properties | Expose only what code exposes on the parent |
| `render` / `asChild` | Instance swap with preferred values | e.g. swap a trigger between Button and IconButton |
| Boolean prop | Boolean property controlling a layer's visibility | Name it like the code prop (`hasIcon`) |
| Variant | Variant property | Values match code enums exactly |
| Layout primitives | Auto layout with gap and padding bound to spacing variables | Wrap, min/max sizes, and grid flow cover most layouts |
| Private internals | Base components prefixed `_` or `.`, hidden from publishing | Consumers never insert them directly |

### Build order for a composable Figma component

1. Build the base parts as private components (`_Dialog/Header`, `_Dialog/Footer`).
2. Assemble the public component from instances of those parts with auto layout.
3. Turn content regions into slots with preferred instances (Footer accepts Buttons; Body accepts anything).
4. Add variant and boolean properties that match code props; expose nested properties only where code does.
5. Map the component and its parts with Code Connect so generated code uses the compound API.
6. Document the anatomy on the component page with part names identical to code.

Watch for three traps: detaching instances to rearrange parts (a sign that a slot is missing), "placeholder swap" hacks now that native slots exist, and exposing every nested property, which makes the properties panel unusable.

## 10. State, styling and accessibility across parts

### State

- **Root owns state;** expose it controlled and uncontrolled (`value` / `defaultValue` / `onValueChange`, `open` / `defaultOpen` / `onOpenChange`).
- **Parts announce state as data attributes** (`data-state="open"`, `data-selected`, `data-disabled`) so styling and tests read them without JavaScript.
- **Split context by update frequency** in large components (state vs. actions, or selector-based stores) so one part's change doesn't re-render every part.
- **Expose render-prop state where useful:** `render={(props, state) => …}` lets consumers style by state without reaching into internals.

### Styling

- **Every part takes `className`** and carries a stable `data-slot` (or `data-part`) attribute.
- **Style parts by their own attributes,** not by DOM structure: `[data-slot="dialog-footer"]`, never `.dialog > div:last-child`.
- **Theme with CSS variables** that parts read (`--dialog-padding`) so a consumer can adjust a part's spacing without overriding its styles.
- **Keep the visual contract in the system:** consumers adjust layout around parts, not the parts' internal look.

### Accessibility wiring

Composition splits one widget across several elements, so the system must connect them:

- **Generated ids** link parts: the Root creates ids with `useId`, and parts read them for `aria-labelledby`, `aria-describedby`, `aria-controls`.
- **Required parts** carry the accessible name: `Dialog.Title`, `Field.Label`. Warn in development when they're missing, and offer a visually hidden option rather than making them optional.
- **Focus management** belongs to the Root or Content: trap, restore, initial focus.
- **Roles come from parts, not consumers:** `Tabs.Tab` sets `role="tab"`; a consumer's custom element passed via `render` receives it.
- **Order matters for screen readers:** if parts can be reordered visually, check the DOM order still reads sensibly.

## 11. Recipe catalog

These are common compositions built only from system parts. Publish recipes like these in the docs (and as Figma templates) so teams don't each invent their own.

### Confirmation dialog

```tsx
<Dialog.Root role="alertdialog" open={open} onOpenChange={setOpen}>
  <Dialog.Content size="sm">
    <Dialog.Title>Delete “Q3 roadmap”?</Dialog.Title>
    <Dialog.Description>This removes 14 files. You can't undo this.</Dialog.Description>
    <Dialog.Footer>
      <Dialog.Close render={<Button variant="secondary" />}>Cancel</Dialog.Close>
      <Button tone="danger" onClick={remove}>Delete</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

### Form field with an input group

```tsx
<Field.Root invalid={!!error}>
  <Field.Label>Monthly budget</Field.Label>
  <InputGroup>
    <InputGroup.Addon>$</InputGroup.Addon>
    <Field.Control render={<Input inputMode="decimal" />} />
  </InputGroup>
  <Field.Description>Applies to all workspaces.</Field.Description>
  <Field.Error>{error}</Field.Error>
</Field.Root>
```

### Menu triggered by an icon button, with a submenu

```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger render={<IconButton icon={<MoreIcon />} label="More actions" />} />
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onSelect={rename}>Rename</DropdownMenu.Item>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>Move to</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        {folders.map((f) => <DropdownMenu.Item key={f.id} onSelect={() => move(f.id)}>{f.name}</DropdownMenu.Item>)}
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Separator />
    <DropdownMenu.Item tone="danger" onSelect={remove}>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Clickable card in a grid

```tsx
<Grid columns={{ base: 1, md: 3 }} gap="4">
  {projects.map((p) => (
    <Card key={p.id} variant="outlined">
      <Card.Media src={p.cover} alt="" />
      <Card.Header>
        <Card.Title><Card.Link href={`/projects/${p.id}`}>{p.name}</Card.Link></Card.Title>
        <Card.Description>Updated {p.updatedAgo}</Card.Description>
      </Card.Header>
      <Card.Footer><Tag tone={p.statusTone}>{p.status}</Tag></Card.Footer>
    </Card>
  ))}
</Grid>
```

### Toolbar with grouped toggles

```tsx
<Toolbar label="Text formatting">
  <Toolbar.ToggleGroup selectionMode="multiple" value={marks} onValueChange={setMarks}>
    <Toolbar.Toggle value="bold" icon={<BoldIcon />} label="Bold" />
    <Toolbar.Toggle value="italic" icon={<ItalicIcon />} label="Italic" />
  </Toolbar.ToggleGroup>
  <Toolbar.Separator />
  <Toolbar.Button render={<Popover.Trigger />} icon={<LinkIcon />} label="Insert link" />
</Toolbar>
```

### Settings row (list item with a switch)

```tsx
<List dividers>
  <List.Item>
    <List.Content>
      <List.Title id="email-notif">Email notifications</List.Title>
      <List.Description>Weekly summary and mentions</List.Description>
    </List.Content>
    <List.End><Switch aria-labelledby="email-notif" checked={on} onCheckedChange={save} /></List.End>
  </List.Item>
</List>
```

## 12. Anti-patterns

| Anti-pattern | Looks like | Why it hurts | Instead |
| --- | --- | --- | --- |
| Prop explosion | `<Card title subtitle image imagePosition footer footerAlign showDivider …>` | Every request adds a prop; combinations become untestable | Compound parts or slots |
| Boolean soup | `isPrimary isLarge isOutlined isDanger` | Conflicting states are possible (`isPrimary` + `isOutlined`?) | One `variant` enum, one `size` enum |
| Children inspection | `React.Children.map(children, c => c.type === Tab ? …)` | Breaks with wrappers, fragments and memo | Context between Root and parts |
| Wrapper hell | Five nested divs around one button to add a tooltip and a link | Bad DOM, broken styling, broken a11y | `render` / `asChild` |
| Leaky internals | Consumers style `.card > div:nth-child(2)` | Any refactor breaks products | `data-slot` attributes and part `className`s |
| Context everywhere | One giant context that every part subscribes to | Every change re-renders everything | Split contexts or selector stores |
| Rigid slots | A slot that accepts only a string | Teams can't add an icon or a link, so they fork | Accept `ReactNode`, constrain in docs |
| Unbounded slots | A slot that accepts anything, with no guidance | Layouts break; patterns diverge | Document allowed content; Figma preferred instances |
| Margins inside components | Button with `margin-left: 8px` | Breaks every layout it's not in | Layout primitives own the gap |
| Convenience-only API | Only `<SimpleTabs items={…} />`, no parts | Teams outgrow it immediately | Ship parts; build the convenience wrapper from them |
| Optional accessible names | `Dialog.Title` optional with no warning | Unlabeled dialogs ship | Required part, visually hidden option, dev warning |

## 13. Choosing an API, documenting it, and composing for agents

### Decision guide

| If the component… | Choose |
| --- | --- |
| Is a single element with a few options (Button, Badge, Spinner) | Props |
| Has a fixed layout with a few content regions (List item, Field adornments) | Props as slots |
| Has parts that can be omitted, reordered or wrapped (Dialog, Card) | Compound parts |
| Has interactive parts that consumers render as their own elements (triggers, links) | `render` / `asChild` on those parts |
| Repeats items that need internal state (calendar cells, virtualized rows) | Render function for the item |
| Must support fully custom markup by expert teams | A documented headless hook, in addition to the parts |
| Has a common simple case and a flexible advanced case | Parts first, plus a convenience wrapper built from them |

### Documenting composable components

- **Anatomy diagram** with numbered parts whose names match code and Figma.
- **A parts table:** each part, whether it's required, what it renders, and its props.
- **Allowed composition:** which parts go inside which, and what slots accept.
- **Recipes** (section 11) for the common combinations.
- **Stories per composition,** not just per prop, so visual tests cover real assemblies.
- **Code Connect** maps for the root and key parts so Figma-to-code output uses the compound API.

### Composing for agents

Compound APIs give agents more ways to go wrong (invented parts, parts outside their root, missing titles). Make the correct composition easy to find and hard to miss:

- **Show complete examples first** in docs and stories; agents copy whole examples more reliably than they assemble from part tables.
- **Type the parts strictly** and export them from one namespace (`Dialog.*`) so autocomplete and type errors catch invented parts.
- **Throw clear development errors** for parts used outside their root or missing required parts; agents read and fix errors well.
- **List allowed children** in each part's JSDoc and in the system's MCP or docs ("`Dialog.Footer` takes Buttons and `Dialog.Close`").
- **Add recipes to the agent's guidelines** (see the Agentic Design Systems tab) for the compositions teams build most.

## 14. Composition map: how each component is built

The 61 components in the A–Z aren't 61 separate builds. They share about eight internal building blocks, they're built from each other (Select uses Popover and Listbox; Icon button uses Button, Icon and Tooltip), and each picks one of the API styles from section 2. This section maps that out component by component, in code and in Figma, so you can see how the composition principles apply in real builds.

### The shared building blocks

These are internal: consumers rarely touch them directly, but every interactive component is assembled from them. Most come from a headless library (Base UI, React Aria, Radix) and are wrapped once by the system.

| Building block | Owns | Typical source |
| --- | --- | --- |
| **Press** | Button semantics, press and hover states, disabled and `focusableWhenDisabled` behavior | Native `button` + a press hook |
| **Disclosure** | Open/closed state (controlled and uncontrolled), `aria-expanded` and `aria-controls` | `useControllableState` + collapsible primitive |
| **Positioner** | Anchoring floating content to a trigger: placement, flip, collision padding, arrow | Floating UI, or the headless library's positioner |
| **Layer** | Portal, focus trap or scope, dismiss on Escape and outside click, inert background, return focus | Headless library dialog/popover layer |
| **Collection** | Items, selection model (single, multiple), disabled items, type-ahead, virtualization hooks | Headless library collection/list primitives |
| **Roving focus** | One tab stop per group; arrow keys move focus within it | Roving-tabindex or `aria-activedescendant` utility |
| **Field** | Generated ids; label, description and error wiring; `invalid`, `required`, `disabled` passed to the control | System Field context |
| **Live region** | Polite or assertive screen reader announcements | A single app-level announcer |

One more utility sits under almost everything: the render/merge helper that lets a part render as another element and merges props, handlers, classNames and refs (section 5).

### Which components use which blocks

| Component | Press | Disclosure | Positioner | Layer | Collection | Roving focus | Field | Live region |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Accordion | ● | ● |  |  |  | ● |  |  |
| Button, Toggle button, Icon button | ● |  |  |  |  |  |  |  |
| Button group, Toolbar | ● |  |  |  |  | ● |  |  |
| Calendar | ● |  |  |  | ● | ● |  | ● |
| Carousel | ● |  |  |  |  | ● |  | ● |
| Checkbox, Switch | ● |  |  |  |  |  | ● |  |
| Chip group, Segmented control | ● |  |  |  | ● | ● |  |  |
| Color picker | ● | ● | ● | ● |  | ● | ● |  |
| Combobox, Search with suggestions |  | ● | ● | ● | ● |  | ● | ● |
| Command palette |  | ● |  | ● | ● |  |  | ● |
| Context menu, Dropdown menu, Menu bar | ● | ● | ● | ● | ● | ● |  |  |
| Data table | ● |  |  |  | ● | ● |  | ● |
| Date picker | ● | ● | ● | ● | ● | ● | ● | ● |
| Dialog, Drawer |  | ● |  | ● |  |  |  |  |
| Disclosure | ● | ● |  |  |  |  |  |  |
| File upload | ● |  |  |  |  |  | ● | ● |
| Input, Textarea, Number input |  |  |  |  |  |  | ● |  |
| Listbox |  |  |  |  | ● | ● | ● |  |
| Navigation (side nav) | ● | ● |  |  |  |  |  |  |
| Pagination, Stepper | ● |  |  |  |  |  |  |  |
| Popover | ● | ● | ● | ● |  |  |  |  |
| Radio group, Rating |  |  |  |  | ● | ● | ● |  |
| Select | ● | ● | ● | ● | ● |  | ● |  |
| Slider |  |  |  |  |  |  | ● |  |
| Tabs | ● |  |  |  | ● | ● |  |  |
| Toast | ● |  |  |  |  |  |  | ● |
| Tooltip |  | ● | ● |  |  |  |  |  |
| Tree view | ● | ● |  |  | ● | ● |  |  |

Fixing a block fixes every row that uses it. A focus-return bug in Layer is one fix for eleven components, and a type-ahead improvement in Collection reaches menus, selects, listboxes and trees at once. That's the strongest argument for building on shared blocks instead of per-component logic.

### Leaf components: configured with props

These single-element components have no parts and no slots beyond an icon prop. They're the atoms every other build reuses. In Figma they're variant sets with boolean and instance-swap properties.

| Component | API style | Parts / slots | Can render as | Built from | Figma build |
| --- | --- | --- | --- | --- | --- |
| Button | Props | `iconStart`, `iconEnd` | Link (`render`) | Press, Spinner, Icon | Variant set (variant × size × state); booleans for icons; instance swap for the icon |
| Icon button | Props, `label` required | `icon` | Link, menu trigger | Button + Icon + Tooltip | Variant set; icon as instance swap; tooltip shown in docs, not baked in |
| Toggle button | Props | `icon` | — | Button + pressed state | Variant with `pressed` true/false |
| Link | Props | `iconEnd` | Router link (`render`) | Native `a`, Icon | Text style + variants (inline, standalone); external icon boolean |
| Badge | Props | — | — | Visually hidden (for count labels) | Variant set (tone × variant); text property for the count |
| Tag | Props | `icon` | — | Icon | Variant set (tone × size); icon boolean + swap |
| Avatar | Props + optional parts (Image, Fallback) | Image, Fallback, status | — | Image loading state, Visually hidden | Variant set (size × shape); image fill; status boolean |
| Icon | Props | — | — | SVG source | One component per icon, color bound to a variable |
| Kbd | Props | — | — | Native `kbd` | Small text component; keys as text property |
| Divider | Props | `label` | — | `hr` or decorative element | Variant (orientation); label boolean |
| Spinner | Props | — | — | Live region (label) | Variant set (size); motion in prototype only |
| Skeleton | Props + a `loading` wrapper | — | — | Visually hidden, `aria-busy` | Variant set (shape) |
| Progress | Parts (Root, Label, Track, Indicator, Value) | Label, Value | — | Native `progress`/`meter` semantics | Variant (shape × size); width bound to a number variable for demos |
| Visually hidden | Props | children | `as` (narrow union) | CSS clip pattern | Not built in Figma; documented only |

### Slotted and container components

These components have a fixed layout and named regions. They compose other components into their slots and own the spacing between regions. In Figma, native slots and base components do most of the work here.

| Component | API style | Parts / slots | Can render as | Built from | Figma build |
| --- | --- | --- | --- | --- | --- |
| Card | Slot parts | Media, Header (Title, Description), Body, Footer; Link stretches over the card | `as` (article, li) | Box, Link | Base parts (`_Card/Header`, `_Card/Footer`); Body and Footer as slots; variants for surface |
| Alert | Slot parts | Title, Description, Actions; icon | — | Icon, Icon button (dismiss), Live region | Variant set (tone); Actions as a slot; dismiss boolean |
| Banner | Props + Action part | message (children), Action | — | Icon, Link/Button, Icon button | Variant (tone); action and dismiss booleans |
| Empty state | Props + Actions slot | illustration, title, description, Actions | — | Heading, Button | Variant (kind, size); Actions slot with Button preferred |
| List | Compound (List, Item) + slots | Item: Start, Content (Title, Description), End | Item as link or button | Stack, Divider, Avatar/Checkbox in Start | `_List/Item` base; Start and End slots with preferred instances (Avatar, Icon, Checkbox, Tag, Switch) |
| Header (app bar) | Slot parts | Brand, Nav, Search, Actions, Account, MobileMenu | — | Navigation, Search, Icon button, Dropdown menu (account) | Layout frame with slots per region; responsive variants |
| Breadcrumb | Compound (Root, Item, Link) | separator, overflow menu | Link as router link | Link, Dropdown menu (collapsed items) | Item base component; separator as a property; overflow variant |
| Button group | Container | Buttons as children | — | Button, Roving focus (if toolbar-like), Dropdown menu (split) | Auto layout frame; `attached` variant; slot for buttons |
| Pagination | Props, parts for custom layouts | Prev, Pages, Next, PageSize, Summary | Page links (`getPageHref`) | Button, Link, Select (page size) | Variant (full, compact, simple) |
| Stepper | Compound (Stepper, Step) | Step: Indicator, Title, Description; Separator | Step as link | Press, Icon | `_Step` base with status variant; auto layout for orientation |
| Form field | Compound (Root, Label, Control, Description, Error) | Control is a slot for any input | Control `render` | Field context | `_Field` base wrapping any control instance; error and description booleans |
| Table | Parts over native elements | Caption, Head, Row, HeaderCell, Body, Cell, Foot | — | Native table | Cell and row base components; table built with auto layout rows |
| Navigation | Compound (Root, Section, Group, Item) or `items` data | Item: icon, label, badge | Item as router link | Disclosure (groups), Badge, Tooltip (rail) | `_Nav/Item` base with state variants; collapsed rail variant |

### Overlay compounds

Overlays are everything that appears above the page. They share one shape (Root → Trigger + Content) and two building blocks (Positioner for anchored overlays, Layer for anything that traps or dismisses). Learn Popover and you've learned the family. In Figma, overlays are built as an open state shown next to the trigger, with content regions as slots.

| Component | API style | Parts / slots | Can render as | Built from | Figma build |
| --- | --- | --- | --- | --- | --- |
| Popover | Compound | Root, Trigger, Portal, Content, Title, Arrow, Close | Trigger, Close | Press, Disclosure, Positioner, Layer (non-modal) | `_Popover/Surface` base; Content as a slot; arrow and side variants |
| Tooltip | Compound + `content` shortcut | Root, Trigger, Content, Arrow; Provider for shared delay | Trigger | Disclosure, Positioner (hover and focus) | Small variant set (side); documented beside triggers, not inside them |
| Dialog | Compound | Root, Trigger, Portal, Overlay, Content, Title (required), Description, Body, Footer, Close | Trigger, Close | Disclosure, Layer (modal), Button, Icon button | `_Dialog/Header`, `_Dialog/Footer` bases; Body and Footer slots; size variants |
| Drawer | Compound, same parts as Dialog | Header, Title, Body, Footer, Close | Trigger, Close | Disclosure, Layer (modal or not), resize handle | Same bases as Dialog; side variant |
| Dropdown menu | Compound | Root, Trigger, Content, Item, Group, Label, Separator, CheckboxItem, RadioGroup, RadioItem, Sub, SubTrigger, SubContent | Trigger, Item (as link) | Press, Disclosure, Positioner, Layer, Collection, Roving focus, Kbd | `_Menu/Item` base with variants (default, checkbox, radio, submenu, danger); menu surface with an items slot |
| Context menu | Compound, Dropdown menu's parts | Trigger wraps the target area | Trigger | Everything Dropdown menu uses, positioned at the pointer | Reuses the menu bases; documented with an example target |
| Menu bar | Compound | Root, Menu (Trigger + Content) | Triggers | Dropdown menu × n + Roving focus across triggers | Bar frame with menu trigger instances; menus reuse menu bases |
| Command palette | Compound | Dialog, Input, List, Group, Item, Empty | Item | Dialog (Layer), Combobox logic (Collection, Live region), Kbd | Built from Dialog and List item bases; example states (results, empty) |
| Toast | Imperative `toast()` + parts | Toaster (Viewport), Root, Title, Description, Action, Close | Action | Live region, Button, Icon button, Layer (viewport only, no trap) | Variant set (tone); stacked example frame |

### Collection and navigation compounds

These components manage a set of items: selection, keyboard movement between items, and type-ahead. All of them are Collection + Roving focus underneath, which is why their keyboard behavior can be consistent. In Figma they're built from an item base component with state variants, repeated inside a container with a slot.

| Component | API style | Parts / slots | Can render as | Built from | Figma build |
| --- | --- | --- | --- | --- | --- |
| Disclosure | Compound | Root, Trigger, Panel | Trigger | Press, Disclosure | Trigger base with expanded variant; Panel as a slot |
| Accordion | Compound | Root, Item, Header, Trigger, Content | Trigger | Disclosure × n, Roving focus (optional), heading | `_Accordion/Item` base (expanded variant); Content slot |
| Tabs | Compound | Root, List, Tab, Indicator, Panel | Tab (rarely; route tabs use nav links) | Press, Collection (single select), Roving focus | `_Tab` base (state variants); tab list with a slot; Panel slot |
| Segmented control | Compound | Root, Item | — | Press, Collection, Roving focus (radio-group semantics) | `_Segment` base (selected variant); container with items slot |
| Chip (group) | Compound (ChipGroup, Chip) | Chip: icon/avatar, label, remove | — | Press, Collection, Roving focus, Icon button (remove) | `_Chip` base (selected, removable variants) |
| Toolbar | Compound | Root, Button, ToggleGroup, Toggle, Separator, Link | Button (e.g. as a Popover trigger) | Roving focus, Toggle button, Icon button, Divider | Auto layout bar; items slot with preferred instances |
| Listbox | Compound | Root, Section, Option | — | Collection, Roving focus, Field | `_Listbox/Option` base (selected, focused, disabled); section header base |
| Select | Compound | Root, Label, Trigger, Value, Icon, Popup, Group, Item, ItemText, ItemIndicator | Trigger | Field, Press, Disclosure, Positioner, Layer, Listbox | Trigger component (states) + popup built from Listbox option bases |
| Combobox | Compound | Root, Label, Input, Trigger, Popup, List, Group, Item, Empty, Loading | Item (render function) | Field, Input, Disclosure, Positioner, Layer, Listbox, Live region | Input-based trigger + Listbox popup; states: typing, results, empty, loading |
| Search | Props; Combobox when suggestions are on | Input, icon, clear, scope | — | Input, Icon button (clear), Combobox | Input variant with search icon; suggestion state reuses Combobox |
| Tree view | Compound with render function | Root, Item, Chevron, Label, nested Items | Item content | Collection, Roving focus, Disclosure per node | `_Tree/Item` base with level and expanded variants; indentation via padding variable |
| Data table | Data-driven (columns) + parts | Toolbar, Table, Header, Row, Cell, BulkActions, Pagination | Cells (renderers) | Table parts, Checkbox, Press (sort), Collection (selection), Pagination, Empty state, Skeleton | Built from Table cell and row bases; toolbar and bulk-actions slots |
| Carousel | Compound | Root, Viewport, Slide, Prev, Next, Indicators, PlayPause | Prev, Next | Press, Roving focus (indicators), Live region | Viewport frame with slides slot; control bases |

### Form controls and composite inputs

Every form control plugs into Field, so labels, hints, errors and `invalid` work the same way everywhere. The composite inputs at the bottom of the table are compositions of compositions: Date picker is Field + DateField + Popover + Calendar.

| Component | API style | Parts / slots | Can render as | Built from | Figma build |
| --- | --- | --- | --- | --- | --- |
| Input | Props; InputGroup for addons | prefix, suffix, clear | — | Field, Icon button (clear, reveal) | Variant set (size × state); prefix/suffix slots |
| Textarea | Props | Field.Count | — | Field, Live region (count) | Variant set (state); auto-height example |
| Number input | Compound | Root, Decrement, Input, Increment | — | Field, Input, Press (steppers) | Input variant with stepper buttons as instances |
| Checkbox | Props; CheckboxGroup compound | Indicator, label, description | — | Press, Field (group legend), Icon (check, dash) | Variant set (checked × state); `_Checkbox/Box` base; group frame |
| Radio group | Compound (RadioGroup, Radio) | Radio: indicator, label, description | — | Collection (single select), Roving focus, Field | `_Radio` base (selected × state); card variant built on Card base |
| Switch | Props | Thumb, label, description | — | Press, Field | Variant set (on × state × size) |
| Slider | Compound | Root, Track, Range, Thumb (one per value), Marks, Output | — | Field, keyboard and pointer handling, Visually hidden (thumb labels) | Track and thumb bases; range variant with two thumbs |
| Rating | Props | — | — | Radio group (interactive) or Icon + text (read-only) | Variant (value, read-only) built from icon instances |
| File upload | Compound | Root, Dropzone, Trigger, Hint, List, FileItem | Trigger | Press, Field, Progress, Icon button (remove, retry), Live region | Dropzone variants (idle, drag-over, error); `_FileItem` base with status variant |
| Calendar | Compound with render function | Root, Header (Prev, Heading, Next), Grid, Cell | Cell content | Press, Collection (dates), Roving focus (grid), Live region (month change) | `_Calendar/Cell` base with every day state; month grid built with auto layout |
| Date picker | Compound | Root, Field, Trigger, Popover, Calendar | Trigger | Field, DateField, Popover, Calendar (see diagram) | Assembled from Input, Popover surface and Calendar instances |
| Color picker | Compound | Root, Trigger, Content, Area, HueSlider, AlphaSlider, Input, Swatches | Trigger | Popover, Slider, Input, Roving focus (swatches), Field | Popover surface with area, slider and swatch bases as slots |

### Compositions of compositions

*[Diagram: date picker decomposed · 4 components, 5 building blocks]*

The date picker shows why the layering pays off. It adds almost no new logic of its own: positioning, focus trapping, dismissal, label wiring and keyboard movement all come from blocks that other components already use and test. The same holds in Figma: it's assembled from Input, Popover and Calendar instances instead of drawn from scratch, so a change to the Calendar cell or the popover surface flows into the Date picker automatically.

When you plan a new component, find its row neighbors in the map first. If it needs a floating list, it's built on Popover and Listbox; if it's a set of mutually exclusive options, it's Collection + Roving focus with radio semantics. New logic should be the exception, and new building blocks rarer still.

---

# Design to Code

How design and code stay one system: a single source of truth for each decision, a Figma library built the way code is built, and documentation that serves both people and agents. System Architectures nests under this tab and shows how tokens, packages, Figma and docs fit together.

## 1. Design–code parity

The system has one source of truth for each kind of decision, and every other surface is generated from it or checked against it. Tokens usually live in code (a JSON repo) and sync to Figma; components live in code and are mirrored in Figma.

### Figma library structure

- **Separate libraries by layer:** Foundations (variables and styles), Core components, Icons, and Patterns/templates. Products consume them; they don't edit them.
- **Variables map 1:1 to tokens.** Same names, same tiers. Hide the primitive collection from publishing and give the semantic collection modes (light, dark, brand). Scope variables so a spacing token can't be applied as a fill.
- **Component properties mirror code props.** If code has `variant`, `size`, `disabled` and an `icon` slot, Figma has the same variant properties, a boolean, and an instance-swap property, with the same names and values.
- **Auto layout everywhere,** with padding and gap bound to spacing variables, so resizing behaves like the coded component.
- **Describe each component in Figma** with a link to its docs page and code.

### Keeping them in sync

| Practice | What it prevents |
| --- | --- |
| Token pipeline (DTCG JSON → Style Dictionary → CSS/iOS/Android + Figma variables via plugin or REST API) | Hand-copied hex values drifting |
| Figma Code Connect | Dev Mode showing generic CSS instead of the real component code and props |
| Shared naming spec for components, props, parts and tokens | Translation errors in handoff |
| Visual regression tests on code + periodic Figma vs. Storybook audits | Silent visual drift |
| Detach and override tracking (Figma library analytics) | Teams forking components without telling you |
| One release note covering both Figma and code | "It's in Figma but not shipped" confusion |

Ship design and code together: a component isn't released until it exists in both, with matching API, states and docs. If one has to lead, let code lead and mark the Figma component "beta".

## 2. Building the system in Figma

Build a Figma system the way code is built: tokens as variables first, then components that only read those variables, split across a few libraries that publish independently. Make every name match code. Figma's 2025–2026 releases (slots, DTCG import/export, extended collections, Check designs, Code Connect UI, the MCP server) bring Figma much closer to how code works. The facts below come from Figma's docs as of October 2026.

### What changed in 2025–2026

| Feature | Status | Plan |
| --- | --- | --- |
| [Slots](https://help.figma.com/hc/en-us/articles/38231200344599) (a component property for free-form content) | Generally available (June 2026) | All plans |
| [Extended collections](https://help.figma.com/hc/en-us/articles/36346281624471) (multi-brand theming) | Shipped Nov 2025 | Enterprise only |
| Native variable import/export in DTCG JSON | Shipped late 2025 | Paid plans (exact gating not stated) |
| More [variable modes](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables) | Professional 10, Organization 20 per collection | Starter: none |
| [Check designs](https://help.figma.com/hc/en-us/articles/39592284074263-Check-designs-in-Figma) (built-in linter) | Shipped; June 2026 added contrast, library-mismatch and detach checks | Organization, Enterprise |
| [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect) UI (map components in Figma, with GitHub and AI help) | Shipped | Professional and up (Pro: 1 library, 1 framework) |
| [Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) | Generally available; remote server recommended; write-to-canvas free during beta | Remote: all plans |
| [Grid auto layout](https://help.figma.com/hc/en-us/articles/31289469907863-Use-the-grid-auto-layout-flow) | Shipped (Config 2025) | All plans |
| Library guidelines (markdown rules the Figma agent reads) | Open beta | Paid plans |
| Motion variables (timing, easing) and publishable animation styles | Open beta | Not stated |
| Code sources in libraries; centralized design systems | Closed beta / preview | Not stated |

### Plan gating

| Capability | Starter | Professional | Organization | Enterprise |
| --- | --- | --- | --- | --- |
| Variable modes per collection | 0 | 10 | 20 | Figma says unlimited with extended collections; other sources say 40 (conflicting) |
| Publish libraries | No | Yes | Yes | Yes |
| Org-wide libraries, shared fonts | No | No | Yes | Yes |
| Branching and merging | No | No | Yes | Yes |
| Library analytics | No | No | Yes | Yes |
| Check designs | No | No | Yes | Yes |
| Extended collections; Variables and Library Analytics REST APIs | No | No | No | Yes |
| Dev Mode, Code Connect | No | Yes | Yes | Yes |

Source: [Figma plans and features](https://help.figma.com/hc/en-us/articles/360040328273-Figma-plans-and-features). Hard limit: 5,000 variables per collection.

### Build order

1. **Create the library files:** `[DS] Foundations`, `[DS] Icons`, `[DS] Components`, `[DS] Patterns`. Components subscribe to Foundations; Patterns subscribe to Components.
2. **Primitives collection** (`_Primitives`, one mode): color ramps, spacing scale, radii, type sizes. The `_` prefix hides it from publishing.
3. **Semantic collections:** `Color` with Light / Dark / High-contrast modes; `Spacing` and `Radius`; `Typography` with modes for density or breakpoints if you need them. Every value aliases a primitive.
4. **Scope every variable** (e.g. `bg/*` to frame and shape fill only) and set code syntax for Web, iOS and Android.
5. **Text and effect styles** whose properties are bound to typography and color variables.
6. **Multi-brand (Enterprise only):** extend the semantic collection once per brand and override only the values that differ.
7. **Icons library:** one component per icon, one frame size, color bound to a semantic variable.
8. **Base components** (`_Base/Button`) that hold shared structure and aren't published.
9. **Public components:** variants and properties that mirror code props, auto layout everywhere, slots for content areas, a description and doc link on each.
10. **Document in the file:** cover, changelog, usage notes, a Deprecated page.
11. **Publish** with release notes, and have a few pilot files accept the update.
12. **Connect to code:** Code Connect mappings, the MCP server, and library guidelines for the Figma agent.
13. **Govern:** run Check designs, review analytics monthly, route changes through branches.

### File and library architecture

- **Split by layer** so publishes stay small and product files enable only what they need: Foundations (variables, styles), Icons, Components, Patterns/templates.
- **Org vs. team libraries:** on Organization and Enterprise, admins enable core libraries for everyone; keep product-specific kits as team libraries.
- **Pages inside a library file:** Cover · Changelog · Getting started · Foundations · one page per component · Base (private) · Deprecated. Each component page shows the component set, a property table, do/don't examples and accessibility annotations.
- **File names** carry no version numbers: `[DS] Components – Web`. Versions live in the changelog page and publish notes.
- **[Branching](https://help.figma.com/hc/en-us/articles/360063144053-Guide-to-branching)** (Organization and up): libraries publish only from main, so merge first. Merges are all-or-nothing, comments don't carry across, and Figma checkpoints main before each merge.
- **Publishing:** every publish asks for a description. Write it as release notes: what changed, whether it breaks anything, what subscribers must do. Subscribers compare old and new before accepting.

### Variables

| Type | Binds to |
| --- | --- |
| Color | Fills, strokes, effect colors, gradient stops |
| Number | Font size, line height, letter and paragraph spacing, radius, padding, gap, width and height (incl. min/max), stroke, opacity, effects, layout guides |
| String | Text content, font family, font weight/style |
| Boolean | Layer visibility; can also drive variant properties |

- **Two layers are usually enough:** primitives (hidden, one mode) and semantics (with modes). Add component-level variables only when a semantic token can't express the difference. Figma's own [token architecture guide](https://www.figma.com/resource-library/design-token-architecture/) says the same.
- **Alias semantic to primitive,** never semantic to semantic, because chains get hard to maintain.
- **Scope everything.** Color scopes: frame fill, shape fill, text fill, stroke, effects. Number scopes: gap/padding, radius, font properties, opacity, size, stroke. Scoping cleans up the pickers and improves Check designs suggestions.
- **Code syntax:** up to three names per variable (Web, iOS, Android), shown in Dev Mode snippets.
- **Hide from publishing** per variable, or prefix the collection with `_` or `.`.

**Extended collections (Enterprise).** Each brand's child collection inherits names, modes, scopes and order from the parent and can only override values; you can't add variables or modes in a child. Overriding a color's value or its opacity locks both. To migrate: export each brand's mode as JSON, extend the parent, import the JSON into the child, on the main branch. Subscribers must re-apply modes after updating.

**Import and export (DTCG JSON).** Right-click a mode → Export mode, or a collection → Export modes. Import by dropping JSON files into a new collection (each file becomes a mode) or with Import mode on an existing one. Supported: color, dimension (px), font family, duration (s), number, boolean, string. Nested groups become `/` paths.

**APIs and Tokens Studio.** The Plugin API reads and writes variables on any plan; the Variables REST API is Enterprise only. Default to native variables now. Keep Tokens Studio or a Git sync if tokens must live in Git as the source of truth, or if you need computed or composite tokens that variables can't hold (the available comparisons date from 2024, so check them against your needs).

### Styles vs. variables

Variables hold one value per mode; styles hold composite values and can be built from variables.

| Need | Use | How it connects |
| --- | --- | --- |
| Solid color, spacing, radius | Variable | Direct |
| Typography | Text style | Bind family, weight, size, line height and letter spacing to variables so modes switch the type scale |
| Shadows, blurs | Effect style | Effect color and values accept variables |
| Gradients, multiple fills, image fills | Color style | Gradient stops accept color variables |
| Layout grids (now "layout guides") | Grid style | Properties accept number variables |

Keep solid colors as variables, not color styles: Check designs can bind to variables but can't swap color styles.

### Components

| Property type | Use it for | Code equivalent |
| --- | --- | --- |
| Variant | Mutually exclusive options | Enum props: `size`, `variant`, `state` |
| Boolean | Showing or hiding a layer | `hasIcon`, `showHelper` |
| Instance swap (with preferred values) | Choosing from a curated set, like icons | Icon or sub-component prop |
| Text | Editable labels | `label`, `children` as text |
| Slot | Free-form content areas | `children` or named slots |

- **Slots** replace the old "placeholder swap" hack. Convert a nested frame with Convert to slot (Cmd/Ctrl+Shift+S) or Wrap in new slot. Optional settings: preferred instances, Only allow preferred instances, min/max children (violations warn, they don't block). You can't bind a slot to the top-level layer or put component properties on layers inside a slot, and removing a slot property wipes instance content. Code Connect supports slots; MCP support was listed as coming soon. Figma has a [migration guide](https://help.figma.com/hc/en-us/articles/38607529833751-Migrate-a-library-to-using-slots).
- **Nested instances:** expose a child's properties at the top level (Properties → Expose properties from → Nested instances), e.g. an Input's icon.
- **Avoid variant explosion:** use variants only for real enums, and booleans and instance swaps for everything else.
- **Auto layout everywhere:** hug and fill, wrap, min/max sizes, gap and padding bound to spacing variables. Use the grid flow for row-and-column layouts (spanning children must be set to fill).
- **Base components** prefixed `_` or `.` (or Hide when publishing) hold shared structure consumers shouldn't insert.
- **Name like code:** property names and values match the code exactly (`size = sm | md | lg`); layers are named by role (`Label`, `LeadingIcon`), never `Frame 42`. The MCP server and Figma's agent read these names.
- **Interactive components:** wire hover, pressed and focus variants with While hovering, While pressing and On click so prototypes inherit them.
- **Descriptions and doc links** on every component set: purpose, when not to use it, link to the docs. They show in Assets, Dev Mode and MCP context.

### Accessibility in Figma

- **Contrast:** Check designs flags failures and suggests WCAG AA or AAA replacements (Organization and up). On other plans use a contrast plugin.
- **Focus is a real variant** (`state = focus`) using a tokenized focus ring, not an overlay layer.
- **High contrast and reduced motion** are modes on the semantic collections.
- **[Annotations](https://help.figma.com/hc/en-us/articles/20774752502935-Add-measurements-and-annotate-designs)** in Dev Mode have an Accessibility category. Use it on each component page for roles, labels, tab order and keyboard behavior. Creating annotations needs a Full seat; viewing needs Full or Dev.

### Handoff and code

- **Dev Mode** (paid, Full or Dev seat): inspect with code-syntax variable names, Ready for dev statuses, annotations.
- **Code Connect CLI:** lives in the repo. Template files (`.figma.ts`) are now the recommended format; the framework-specific parsers are no longer maintained. Publish with `npx figma connect publish`.
- **Code Connect UI:** map components inside Figma, link GitHub or enter paths, one Figma component to many frameworks (React, SwiftUI, Compose), with per-mapping instructions for AI.
- **Figma MCP server:** the remote server is recommended (the desktop one runs on `127.0.0.1:3845`). Its design-context tool defaults to React + Tailwind and returns your Code Connect components when mapped. The remote server works from a pasted link, not your current selection. Write-to-canvas needs the remote server and a Full seat.
- **Library guidelines** (open beta): attach 3–8 markdown files (overview, components, anti-patterns) to a published library so Figma's agent follows your rules. Keep the total under 100 KB (cap 200 KB). See Figma's [guide to helping AI understand your system](https://help.figma.com/hc/en-us/articles/38978644498199-AI-workflows-collection-Best-practices-to-help-Figma-AI-understand-your-design-system).
- **Check designs:** flags hard-coded color, type, radius and spacing, wrong or missing libraries, detached components and contrast. Runs on one page at a time, up to 25,000 layers, from the right-click menu, Ready for dev, or Actions.

### Governance and maintenance

- **[Library analytics](https://help.figma.com/hc/en-us/articles/360039238353-View-and-explore-library-analytics)** (Organization and up): inserts and detaches for components, styles, variables and modes, over 30, 60 or 90 days or 12 months. Export CSV; the REST API is Enterprise only.
- **Treat high-detach components as backlog.** The usual cause is a missing property or slot.
- **Deprecate in four steps:**
  1. Rename to `Deprecated/…` and point the description at the replacement.
  2. Move it to the Deprecated page and say so in the release notes.
  3. After a grace period, Hide when publishing, then publish.
  4. Never delete something still in use; deleting detaches every instance.
- **Move, don't copy:** use Figma's move-published-components flow between libraries so instances stay linked.
- **Styles to variables migration:** create variables, bind them inside the existing styles so consumers don't break, then bind components directly. Use Check designs to find leftovers.
- **Rebrands and splits:** use Swap library in the Libraries panel.
- **Plugins people rely on** (not re-checked for this doc): Tokens Studio (Git sync, computed tokens), Variables Import/Export, Design Lint (linting on plans without Check designs), Stark and Able (accessibility).

### Naming conventions

| Thing | Convention | Example |
| --- | --- | --- |
| Components | Slash paths by family | `Button/Primary`, `Form/Input` |
| Variables | Slash paths, role-based | `color/text/secondary`, `space/inset/md` |
| Component properties | Exactly the code prop name | `size`, `variant`, `hasIcon` |
| Property values | Lower-case code enum values | `sm`, `md`, `lg` |
| Layers | Role names | `Label`, `LeadingIcon`, `Container` |
| Private items | `_` or `.` prefix | `_Base/Button`, `_Primitives` |
| Deprecated items | `Deprecated/` prefix | `Deprecated/OldBanner` |

**Do:**

- Alias semantics to primitives and scope every variable
- Set code syntax before handoff
- Mirror code props one-to-one, with descriptions and doc links
- Use slots for content areas
- Use branches for big changes and release notes on every publish
- Write library guidelines for the agent

**Don't:**

- Publish primitives to consumers
- Chain semantic aliases
- Make a variant for every boolean
- Delete styles or components still in use
- Leave layers named `Frame 42`
- Plan around Enterprise-only features (extended collections, REST variables API) on Professional or Organization

## 3. Documentation

Teams use the system through its documentation. If a team has to ask in Slack how to use something, the docs have failed. Write for two readers: a person skimming for the right answer, and an AI agent that will read every word literally.

### Every component page has

1. **Summary sentence.** What it is and when to reach for it, in one line.
2. **Live example** with the most common configuration, editable or copyable.
3. **When to use / when not to use,** each pointing to the alternative ("For navigation, use Link, not Button").
4. **Anatomy** with numbered parts that match the code and Figma names.
5. **Variants and sizes,** shown side by side with guidance on choosing.
6. **States,** including error, loading and disabled.
7. **Do / Don't pairs** with real UI, not abstract boxes. One rule per pair.
8. **Content guidelines:** label length, casing, tone.
9. **Accessibility:** keyboard map, screen reader output, what the consumer must provide (e.g. an accessible name for icon-only buttons).
10. **Props / API table,** generated from code types so it never drifts.
11. **Related components and patterns.**
12. **Status and changelog:** stable, beta, deprecated; version introduced; recent changes.

### Writing rules

- Lead with the rule, then the reason: "Use one primary button per view. More than one dilutes the main action."
- Name tokens and components exactly as they appear in code.
- Prefer real product examples over lorem ipsum.
- Keep foundations pages short and prescriptive. A color page lists roles and allowed pairings, not color theory.
- Every page has an owner and a "last reviewed" date.

### Tooling

Common stacks: Storybook for live components (often with MDX docs), a docs platform such as zeroheight, Supernova or a custom site for guidelines, and Figma for design specs. Whatever the stack, make it searchable and link code, Figma and guidance from each page.

---

# System Architectures

How the parts of a design system fit together: where each decision lives, how it flows to every platform, and how the pieces are packaged and shipped. Pick the simplest architecture that covers your products; every extra layer is something to maintain.

## 1. The whole system at a glance

*[Diagram: system layers · 6 layers, 5 delivery channels]*

Dependencies point down only: products use patterns and components, components use primitives and tokens, and nothing reaches past a layer to raw values. Every layer reaches people and agents through the same five channels, so each channel must stay in sync with the code.

## 2. Token architecture and pipeline

*[Diagram: token pipeline · 1 source, 5 outputs]*

Tokens live once, as data, in version control. Every platform's values, the Figma variables and the docs tables are generated from that source, so a change is reviewed once and lands everywhere in the same release. Designers who change variables in Figma export them back as a pull request instead of editing the outputs.

### File structure

```text
tokens/
  primitives/
    color.json          ramps: blue.100–900, gray.0–1000
    dimension.json      space.0–64, radius.0–full
    typography.json     families, sizes, weights, line heights
    motion.json         durations, easings
  brands/
    brand-a.json        maps brand roles to primitives
    brand-b.json
  semantic/
    color.light.json    text, surface, border, action, status, focus
    color.dark.json
    color.high-contrast.json
    space.json          inset, stack, inline roles
    type.json           composite text styles
  component/            only where a component must diverge
    button.json
build/
  config.js             platforms, transforms, filters
  checks/contrast.js    fails CI when a declared pairing drops below 4.5:1
```

Pipeline rules: nobody edits outputs by hand; each token carries a `$description`; contrast and naming checks run in CI; generated files ship in their own package (e.g. `@acme/tokens`) so every distribution model can use them.

## 3. Theming and multi-brand architecture

Themes and brands are values, not code. Components read only semantic tokens, and a theme or brand swaps the values behind them. No part of a component should know which brand it's in.

### Three axes, kept separate

| Axis | Examples | Implemented as | Changes at runtime? |
| --- | --- | --- | --- |
| Color mode | Light, dark, high contrast | Mode of the semantic color collection; `data-theme` attribute | Yes, per user preference |
| Brand | Product A, Product B, white-label customer | Brand layer between primitives and semantics; separate CSS file or `data-brand` attribute | Usually at build or app load |
| Density | Compact, comfortable | Mode of spacing and size tokens; `data-density` | Sometimes, per user or per screen |

The axes multiply (2 brands × 3 modes × 2 densities = 12 combinations), so test the combinations that ship, not just each axis alone.

### Token layering for multi-brand

```text
primitives/          raw palettes per brand (brand-a/blue.600, brand-b/teal.600)
brand/               maps each brand's primitives into shared roles (brand.primary, brand.accent)
semantic/            color.action.primary = {brand.primary}  (one file, every brand)
  modes: light, dark, high-contrast
component/ (optional) button.primary.bg = {color.action.primary}
```

### What a brand may and may not change

| Brands may change | Brands may not change |
| --- | --- |
| Palette, typefaces, radius scale, illustration, logo | Component APIs and behavior |
| Elevation style, motion feel within limits | Accessibility guarantees (contrast floors, focus visibility) |
| Density defaults | Semantic token names |

Write this down. Without it, every brand request turns into a fork.

## 4. Code and package architecture

*[Diagram: package dependencies · monorepo]*

Split packages along the layers so each can version and ship on its own schedule and lower layers never import from higher ones. Tokens and icons have no dependencies; the component package wraps an external headless library so it can be swapped without breaking the public API.

### Monorepo layout

```text
packages/
  tokens/        generated outputs + source JSON (no runtime deps)
  icons/         SVG source → React components, sprite, native assets
  react/         styled components; peer deps: react, react-dom
    src/button/  Button.tsx, button.css, Button.test.tsx, Button.stories.tsx, Button.figma.ts
  patterns/      compositions built only from @acme/react
  codemods/      migrations per major
  eslint-plugin/ system lint rules (banned imports, raw values)
apps/
  docs/          docs site
  storybook/     workbench and visual tests
.changeset/      versioning
```

Rules: one folder per component, holding code, styles, tests, stories and the Code Connect file; a public `index.ts` per package and nothing imported from internal paths; dependency direction enforced by lint; each package's `peerDependencies` kept minimal.

## 5. Distribution models compared

How the system reaches products shapes everything else: how updates spread, how much consumers can customize, and how much drift you'll see.

| Model | How it works | Updates | Customization | Drift | Best for |
| --- | --- | --- | --- | --- | --- |
| Versioned npm packages | Products install `@acme/ui`; semver releases | `npm update` + codemods | Props and theming only | Low | Several products, strong governance |
| Copy-in registry (shadcn style) | CLI copies component source into each product | Manual or diff-based | Full: teams own the code | High | Small teams, heavily custom products |
| Hybrid | Tokens and primitives as packages; compositions via a registry | Mixed | Full above the primitive layer | Medium | Mid-size orgs wanting speed and a stable core |
| Web components | Framework-agnostic custom elements | Package updates | Via CSS parts and properties | Low | Many frameworks across the org |
| CDN / hosted CSS | A stylesheet and scripts loaded at runtime | Instant for everyone | Low | Very low | Marketing sites, CMS-driven pages |
| Monorepo source import | Products in the same repo import the system source directly | Immediate | Props and theming | Low, but every change hits everyone at once | One company, one repo |

Whatever the model, tokens should be a separate package or file that every model can consume.

## 6. Multi-platform architecture

Share decisions across platforms, not code. Tokens, principles, content and accessibility requirements are shared; components are built natively on each platform with the same names and APIs where it makes sense.

| Layer | Shared across web, iOS, Android? | How |
| --- | --- | --- |
| Principles, content, voice | Yes | One docs site |
| Tokens | Yes | One JSON source, generated to CSS, Swift and Kotlin/Compose |
| Icons | Yes | One SVG source, exported to each platform's format |
| Component names and anatomy | Mostly | Same names and parts; platform conventions win where they conflict (e.g. iOS action sheets) |
| Component behavior | Partly | Follow each platform's native patterns and accessibility APIs |
| Component code | No (unless cross-platform framework) | Native SwiftUI and Compose libraries, or React Native, or web views |
| Docs | Yes, with platform tabs | One page per component with web, iOS and Android sections |

Rules: platform teams join the same RFCs; a component isn't "done" until each target platform either ships it or documents why not; parity status per component is visible in the docs.

## 7. Figma and documentation architecture

Figma and the docs site mirror the code architecture so a designer, an engineer and an agent all find the same thing in the same place under the same name.

### Figma

```text
[DS] Foundations       variables (_Primitives hidden, Color, Spacing, Radius, Typography), text and effect styles
[DS] Icons             one component per icon, color bound to a semantic variable
[DS] Components – Web  core components; Code Connect mapped; library guidelines attached
[DS] Components – iOS  platform library if components differ
[DS] Patterns          templates and compositions (forms, tables, empty states)
[Brand] Marketing      brand-only assets, separate from product UI
```

Dependencies run one way: Patterns use Components, Components use Foundations and Icons. Product files enable only what they need. See Building the system in Figma, in the Design to Code tab, for the build details.

### Documentation site

| Section | Contents | Source of truth |
| --- | --- | --- |
| Getting started | Install, setup per platform, how to get help | Docs (hand-written) |
| Principles, content, accessibility | Guidance | Docs (hand-written) |
| Foundations | Token tables, color, type, spacing pages | Generated from token JSON |
| Components | Usage guidance + live examples + props | Guidance hand-written; examples from Storybook; props from types |
| Patterns | Problem, solution, components used | Docs (hand-written) |
| Changelog, roadmap, status | Releases, what's coming, component status | Generated from releases and a status file |
| Contributing | Process, templates, definition of done | Docs (hand-written) |
| For agents | `llms.txt` or an agent index, rules file, MCP setup | Generated + hand-written (see the Agentic tab) |

Generate everything that can drift (props, tokens, status) and hand-write everything that needs judgment.

## 8. Reference stacks by team size

Match the architecture to the team that has to maintain it. These are common 2026 combinations, not endorsements; swap any piece for its equivalent.

|  | Solo or tiny (1–2 people, 1 product) | Mid-size (3–8 people, 2–5 products) | Large (8+ people, many products or brands) |
| --- | --- | --- | --- |
| Tokens | Tailwind v4 `@theme` or a CSS variables file | DTCG JSON + Style Dictionary, synced to Figma variables | DTCG JSON in its own package; multi-brand layers; extended collections in Figma |
| Components | shadcn/ui copied in, customized | Own package on Base UI / Radix / React Aria, cva variants | Own packages per layer; possibly web components or native libraries per platform |
| Styling | Tailwind | Tailwind or CSS Modules | Zero-runtime CSS (vanilla-extract, Panda, StyleX) or CSS Modules with token variables |
| Distribution | In-repo | Private npm + Changesets | Monorepo with per-package versions; hybrid registry for compositions |
| Docs | Storybook | Storybook + a docs site | Docs platform (custom, zeroheight, Supernova) + Storybook + agent index |
| Figma | One library file | Split Foundations / Icons / Components | Org libraries, branching, analytics, Check designs |
| Quality | Lint + axe | + visual regression, Code Connect | + policy as code, health dashboard, a11y program |
| Governance | You | Centralized team, intake, releases | Hybrid model, council, RFCs, support policy |

---

# Governing Design Systems (Advanced)

Governance is the set of decision rights, processes and feedback loops that decide what enters the system, what leaves it, and what product teams may do outside it. This tab starts with where governance fits in the product life cycle and the basics every system needs, then goes deeper for systems with several products, many contributors, and real consequences when the system changes. Decision Frameworks and Workflows and Playbooks nest under it.

## 1. Where governance fits in the product life cycle

Governance isn't a phase or a final gate. It runs alongside every phase of the product life cycle as a set of light touchpoints where product work meets the system. Its job is to catch divergence early, while changing course costs a conversation instead of a rebuild, and to feed what product teams learn back into the system.

*[Diagram: product life cycle · 7 phases, governance touchpoint in each]*

| Phase | What the product team is doing | Governance touchpoint | Output |
| --- | --- | --- | --- |
| Discover / strategy | Setting the quarter's goals and bets | System roadmap lined up with product roadmaps; known gaps raised through intake | Shared roadmap commitments |
| Define / requirements | Writing the PRD or brief | Gap check: which components and patterns exist, what's missing; RFC for anything new; system a11y and content standards pulled into requirements | List of system needs, RFCs |
| Design | Exploring and refining flows | Design with libraries; a system rep in crit; exception requests made here, not after build; Check designs | Designs on the system, approved exceptions |
| Build | Implementing | Lint and CI enforce tokens and components; contribution path for gaps; office hours | Code on the system; contributions |
| Test / QA | Verifying | Accessibility review; design QA against the system; visual regression | Sign-offs, bugs filed upstream |
| Launch | Releasing | Adoption measured; exceptions logged with expiry dates | Adoption data, exceptions register |
| Iterate / measure | Learning from use | Analytics and detach data feed intake; local components used by 3+ teams promoted; system deprecations scheduled into product roadmaps | System requests, migrations planned |
| Retire | Sunsetting a feature | Local components removed; system usage counts updated | Cleaner inventory |

### Three things that make this work

- **Shift left.** The cheapest governance happens in Discover and Define, when a product lead hears "that component doesn't exist yet; here's the RFC path" before anyone designs around it.
- **Two life cycles meet here.** Products move through their own cycle; each system component moves through its own life cycle (proposed, beta, stable, deprecated; see the Workflows tab). Governance is the interface between them: product needs become system proposals, and system deprecations become product migration work.
- **Use the product team's rituals.** Add system touchpoints to the planning, PRD templates, crit and definition of done the product team already has, rather than adding meetings.

## 2. Governance basics: team models and contribution

Governance is how the system's decisions get made, and it matters more than any single component. Write down who decides, how to propose a change and how long each step takes, then publish it.

### Team models

| Model | How it works | Works when | Risk |
| --- | --- | --- | --- |
| Solitary | One product team builds a system for itself; others may copy it | Early, one product | Becomes that team's system; others don't trust it |
| Centralized | A dedicated system team builds and supports it for everyone | Several products, budget for a team | Bottleneck; drifts away from product reality |
| Federated | Designers and engineers from product teams own the system together, part-time | Strong culture, peers with time | Nobody's full-time job, so it stalls |
| Hybrid | A small core team owns foundations, quality and releases; product teams contribute components | Most mid-to-large orgs | Needs a clear contribution process to work |

### Contribution workflow

*[Diagram: contribution flow · 5 steps, 1 decision]*

A proposal that fits the system is built with the core team; one that doesn't stays in the product and is promoted once three or more teams need it.

Each contribution size has its own path:

- **Fix** (bug, a11y defect, doc error): open a PR directly; the core team reviews it within a set time (e.g. 2 working days).
- **Enhancement** (new variant or prop): short proposal with use cases from at least two teams, then a PR.
- **New component or pattern:** a full proposal with research, an audit of existing solutions, an API sketch and design, then a paired build.

### Decision-making

- **Decision records.** Log every significant decision (what, why, alternatives, date, who) so it isn't relitigated.
- **Intake and triage.** One front door (a form, board or channel), triaged weekly. Every request gets a yes / not now / no and the reason.
- **Office hours and critiques.** A standing time for teams to bring work, so divergence is caught before it ships.
- **Definition of done.** Design, code, docs, a11y review, tests, Figma, release note. Contributions meet the same bar as core work.

## 3. Decision rights

Most governance fights are arguments about who gets to decide. Publish a decision-rights matrix so every kind of change has exactly one accountable owner and contributors know whom to convince.

**R** = does the work · **A** = makes the call (one per row) · **C** = consulted before · **I** = informed after

| Decision | System lead | System designers | System engineers | Product designers | Product engineers | Accessibility | Brand | Steering group |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Principles and scope (what the system covers) | A | C | C | C | C | C | C | C |
| New primitive token or palette change | C | A/R | R | I | I | C | C | I |
| New semantic token | I | A/R | R | C | C | C | I | — |
| New core component | A | R | R | C | C | C | I | I |
| New variant or prop on a core component | I | A/R | R | C | C | C | — | — |
| Component API naming | C | C | A/R | I | C | — | — | — |
| Accessibility sign-off | I | R | R | — | — | A | — | — |
| Breaking change and its timing | A | R | R | C | C | I | I | C |
| Deprecation of a component | A | R | R | C | C | I | — | I |
| Exception to use a non-system solution | C | C | C | R | R | C | — | A (for core areas) |
| Brand expression (type, color, illustration) | C | C | I | I | I | C | A | I |
| Roadmap priorities | A | C | C | C | C | C | C | C |
| Funding and headcount | C | — | — | — | — | — | — | A |

Rules that keep the matrix honest:

- One A per row. Two accountable people means nobody is.
- Write down the tie-breaker. If the system lead and a product lead disagree, it goes to the steering group within a set time (e.g. 5 working days), not to whoever escalates loudest.
- Accessibility can block as well as advise. If the accessibility lead isn't accountable for sign-off, the system's a11y guarantees are only opinions.
- Revisit the matrix every 6–12 months; decision rights should move as the system matures.

## 4. Operating models and how they evolve

No team model is permanent. Systems usually move from solitary to centralized to hybrid, and evidence should trigger each move, not a reorg. The models are in section 2; this section covers when to change them.

| From → To | Trigger | What to set up first | Risk in the transition |
| --- | --- | --- | --- |
| Solitary → Centralized | A second or third product adopts the system; requests start outpacing one team's spare time | Dedicated headcount, intake, release cadence, a support channel | The original team feels it lost its system; keep them as early adopters |
| Centralized → Hybrid | Backlog grows faster than the core team can build; teams build look-alikes while they wait | Contribution process, definition of done, review capacity, contributor docs | Core team becomes reviewers only and loses craft; protect build time |
| Hybrid → Federated (more) | Strong contributors in most product teams; core work is mostly stewardship | Clear ownership per component area, a guild or council, rotating roles | Nobody owns quality; keep a small core accountable for foundations and releases |
| Any → Platform team | System is infrastructure for many orgs (multiple brands, platforms, companies) | Product management for the system, SLAs, versioned support windows | Distance from product reality; embed liaisons in product teams |

Signs the current model is failing:

- Requests wait more than a quarter, and teams fork components to ship.
- The same component exists in three products with three APIs.
- Contributions sit in review for weeks.
- Nobody can say who owns a component.
- The system team can't name its top three consumers' current priorities.

## 5. Intake, triage and service levels

Every request comes through one front door, gets a type label and a first response within a published time, and is scored the same way. Teams forgive a "no" much faster than silence.

### Request types and response times

| Type | Example | First response | Resolution target |
| --- | --- | --- | --- |
| Bug: blocking | Dialog traps focus permanently; release broke builds | Same working day | Patch within 2 working days |
| Bug: accessibility | Missing label, contrast failure | 2 working days | Next patch release |
| Bug: other | Visual misalignment | 5 working days | Prioritized in triage |
| Question / support | "Which component for this?" | 1 working day | Answered, and docs updated if it was a doc gap |
| Enhancement | New prop or variant | 5 working days | Decision (yes / later / no) within 2 weeks |
| New component or pattern | A new date range picker | 5 working days | Decision within 4 weeks, after an RFC if accepted |
| Exception request | Using a third-party chart library | 5 working days | Decision within 2 weeks (see section 8) |

These numbers are starting points. Publish your own and report against them.

### Triage rubric

Score each accepted request 1–3 on each factor, multiply by the weight, and sort the backlog by the total.

| Factor | Weight | 1 | 3 |
| --- | --- | --- | --- |
| Reach: teams or screens affected | 3 | One team | Most products |
| Severity: user or legal impact | 3 | Cosmetic | Blocks users or fails WCAG |
| Alignment with roadmap and principles | 2 | Tangential | Directly on the roadmap |
| Evidence: research, usage data, repeat requests | 2 | Anecdote | Multiple sources |
| Effort (inverted: smaller is better) | 1 | Weeks | Hours |

### Triage meeting (weekly, 30–45 minutes)

1. New requests: label, score, assign an owner or answer.
2. Aging items: anything past its target gets a decision or a note to the requester.
3. Duplicates: merge and tell everyone involved.
4. Publish the outcome in the channel or board so requesters don't have to ask.

## 6. Contribution at scale

Contribution scales only when contributing costs a product team less than building locally. That takes clear levels, fast reviews and credit.

### Contribution levels

| Level | What the contributor does | System team does | Review gates |
| --- | --- | --- | --- |
| 1. Report | Files a bug or need with screenshots and context | Everything else | Triage only |
| 2. Fix | Opens a PR for a bug, doc or a11y fix | Reviews and releases | Code review, visual diff |
| 3. Extend | Adds a variant or prop after a short proposal | Reviews API and design | API review, design review, a11y check |
| 4. Build | Designs and builds a new component through an RFC, paired with a system designer and engineer | Pairs, reviews, owns after release | RFC approval, design crit, API review, a11y sign-off, docs review |
| 5. Own | Long-term owner of a component area (e.g. data display) | Sets standards, reviews releases | Same as build, plus ownership agreement |

### Making it cheap

- **Contributor guide:** local setup in under 30 minutes, the definition of done, and a worked example PR.
- **Templates:** RFC, component README, Storybook story, test file, Figma component page.
- **Review SLA:** first review within 2 working days; reviewers are scheduled, not volunteered.
- **Pairing for level 4:** a system designer and engineer join the contributor for kickoff and API review.
- **Budget it with product leads:** contribution time is planned work in the product team's sprint, agreed in advance with the team's manager.

### Credit and recognition

- Contributor names in release notes and on the component's docs page.
- A contributors page or leaderboard by quarter.
- Contribution counted in performance reviews, agreed with design and engineering leadership.
- Owners (level 5) get a seat in the design system council.

## 7. RFCs and decision records

Use an RFC (request for comments) before work starts on anything hard to reverse: new components, token architecture changes, breaking changes, new platforms. Use a decision record (ADR) afterward to capture what was decided and why. RFCs prevent wasted builds; ADRs prevent relitigating.

### RFC process

1. **Draft** with the template below. Link real screens and usage data.
2. **Open for comment** for a fixed window (e.g. 5–10 working days), announced in the system channel and to affected teams.
3. **Review** in the weekly system crit; the accountable owner from the decision-rights matrix decides.
4. **Record** the outcome (accepted, accepted with changes, rejected, deferred) in an ADR and link it from the RFC.
5. **Close the loop** with everyone who commented.

### RFC template

```markdown
# RFC: <title>
Status: Draft | In review | Accepted | Rejected | Deferred
Author(s): · Accountable decider: · Comment window closes: <date>

## Problem
What users or teams can't do today. Evidence: screens, counts, research.

## Proposal
The change, with design and API sketches.

## Alternatives considered
Including "do nothing" and "solve it in the product".

## Impact
Who must change what. Breaking? Migration plan? Figma, code, docs, platforms.

## Accessibility
APG pattern, keyboard map, screen reader behavior, risks.

## Open questions
```

### Decision record template

```markdown
# ADR-042: <decision in one line>
Date: · Decider: · Status: Accepted | Superseded by ADR-0xx

## Context
What forced the decision.

## Decision
What we chose.

## Consequences
What gets easier, what gets harder, what we'll revisit and when.
```

Keep ADRs numbered in the system repo. Never delete one; supersede it instead.

## 8. Exceptions and divergence

Teams will diverge from the system, so make sure they do it in the open. A published exception policy turns hidden forks into tracked, temporary decisions and shows the system team where the system falls short.

### Three kinds of divergence

| Kind | Example | Policy |
| --- | --- | --- |
| **Extension** | A product-specific component built from system parts (an invoice row) | Allowed without approval. Must use system tokens and components inside. |
| **Override** | Changing a system component's styling or behavior locally | Allowed for a documented reason, with an issue filed upstream. Tracked by lint (`className` overrides on core components). |
| **Replacement** | Using a non-system component or library for something the system covers (a third-party date picker) | Needs an approved exception with an expiry date. |

### Exception request

A short form covers what the team needs, why the system's version doesn't work, which alternative they'll use, how it meets accessibility requirements and when they'll revisit it. The decider from the matrix approves it, rejects it or offers a faster system fix.

### Rules

- Every exception expires (e.g. 6 months) and gets reviewed. Most become a roadmap item or a removal.
- Exceptions are public. List them in the docs so other teams don't repeat the request.
- Exceptions are feedback. Three exceptions for the same need make a roadmap item.
- **The paved road:** make the system path the fastest path (templates, generators, agent context). Divergence falls when compliance is the easy option.

## 9. Enforcement: quality gates and policy as code

Guidelines that people must remember are suggestions; checks that run automatically are governance. Encode the rules that matter in tooling, and save human review for judgment calls.

### Where each rule is enforced

| Rule | In design (Figma) | In code (editor and CI) | In docs and agents |
| --- | --- | --- | --- |
| No hardcoded colors, spacing, radii | Check designs or a lint plugin flags unbound values | Stylelint / ESLint rules ban raw hex, px outside the scale | Agent instructions say "tokens only" and name them |
| Use system components, not look-alikes | Library analytics: detach rates | Lint bans importing restricted packages or deep paths; codemods catch known look-alikes | Code Connect maps make agents emit system components |
| Accessibility | Contrast checks, focus variants required | axe in unit tests and Storybook; a11y addon set to fail CI | Component docs include keyboard and ARIA requirements |
| Deprecated APIs | Deprecated page, hidden from publishing | `@deprecated` types, lint warnings, then errors after the window | Docs mark deprecated items and name replacements |
| Visual consistency | Library updates reviewed before publish | Visual regression tests on every PR | — |
| Definition of done | Component page checklist in the Figma file | PR template with required checks | Docs page template |

### Severity ladder

1. **Info:** shown in the editor, never blocks.
2. **Warn:** shown in CI, counted on the health dashboard.
3. **Error:** blocks merge. Reserve it for accessibility failures, deprecated APIs past their window, and banned imports.

Move a rule up the ladder only after most teams already comply. Otherwise you train people to disable the linter.

## 10. Versioning, releases and deprecation

Teams come to trust a system one release at a time, through predictable versions, honest changelogs and no breaking change without a migration path.

### Semantic versioning for a design system

| Bump | Code examples | Design examples |
| --- | --- | --- |
| Major (2.0.0) | Removed or renamed prop, component or token; changed default behavior; dropped a framework version | Visual change that alters layout (sizes, spacing), removed variant |
| Minor (1.4.0) | New component, prop, variant or token; deprecation warnings added | New Figma variant or property |
| Patch (1.4.1) | Bug and a11y fixes that don't change the API | Fixing a misaligned layer or wrong token binding |

Decide the gray areas up front. Is a color tweak a patch or a breaking change? (Usually minor, but announce it, because screenshot tests will fail.) Is a new required ARIA prop breaking? (Yes.) Write the policy down.

### Release practice

- Version the whole library or each package, and say which. One version is simpler for consumers; per-package versions suit large monorepos.
- Write changelogs for humans. Group by Breaking / Added / Fixed / Deprecated. Each breaking entry says what to change, with a before/after snippet. Tools like Changesets generate them from PR notes.
- Keep a steady cadence (e.g. minor every two weeks, majors at most once or twice a year) with pre-releases (`next`, `beta`) for early adopters.
- Post release notes in the channels people read (Slack, email), not only in the repo.
- Match Figma releases to code releases, with the same version noted in the library description.

### Deprecation, step by step

1. **Announce** the deprecation and its replacement in a minor release. Mark it in docs and Figma.
2. **Warn** at runtime in development (console warning once per component) and with lint rules or TypeScript `@deprecated`.
3. **Provide a codemod** for mechanical migrations (prop renames, import moves).
4. **Measure** remaining usage across repos.
5. **Remove** in the next major, no sooner than the announced window (e.g. one major or six months).

Migration support is part of the release. For each major, publish a migration guide, offer office hours and pair with heavy users on the upgrade. A major nobody adopts splits your user base in two.

## 11. Support and breaking-change policy

When many products depend on the system, its release policy is a promise. Write it down: which versions get fixes, how much breakage a year is acceptable, and how much notice teams get.

| Policy | A reasonable default |
| --- | --- |
| Supported versions | Current major gets features and fixes; previous major gets security and accessibility fixes for 12 months |
| LTS (long-term support) | Optional, for products with slow release cycles; one LTS major at a time, fixes only |
| Major release frequency | At most 1–2 a year, on a published calendar |
| Breaking-change budget | A cap per major (e.g. changes that need under 1 day of migration per product). Anything larger is split or delayed. |
| Notice period | Deprecations announced at least one minor release and 3 months before removal |
| Migration support | Codemods for mechanical changes, a migration guide per major, office hours, and pairing for the top consumers |
| Visual changes | Announced in release notes even when semver says patch; teams with screenshot tests need warning |
| Hotfixes | Backported to every supported major |

Measure the cost of each major (consumer hours, from a quick survey) and report it. When majors are expensive, teams stop upgrading and the system splits into versions nobody maintains.

## 12. Governance calendar, health reviews and anti-patterns

### Governance calendar

| Cadence | Forum | Who | Purpose |
| --- | --- | --- | --- |
| Weekly | Triage | System team | Score and answer new requests (section 5) |
| Weekly | Office hours | System team + anyone | Unblock teams, catch divergence early |
| Bi-weekly | Design and API crit | System team + contributors | Review RFCs and in-progress components |
| Every release | Release review | System lead, eng lead | Go / no-go, release notes, visual diffs |
| Monthly | Council | Component owners, product design and eng reps, a11y, brand | Roadmap trade-offs, exceptions, cross-team decisions |
| Quarterly | Health review | Steering group | Scorecard below, funding, priorities |
| Yearly | Audit and charter review | All of the above | Inventory, decision-rights matrix, principles |

### Quarterly health scorecard

| Area | Measure | Healthy signal |
| --- | --- | --- |
| Adoption | Share of product UI from the system; repos on latest major | Rising, or stable at a high level |
| Fidelity | Detach and override rates; lint warnings per KLOC | Falling |
| Responsiveness | Requests answered within SLA; median time to decision | Over 90% within SLA |
| Quality | Open a11y defects; regressions shipped | Trending to zero |
| Contribution | Merged contributions from outside the core team | Rising |
| Satisfaction | Consumer survey score | Stable or rising |
| Cost of change | Hours per major migration | Falling |

### Anti-patterns

- **The gatekeeper:** every change needs the system lead. Fix with a decision-rights matrix and delegated ownership.
- **The suggestion box:** requests go in and nothing comes out. Fix with SLAs and public triage.
- **Governance theater:** councils and RFCs for trivial changes. Scale process to risk; fixes don't need an RFC.
- **The shadow system:** a product team quietly builds its own library. Usually a responsiveness failure; talk to them before policing.
- **Lint without help:** errors that tell teams what's wrong but not what to use instead. Every rule message names the replacement.
- **Frozen system:** fear of breaking changes stops all evolution. Use a breaking-change budget and codemods instead of never changing.

---

# Decision Frameworks

The same decisions land on a design system owner's desk again and again. For each recurring scenario, this tab gives the questions that settle it, the realistic options, a default call for when the answers are unclear, and the traps. Treat each default as a starting position to argue against, not a rule. Who makes each call is in the decision-rights matrix on the Governance tab.

## 1. How to decide anything

Before debating the answer, classify the decision. Two questions set how much process it deserves: how hard is it to undo, and how many teams does it reach? Most decisions are small and reversible, and whoever owns them should make them quickly. Only the top-right quadrant needs an RFC.

*[Diagram: decision types · reversibility × blast radius]*

### The six-step method for anything in the top half

1. **Frame it** as a question with options, not a proposal to approve: "How should we support dense tables?" not "Approve CompactTable".
2. **Name the decider** from the decision-rights matrix, and who is consulted.
3. **Gather evidence:** usage counts, audit screenshots, affected teams, the cost of doing nothing.
4. **Test options against principles.** The principle that settles it should be quotable in the decision record.
5. **Decide by a date,** with "disagree and commit" once it's made.
6. **Record and announce** it, with the alternatives you rejected and a date to revisit.

## 2. Quick reference

| Scenario | First question to ask | Default call | Section |
| --- | --- | --- | --- |
| Should this be in the system? | Do 3+ teams need it? | Not yet: build it locally from system parts | 3.1 |
| Variant, prop or new component? | Does the role or keyboard behavior change? | Same role: variant; different role: new component | 3.2 |
| A brand wants its own version | Is the difference visual, structural or behavioral? | Visual goes in brand tokens; never fork the API | 3.3 |
| Two teams want opposite things | Is it the same user problem? | Same problem: add a mode; different: two components | 4.1 |
| Everything is urgent | What does each delay actually cost? | Rank by cost of delay ÷ effort; give interim paths | 4.2 |
| Saying no | What can they do instead? | Decision, reason, alternative, open door | 4.3 |
| A team wants a third-party library | Is it a specialist domain? | One org-wide choice, wrapped in a system component | 5.1 |
| High detach rates | What are people changing? | Treat it as research; add the missing prop or slot | 5.2 |
| A deadline bypasses the system | Is the deadline fixed? | Let them ship with tokens, an expiring exception and a migration owner | 5.3 |
| Breaking change | Can it be additive? | Additive now, deprecate, remove in the next major with a codemod | 6.1 |
| Rebrand or refresh | Are products on semantic tokens? | Ship it as a new theme behind a flag | 6.2 |
| Rewrite or evolve | Can old and new run side by side? | Strangler: replace piece by piece | 6.3 |
| Build or adopt the foundation | How much brand and API control do you need? | Your components on headless primitives | 7.1 |
| Add a platform | Who has that platform's expertise? | Tokens and icons first, components later | 7.2 |
| Accessibility vs brand | Which pairings fail, exactly? | Accessibility is the floor; derive accessible tones from the brand hue | 8.1 |
| Token naming dispute | Does a semantic token already fit? | Reuse, else a semantic token named by role | 8.2 |
| "Let us override styles" | What are they changing, and how often? | Layout overrides allowed; repeated visual ones become props | 8.3 |
| Agent-made contribution | Does it meet the same bar? | Same gates, a named human owner | 9.1 |
| Adopt an AI tool | Which job does it remove? | One-month pilot with an evaluation set | 9.2 |
| Sponsor leaves | Which leader benefits most now? | Bring the scorecard and a story within a month | 10.1 |
| Shadow system appears | Why did they build it? | Fix the cause, offer a merge path | 10.2 |
| Asked to cut scope | What protects the most value? | Keep foundations, quality, support; pause expansion | 10.3 |

## 3. Scope decisions

### 3.1 Does it belong in the system?

*[Diagram: does it belong in the system · 3 questions, 4 outcomes]*

This is the most frequent decision and the one that shapes the system most. The default leans toward *not yet*: a component earns its place by being needed repeatedly, and a local build made from system tokens and parts is a healthy outcome, not a failure. Revisit local builds when a third team asks.

**Traps:** adding a component because one important team asked; building for hypothetical future needs; refusing everything and pushing teams to fork.

### 3.2 New variant, new prop, or new component?

| Signal | Choose |
| --- | --- |
| Same purpose and behavior, different emphasis or size | A **variant** of the existing component |
| Same component, an independent on/off feature | A **boolean prop** (watch the combinations) |
| Same container, unpredictable content | A **slot** |
| Different purpose, behavior or ARIA role, even if it looks similar | A **new component** (Link vs Button, Tag vs Chip) |
| A set of existing components arranged a certain way | A **pattern** |

**Default:** if the accessibility role or keyboard behavior changes, it's a different component. If only the look changes, it's a variant. If the API gains a prop with every request, stop and redesign it around slots or composition.

### 3.3 A brand or product wants its own version of a component

**Ask:** is the difference visual (tokens can do it), structural (layout or parts), or behavioral?

**Default:** visual differences go in the brand's token layer; structural ones in a slot or variant if more than one brand needs them; behavioral differences are a separate component or a local extension. A brand never forks a core component's API.

**Traps:** brand-specific props (`isBrandB`) inside core components.

## 4. Requests and conflicts

### 4.1 Two teams want opposite things

**Situation:** Team A wants the table compact with inline editing; Team B wants it spacious with row-click to a detail page. Both are important consumers.

**Ask:**

1. Are they solving the same user problem, or two different problems that look similar?
2. Can both be met with one API (a `density` prop, an optional editing mode) without a combinatorial mess?
3. Which need is shared by more teams, today and on the roadmap?
4. Does either request conflict with a principle?

| Option | When it fits | Cost |
| --- | --- | --- |
| One component, configurable | Same problem, difference is a mode (density, editable) | API grows; test every combination |
| Two components | Genuinely different problems (a data grid vs a list of links) | More to maintain; clear naming needed |
| Shared primitive, two compositions | Same internals, different behavior | Most design and build work up front |
| Pick one, the other stays local | One need is niche | The other team may feel unserved |

**Default:** go back to the user problem. If it's the same problem, add a mode; if it's different, build two things whose names make the difference obvious. Bring both teams into one review so they hear each other's constraints.

**Traps:** splitting the difference into a component nobody wants; deciding by which team escalates; adding both behaviors as unrelated boolean props.

### 4.2 Everything is urgent

**Situation:** five teams each say their request blocks a launch this quarter.

**Ask:**

1. Which launches are real, dated and visible to leadership? Ask for the date and the consequence of missing it.
2. Which requests have a workaround (a local component, an existing component with limitations)?
3. Which requests overlap so one piece of work serves several teams?
4. What is the cost of delay per request, roughly?

**Default:** rank by cost of delay ÷ effort, favoring work that unblocks several teams at once. Offer every team you can't serve now a sanctioned interim path (a documented local component or an approved exception that expires), and a date. Publish the ranking so the trade-offs are visible.

**Traps:** first-come-first-served; trying to do all five at 20% each; quietly cutting quality (accessibility, docs) to fit; letting the loudest stakeholder set priority. If it happens every quarter, it's a capacity problem: take it to the steering group with numbers.

### 4.3 Saying no well

**Situation:** a request doesn't fit the system.

A good no has four parts:

1. **The decision,** plainly: "We won't add a sixth button variant."
2. **The reason,** tied to a principle or data: "Five variants already cover the 40 uses we audited; a sixth would blur the hierarchy."
3. **The alternative:** "Use `secondary` with an icon, or build a local `PromoButton` from system tokens."
4. **The door left open:** "If two more teams need it, we'll revisit; here's how to flag it."

**Traps:** silence (worse than no); "not now" with no date or criteria; saying yes to avoid conflict and then delivering late.

## 5. Divergence

### 5.1 A team wants to use a third-party library

**Situation:** a team wants a charting library, a rich-text editor or another company's date picker instead of a system component, or because there isn't one.

**Ask:**

1. Does the system cover this today? If yes, what specifically fails for them?
2. Is it a complex domain the system shouldn't own (charts, maps, rich text, video)?
3. Can it be themed with system tokens and meet the accessibility bar?
4. What's the cost of it spreading to other teams: bundle size, licensing, maintenance, inconsistency?

| Option | When it fits |
| --- | --- |
| Approve and wrap | Complex domain the system won't build; wrap it in a thin system component so it's themed, accessible and swappable later |
| Approve as a time-boxed exception | System version is coming; the team can't wait |
| Fix the system instead | The gap is small and others will hit it |
| Decline | The system covers it and the reasons are preference |

**Default:** for specialist domains, adopt one library org-wide and wrap it instead of letting each team pick its own. For anything the system covers, fix the gap or grant a time-boxed exception.

**Traps:** five teams, five chart libraries; approving without an accessibility check; exceptions with no expiry.

### 5.2 A component has high detach or override rates

**Situation:** analytics show a system component is detached in Figma or overridden in code far more than others.

**Ask:**

1. *What* are people changing? Look at a sample of detached instances and overrides.
2. Is it one missing property, a missing slot, or a fundamentally wrong design?
3. Is it one team or many?
4. Is the component used in contexts it wasn't designed for?

| Finding | Response |
| --- | --- |
| Same small change everywhere | Add the property or variant |
| Varied content changes | Add a slot |
| Used for a different job | Document the right component, or build the missing one |
| One team, unusual need | Help them build a local extension |
| Design is wrong | Redesign with the teams that detach most |

**Default:** treat detaches as user research, not violations. Interview two or three of the heaviest detachers before changing anything.

**Traps:** policing instead of listening; adding a prop for every override until the component is unmaintainable.

### 5.3 A deadline means bypassing the system

**Situation:** a launch is in two weeks, and the fastest route is to build custom UI outside the system.

**Ask:**

1. Is the deadline real and fixed?
2. Can the system team pair with them to close the gap in time?
3. What would it cost to bring the custom UI back onto the system after launch?
4. Is there an accessibility or brand risk in shipping it as-is?

**Default:** let them ship, with conditions: build from system tokens even without system components; log it as an exception with an expiry; schedule the migration in their next cycle with a named owner. Pair with them if the gap is something others will need too.

**Traps:** blocking the launch (the system becomes the enemy); approving without the follow-up, so "temporary" becomes permanent; skipping accessibility because it's "just for launch".

## 6. Change

### 6.1 Ship a breaking change, defer it, or avoid it

**Situation:** a better API or design means existing consumers must change code or designs.

**Ask:**

1. Can it be made non-breaking (a new prop alongside the old, an alias, a new component next to the old one)?
2. How many usages are affected, across how many teams? (Measure; don't guess.)
3. Can a codemod do most of the migration?
4. What does *not* changing cost: accessibility bugs, confusion, blocked features?
5. Is there a major release planned soon to bundle it into?

| Option | When it fits |
| --- | --- |
| Additive now, remove later | Almost always possible; ship the new way in a minor, deprecate the old |
| Bundle into the next major | Several breaking changes are queued; keeps upgrades rare |
| Ship a major now | Accessibility or security fix that can't wait |
| Don't change | Benefit is small and migration cost is large |

**Default:** additive first, deprecate with a window, remove in the next scheduled major, with a codemod. Count it against the breaking-change budget.

**Traps:** breaking changes in minors; majors with many unrelated changes and no codemods; visual changes shipped as patches without warning.

### 6.2 A rebrand or visual refresh

**Situation:** brand is changing colors, type or shape, and wants it live everywhere on a date.

**Ask:**

1. Is it a token-level change (colors, type, radius) or does it change components' structure?
2. Are all products on semantic tokens, or do some hardcode values?
3. Must it switch everywhere at once, or can it roll out per product?
4. Do the new colors pass contrast in every mode?

**Default:** treat it as a new theme, not an edit. Build the new brand as a mode or brand layer behind a flag, switch products over individually or all at once when ready, then remove the old theme in a major. Find and fix hardcoded values first, because that's where rebrands fail.

**Traps:** editing primitives in place on launch day; discovering hardcoded values two days before launch; brand overriding accessibility floors.

### 6.3 Rewrite (v2) or evolve

**Situation:** the system's foundations are dated (old styling approach, poor accessibility, inconsistent APIs) and someone proposes starting over.

**Ask:**

1. What exactly is wrong, and can each problem be fixed incrementally?
2. Can old and new run side by side so products migrate one screen at a time?
3. Who maintains v1 while v2 is built, and for how long?
4. What will make teams migrate, and what will it cost them?

| Option | When it fits | Main risk |
| --- | --- | --- |
| Evolve in place | Problems are local (some components, some tokens) | Slow; the old architecture lingers |
| Strangler (new layer alongside old) | Architecture must change but products can't stop | Two systems in production for a long time |
| Full rewrite | Foundations unworkable and few consumers | Long freeze; adoption of v2 stalls |

**Default:** strangler. Ship new foundations (tokens, primitives) that both old and new components can use, rebuild components one by one with codemods, and retire v1 per component rather than all at once.

**Traps:** a v2 that takes a year with no releases; announcing v1's end before v2 is proven; underestimating migration cost for consumers.

## 7. Technology

### 7.1 Build the foundation or adopt one

**Situation:** starting or rebuilding the component layer: build from scratch, build on a headless library, or adopt a full open-source system and theme it.

| Option | Fits when | You give up |
| --- | --- | --- |
| Adopt a full system (Material, Carbon, Fluent) and theme it | Small team, no strong brand requirements, need breadth fast | Visual identity and API control; upgrades on their schedule |
| Build on headless primitives (Base UI, React Aria, Radix) | You need your own look and API with proven accessibility | Some build time; dependency on the primitive library |
| Copy-in starter (shadcn) and own it | Small team, React + Tailwind, heavy customization | Central updates; drift between products |
| Build from scratch | Unusual platform or requirements no library meets | Years of accessibility edge cases you must now own |

**Default:** build your branded components on a headless primitive library, which gives most product companies the best balance of control and accessibility. Wrap it so you can swap the primitive without breaking your public API.

**Traps:** building your own combobox and focus management; adopting a full system and then fighting its look for years.

### 7.2 Add a platform (iOS, Android, another framework)

**Ask:**

1. How many teams and users are on that platform, and what do they use now?
2. Do you have people with that platform's expertise?
3. Can you start with tokens and icons only, before components?

**Default:** expand in layers: tokens and icons first (cheap, high value), then guidance, then native components for the most-used 10–15, built by or with that platform's engineers. Don't promise parity on day one.

**Traps:** web engineers building native components alone; forcing web patterns onto native platforms.

### 7.3 Choose a distribution model

See the comparison in the System Architectures tab. **Default:** versioned packages for anything shared by several products; copy-in for prototypes and highly custom products; tokens as their own package in every case.

## 8. Quality conflicts

### 8.1 Accessibility vs brand

**Situation:** the brand color fails contrast as text or on buttons, or a brand-preferred style hides focus or relies on color alone.

**Ask:**

1. Exactly which pairings fail, at which sizes, in which modes?
2. Can the brand color stay for large or decorative uses while a darker or lighter tone handles text and controls?
3. Is there a legal or contractual accessibility requirement?

**Default:** accessibility is a floor, not a trade-off. Keep the brand hue and derive accessible tones from it (a darker shade for text and fills with white text, the original for large display or decoration). Show the brand team the options side by side; most accept a tone shift when the hue survives.

**Traps:** a one-off exception that becomes the default; fixing it in one product only; shipping "we'll fix it later".

### 8.2 Token naming and tier disputes

**Situation:** someone wants a new token, and the team argues over its name or whether it's semantic or component-level.

**Ask:**

1. Does an existing semantic token already express this role?
2. Is the need a role ("subtle surface for selected rows") or a single component's quirk?
3. Would the name still make sense after a rebrand and in dark mode?

**Default:** reuse an existing semantic token if one fits; otherwise add a semantic token named by role. Add a component token only when one component must diverge from the shared role. Never name tokens by appearance.

**Traps:** a new token for every request; component tokens for everything "just in case"; names that describe color (`blue-bg`).

### 8.3 Flexibility vs consistency ("just let us pass a className")

**Ask:** what are teams trying to change, and how often? If it's the same change, it's a missing prop or variant. If it's varied layout, it's a missing slot or composition API. If it's visual restyling of core components, it's a principle conversation.

**Default:** allow `className` for layout (margins, width, position) and track it; discourage visual overrides with lint; turn repeated overrides into props.

**Traps:** banning all overrides (teams fork instead); allowing all overrides (the system becomes a suggestion).

## 9. AI decisions

### 9.1 Accept a contribution an agent made

**Situation:** a PR or Figma change to the system was largely written by an AI agent.

**Ask:**

1. Does it meet the same definition of done as human work: API review, a11y sign-off, tests, docs?
2. Did a person who understands the change review every line and state, or only skim it?
3. Does it introduce anything new (props, tokens, patterns) that skipped the RFC path?
4. Is the change easy to reverse if something's wrong?

**Default:** judge the change, not the author. Agent-made contributions go through the same contribution level and gates as human ones, with a named human accountable for them. Be strictest on new APIs and tokens and most lenient on mechanical changes (codemods, doc fixes) that tests can verify.

**Traps:** waving through large agent PRs because tests pass; banning agent work outright and losing the productivity; letting agents add tokens or props without the usual decision.

### 9.2 Adopt an AI tool for the system (MCP server, Figma agent, generators)

**Ask:**

1. Which concrete job does it remove or speed up (audits, docs, Figma-to-code, migrations)?
2. Does it read from your sources of truth (tokens, Code Connect, docs), or from its own guesses?
3. Can you measure the effect with a small evaluation set before rolling it out?
4. What data leaves your company, and on which plan or license?

**Default:** pilot one tool on one job for a month with an evaluation set, measure output quality and time saved, then decide. Invest first in the machine-readable layer (types, token descriptions, Code Connect, rules files), because it improves every tool at once.

**Traps:** adopting several tools at once; trusting vendor claims without your own evaluation; generating docs nobody reviews.

## 10. Organization

### 10.1 Your executive sponsor leaves or loses interest

**Ask:** who else benefits most from the system today, with evidence? Which metric would a new sponsor care about?

**Default:** within a month, bring the quarterly scorecard and one strong story to the new leader or the next most-invested leader, framed in their goals. Line up two or three product leads to speak for the system. Don't wait for the budget cycle.

**Traps:** assuming the system's value is self-evident; arguing for the system's survival instead of for what it delivers.

### 10.2 A team is building a shadow system

**Situation:** a product team has quietly started its own component library.

**Ask:**

1. Why? Speed, missing components, a different platform, disagreement with the design, or a team that wasn't consulted?
2. Is anything they built good enough to fold into the main system?
3. Who in their leadership sponsored it?

**Default:** treat it as feedback before it's a violation. Meet them, find what the main system failed to give them, offer a merge path (their best components contributed upstream, the rest migrated), and fix the gap that caused it. Escalate only if they refuse after the gap is addressed.

**Traps:** escalating first; forcing a migration without fixing the cause, so it happens again.

### 10.3 You're asked to cut scope or headcount

**Ask:** which work protects the most value per person: foundations, accessibility, support, or new components?

**Default:** protect, in this order: (1) foundations and releases that products depend on, (2) accessibility and quality fixes, (3) support and responsiveness, (4) new components. Pause expansion (new platforms, new patterns) first. Tell consumers plainly what changes and what stays.

**Traps:** cutting support first, which drives teams to fork; quietly lowering quality instead of visibly lowering scope.

## 11. Decision habits and traps

### Habits

- Name the decision type first (section 1) so the process matches the stakes.
- Decide with data you can show: usage counts, audit screenshots, survey quotes. Shown data turns opinions into trade-offs.
- Write down who decides before the debate starts.
- **Disagree and commit:** once the accountable owner decides, everyone ships it, and the decision gets a review date.
- Record it in a decision record, with the alternatives you rejected and why.
- Revisit on a schedule, not when someone reopens it in a meeting.

### Traps

| Trap | What it looks like | Counter |
| --- | --- | --- |
| Loudest voice wins | Priority follows escalation | Published scoring and decision rights |
| Consensus paralysis | Every decision needs everyone's agreement | One accountable owner; consulted is not a veto |
| Sunk cost | Keeping a component because it took months | Decide on future cost, not past effort |
| Novelty bias | Adopting the newest library or AI tool by default | Pilot with an evaluation set |
| Over-generalizing | Building for every hypothetical use | Wait for three real uses |
| Under-communicating | Decisions made but not announced | Release notes, decision log, a channel post |
| Reopening decided questions | The same debate every quarter | Link the decision record; reopen only with new evidence |

---

# Workflows and Playbooks

Repeatable, step-by-step procedures for the work a design system team does every week. Each playbook names the trigger, the steps in order, who owns each step, and what exists when it's done. Adapt the owners to your team model; keep the order.

## 1. Component lifecycle

*[Diagram: component lifecycle · 6 stages, 1 decision]*

Every component carries one of these statuses in code, Figma and docs at all times. Beta means the API may still change; stable means it follows the support and breaking-change policy; deprecated means it works but warns, with a named replacement and a removal date.

## 2. New component, end to end

**Trigger:** an accepted request for a component that three or more teams need. **Done when:** it's released in code and Figma with docs, and two teams use it.

| # | Step | Owner | Output |
| --- | --- | --- | --- |
| 1 | Audit: collect every existing version across products (screenshots, code links, usage counts) | System designer | Inventory board |
| 2 | Research: interview 2–3 teams on needs and edge cases; check how 3–5 public systems handle it | System designer | Needs list, reference notes |
| 3 | RFC: problem, proposal, API sketch, alternatives, a11y pattern | Designer + engineer | RFC, approved by the accountable owner |
| 4 | Anatomy and API: agree part names and props across Figma and code | Designer + engineer | API spec, naming table |
| 5 | Design: all variants, the full states matrix, every theme, responsive behavior, content rules | System designer | Figma component (draft branch) |
| 6 | Accessibility spec: APG pattern, keyboard map, screen reader output, focus behavior | Designer + a11y | A11y annotations |
| 7 | Build on a headless primitive, with tokens only | System engineer | Component, stories |
| 8 | Tests: unit, interaction, axe, visual regression | System engineer | Green CI |
| 9 | Reviews: design crit, API review, a11y sign-off with a screen reader pass | Reviewers per the decision matrix | Sign-offs |
| 10 | Docs page: summary, when to use, do/don't, props (generated), a11y | Designer | Docs page |
| 11 | Connect: Code Connect mapping, library guidelines, agent docs | Engineer | Mappings |
| 12 | Release as beta: code (prerelease tag) and Figma (marked beta) together | System lead | Release notes |
| 13 | Pilot with 2 teams; fix what they find | System team + pilots | Changes, feedback log |
| 14 | Promote to stable, announce it, and plan migration of the old versions found in step 1 | System lead | Stable release, migration tickets |

## 3. Token change

**Trigger:** a request to add, change or remove a token (a new brand color, a contrast fix, a spacing change). **Done when:** the change is live on every platform and in Figma, with consumers told.

1. **Classify the change.** New token (minor), value change (minor, but a visual change), rename or removal (major). Decide whether it's primitive or semantic; most requests should be semantic.
2. **Check impact.** Search code and Figma analytics for every use of the token. List affected components and products.
3. **Check contrast and modes.** For color, verify every allowed pairing in every mode (light, dark, high contrast, each brand).
4. **Edit the source.** Change the token JSON in the repo on a branch; never edit generated outputs or Figma by hand first.
5. **Build outputs.** CI runs the pipeline (e.g. Style Dictionary) and produces CSS variables, iOS, Android and the Figma variable import.
6. **Visual diff.** Run visual regression across components; review every changed snapshot.
7. **Review.** The accountable owner approves (see the decision-rights matrix); brand approves brand colors; a11y approves contrast-sensitive changes.
8. **Release code and Figma together.** Import into Figma variables on a branch, merge, and publish with the same version number.
9. **Announce.** Release notes with before/after swatches; for renames, a codemod and the deprecation window.
10. **Clean up.** When the window closes, remove the deprecated tokens and confirm nothing references them.

## 4. Design-to-code handoff

**Trigger:** a product feature design is ready to build. **Done when:** shipped UI matches the design using system components, with differences agreed rather than discovered.

1. **Design with the library only.** Every element is a system instance or a documented extension; run Check designs (or a lint plugin) for unbound values and detached instances.
2. **Annotate what the system can't express.** Use Dev Mode annotations for interaction details, edge cases, content rules and accessibility (heading levels, focus order, labels).
3. **Mark frames Ready for dev.** Only those frames are in scope.
4. **Walkthrough (15–30 minutes).** Designer and engineer review states, responsive behavior and anything new. New patterns go to the system team as requests instead of being built as one-offs.
5. **Build from Code Connect.** Engineers (or their agents via the Figma MCP server) get real component code and props, not generated CSS.
6. **Fill gaps the right way.** If a component lacks a prop you need, request it, use a documented extension, or file an exception. Don't fork silently.
7. **Design QA.** Check the build against the frames in a preview environment, on real devices and with a keyboard. Log differences as bugs or agreed changes.
8. **Close the loop.** Update the Figma file to match what shipped, and send any system gaps you hit to intake.

## 5. Release

**Trigger:** the release calendar, or a hotfix. **Done when:** the version is published in every channel and consumers know what changed.

- [ ] Changesets merged; version bump matches the semver policy (check visual changes too)
- [ ] CI green: unit, interaction, axe, visual regression, type checks, bundle size
- [ ] Visual diffs reviewed by a system designer
- [ ] Breaking changes have a migration guide and, where possible, a codemod
- [ ] Prerelease tested by at least one consuming product (for minors and majors)
- [ ] Figma library changes merged from branch and published with the same version in the description
- [ ] Docs site deployed; changelog and props tables regenerated
- [ ] Code Connect mappings and agent docs updated for new or changed APIs
- [ ] Packages published; tags pushed
- [ ] Release notes posted where teams read them, with before/after visuals and who contributed
- [ ] Watch the support channel for 48 hours; be ready to hotfix

## 6. Deprecation and migration at scale

**Trigger:** a component, prop or token is being replaced. **Done when:** usage reaches zero and the old API is removed in a major.

1. **Measure usage** across all repos (import scans) and Figma (library analytics). List consumers by size.
2. **Ship the replacement first,** stable and documented. Never deprecate into a gap.
3. **Announce** in a minor release: what's deprecated, the replacement, the removal date, and the migration guide.
4. **Mark it everywhere:** `@deprecated` in types, a dev-only console warning (once per component), a lint rule at warn, "Deprecated/" in Figma with the replacement in the description, a banner on the docs page.
5. **Automate the move:** a codemod for mechanical changes; in Figma, swap instances with the library swap tools.
6. **Run migration sprints** with the largest consumers: pair, run the codemod, fix the rest.
7. **Track the burndown** of remaining usages weekly and publish it.
8. **Escalate the lint rule** to error once the deadline passes.
9. **Remove** in the next major; confirm zero references; close the ADR.

## 7. Interface inventory and system audit

**Trigger:** starting a system, before a major version, or yearly. **Done when:** you have a prioritized list of what to build, merge, fix and remove.

1. **Scope it:** which products, platforms and flows. Pick the top 10–20 flows by traffic.
2. **Screenshot and collect** every instance of each UI category (buttons, inputs, modals, tables, colors, type sizes) into a shared board, grouped by category. This is Brad Frost's interface inventory.
3. **Scan the code:** count imports of system vs. local components, raw hex values, unique font sizes and spacing values.
4. **Pull Figma analytics:** inserts, detaches and the most overridden components.
5. **Run accessibility checks:** automated scans of key flows plus a keyboard pass.
6. **Score each category** on inconsistency (number of variations), usage, and accessibility risk.
7. **Decide per category:** adopt (system version exists, migrate), build (no system version), fix (system version has gaps), or retire.
8. **Publish the findings** with the most striking examples ("27 button styles, 61 grays"). The findings are your best tool for buy-in.
9. **Turn it into the roadmap** and re-run the counts each quarter to show progress.

## 8. Onboarding a product team

**Trigger:** a product team adopts the system, or a new hire joins. **Done when:** the team ships a feature with the system without help.

| Week | Activity | Output |
| --- | --- | --- |
| 0 | Kickoff with the team's design and eng leads: their roadmap, constraints, existing UI | Adoption plan with a first target flow |
| 1 | Setup: install packages, enable Figma libraries, configure lint, add agent context to their repo | Working setup in their codebase |
| 1 | Training: 60-minute walkthrough of tokens, components, docs, how to ask for help and contribute | Recording and slides |
| 2–4 | First flow built with a system pairing partner; office hours available | One shipped flow |
| 4 | Retro: what was missing, confusing or slow | Requests filed, docs fixed |
| Ongoing | A named champion in the team joins the champions network | Champion |

Hand the team a starter kit: a getting-started page, a page template in Figma, a starter repo or generator, the support channel, and a list of the 10 components that cover most screens.

## 9. Accessibility review and regression hotfix

### Accessibility review (for every new or changed interactive component)

1. **Spec check:** the component maps to an APG pattern; deviations are justified in the RFC.
2. **Automated:** axe passes in Storybook for every story and theme.
3. **Keyboard:** reach every control with Tab; operate it with the documented keys; focus is always visible; Escape and focus return work.
4. **Screen reader:** VoiceOver + Safari and NVDA + Chrome or Firefox. Check that name, role, state and changes are announced correctly.
5. **Zoom and reflow:** nothing is lost at 200% zoom or at 320px width.
6. **Motion and contrast:** the component respects reduced motion, and contrast is checked in every mode.
7. **Sign-off** by the accessibility owner; known limitations listed on the docs page.

### Regression hotfix (a release broke something)

1. **Acknowledge** in the support channel within an hour, with what's known and a workaround (e.g. pin the previous version).
2. **Assess** severity and scope: which versions, which components, which products.
3. **Fix or revert:** if the fix isn't obvious within a few hours, revert the change and release.
4. **Release a patch** and backport it to supported majors.
5. **Verify** with the teams who reported it.
6. **Post-incident review** within a week: blameless, with one or two concrete process changes (e.g. a missing visual test).
7. **Communicate** the outcome in the next release notes.

## 10. First 90 days

**Trigger:** you're starting a system from nothing, or you've just inherited one (new job, reorg, the previous owner left). **Done when:** you have a charter people agreed to, one shipped win teams noticed, and a roadmap for the next two quarters.

The first 90 days decide whether the system is seen as a service or as a tax. Listen before you build, ship something small and visible early, and leave the big rewrite until you've earned trust.

| Phase | Weeks | Goal | Do | Output |
| --- | --- | --- | --- | --- |
| Listen | 1–4 | Know what exists and what hurts | Interview 8–12 people across design, engineering, product and accessibility. Run an interface inventory (playbook 7). Read the code: how components are installed, versioned and overridden. Check Figma library analytics and code usage | A findings doc: top 5 pains, what to keep, what to stop |
| Decide | 5–8 | Agree what the system is for | Draft the charter (vision, scope, non-goals). Pick the team model and decision rights. Choose 1–2 quick wins from the pains. Present findings to leadership with a cost-of-doing-nothing number | Signed-off charter, RACI, quick-win plan |
| Deliver | 9–13 | Prove value and set the rhythm | Ship the quick wins. Start a release cadence, changelog and office hours. Set up intake. Pick 2–3 adoption metrics and take a baseline | First release, intake channel, baseline metrics, two-quarter roadmap |

### If you're inheriting a system

- Don't announce a v2. Find out why the current one looks the way it does; most odd decisions had a reason.
- Map who depends on what before changing anything: which apps pin which versions, which teams forked.
- Fix trust first: stale docs, broken Figma links, unanswered requests. These fixes are cheap, and everyone notices them.
- Keep the previous owner's contributors close. They become either your first champions or your loudest critics.

### If you're starting from zero

- Start with tokens and the 5–8 components every team rebuilds (Button, Input, Select, Checkbox, Dialog, Toast, Card, Table), not a full A–Z.
- Pull them out of the best existing product code rather than designing from a blank file.
- Pilot with one product team that ships often, then expand.
- Write the contribution model on day one, even if you're the only contributor.

### Quick wins that work

- A token set that fixes color contrast failures across products.
- One component every team rebuilds, shipped with docs, Figma and code in parity.
- A searchable docs site or a working Figma library search.
- A response-time promise on requests (for example, two business days) that you keep.

Read next: Strategy and Leadership for the charter and roadmap, Governance for team models and decision rights, and Decision Frameworks section 10 for the organizational calls you'll face.

---

# Strategy and Leadership

A design system is a product whose customers are product teams, and it needs the same things any product needs: a clear charter, a roadmap, funding, sponsors and proof of value. This tab is for the person accountable for the system as a program, not just its components.

## 1. Vision, charter and scope

Write a one-page charter before building anything big. It settles scope arguments in advance and gives sponsors something to sign.

```markdown
# <System name> charter

## Mission (one sentence)
Help <which teams> ship <what quality> faster by <how>.

## Customers
Which products, platforms and teams are in scope this year. Which are explicitly not.

## What we own
Tokens, core components, Figma libraries, docs, accessibility of system parts, releases.

## What we don't own
Product-specific components, page layouts, product accessibility beyond our parts, marketing sites.

## Principles
3–5, each one a trade-off (see Foundations, section 2).

## Success measures
3–4 metrics with targets for the year (see section 7).

## Team and decision rights
Who is on the team; link to the decision-rights matrix.

## Sponsor
The executive who funds it and breaks ties.
```

The usual scope traps are saying yes to every platform at once, owning product-specific components "just for now", and promising a full redesign alongside a system launch. Start narrow (one platform, the 10–15 components that cover most screens) and expand on evidence.

## 2. Team structure and roles

A system team is a small product team. In a small team one person can hold several of these roles, but none of the work can be skipped.

| Role | Owns | Typical first hire when |
| --- | --- | --- |
| System lead (design or eng) | Strategy, roadmap, stakeholders, decision rights | Day one; often a staff designer or engineer |
| Product designer(s) | Foundations, component design, Figma libraries, guidance | Day one |
| Design engineer / front-end engineer(s) | Component code, tokens pipeline, tooling, releases | Day one; a design engineer who does both is the most valuable early hire |
| Accessibility specialist | Standards, reviews, sign-off, training | Once several products depend on the system, or sooner in regulated industries |
| Content designer | Voice, UI copy standards, docs writing | When docs and patterns grow |
| Product / program manager | Intake, roadmap process, adoption programs, reporting | Past \~5 people or \~5 consuming teams |
| Developer experience / tooling engineer | Lint, codemods, CI, agent context, analytics | When migrations and enforcement become the bottleneck |
| Platform engineers (iOS, Android) | Native libraries | When those platforms are in scope |

Quoted ratios vary widely. A common heuristic is roughly one system team member per 10–20 product designers and engineers served. Treat it as a starting point for the conversation; your backlog age and SLA performance tell you more.

Career paths need deliberate attention, because systems work is easy to under-recognize. Define what senior and staff impact look like here (influence across teams, adoption, quality outcomes) so people can grow without leaving the system.

## 3. Roadmapping

A system roadmap balances four kinds of work. If any one gets zero capacity for a quarter, the system drifts: no new components and teams fork; no adoption work and nobody migrates; no debt work and quality erodes.

| Bucket | Examples | Typical share of capacity |
| --- | --- | --- |
| Foundations | Tokens, theming, dark mode, type scale, accessibility baselines | 15–25% |
| Components and patterns | New components, variants, patterns | 30–40% |
| Adoption and support | Office hours, migrations, onboarding, docs, agent context | 20–30% |
| Quality and debt | Bugs, a11y fixes, test coverage, tooling, dependency upgrades | 15–25% |

The shares are a starting point; shift them deliberately and say why.

### Practices

- Roadmap by outcome. "Checkout and admin can ship forms without custom inputs by Q2" beats "Build DatePicker".
- Tie items to consumers' roadmaps. Ask each top consumer for their next two quarters, and line system work up with what they'll build.
- Publish a now / next / later view with confidence levels in the docs.
- Reserve 10–15% of capacity for unplanned work so urgent requests don't break commitments.
- Review the roadmap quarterly with the steering group, alongside the health scorecard.

## 4. Funding and headcount

### Funding models

| Model | How it works | Strength | Weakness |
| --- | --- | --- | --- |
| Central platform budget | Funded like infrastructure from a shared budget | Stable; long-term work possible | Must keep proving value to stay funded |
| Tax / chargeback | Each product org contributes headcount or budget | Consumers feel ownership | Funders expect priority for their requests |
| Project-funded | Tied to a launch, rebrand or redesign | Easy to start | Ends when the project ends; the system decays |
| Volunteer / side project | Time borrowed from product teams | Free to start | Stalls when priorities shift; rarely survives a year |

Most durable systems move to a central platform budget once three or more products depend on them.

### The business case

Build it from your own numbers; borrowed industry stats persuade nobody.

1. **Duplication cost:** from the audit, count duplicate implementations (e.g. 9 date pickers) × estimated build and maintenance hours each.
2. **Speed:** time to build a typical screen with and without the system, measured on a pilot.
3. **Quality and risk:** accessibility defects found per release, the cost of an audit or legal exposure, how long a rebrand would take today.
4. **Consistency:** user-facing evidence (support tickets, usability findings) caused by inconsistent UI.
5. **The ask:** headcount, timeline, and what you'll report each quarter.

Present it as leverage: one fix, or one brand change, ships to every product.

## 5. Stakeholders and influence

The system team rarely has authority over the teams it serves, so it leads through influence: being useful, being visible, and making allies.

| Stakeholder | What they care about | What to bring them |
| --- | --- | --- |
| Executive sponsor | Speed, cost, brand, risk | Quarterly scorecard, one strong story, the next ask |
| Product design leads | Quality, craft, their team's time | Early input on RFCs, faster delivery, credit for contributions |
| Engineering leads | Velocity, stability, upgrade cost | Clear versioning, codemods, low-cost upgrades, performance numbers |
| Product managers | Shipping their roadmap | System work lined up with their dates; no surprise breakage |
| Brand and marketing | Consistent expression | A seat on brand-related decisions; brand tokens they control |
| Accessibility and legal | Compliance | Conformance status per component, audit trail |
| Individual designers and engineers | Getting unblocked today | Fast answers, good docs, working agent context |

### Habits that build influence

- Build a champions network: one person per product team, with early access and a monthly call.
- Run demo days with before/after screens built in hours instead of weeks.
- When you say no, offer an alternative and give the reason.
- Make other people look good: credit contributors and the teams that adopted first in every update.
- Meet teams in their rituals. Join their planning and design reviews instead of asking them to come to yours.

## 6. Maturity assessment

Use this to find where you are and what to work on next. The stages follow the shape of Sparkbox's [Design System Maturity Model](https://sparkbox.com/foundry/design_system_maturity_model); the checks are this guide's.

| Area | Stage 1: Building v1 | Stage 2: Growing adoption | Stage 3: Scaling | Stage 4: Healthy product |
| --- | --- | --- | --- | --- |
| Foundations | Ad-hoc styles; some variables | Token file, light/dark | Tiered tokens, pipeline, Figma variables in sync | Multi-brand/modes, contrast checks in CI |
| Components | A handful, one platform | Core set (\~15–25) with docs | Full set, beta/stable statuses, a11y sign-off | Patterns layer; parity across platforms |
| Adoption | One product | Several products, measured manually | Measured automatically; most new UI uses the system | Migration of legacy UI largely done |
| Governance | Informal | Intake and releases | Decision rights, RFCs, contribution levels | Support policy, council, health reviews |
| Team and funding | Side project | Dedicated people | Funded team with a lead and roadmap | Platform budget, career paths, PM |
| Agents and tooling | None | Lint for raw values | Code Connect, MCP, agent docs | Agents in maintenance workflows with review gates; evals |

Score each area, pick the one or two weakest that block the most, and make them next quarter's focus. Don't try to move every row at once.

## 7. Reporting value

Report quarterly in one page. Lead with outcomes in the business's language, then the evidence.

```markdown
# <System> — Q<n> report

## Headline
One sentence: what changed for product teams this quarter.

## Outcomes
- Adoption: <x>% of product UI from the system (was <y>%)
- Speed: <team> built <flow> in <n> days using the system (previous comparable: <m> days)
- Quality: <n> accessibility defects fixed at the source, shipped to <k> products
- Satisfaction: consumer score <s> (was <t>)

## Shipped
Top 3–5 releases, with the teams who asked for them.

## Responsiveness
Requests answered within SLA: <p>%. Median time to decision: <d> days.

## Story
One team's before/after, in their words.

## Next quarter
Top 3 outcomes we're committing to.

## Asks
Decisions or support needed from leadership.
```

Keep the metrics stable from quarter to quarter so trends are visible, and pair every number with a real example.

## 8. Adoption and measuring success

A system that isn't used doesn't exist. Measure adoption, quality and speed, and report them in terms leadership already cares about: time to ship, defects and consistency.

### Metrics that matter

| Area | Metric | How to collect it |
| --- | --- | --- |
| Adoption (code) | Share of UI components in product code that come from the system; number of repos on the latest major | Static analysis of imports (e.g. a script scanning JSX), dependency scans |
| Adoption (design) | Library inserts per week; share of Figma files using the library | Figma library analytics |
| Fidelity | Detach rate and override rate per component | Figma library analytics; `className` override counts in code |
| Coverage | Share of recurring UI needs met by the system; open requests by age | Audits, intake board |
| Quality | Open a11y and bug defects per component; time to fix | Issue tracker labels |
| Speed | Time from design to shipped for a typical feature, before vs. after; time to build a new screen | Team estimates, cycle-time data |
| Satisfaction | Designer and engineer satisfaction score; would-recommend | Quarterly survey (keep it to 5 questions) |
| Freshness | Versions behind latest, per product | Dependency scans |

A high detach rate shows where the system doesn't fit real needs. Interview the teams before blaming them.

### Driving adoption

- Make the right thing the easy thing: templates, starter kits, a CLI or copy-paste snippets, good defaults.
- Embed early. Join kickoff and design review for new projects instead of auditing after launch.
- Name champions in each product team who get early access and a voice in the roadmap.
- Offer migration help for legacy screens: codemods, office hours, pairing.
- Share wins where product teams used the system to ship faster.

### Making the case to leadership

- Frame it as leverage: one fix ships to every product.
- Show the cost of the status quo: count duplicated buttons, modals or date pickers across products, and the hours each one took.
- Show the risk: accessibility lawsuits and audits, rebrand cost, inconsistent experience across a suite.
- Tie the roadmap to company goals (e.g. a dark mode for a key customer, a rebrand date, an accessibility commitment).

---

# Agentic Design Systems

A design system now has two kinds of users: people, and AI agents that read the system and generate UI with it. This tab is written for two roles. Builders make the system legible and enforceable for agents, and use agents to maintain it. Consumers use agents to design and build product UI that stays inside the system.

## 1. How agents use a design system

*[Diagram: agent loop · 4 context sources, 1 check gate]*

Builders own the left column and the checks: context the agent can retrieve, and gates it can run on itself. Consumers write the prompt, review the output, and log every mistake so the next round of rules and lint catches it.

## 2. Current tools (October 2026)

The plumbing has settled. Most mature public systems now ship an MCP server that agents query for components, tokens and guidance, often alongside skills (on-demand instruction packs) and a short rules file. Documentation lags behind: in zeroheight's 2026 survey, 48% of teams run an MCP server but only 17% rate their docs "very AI-ready" ([zeroheight](https://zeroheight.com/resources/state-of-ai-in-design-systems/)).

| Tool | For builders | For consumers | Status |
| --- | --- | --- | --- |
| [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts) | Search libraries, add Code Connect maps, generate a rules file (`create_design_system_rules`) | Design context, variables, screenshots and Code Connect snippets from a frame link | GA; some tools remote-only |
| [Figma write-to-canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas) | Agents create components, variants, variables and auto layout from your library | Generate screens in Figma from system components | Beta; Professional plan and up |
| [Figma agent](https://www.figma.com/blog/figma-agent-and-design-systems/) | Adherence audits, bulk swaps, naming cleanup, draft docs | Generate and remix designs | Open beta, paid plans |
| [Figma library guidelines](https://help.figma.com/hc/en-us/articles/43509372175511-Add-guidelines-files-to-a-design-library) | Markdown rules attached to a library for Figma's agent (3–8 files, under 100 KB) | Agent follows your rules automatically | Beta; not used by MCP or Make |
| [Code Connect](https://developers.figma.com/docs/code-connect) | Map Figma components to real code (`.figma.ts` templates or in-Figma UI) | Agents import your components instead of guessing | GA; Professional and up |
| [Figma Make kits](https://help.figma.com/hc/en-us/articles/43602393097239-Write-design-system-guidelines-for-Make-kits) | Package your npm library + guidelines folder | Prototypes built from real components | Shipping |
| [Storybook MCP](https://storybook.js.org/docs/ai/mcp/overview) | Component manifest from stories, JSDoc and docgen | List and show docs, preview stories, run tests with a11y results | Preview |
| [shadcn MCP and skills](https://ui.shadcn.com/docs/mcp) | Private namespaced registries | Agents browse, search and install registry items | GA |
| [v0 Design Systems 2.0](https://v0.app/docs/design-systems-2) | Import a package, repo, Figma or Storybook; saved as a team skill | v0 builds only with components and props it can verify | Shipping |
| [Atlassian ADS](https://atlassian.design/get-started/develop/with-ai) | ESLint `ensure-design-token-usage`; DESIGN.md | Public MCP server, CLI (`ads-cli docs button`) | Public |
| [IBM Carbon MCP](https://carbondesignsystem.com/developing/carbon-mcp/overview/) | — | Components, tokens, icons, guidance for React and Web Components | Public preview |
| [GitHub Primer MCP](https://primer.style/product/getting-started/foundations/mcp) | Token lint for CSS | 21 tools incl. components, patterns, tokens, alt-text review | Shipping |
| [Shopify Polaris (Dev MCP)](https://shopify.dev/docs/api/polaris/using-mcp) | — | Polaris web components across Shopify surfaces | Shipping |
| [Supernova MCP](https://www.supernova.io/blog/design-system-mcp-servers) | Read and write docs, tokens, components | Retrieval | Shipping (vendor source only) |
| zeroheight MCP, [Knapsack](https://docs.knapsack.cloud/intelligent-tools) | Drift checks (Knapsack add-on) | Read-only docs retrieval | Shipping |
| [AGENTS.md / CLAUDE.md](https://code.claude.com/docs/en/memory) | Repo rules files; path-scoped rules | Agents follow repo conventions | De facto standard |
| [llms.txt](https://llmstxt.org/) | Markdown index of your docs site | Agents find the right page | Informal proposal, widely used |

### What practitioners report (zeroheight, 2026, 123 respondents)

- 82% use AI in some form; 74% use Claude and 56% Figma Make.
- Documentation is where teams are most satisfied with AI (63%); design generation has a net satisfaction of −53.
- 59% see AI-built UI bypassing the system, and 50% say it's causing real problems.

zeroheight's own webinar pages quote different headline numbers, so treat these figures as directional.

## 3. Builder: making a system agent-ready

An agent-ready system lets an agent find the right component, use it with valid props and tokens, and check its own work, without a human pasting docs into the chat. Build each layer below on top of what you already have.

| Layer | What to provide | Why it matters to agents |
| --- | --- | --- |
| Tokens | DTCG JSON with a `$description` on every token; semantic names | Agents pick tokens by meaning; descriptions stop `gray-600` guesses |
| Component types | Precise TypeScript props with JSDoc on every prop and an `@summary` on each export | Agents read types first; comments explain intent |
| Stories | One concept per story, with a summary of when to use it; tag deprecated or anti-pattern stories `!manifest` (Storybook) so agents don't learn from them | Stories become the agent's examples ([Storybook AI best practices](https://storybook.js.org/docs/ai/best-practices)) |
| Code Connect | A mapping for every Figma component | Figma-to-code agents import real components instead of rebuilding them |
| Figma hygiene | Semantic layer names, every value bound to a variable, component properties named like code props | The MCP server passes these names straight to the agent |
| Retrieval | An MCP server (your docs platform's, Storybook's, or your own) and/or skills | Agents fetch just what they need |
| Entry point | A short `AGENTS.md` / `CLAUDE.md` in consuming repos that names the system, its MCP or skill, and the hard rules | The one file every agent reads first |
| Docs index | `llms.txt` plus a Markdown version of each docs page | Agents can find and read docs without scraping HTML |
| Guardrails | Lint rules for raw values and banned imports; a11y tests runnable by the agent | Enforced at no token cost; agents fix their own errors |

Retrieval works better than dumping everything into context. Atlassian built the same login screen with four kinds of context and found that a single DESIGN.md file used about 92% more tokens than its MCP server (7.21M vs 3.75M average), varied far more between runs, and led the agent to re-create components instead of importing them. Atlassian recommends MCP or skills for production work, paired with lint rules, and DESIGN.md for art direction and quick prototypes. They note the results aren't conclusive ([Atlassian](https://www.atlassian.com/blog/how-we-build/atlassians-design-md-is-here-what-we-learned-testing-portable-design-context-in-practice)).

## 4. Builder: writing guidance agents follow

Agents follow written rules literally, so write fewer, sharper rules about the things they can't infer. For library and Make-kit guidelines, Figma recommends many small files linked from an overview, starting with color, spacing and radius because those affect output most ([Figma](https://help.figma.com/hc/en-us/articles/43602393097239-Write-design-system-guidelines-for-Make-kits)).

### Structure

```text
guidelines/
  Guidelines.md        overview: what the system is, how to import it, the 10 hard rules, links below
  setup.md             packages, providers, CSS imports, build config
  foundations/
    color.md           semantic roles, allowed pairings, what never to do
    spacing.md
    typography.md
  components/
    button.md          when to use, when not, props, do/avoid examples
    dialog.md
  composition/
    forms.md           how components combine into patterns
  anti-patterns.md     the mistakes agents actually make, with fixes
```

### Writing rules

- Be imperative and specific: "Use `Button variant=\"primary\"` at most once per view" beats "Use primary buttons sparingly".
- Give a do, an avoid and a why for every rule that matters, with a code example of each.
- Use decision trees for look-alikes: "Navigates? Link. Acts? Button. Sets a value from a list? Select."
- Name exact tokens and props, never descriptions of them.
- Cut generic design advice. Agents already know "use whitespace"; tell them what's unique to your system.
- Keep entry files short. Claude Code's docs suggest keeping each rules file under about 200 lines and using path-scoped rules for specifics ([Claude Code](https://code.claude.com/docs/en/memory)).
- Don't let files contradict or duplicate each other; agents can't resolve the conflict.
- Grow anti-patterns.md from real output: every time an agent gets something wrong, add the case and the fix.

### Example entry file for a consuming repo

```markdown
# UI rules

This app uses the Acme design system (@acme/react, @acme/tokens).

- Look up components and props with the acme-ds MCP server before writing UI. Never invent props.
- Use only Acme components for buttons, inputs, menus, dialogs, tables. Never build these from div.
- Colors, spacing, radius and type come from tokens. No hex, rgb or px literals in styles.
- Every interactive element needs an accessible name. Icon-only buttons use IconButton with label.
- Run `npm run lint && npm run test:a11y` before finishing. Fix every error.
- If a component is missing, stop and say so. Don't build a replacement.
```

## 5. Builder: agents that maintain the system

Agents are best at the high-volume, low-judgment work that eats a system team's week. Keep humans in charge of what belongs in the system, naming, visual quality and anything breaking.

| Task | What the agent does | Review gate |
| --- | --- | --- |
| Design audits | Finds hard-coded values, duplicate and detached components in Figma (Figma agent, Check designs) | Designer triages findings |
| Code audits | Scans repos for raw values, look-alike components, deprecated APIs | System team prioritizes |
| Token changes | Edits token JSON, regenerates outputs, opens a PR with visual diffs | Owner approves; brand and a11y where relevant |
| Bulk Figma changes | Swaps components and tokens, fixes naming (`small` → `sm`) | Test on a duplicate library first; review before publish |
| Migrations | Runs codemods across repos and fixes what codemods miss | Spot-check and merge per repo |
| Docs | Drafts component pages from code, stories and ADRs | Human edits for judgment: when to use, do/don't |
| Code Connect | Suggests and writes mappings | Engineer verifies props map correctly |
| Specs for other platforms | Generates platform specs from one source (Uber uses skills to spec seven platforms) | Platform leads review |
| Triage | Labels and de-duplicates incoming requests, drafts answers from docs | System team sends or edits |

Prefer deterministic tools where they exist. Figma's AI-workflows guidance splits work between skills (judgment) and plugins or scripts (deterministic). For anything you can specify exactly, a lint rule or codemod is cheaper and more reliable than an agent.

## 6. Consumer: building product UI with agents

The goal is product UI that an agent builds faster and that a reviewer can't tell apart from careful, hand-built system work.

### Setup (once per repo)

1. Install the system packages and its lint plugin.
2. Connect the system's MCP server (or skill) and the Figma MCP server to your agent.
3. Add the entry rules file (see section 4) naming the system, its MCP, and the checks to run.
4. Make the checks runnable by the agent: `lint`, `typecheck`, `test:a11y`, Storybook tests.

### Prompting

- Start from the system, not a blank page: "Build the billing settings page using Acme components. Look up Field, Select and Switch first."
- Give the design source: a Figma frame link, or a description that names components and states.
- Name the states: loading, empty, error, disabled, long content, mobile.
- Work in small steps: one component or section at a time, reviewed before the next.
- Tell it what not to do: "Don't add new components; if something is missing, list it."
- Ask for a self-check: "Run lint and a11y tests and fix every issue before you finish."

### Review what agents get wrong most

| Check | Look for |
| --- | --- |
| Imports | Only from the system's public entry; no local look-alikes |
| Props | Every prop exists and uses allowed values; no invented variants |
| Values | No raw colors, px or font sizes; tokens everywhere |
| States | All states handled, not just the happy path |
| Accessibility | Names on icon buttons, labels on fields, focus order, headings |
| Content | Copy follows voice and casing rules |
| Gaps | Anything missing from the system logged as a request, not hacked around |

## 7. Consumer: Figma to code, and agent-generated designs

### Figma → code

1. Design with library components only, with variables bound and layers named.
2. Paste the frame link into an agent connected to the Figma MCP server. It calls the design-context tool, which returns structure, variables and any Code Connect snippets.
3. Pair it with the system's own MCP so the agent can check props and guidance.
4. Start narrow (one card or section) and expand once the output is right.
5. Without Code Connect, the agent gets generic React + Tailwind and has to guess which components to use; with it, it imports yours. Figma's guidance puts it bluntly: without the mapping, "the model is guessing" ([Figma](https://www.figma.com/blog/design-systems-ai-mcp/)).

### Agent-generated designs in Figma

- Write-to-canvas (beta) lets an agent build frames, components and variables in Figma using your libraries, via Figma's `figma-use` and `figma-generate-design` skills ([Figma](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas)).
- Name the libraries, components and modes in the prompt; build in steps in the same session so the agent keeps context.
- Treat output as a draft: before handoff, check that every element is a library instance and every value is bound.

### Prototyping with the real system

| Option | How it gets your system | Good for |
| --- | --- | --- |
| Figma Make + a kit | Your npm package plus a guidelines folder | Clickable prototypes from designers |
| v0 Design Systems 2.0 | Imports your package, repo, Figma or Storybook; team default enforced | Fast coded prototypes |
| Agent in a starter repo | Your packages, MCP and rules file | Prototypes that can become production code |

Brad Frost calls this "DS+AI": coded prototypes built only from system components, rather than unconstrained vibe coding ([Brad Frost](https://bradfrost.com/blog/post/agentic-design-systems-in-2026/)).

## 8. Consumer: a prototyping environment for product designers

If product designers are going to prototype with the Figma MCP server, the design system team should hand them a paved road: one preconfigured starter repo. With it, a designer goes from a Figma frame to a shareable coded prototype without any engineering setup, and every prototype is built from real system components.

*[Diagram: designer prototyping environment]*

### Three ways designers can prototype

| Route | What the designer does | Output | Best for |
| --- | --- | --- | --- |
| Agent + Figma MCP + starter repo | Pastes a frame link and a prompt into Claude Code or Cursor | Coded prototype on real components, with a preview URL | Realistic interaction, data states, usability tests, handoff |
| Figma Make with your kit | Prompts inside Figma Make, using the kit the system team published | Prototype in Figma's environment | Quick explorations without a local setup |
| Write-to-canvas | An agent builds frames in Figma from your libraries (beta) | Figma designs, not code | Generating variations and screens to refine by hand |

The rest of this section covers the first route, which needs the most setup and gives the most realistic result.

### What the system team provides

| Item | Contents |
| --- | --- |
| Prototype starter repo | A light app shell (e.g. Vite + React), system packages and theme provider installed, a router with an example page, mock-data helpers, and `lint` and `test:a11y` scripts |
| MCP config, committed | Figma MCP plus the system's MCP (or Storybook MCP) preconfigured, so connecting is one approval |
| Prototype rules file | An `AGENTS.md` / `CLAUDE.md` tuned for prototypes (below) |
| Setup script | `npm run setup`: installs dependencies, checks Node, and verifies the MCP connections |
| Prompt library | Tested prompts for common jobs: build from a frame, add states, wire navigation, add mock data, make it responsive |
| Preview deploys | Each push gets a URL (e.g. Vercel or Netlify previews), labeled as a prototype |
| Support | A channel, weekly office hours, and a short recorded walkthrough |

### One-time setup for a designer

1. Accounts: a Figma seat that can use the MCP server (Figma's remote server works on all plans; the desktop server needs a Dev or Full seat on a paid plan), access to the agent (Claude Code or Cursor), GitHub access to the starter repo, and the preview-deploy account.
2. Install: Node (LTS), Git, and the agent's app or CLI. The system team's walkthrough covers this on Mac and Windows.
3. Get the starter: clone the prototype repo (or use it as a template), then run `npm run setup`.
4. Connect Figma: start the agent in the repo; approve the Figma MCP server and sign in to Figma when prompted.
5. Smoke test: ask the agent to "build the example card from \<frame link> using system components", then run `npm run dev` and open the local URL.

### Config files in the starter repo

`.mcp.json` (Claude Code project config; the system and Storybook URLs are placeholders for your own):

```json
{
  "mcpServers": {
    "figma": { "type": "http", "url": "https://mcp.figma.com/mcp" },
    "acme-ds": { "type": "http", "url": "https://design.acme.com/mcp" },
    "storybook": { "type": "http", "url": "http://localhost:6006/mcp" }
  }
}
```

`AGENTS.md` for prototypes:

```markdown
# Prototype rules

This is a prototype repo for designers. Speed matters, but everything must be built from the Acme design system.

- Before writing UI, look up components with the acme-ds MCP server. Never invent components or props.
- When given a Figma link, use the Figma MCP server for structure and variables, then map to Acme components.
- Use Acme tokens for every color, space, radius and font. No raw values.
- Use mock data from src/mocks. Never call real APIs or use real customer data.
- Build every state the designer names: loading, empty, error, long content, mobile.
- After each change, run `npm run lint` and fix all errors. Then tell the designer what you built and what's missing from the system.
- If a component doesn't exist, build the closest version from Acme parts and add it to MISSING.md.
```

### Daily workflow

1. Design the flow in Figma with library components; name layers and bind variables.
2. In the starter repo, ask the agent to build one screen from a frame link. Review it in the browser.
3. Iterate in small prompts: states, interactions, navigation, responsive behavior.
4. Push to get a preview URL; share it in crit or a usability session.
5. Log anything the agent couldn't build from the system in `MISSING.md`; the system team reviews these weekly as intake.

### Guardrails for prototypes

- Prototypes aren't production. Keep them in a separate repo or folder; production code goes through engineering.
- Keep real data and credentials out of prototype repos.
- Keep lint on. It's what keeps prototypes on the system without anyone policing them.
- Label previews as prototypes, and expire old preview links.
- Promotion path: when a prototype graduates, engineers rebuild or harden it using the same components; the prototype is the spec, not the code that ships.

### Rolling it out

Pilot with 3–5 designers for a month. Measure time from frame to first shareable prototype, how much of the prototype code uses system components, and what lands in `MISSING.md`. Fix the kit, then open it to everyone with office hours for the first few weeks.

## 9. Guardrails, evaluation and governance

Agents multiply output, including mistakes. Put the checks where they run automatically, and hold agent-generated work to the same bar as human work.

| Risk | Guardrail |
| --- | --- |
| Shadow UI that bypasses the system | Team-default system in prototyping tools; adherence audits in Figma; import scans in CI |
| Hallucinated components or props | Retrieval via MCP rather than memory; strict TypeScript; Storybook manifests that exclude anti-patterns |
| Hard-coded values | Lint with autofix to tokens (e.g. Atlassian's `ensure-design-token-usage`); Figma Check designs |
| Accessibility regressions | Agent-runnable axe and interaction tests; people still do screen reader passes for new patterns |
| Agents changing the system itself | Duplicate-library testing, PR review, revision history on skills and rules, deterministic tools for rule enforcement |
| Over-trust | Required human review; small batches; diffs and screenshots on every agent PR |

### Evaluating your agent context

No independent benchmarks for this exist yet, so test your own setup:

1. Pick 5–10 representative tasks (a settings page, a table with filters, a dialog flow).
2. Run each with your current agent context, several times.
3. Score each run: correct imports, valid props, zero raw values, a11y tests pass, states covered, human edits needed.
4. Change one thing (a rules file, an MCP, a component doc) and re-run.
5. Track the scores and the token cost over time, the way Atlassian compared context types.

### Governance additions

- Agent context files (rules, guidelines, skills) are part of the system: versioned, reviewed and released with it.
- Agent-authored contributions to the system go through the same contribution levels and gates as human ones.
- Log what agents get wrong; it's the best input for the next round of docs and lint rules.

## 10. Checklists

### Agent-ready system

- [ ] Tokens in DTCG JSON, each with a description
- [ ] Typed props with JSDoc on every component and prop
- [ ] Stories with summaries; deprecated stories excluded from agent manifests
- [ ] Code Connect mapping for every Figma component
- [ ] Figma layers named semantically; all values bound to variables
- [ ] An MCP server or skill exposing components, tokens and guidance
- [ ] Guidelines split into small files, with an anti-patterns file
- [ ] `llms.txt` and Markdown versions of docs pages
- [ ] Lint rules for raw values and banned imports, with messages naming the replacement
- [ ] A11y and interaction tests the agent can run
- [ ] An entry rules file template for consuming repos
- [ ] An evaluation set of tasks, re-run when context changes

### Agent-assisted feature

- [ ] Agent connected to the system MCP and Figma MCP; rules file present
- [ ] Design source given (frame link or named components and states)
- [ ] Built in small steps, each reviewed
- [ ] Lint, types and a11y tests pass
- [ ] Review table in section 6 checked
- [ ] Missing components filed as system requests

---

# Reference

The look-up material: the people who shaped the field, what to read and study next, and the checklists and glossary to keep open while you work.

## 1. Who's who in design systems

A small group shaped the field: writers and consultants who named the ideas, leads of a few public systems who proved them at scale, and engineers whose tools made them practical. Roles are as published on the linked page; current jobs may be out of date.

### Thinkers and writers

| Person | Known for |
| --- | --- |
| [Brad Frost](https://bradfrost.com/about/) | *Atomic Design*; Pattern Lab and Styleguides.io; teaches courses on design systems, tokens, and AI with design systems |
| [Nathan Curtis](https://conffab.com/presenter/nathan-curtis/) | Co-founded EightShapes (2006); *Modular Web Design* (2009); the most-read body of articles on system team models, versioning and contribution |
| [Alla Kholmatova](https://www.smashingmagazine.com/design-systems-book/) | *Design Systems* (Smashing, 2017): systems as a shared design language, functional vs. perceptual patterns, interface inventories |
| [Dan Mall](https://podrocket.logrocket.com/guests/dan-mall) | Ran the systems consultancy SuperFriendly for 10+ years; [*Design That Scales*](https://kirkusreviews.com/book-reviews/dan-mall/design-that-scales) (Rosenfeld, 2023); Design System University |
| [Josh Clark](https://bigmedium.com/about/) | Principal at Big Medium, which builds enterprise systems and argues the hard parts are people and politics; co-writing *Sentient Design* on AI-era interfaces |
| [Jina Anne](https://smashingmagazine.com/2019/11/smashing-podcast-episode-3/) | Credited with starting design tokens (the Sass site's token file, then Salesforce's Theo); Salesforce Lightning Design System; founded the Clarity conference; co-chairs the W3C Design Tokens group |
| [Yesenia Perez-Cruz](https://abookapart.com/products/expressive-design-systems) | *Expressive Design Systems* (A Book Apart, 2019): keeping brand expression inside a consistent system; led Vox Media's system |
| [Amy Hupe](https://www.smashingmagazine.com/2020/01/smashing-podcast-episode-7/) | Content strategy and documentation for the GOV.UK Design System, including how people contribute to it |
| [Marco Suarez](https://designbetterpodcast.com/p/design-systems-handbook) | Lead author of the *Design Systems Handbook* (InVision/DesignBetter), with Jina Anne, Katie Sylor-Miller, Diana Mounter and Roy Stanfield |
| [Nicole Sullivan](https://en.wikipedia.org/wiki/OOCSS) | Object-Oriented CSS: separate structure from skin and container from content. A precursor of component thinking and BEM. |
| [Donnie D'Amato](https://www.smashingmagazine.com/person-of-the-week/donnie-damato/) | Design systems architect writing on token architecture and modes; runs the designtokens.fyi glossary |

### Leaders of major public systems

| Person | Known for |
| --- | --- |
| [Matías Duarte](https://design.google/library/matias-duarte-material-design-ux) | Founded Google's Material Design and led it into Material You |
| [Karri Saarinen](https://www.figma.com/blog/this-twitter-storm-shows-design-systems-are-still-up-for-debate/) | Led Airbnb's Design Language System; "Building a Visual Language" (unified, universal, iconic, conversational) |
| [Diana Mounter](https://designbetterpodcast.com/p/diana-mounter) | Led GitHub's Primer design systems team; *Design Systems Handbook* co-author |
| [Josh Black](https://github.com/joshblack) | Technical lead on IBM Carbon; now builds Primer at GitHub |
| [Nate Baldwin](https://adobe.design/authors/nate-baldwin) | Adobe Spectrum color, tokens and components; created Leonardo, a palette generator driven by contrast ratios |
| [Tim Paul](https://gds.blog.gov.uk/2020/02/28/podcast-gov-uk-design-system/) | Launched the GOV.UK Design System (2018); by 2020 used in 300+ services with an estimated £17M a year saved |
| [Kaelig Deloumeau-Prigent](https://www.w3.org/groups/cg/design-tokens) | Co-chair of the W3C Design Tokens Community Group, which defines the shared token format |

### Engineers behind the tools

| Person | Known for |
| --- | --- |
| [Brent Jackson](https://jxnblk.com/) | Styled System, Theme UI (the `sx` prop and theme spec), Rebass, MDX Deck |
| [Mark Dalgleish](https://github.com/markdalgleish) | Co-created CSS Modules; created SEEK's Braid design system and Playroom; vanilla-extract |
| [Adam Wathan](https://github.com/adamwathan) | Tailwind CSS; co-wrote *Refactoring UI* |
| [shadcn](https://ui.shadcn.com/) | shadcn/ui at Vercel: open-code components you copy in and own |
| [Devon Govett](https://github.com/devongovett) | React Aria and React Spectrum at Adobe; also Parcel and Lightning CSS |
| [Segun Adebayo](https://github.com/segunadebayo) | Chakra UI, Ark UI, Zag (UI logic as state machines), Panda CSS |
| [Colm Tuite](https://www.siliconrepublic.com/start-ups/modulz-acquisition-workos-enterprise-software-open-source-ui) | Co-founded Modulz, makers of Radix Primitives and Stitches (acquired by WorkOS, 2022) |
| [Danny Banks](https://conferences.oreilly.com/oscon/oscon-or-2019/public/schedule/speaker/304973.html) | Created Style Dictionary at Amazon: one token source exported to CSS, iOS and Android |
| [Max Stoiber](https://conferences.oreilly.com/fluent/fl-ca-2017/public/schedule/speaker/270571.html) | Co-created styled-components with Glen Maddern, which popularized CSS-in-JS for component libraries |

## 2. Books, methods and further reading

If you read three things, read *Atomic Design* for the model, Kholmatova's *Design Systems* for the language, and Dan Mall's *Design That Scales* for the operating side; then follow Nathan Curtis for everything about teams and releases.

### Books

| Book | Author | Publisher, year | Best for |
| --- | --- | --- | --- |
| [Atomic Design](https://atomicdesign.bradfrost.com/) | Brad Frost | Self-published, 2016 (free online) | The atoms → pages model and the workflow behind a pattern library |
| [Design Systems](https://www.smashingmagazine.com/design-systems-book/) | Alla Kholmatova | Smashing, 2017 | Systems as a shared design language: functional and perceptual patterns, from research at Airbnb, Atlassian, TED and others |
| [Design That Scales](https://designsystem.university/books/design-that-scales) | Dan Mall | Rosenfeld Media, 2023 | Running a system as a sustainable practice; why reuse efforts fail |
| [Expressive Design Systems](https://abookapart.com/products/expressive-design-systems) | Yesenia Perez-Cruz | A Book Apart, 2019 | Keeping brand expression inside a consistent system (A Book Apart no longer sells books; find a copy elsewhere) |
| [Design Systems Handbook](https://www.designbetter.com/books) | Marco Suarez, Jina Anne, Katie Sylor-Miller, Diana Mounter, Roy Stanfield | InVision / DesignBetter, 2017 | A free end-to-end primer: planning, design, build, governance |
| [Laying the Foundations](https://www.designsystemfoundations.com/) | Andrew Couldwell | Self-published | Practical, plain-language guide to creating, documenting and selling a system |
| [Building Design Systems](https://link.springer.com/978-1-4842-4513-2) | Sarrah Vesselov, Taurie Davis | Apress, 2019 | Short and practical, drawn from GitLab's Pajamas: inventory, design language, buy-in |
| [Inclusive Components](https://www.smashingmagazine.com/printed-books/inclusive-components/) | Heydon Pickering | Smashing, 2019 | Building accessible components one pattern at a time: tabs, menus, dialogs, tooltips |
| [Form Design Patterns](https://www.smashingmagazine.com/printed-books/form-design-patterns/) | Adam Silver | Smashing, 2018 | Inclusive form components and patterns |
| [Refactoring UI](https://www.refactoringui.com/) | Adam Wathan, Steve Schoger | Self-published PDF | Tactical visual design (spacing, type, color scales) that feeds straight into tokens |
| [Modular Web Design](https://www.oreilly.com/library/view/modular-web-design/9780321638311/) | Nathan Curtis | New Riders, 2009 | The precursor to component libraries; historical context |
| [Strategic Writing for UX](https://www.oreilly.com/library/view/strategic-writing-for/9781098174323/) (2nd ed.) | Torrey Podmajersky | O'Reilly, 2025 | Voice strategy and UI text, now including AI-generated content |
| [Microcopy: The Complete Guide](https://www.microcopybook.com/) | Kinneret Yifrah | Nemala, 2nd ed. 2019 | Error messages, calls to action, voice and tone standards |
| [Content Design](https://contentdesign.london/store/the-content-design-book) (2nd ed.) | Sarah Winters, Rachel Edwards | Content Design London | Evidence-led content design for the content layer of a system |

Not books, but close: [Subatomic](https://designtokenscourse.com/), Brad and Ian Frost's video course on design tokens, and [The Design System Guide](https://thedesignsystem.guide), Romina Kavcic's free step-by-step guide.

### Methods and frameworks

| Method | The idea in one line |
| --- | --- |
| [Atomic Design](https://atomicdesign.bradfrost.com/) | Atoms, molecules, organisms, templates, pages: a mental model for composing UI and organizing a library |
| [Design tokens spec (DTCG)](https://www.designtokens.org/) | The shared token file format. The first stable version, 2025.10, was released Oct 28, 2025, with modes, OKLCH and P3 color, and aliases. A W3C Community Group spec, not a W3C Recommendation. |
| [EightShapes team models](https://eightshapes.com/articles/team-models-for-scaling-a-design-system) | Solitary, centralized and federated teams (Nathan Curtis) |
| [Releasing Design Systems](https://medium.com/eightshapes-llc/releasing-design-systems-57fca91a23f6) | Curtis's six-part series: outputs, cadence, versions, breaking changes, dependencies, process |
| [Visual breaking change](https://medium.com/eightshapes-llc/visual-breaking-change-in-design-systems-1e9109fac9c4) | Color, type and spacing changes can break adopters even when semver says they shouldn't |
| [Adopting Design Systems](https://medium.com/eightshapes-llc/adopting-design-systems-71e599ff660a) | Curtis's playbook for working with adopting teams |
| [Design System Maturity Model](https://sparkbox.com/foundry/design_system_maturity_model) | Sparkbox (Ben Callahan): Building v1 → Growing adoption → Surviving the teenage years → Evolving a healthy product |
| [Pace layers](https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html) | Josh Clark: the system should move slower than products and curate what's proven |
| [A global design system](https://bradfrost.com/blog/post/a-global-design-system/) | Brad Frost's 2024 proposal for a shared, themeable web-component library of common UI. Still a proposal. |
| [Component-Driven Development](https://www.componentdriven.org/) | Build UI bottom-up from isolated components, then assemble screens |

### Public systems to study

| System | Company | Study it for |
| --- | --- | --- |
| [GOV.UK Design System](https://design-system.service.gov.uk/) | UK Government Digital Service | Research-backed, accessible patterns; public roadmap and contribution model |
| [Material Design 3](https://m3.material.io/) | Google | Dynamic color; M3 Expressive's motion and shape (2025) |
| [Carbon](https://carbondesignsystem.com/) | IBM | Enterprise data viz, AI patterns, an MCP server for agents |
| [Atlassian Design System](https://atlassian.design/) | Atlassian | Mature tokens, AI UI patterns, a CLI that gives agents system context |
| [Primer](https://primer.style/) | GitHub | Separate product and brand libraries; primitive tokens; Octicons |
| [Spectrum](https://spectrum.adobe.com/) | Adobe | One system across React and Web Components; React Aria underneath |
| [Polaris](https://shopify.dev/docs/api/polaris) | Shopify | Rebuilt as web components |
| [Fluent 2](https://fluent2.microsoft.design/) | Microsoft | Cross-platform: web, iOS, Android, Windows |
| [Lightning Design System 2](https://www.lightningdesignsystem.com/) | Salesforce | Where design tokens started; CSS-hook theming in SLDS 2 |
| [USWDS](https://designsystem.digital.gov/) | US GSA | Government-scale tokens and utilities |
| [Gestalt](https://gestalt.pinterest.systems/) | Pinterest | Clear docs and accessibility guidance |
| [Paste](https://github.com/twilio-labs/paste) | Twilio | Accessible React system with strong documentation |
| [Radix Themes](https://www.radix-ui.com/themes) | WorkOS | Headless primitives plus a themed layer |
| [Component Gallery](https://component.gallery/) | Iain Bean | Not a system: compares 60 components across 95 systems |

### Keep learning

| Resource | Type | Status (Oct 2026) |
| --- | --- | --- |
| [zeroheight Design Systems Report](https://report.zeroheight.com) | Annual survey | 2026 report out March 17, 2026: resourcing, adoption, AI, documentation |
| [Into Design Systems](https://www.intodesignsystems.com/) | Online conference, meetups | Next: AI Design Systems Conference, Mar 10–11, 2027 |
| [Figma Config](https://config.figma.com/) | Conference | Config 2027: May 25–27, San Francisco |
| [SmashingConf](https://smashingconf.com/) | Conferences, workshops | Design system workshops running Nov–Dec 2026 |
| [Clarity](https://www.clarityconf.com/) | Conference (Jina Anne) | Last edition Dec 2025; no 2026 date found |
| [Design.Systems](https://design.systems/) | Slack community, newsletter | Active, volunteer-run |
| [Nathan Curtis](https://nathanacurtis.substack.com) | Newsletter | Live |
| [Dan Mall Teaches](https://danmallteaches.substack.com) | Newsletter | Weekly; 2026 activity unconfirmed |
| [Patterns Podcast](https://podcasts.apple.com/podcast/patterns-podcast/id1491843793) | Podcast | Formerly the Design Systems Podcast (Knapsack) |
| [Sparkbox Foundry](https://sparkbox.com/foundry) | Articles, maturity assessment | Live |

## 3. Checklists and glossary

### New token

- [ ] A real need: at least two uses, and no existing token fits
- [ ] Named by purpose at the right tier (semantic, not primitive, if components use it)
- [ ] Value set for every mode (light, dark, high contrast, brands)
- [ ] Contrast checked for every pairing it is allowed in
- [ ] Description says where it is used
- [ ] Added to the pipeline, Figma variables and docs in the same release

### New component

- [ ] Proposal approved: use cases from at least two teams, audit of existing solutions
- [ ] Anatomy and part names agreed across design and code
- [ ] API reviewed: prop names consistent with the rest of the library, composition over flags
- [ ] Full states matrix designed and built, in every theme
- [ ] Keyboard and screen reader behavior follows the APG pattern; tested manually
- [ ] Only semantic or component tokens used, no raw values
- [ ] Figma component with matching properties, auto layout and variable bindings
- [ ] Code Connect mapping
- [ ] Stories, unit tests, visual regression and axe checks
- [ ] Docs page complete (summary, when to use, do/don't, a11y, props)
- [ ] Changelog entry and release note

### Release

- [ ] Version bump matches the semver policy
- [ ] Breaking changes have a migration guide and codemod where possible
- [ ] Visual diffs reviewed
- [ ] Figma library published with the same version
- [ ] Release note posted where teams will see it

### System audit (yearly or before a major)

- [ ] Inventory of components across products; duplicates flagged
- [ ] Hardcoded values and detached components counted
- [ ] Contrast and keyboard audit of every component
- [ ] Docs pages checked for owner and last-reviewed date
- [ ] Unused tokens and components identified for deprecation
- [ ] Adoption and satisfaction metrics compared with last year

### Glossary

| Term | Meaning |
| --- | --- |
| Design token | A named design decision stored as data (color, size, duration) |
| Primitive token | Raw value with no meaning attached (`blue.600`) |
| Semantic token | A token named for its role that points to a primitive (`text.danger`) |
| Mode / theme | A set of values for semantic tokens (dark, high contrast, brand) |
| Variant | A mutually exclusive version of a component (`primary`, `secondary`) |
| Slot | A named place in a component where consumers insert their own content |
| Compound component | A component split into parts that work together (`Tabs`, `Tabs.List`, `Tabs.Panel`) |
| Headless component | Behavior and accessibility without styling |
| Detach | Breaking a Figma instance's link to its main component |
| Codemod | A script that rewrites code automatically during a migration |
| APG | WAI-ARIA Authoring Practices Guide: keyboard and ARIA patterns per widget |
| DTCG | W3C Design Tokens Community Group, which defines the shared token file format |
| Code Connect | Figma feature that maps design components to real code snippets |
