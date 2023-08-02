let input = document.querySelector('#cor')
let div = document.querySelector('#box')

const mudarCor = () =>{
    div.style.background = `${input.value}`
}

input.oninput = mudarCor

