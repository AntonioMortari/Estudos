var num = [4 , 6 , 9 , 2 , 2, 3 , 8 , 7 , 6 , 0 , 8]
/* 
for (c = 0 ; c<=num.length ; c++){
    if(num[c]%2 == 1 ){
        console.log(`${num[c]} é impar :)`)
    }else{
        console.log(`${num[c]} é par :>`)
    }
}
*/


/*
c = 0
while(c <= num.length){
    if(num[c]%2 == 1){
        console.log(`${num[c]} é impar :)`)
    }else{
        console.log(`${num[c]} é par :)`)
        
    }
    c++
} 
 */
for(c = 0 ; c<12 ; c++){
var n1 = parseInt(Math.random() * Math.random() * 98)
    num[c] = n1
}

for (c =0 ; c<num.length ; c++){
    if(num[c]%2 == 1){
        console.log(`O número ${num[c]} é impar`)
    }else{
        console.log(`O número ${num[c]} é par`)
    }
}


