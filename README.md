# morajconsult.com

The public website of **MoRaj Supplies and Consult**: the company home page and one page per
product. This repository holds the website only; the application sources are private.

| Path | Page | Source |
|---|---|---|
| `/` | Company home | `index.html`, here |
| `/ledger/` | MoRaj Ledger | `docs/landing.html` in the private Suite repo, copied here **whole** as `ledger/index.html` on every Ledger release (the release check reads the "Current build" line from the source) |
| `/pos/` | MoRaj POS | `pos/index.html`, here |
| `/supermarket/` | SuperMarket POS | `supermarket/index.html`, here |

Shared styles are `assets/site.css`; the product marks are `assets/marks/`. The link-preview
cards `assets/og-*.png` are rendered from `marketing/ads/creatives.html` in the Suite repo
(`node marketing/ads/render.mjs`), together with the ad images. `favicon.svg`,
`apple-touch-icon.png` and `og.png` at the root belong to the Ledger page.

Commit and push; GitHub Pages serves it within a minute.
