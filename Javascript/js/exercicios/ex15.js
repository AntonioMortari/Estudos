//Escreva uma função que receba um array de números como parâmetro e retorne o menor número do array.

const menorDaArray = (array) =>{
    menor = 100

    for (c = 0 ; c<array.length ; c++){
        if(array[c] < menor){
            menor = array[c]
        }
    }

    return menor
}

let arraynumbers = [10,20,1,40,-1 , -20]

console.log(menorDaArray(arraynumbers))