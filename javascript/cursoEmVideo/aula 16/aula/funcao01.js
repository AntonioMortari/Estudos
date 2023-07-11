function parimp(n){
    if(n%2==0){
            return 'par'
        }else{
            return 'impar'
        }
}
var num = parseInt(Math.random()*100)
var r = parimp(num)
console.log(`${num} é ${r}`)