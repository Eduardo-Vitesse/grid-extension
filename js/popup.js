const colunas = document.getElementById('colunas')
const largura = document.getElementById('largura')
const margens = document.getElementById('margens')
const color = document.getElementById('color')

const ativar = document.getElementById('btn-ativar')
const desativar = document.getElementById('btn-desativar')

let numColunas = 0
let larguraColun = 0
let space = 0
let corSelected = ''
let clearScreen = false

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

color.addEventListener('change', (event) => {
    corSelected = event.target.value
})

// Função para atribuir os valores
ativar.addEventListener('click', () => {
    sendMessage({numColunas, larguraColun, space, corSelected})
})

// Função para zerar todos os valores
desativar.addEventListener('click', () => {
    sendMessage({clearScreen: true})
})

function sendMessage(data){
    chrome.tabs.query({active: true,  currentWindow: true}, (tab) => {
        chrome.tabs.sendMessage(tab[0].id, data)
    })
}