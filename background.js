chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToAnki",
    title: "Send to Anki",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToAnki") {
    const selectedText = info.selectionText;
    chrome.storage.sync.set({ selectedText: selectedText }, () => {
      chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 400,
        height: 300,
        left: screen.availWidth - 420,
        top: screen.availHeight - 320
      });
    });
  }
});
