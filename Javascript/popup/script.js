'use strict';

let btn = document.getElementById('btn')
let body = document.querySelector('body')
let btnC;
let btnF;


const closePopup = () =>{
    let popup = document.querySelector('.popup')
    popup.remove()
    body.classList.remove('popup-active')
    body.appendChild(btn)   
}

const closePopupOnBody = (event) =>{
    let elementoClicado = event.target
    let popup = document.querySelector('.popup')

    if(elementoClicado.classList.contains('popup-active')){
        closePopup()
    }
    
}

const openPopup = () =>{
    btn.remove()
    body.classList.add('popup-active')
    let popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `
    <i class="bi bi-x" id="btn-close"></i>
    <h3>Você acionou o Popup!!!</h3>
    <p>Clique no <span>corpo da página</span>, no <span>X</span> ou no <span>botão fechar</span> para fecha-lo!</p>
    <button id="fechar">Fechar</button>
    `
    body.appendChild(popup)
    btnC = document.querySelector('#btn-close')
    btnC.addEventListener('click', closePopup)
    
    btnF = document.querySelector('#fechar')
    btnF.addEventListener('click', closePopup)
    document.body.addEventListener('click', closePopupOnBody)
}



btn.addEventListener('click', openPopup)