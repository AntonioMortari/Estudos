//Percorra um array de strings e verifique se todas as strings têm comprimento superior a 5 caracteres.

let palavras = [
    'javascript',
    'Olá, Mundo!',
    'Verdade',
    'oi'
]

palavras.forEach((item) =>{
    if(item.length >5){
        m5 =true
    }else{
        m5 = false
    }
})

console.log(`Todas as palavras do array tem mais de 5 caracteres ? : ${m5}`)