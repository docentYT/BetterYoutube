function myMain() {
    setTimeout(function(){
        var downloadButton = document.querySelector("#top-level-buttons-computed > ytd-download-button-renderer");

        var buttonsCount = document.querySelector("#top-level-buttons-computed").children.length;
        if (buttonsCount == 7) {
            var clipButton = document.querySelector(`#top-level-buttons-computed > ytd-button-renderer:nth-child(${buttonsCount-1})`);
            var thanksButton = document.querySelector(`#top-level-buttons-computed > ytd-button-renderer:nth-child(${buttonsCount-2})`);
        } else if (buttonsCount == 6 || buttonsCount == 5) {
            var clipButton = document.querySelector(`#top-level-buttons-computed > ytd-button-renderer:nth-child(${buttonsCount-1})`);
        }   
        
        if (downloadButton) downloadButton.parentElement.removeChild(downloadButton);
        if (thanksButton) thanksButton.parentElement.removeChild(thanksButton);
        if (clipButton) clipButton.parentElement.removeChild(clipButton);
    }, 2000);
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    myMain();
    sendResponse({"status": "ok"});
});