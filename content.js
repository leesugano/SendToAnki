let iconElement;

document.addEventListener('mouseup', handleMouseUp);

function handleMouseUp(event) {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    chrome.runtime.sendMessage({ action: 'showIcon', text: selection });
    createIcon(selection);
  } else {
    removeIcon();
  }
}

function createIcon(selection) {
  if (!iconElement) {
    iconElement = document.createElement('img');
    iconElement.src = chrome.runtime.getURL('icons/icon16.png');
    console.log('Icon path:', iconElement.src);
    iconElement.onerror = handleIconError;
    iconElement.onload = handleIconLoad;
    iconElement.style.position = 'absolute';
    iconElement.style.zIndex = 1000;
    iconElement.style.cursor = 'pointer';
    iconElement.title = 'Send to Anki';
    iconElement.setAttribute('data-text', selection);
    document.body.appendChild(iconElement);
    positionIcon();
  }
}

function removeIcon() {
  if (iconElement) {
    iconElement.remove();
    iconElement = null;
  }
}

function positionIcon() {
  const range = window.getSelection().getRangeAt(0);
  const rect = range.getBoundingClientRect();
  iconElement.style.top = `${rect.top + window.scrollY + range.getBoundingClientRect().height}px`;
  iconElement.style.left = `${rect.left + window.scrollX}px`;
  iconElement.style.display = 'block';
}

function handleIconError() {
  console.error('Failed to load icon at', iconElement.src);
}

function handleIconLoad() {
  console.log('Icon loaded successfully');
}

document.addEventListener('click', function(event) {
  if (event.target === iconElement) {
    chrome.runtime.sendMessage({ action: 'openPopup', text: event.target.getAttribute('data-text') });
  }
});
