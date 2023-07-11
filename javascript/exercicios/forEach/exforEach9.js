//Percorra um array de números e verifique se todos os números são pares.

let numeros = [
    10,20,30,50
]

numeros.forEach((num) =>{
    if(num%2 == 0){
        pares = true
    }else{
        pares = false
    }
})

console.log(`Todos os números são pares ? : ${pares}`)