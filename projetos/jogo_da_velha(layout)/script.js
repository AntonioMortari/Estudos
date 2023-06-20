let jogador = "X"
let player = document.getElementById('player')
player.innerHTML = "Jogador da vez : X"

const jogar = (celula) =>{

    if(celula.innerHTML == ""){
        celula.innerHTML = jogador

        if(jogador ==  "X"){
            jogador = "O"
            player.innerHTML = "Jogador da vez : O"
        }else{
            jogador = "X"
            player.innerHTML = "Jogador da vez : X"
        }
    }

}

const restart = () =>{
    window.location.reload()
}