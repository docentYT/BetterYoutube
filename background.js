var lastUrl;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {
        let url = tab.url;
        if (url == lastUrl) return;
        if (url.startsWith("https://www.youtube") || url.startsWith("http://www.youtube")) {
            lastUrl = tab.url;
            chrome.tabs.sendMessage(tabId, { data: tab });
        }
    }
});