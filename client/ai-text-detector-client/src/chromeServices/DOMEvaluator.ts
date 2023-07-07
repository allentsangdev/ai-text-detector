//Content scripts are files that run in the context of web pages. 
//By using the standard Document Object Model (DOM), they are able to read details of the web pages
//the browser visits, make changes to them, and pass information to their parent extension.

import { DOMMessage, DOMMessageResponse } from '../types';

document.addEventListener('mouseup', function(event: MouseEvent) {
  var selectedText: string = window.getSelection()?.toString() || '';
  if (selectedText !== '') {
    // Do something with the selected text
    chrome.runtime.sendMessage({ text: selectedText });

  }
});

