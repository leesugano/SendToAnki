document.addEventListener('mouseup', function(event) {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    chrome.runtime.sendMessage({ action: 'showIcon', text: selection });
  }
});
