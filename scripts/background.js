(() => {
    chrome.tabs.onUpdated.addListener(() => {
        console.log("eheheh")
    })

    chrome.windows.onFocusChanged.addListener(() => {
        console.log("Focus changed")
    })
})()