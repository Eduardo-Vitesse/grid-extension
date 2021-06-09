const colunas = document.getElementById('colunas')
const largura = document.getElementById('largura')
const margens = document.getElementById('margens')
const ativar = document.getElementById('btn-ativar')

let c = 0
let l = 0
let m = 0

colunas.addEventListener('change', (event) => {
    c = event.target.value
})

largura.addEventListener('change', (event) => {
    l = event.target.value
})

margens.addEventListener('change', (event) => {
    m = event.target.value
})

ativar.addEventListener('click', () => {
    sendMessage({c, l, m})
})

function sendMessage(data){
    chrome.tabs.query({active: true,  currentWindow: true}, (tab) => {
        chrome.tabs.sendMessage(tab[0].id, data, (request) => {})
    })
}