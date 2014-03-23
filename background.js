chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.sendRequest(tabId, "autoplay");
});

chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
   //Not needed right now :P
});