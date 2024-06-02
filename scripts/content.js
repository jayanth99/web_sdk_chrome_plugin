
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
        if (request === 'initWidget') {
            createWidget();
            sendResponse('on');
        } else if (request === 'removeWidget') {
            removeWidget();
        }
    }
);

function createWidget() {
    // Create target element of minimum size in which the widget is shown
    const chat_container = document.createElement('div');

    // Add styles
    chat_container.id = 'chat-container';
    chat_container.style.width = '498px';
    chat_container.style.height = '230px';
    chat_container.style.top = '150px';
    chat_container.style.left = '150px';
    chat_container.style.border = '1px solid black';

    document.body.appendChild(chat_container);

    // Initialize chat widget
    initSdk('Bots');
}

function removeWidget() {
    // Remove target element from the page
    const chat_container = document.getElementById('chat-container')
    if (chat_container) {
        chat_container.remove();
    }
}