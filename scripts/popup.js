const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');

onButton.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'initWidget');
    });
}

offButton.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'removeWidget');
    });
}