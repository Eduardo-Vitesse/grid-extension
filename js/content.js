const buildTheGrid = (col, lar, mar, cor) => {
    let box = document.createElement('section')
    box.id = '3f9ae322cbf74b065cf4f1918f91084c'
    box.style.width = '100%'
    box.style.height = 'auto'
    box.style.backgroundColor = 'transparent'
    box.style.position = 'fixed'
    box.style.top = 0
    box.style.zIndex = 999
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    document.querySelector('body').appendChild(box)

    let coluna = document.createElement('div')
    coluna.className = 'a72736a2f5376b8d6d945b263edb4100'
    coluna.style.width = `${lar}px`
    coluna.style.height = '100vh'
    coluna.style.background = cor
    coluna.style.opacity = 0.3

    let margen = document.createElement('div')
    margen.className = 'c8477d68116dad106f0e9be52cc40105'
    margen.style.width = `${mar}px`
    margen.style.height = '100vh'
    const limit = col - 1

    for (let i = 0; i < col; i++) {
        box.appendChild(coluna.cloneNode(true))
        if(i !== limit){
            box.appendChild(margen.cloneNode(true))
        }
    }
}

const removeTheGrid = (clear) => {
    if(clear === true){
        var node = document.getElementById('3f9ae322cbf74b065cf4f1918f91084c')
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    buildTheGrid(request.numColunas, request.larguraColun, request.space, request.corSelected)
    removeTheGrid(request.clearScreen)
})
