const MENU_ID = "view-price-history";
const ASIN_PATTERN = /\/(?:dp|gp\/product|product-reviews)\/([A-Z0-9]{10})(?:[/?]|$)/i;

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: MENU_ID,
        title: "View price history for the current product",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== MENU_ID || !tab || !tab.url) {
        return;
    }

    const asin = extractAsin(tab.url);
    if (!asin) {
        console.warn("Amazon Price History Tracker: could not find a product ID in", tab.url);
        return;
    }

    chrome.tabs.create({ url: `https://keepa.com/#!product/8-${asin}` });
});

function extractAsin(url) {
    const match = url.match(ASIN_PATTERN);
    return match ? match[1] : null;
}
