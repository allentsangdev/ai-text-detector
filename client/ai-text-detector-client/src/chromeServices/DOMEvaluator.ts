import { DOMMessage, DOMMessageResponse } from '../types';

document.addEventListener('mouseup', function(event: MouseEvent) {
  var selectedText: string = window.getSelection()?.toString() || '';
  if (selectedText !== '') {
    // Do something with the selected text
    chrome.runtime.sendMessage({ text: selectedText });

  }
});

