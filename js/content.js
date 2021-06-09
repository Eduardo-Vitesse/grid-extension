const showData = (col, lar, mar) => {
    alert(`${col} - ${lar} - ${mar}`)
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    showData(request.c, request.l, request.m)
})