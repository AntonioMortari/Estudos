function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var date = new Date()
    var hora  =date.getHours()
    //var hora = 19

    if (hora >=0 && hora < 12){
        //Bom dia !
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas.`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#63788d'
    }else{
        if (hora >=12 && hora < 18){
            //Boa tarde !
            msg.innerHTML = `Boa tarde ! Agora são ${hora} horas.`
            img.src = 'imagens/tarde.jpg'
            document.body.style.background = '#fc9c03'
        }else{
            //Boa noite !
            msg.innerHTML = `Boa noite ! Agora são ${hora} horas.`
            img.src = 'imagens/noite.jpg'
            document.body.style.background = '#0d1121'
        }
    }
}