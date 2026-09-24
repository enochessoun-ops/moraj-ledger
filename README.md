# MoRaj Ledger — website

The public site for **MoRaj Ledger**, offline accounting software for Ghanaian
businesses, schools and NGOs. A product of MoRaj Supplies and Consult.

This repository holds the website only. The application source is private.

To publish a change: edit `docs/landing.html` in the private Suite repo and copy it
here as `index.html`. The icons and link-preview card come from `docs/site-assets/`
in the same repo (`favicon.svg`, `apple-touch-icon.png`, `og.png`); re-render the PNGs
with `node docs/site-assets/render.mjs` rather than editing them. Commit and push —
GitHub Pages serves it within a minute.
