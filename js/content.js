//const showData = (col, lar, mar) => { alert(`${col} - ${lar} - ${mar}`) }
let box = document.createElement('div')
    box.id = 'box'

    document.querySelector('body').appendChild(box)

/*
const buildTheGrid = (col, lar, mar) => {
    let box = document.createElement('div')
    box.style.margin = '0 auto'
    box.style.width = '300px'
    box.style.height = '100px'
    box.style.background = '#ff6600'

    document.querySelector('body').appendChild(box)
}
*/
/*
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    showData(request.numColunas, request.larguraColun, request.space)
    //buildTheGrid(request.numColunas, request.larguraColun, request.space)
})
*/