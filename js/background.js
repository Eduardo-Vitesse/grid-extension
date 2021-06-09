chrome.runtime.onInstalled.addListener((object) => {
    chrome.tabs.create({
         url: 'https://casedesign.com.br/'
     })
 })