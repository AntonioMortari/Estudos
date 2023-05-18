function ver(){
    var num = document.getElementById('n')
    var res = document.getElementById('res')
    var c = 1

    var n = Number(num.value)

    res.innerHTML = ' '

    while(c<=10){
        res.innerHTML += `
        ${n} x ${c} = ${n*c}
        `
        c++
    } 

//    for(c = 1 ; c<=10 ; c++){
//         res.innerHTML += `${n} x ${c} = ${n*c}`
//    }   
}