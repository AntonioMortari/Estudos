

const soma = (a,b) =>{
    s = a+b
    n = parOuImpar(s)
    return s
}

const parOuImpar = (n) =>{
    if(n %2 == 0){
        num = 'par'
    }else{
        num = 'impar'
    }

    return num
}

const res = soma(10,20)

console.log(res)
console.log('O número é ' + n)



