//Crie uma função que receba um número como parâmetro e verifique se é um número primo.
//Números primos são aqueles divisíveis apenas por 1 e por eles mesmos.

const primo = (num) =>{
    let divisores = 0
    for (c = num ; c>0 ; c--){
        if(num % c == 0){
            divisores++
        }
    }

    if(divisores == 2){
        numeroprimo = true
    }else{
        numeroprimo = false
    }

    return numeroprimo
}

let primon = primo(29)

if(primon == true){
    console.log('O número passado como parâmetro é primo')
}else{
console.log('O número passado como parâmetro não é primo')
}