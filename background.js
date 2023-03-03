chrome.contextMenus.create ({
    "title": "View price history for the current product",
    "onclick": openTracker()
});

function openTracker() {
    return function(tab) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            let components = url.split("/");
            let productSN = components[5];
            let trackerLink = "https://keepa.com/#!product/8-" + productSN;
            chrome.tabs.create({url: trackerLink});
        });
    }
};