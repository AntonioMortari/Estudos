//Implemente uma função que receba uma string como parâmetro e verifique se essa string é um palíndromo. Um palíndromo é uma palavra, frase ou sequência de caracteres que pode ser lida da mesma forma de trás para frente. Exemplo de palíndromo: "arara".

const palindromo = (str) =>{
    const array = str.replace(/\s/g, "").toLowerCase()

    const arrayI = array.split('').reverse().join('')

    if(arrayI == array){
        res = true
    }else{
        res = false
    }

    return res
}
const frase = 'A grama é amarga'
console.log(`Palindromo? : ${palindromo(frase)}`)
console.log(`Frase : ${frase}`)
console.log(`Frase invertida :${frase.split('').reverse().join('')}`)