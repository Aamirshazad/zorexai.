# Bitnomial.com — Hero Section Design Extraction

Source: https://bitnomial.com/ (captured live: `/tmp/bitnomial.html` = `%TEMP%\bitnomial.html`, `/tmp/bitnomial_style.css` = `%TEMP%\bitnomial_style.css`, frame SVGs downloaded to `/tmp/bn_frame_left.svg`, `/tmp/bn_frame_right.svg`)

## Tokens

| Token | Value |
|---|---|
| `--color-primary` | `#121212` |
| `--color-accent` | `#FF7756` (coral) |
| `--color-accent-dark` | `#e04b2e` |
| `--color-bg-light` | `#f5f5f5` |
| `--color-text` | `#212121` |
| `--color-text-light` | `#757575` |
| `--color-border` | `#e0e0e0` |
| `--container-padding` | `64px` |
| Container | `max-width: 1315px` |
| Headline font | "PP Neue Machina Inktrap" (proprietary, weight 400) |
| Mono font | "PP Neue Montreal Mono" (proprietary) — tags, buttons, labels |
| Legal font | "IBM Plex Sans" |

PP fonts are Pangram Pangram (licensed). Closest free stand-ins: Inktrap → Instrument Sans w500 (tight tracking); Mono → JetBrains Mono / IBM Plex Mono.

## Signature: vertical hairline column grid

Every section gets 5 vertical 1px lines (black at 8%) spanning a centered 1315px band; all content is z-lifted above the lines. The header's variant fades the lines toward the top.

```css
.background-lines { position: relative; }
.background-lines:after {
  content: ""; pointer-events: none; position: absolute;
  top: 0; left: calc(50% + 2px); bottom: 0;
  transform: translateX(-50%);
  width: 100%; max-width: 1315px; z-index: 0;
  background-image: repeating-linear-gradient(to right,
    rgba(0, 0, 0, .08) 0px, rgba(0, 0, 0, .08) 1px,
    rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) calc(20% - 1px));
}
.background-lines form, .background-lines .btn, .background-lines a,
.background-lines .legal-text, .background-lines img { position: relative; z-index: 1; }

/* header fade variant — same lines, masked upward */
.top-fade:after {
  background-image: repeating-linear-gradient(to right, rgba(0,0,0,.08) 0 1px, rgba(0,0,0,0) 1px rgba(0,0,0,0) calc(20% - 1px));
  -webkit-mask-image: linear-gradient(to top, #000 50%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to top, #000 50%, rgba(0,0,0,0) 100%);
}
```

## Header UI

- Transparent, `padding: 1.5rem 0`, flex space-between (logo / nav / CTA)
- Nav links: 21px, height 36px, hover → `#626262` + 2px accent underline that grows from left (`width 0 → 100%`)
- CTA = `btn-primary`; mobile hamburger = 44px accent square (`#ff7756`)
- Mobile: full-screen white overlay, nav vertically centered (`position:fixed; top:calc(50% + 33px)`), items cascade in — `translateY(24px)→0` with 0.2s per-item stagger (0.25s → 2.05s)

## Hero layout

```css
.hero { position: relative; padding: 4rem 0; }
.hero__content { display: grid; grid-template-columns: 3fr 2fr; }
.hero__text { margin-top: 2rem; }
.hero__media {
  position: absolute; top: -26vh; left: 42vw;
  width: 1130px; height: 750px; z-index: -1;
  transform: rotate(-99.48deg);   /* rotated waves video */
}
@media (max-width: 768px) {
  .hero { padding: 2.25rem 0 1.825rem; }
  .hero__content { grid-template-columns: 1fr; }
}
```

## Hero text stack

1. **Tag (eyebrow)** — mono, uppercase, 16px, `letter-spacing: 1.92px`, black, flanked by 16×46px **bracket frames** (2px strokes in `#FE5F38`; left bracket strokes left+top+bottom, right bracket mirrors). Text typewrites in (`width: 0 → auto`, 0.6s ease).
   - CSS-recreation of the SVG frames: `.frame-l { width:16px; height:46px; border-left:2px solid #FE5F38; border-top:2px solid #FE5F38; border-bottom:2px solid #FE5F38; }` and mirror for right.
2. **H1** — inktrap font, weight 400, `74px` desktop (3.375rem small screens), `line-height: 1.2`, plain black. Carries `data-text` for a scramble-on-load effect. Copy is a product litany: "Perpetuals. Futures. Options. Spot. Predictions."
3. **P** — 18px (1.125rem desktop / 1.25rem wide-mobile), `line-height: 1.6`, `margin-bottom: 2rem`.
4. **CTA** — `btn btn-primary scramble-text`.
5. **Legal** — 10px, `#3e3e3e`, `line-height: 1.4`.

## Buttons

```css
.btn {
  display: inline-block; padding: .875rem 1.5rem;
  font-family: var(--font-family-mono); font-weight: 500;
  text-transform: uppercase; border: none;
  font-size: 1.313rem; line-height: 1.4; letter-spacing: .42px;
  cursor: pointer; transition: all .3s ease;
}
.btn-primary {
  background-color: var(--color-accent);   /* #FF7756 */
  border: 1.5px solid var(--color-accent);
  color: #141414;
}
.btn-primary:hover { background-color: rgba(0, 0, 0, 0); } /* fills out to outline-only */
```

## Motion system

- **Reveal**: fade + translate (distance via `--reveal-distance`, 20/100px variants; duration via `--reveal-duration`, 600/1200ms variants), staggered with `data-reveal-delay` (hero: 400 / 600 / 800 / 900ms)
- **Scramble-text**: characters shuffle before settling (JS; applied to buttons, h1, nav links)
- **Nav cascade**: per-item 0.2s stagger
- **Tag typewriter**: `width` 0.6s ease
