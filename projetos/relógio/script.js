
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let btn = document.getElementById('btn')
let time;


const attTime = () =>{
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    //mostrar hora
    if(h < 10){
        hour.innerText = '0'+ h
    }else{
        hour.innerText = h
    }

    //mostrar minuto
    if(m < 10){
        minute.innerText = '0'+ m
    }else{
        minute.innerText = m
    }

    //mostrar segundo
    if(s  < 10 ){
        second.innerText = '0'+s
    }else{
        second.innerText = s
    }
}

const stopTime = () =>{
    clearInterval(time)
    btn.innerText = 'Voltar relógio'
    btn.removeEventListener('click' , stopTime)
    btn.addEventListener('click' , activeTime)
}

const activeTime = () =>{
    time = setInterval(attTime,1000)
    btn.innerText = 'Parar Relógio'
    btn.removeEventListener('click' , activeTime)
    btn.addEventListener('click' , stopTime)
}

time = setInterval(attTime , 1000)

btn.addEventListener('click' , stopTime)
