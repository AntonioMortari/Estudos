// Escreva uma função que receba um objeto como parâmetro e retorne a quantidade de propriedades (chaves) do objeto.

const propriedades = (object) =>{
    p = Object.keys(object).length

    return p
}

objeto = {
    pro1 : 'valor1',
    pro2 : 'valor2',
    pro3 : 'valor3',
    pro4 : 'valor4',
    pro5 : 'valor5',
    pro6 : 'valor6'
}

const chaves = propriedades(objeto)

console.log(chaves)
