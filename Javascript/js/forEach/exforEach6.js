//Percorra um array de números e calcule a soma de todos os elementos.

let numeros = [
    10,
    20,
    30,
    40
]

let s = 0

numeros.forEach((num) =>{
    s = s+num
})

console.log(s)