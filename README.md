# Mossgate Support

Public support and privacy site for Mossgate, the iOS game by JPHsystems.

This repo powers the GitHub Pages site at
**https://jphermans.github.io/mossgate-support/** which is referenced as
the **Support URL** and **Privacy Policy URL** in the App Store listing.

## Files

- `index.html` — single-page site with sections: Home, Privacy Policy, Support / FAQ, Changelog, Download
- `css/style.css` — dusk-lantern styling (matches the in-game aesthetic)
- `js/main.js` — small JS for nav + accordion sections
- `assets/` — favicon and App Store badge
- `.nojekyll` — bypasses Jekyll so GitHub Pages serves files verbatim

## How the App Store connects to this site

Listed in App Store Connect → App Information:

| Field | URL |
|---|---|
| Support URL | `https://jphermans.github.io/mossgate-support/#support` |
| Marketing URL | `https://jphermans.github.io/mossgate-support/` |
| Privacy Policy URL | `https://jphermans.github.io/mossgate-support/#privacy` |

## Why a separate public repo?

The game source (`jphermans/mossgate`) is **private** — it contains
buildable Xcode projects and asset source files we don't want publicly
indexed. Apple's App Store guidelines require public URLs for the
privacy policy and support pages, so we publish those on GitHub Pages
from this dedicated public repo. The private source repo can stay
private without breaking App Store requirements.

## Local development

```sh
python3 -m http.server 8080
# then open http://127.0.0.1:8080
```

## Deploying changes

```sh
git add .
git commit -m "Update support copy"
git push origin main
# GitHub Pages rebuilds automatically (Settings → Pages → Deploy from branch = main / root)
```

## Made by

JPHsystems — `jphermans` on GitHub. See the privacy policy inside `index.html` for the full data-handling statement.