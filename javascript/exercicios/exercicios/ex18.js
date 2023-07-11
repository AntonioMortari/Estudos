//Crie uma função que receba um número como parâmetro e retorne a sequência de Fibonacci correspondente até o número informado.




const fibo = (num)  =>{
    n1 = 0
    n2 = 1
    for(c = 0 ; c<=num ; c++){
        console.log(n1)
        s = n1+n2
        n1 = n2
        n2 = s
    }
}

let f = fibo(10)