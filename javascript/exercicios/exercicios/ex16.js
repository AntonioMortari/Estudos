//Crie uma função que receba uma string como parâmetro e retorne a mesma string invertida.

const stringInvertida = (str) =>{
    
    let strI = str.split('').reverse().join('')

    return strI
} 
let string = 'Olá, mundo!'
console.log(`String: ${string}
String invertida: ${stringInvertida(string)}`)