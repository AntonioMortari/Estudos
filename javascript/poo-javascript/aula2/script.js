'use strict'

let ingredientes = [ 'mel','água', 'sal', 'mostarda']
let modificado = []

ingredientes.forEach((item) =>{
    let letraInicial = item.charAt(0).toUpperCase()
    let restoTexto = item.slice(1, item.length)
    item = letraInicial + restoTexto
    modificado.push(item)
})

let ordenado = modificado.sort( (a,b) =>{
    return a.localeCompare(b)
})

console.log(ordenado)

