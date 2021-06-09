const colunas = document.getElementById('colunas')
const largura = document.getElementById('largura')
const margens = document.getElementById('margens')

const ativar = document.getElementById('btn-ativar')
const desativar = document.getElementById('btn-desativar')

let numColunas = 0
let larguraColun = 0
let space = 0

// Funções para pegar o s valores dos inputs
colunas.addEventListener('change', (event) => {
    numColunas = event.target.value
})

largura.addEventListener('change', (event) => {
    larguraColun = event.target.value
})

margens.addEventListener('change', (event) => {
    space = event.target.value
})

// Função para atribuir os valores
ativar.addEventListener('click', () => {
    sendMessage({numColunas, larguraColun, space})
})

// Função para zerar todos os valores
desativar.addEventListener('click', () => {
    sendMessage({numColunas: 0, larguraColun: 0, space: 0})
})

function sendMessage(data){
    chrome.tabs.query({active: true,  currentWindow: true}, (tab) => {
        chrome.tabs.sendMessage(tab[0].id, data, (request) => {})
    })
}