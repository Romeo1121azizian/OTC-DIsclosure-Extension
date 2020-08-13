var menu = {
    "id": "OTC Disclosure",
    "title": "OTC Disclosure",
    "contexts": ["selection"],
};
chrome.contextMenus.create(menu);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "OTC Disclosure" && clickData.selectionText){
        var OTCTicker = clickData.selectionText;
        var OTCurl = "https://www.otcmarkets.com/stock/" + OTCTicker.toUpperCase().trim() + "/disclosure";
        chrome.tabs.create({url: OTCurl});
    }
});

