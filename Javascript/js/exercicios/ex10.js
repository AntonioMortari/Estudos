//Crie uma função que receba um número como parâmetro e retorne um array com todos os números pares menores ou iguais a esse número.

const paresMenores = (num) =>{
    let paresmenores = []
    if(num%2 >=1){
        num = num-1
        for(c = num ; c>=0 ; c = c-2){
            paresmenores.push(c)
        }
    }else{
        for(c = num ; c>=0 ; c = c-2){
            paresmenores.push(c)
        }
    }

    return paresmenores

}

let n = 33

let pares = paresMenores(n)

console.log(pares)

