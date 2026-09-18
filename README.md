# Amazon Price History Tracker

A tiny Chrome extension that adds a right-click shortcut to check an Amazon
product's price history on [Keepa](https://keepa.com).

## Usage

1. Go to any Amazon product page.
2. Right-click anywhere on the page.
3. Select **"View price history for the current product"**.

A new tab opens with that product's Keepa price history page.

## Install (from source)

This extension isn't published on the Chrome Web Store — load it unpacked:

1. Clone this repo.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the repo folder.

## How it works

- `manifest.json` — Manifest V3 extension definition. Uses the `contextMenus`
  permission and `activeTab` (so the extension only reads the URL of the tab
  you actually right-clicked on, nothing else).
- `background.js` — a service worker that registers the context menu item,
  extracts the product's ASIN from the current tab's URL, and opens
  `https://keepa.com/#!product/8-<ASIN>` in a new tab.

No build step, no dependencies — it's plain JavaScript.

## License

MIT — see [LICENSE](LICENSE).
