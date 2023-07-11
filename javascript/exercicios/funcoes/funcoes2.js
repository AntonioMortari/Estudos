let inicio = 10
let fim = 1
let i = 2


const contagem = () =>{
    for (c = 0 ; c<=fim ; c = c+i){
        console.log(c)
    }
}

const contagemR = () =>{
    for (c = inicio ; c>=fim ; c = c-i){
        console.log(c)
    }
}

if(inicio < fim){
    contagem()
}else{
    contagemR()
}


