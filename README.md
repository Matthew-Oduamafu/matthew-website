# matthewoduamafu.com

Personal site of **Matthew Oduamafu** — MSc Mechatronics researcher, software &
hardware engineer, and Founder & CEO of [Verdiq Ltd](https://verdiq-preview.netlify.app/).

Live at **https://matthewoduamafu.netlify.app**

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Base UI) · lucide-react.
Deployed on Netlify (`netlify.toml`; SPA rewrite to `index.html`).

## Getting started

```bash
npm install
npm run dev      # vite dev server
npm run build    # tsc --noEmit && vite build  → dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

All page content lives in typed arrays at the top of `src/App.tsx` — no JSX
edits needed to add or update an entry:

| Array         | Drives                                                    |
| ------------- | --------------------------------------------------------- |
| `navLinks`    | Header and mobile-menu links                               |
| `disciplines` | The four "What I Do" cards                                 |
| `projects`    | The Open Source / Selected Projects grid                   |
| `experience`  | Professional-journey timeline (`current: true` adds a badge) |
| `education`   | Academic timeline (`highlights` render as award chips)     |
| `skills`      | The scrolling tools & technologies marquee                 |

### Adding a project

Append one object to `projects`:

```ts
{
  title: 'Project Name',
  domain: 'Firmware',            // shown as the pill top-right
  blurb: 'Two or three sentences on what it does and why it exists.',
  repo: 'https://github.com/Matthew-Oduamafu/<repo>',
  language: 'C',                 // shown beside the coloured dot
  tags: ['STM32', 'I²C'],
  icon: Gauge,                   // any lucide-react icon (import it at the top)
  accent: 'blue',                // 'blue' | 'emerald' | 'amber' | 'violet' | 'sky'
}
```

The hero's "open-source projects" counter reads `projects.length`, so it updates
on its own.

## Images

`public/img/` holds the optimised portrait (`matthew-portrait*.{webp,jpg}`, 1× and
2×, served via `<picture>`) and the 1200×630 social card (`matthew-og.jpg`).
Both are generated from the original camera JPG. If the portrait changes,
regenerate the derivatives rather than pointing the page at a full-size photo.

## Licence

See `LICENSE.txt`.
