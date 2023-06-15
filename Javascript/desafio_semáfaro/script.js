const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const auto = document.getElementById('auto')
const img = document.getElementById('img')
index = 0


colors = {
    red :'vermelho',
    yellow :'amarelo',
    green :'verde' 
}

const changecolors = [colors.red , colors.yellow , colors.green]

function changeColorAuto(){
    img.src = `img/${changecolors[index]}.png`
        if(index == changecolors.length -1){
            index = 0
        }else{
            index++
        }
}

function changeAuto(){
    intervalId = setInterval(changeColorAuto , 1000)
}



function changeColorRed(){
    clearInterval(intervalId)
    img.src = `img/${colors.red}.png` 
}


function changeColorYellow(){
    clearInterval(intervalId)
    img.src = `img/${colors.yellow}.png` 
}

function changeColorGreen(){
    clearInterval(intervalId)
    img.src = `img/${colors.green}.png` 
}


red.addEventListener('click', changeColorRed)
yellow.addEventListener('click', changeColorYellow)
green.addEventListener('click', changeColorGreen)
auto.addEventListener('click', changeAuto)