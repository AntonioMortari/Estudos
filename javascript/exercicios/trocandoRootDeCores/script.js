'use strict';
let cor = 'green'
document.querySelector('#paleta2').addEventListener('click' , () =>{
    document.documentElement.style.setProperty('--cor-primaria' , 'purple')
    document.documentElement.style.setProperty('--cor-secundaria' , 'pink')
    document.documentElement.style.setProperty('--bgcolor' , `${cor}`)
})

document.querySelector('#paleta1').addEventListener('click', () =>{
    document.documentElement.style.setProperty('--cor-primaria', `${cor}`)
    document.documentElement.style.setProperty('--cor-secundaria', '#fff')
    document.documentElement.style.setProperty('--bgcolor', '#000')
})