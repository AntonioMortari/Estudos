
function soma(n1,n2){
    return n1+n2
}
num1 = parseInt(Math.random()*100)
num2 = parseInt(Math.random()*100)
r = soma(num1,num2)

console.log(`A soma de ${num1} e ${num2} é igual a ${r}`)



/* 
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2,10))
*/