function parimp(n){
    if(n%2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}
var num = parseInt(Math.random()*1000)
var r = parimp(num);
console.log(`${num} é ${r}`)