console.log('Background script started');

chrome.runtime.onInstalled.addListener(function () {
  console.log('Extension installed');
});

chrome.runtime.onStartup.addListener(function () {
  console.log('Extension started');
});

chrome.webNavigation.onCompleted.addListener(function (details) {
  // Add your code to be executed on every page change here
  console.log('Page navigation completed:', details);
  // Example: Inject a content script to the current tab
  chrome.scripting.executeScript({
    target: { tabId: details.tabId, allFrames: true },
    files: ['content_script.js'],
  });
}, {url: [{schemes: ['http', 'https']}]});