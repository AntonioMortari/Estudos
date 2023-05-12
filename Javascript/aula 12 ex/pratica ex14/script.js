function carregar(){

    var r = document.getElementById('res')
    var img = document.getElementById('imagem')

    var agora = new Date()
    //var hora = agora.getHours()
    var hora = 19
    

    //horas
    if (hora < 12 ){
        r.innerHTML = `Bom dia !, agora são ${hora} horas. `
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#709dc9'
    }else{
        if (hora >=12 && hora < 19){
            r.innerHTML = `Boa tarde !, agora são ${hora} horas. ` 
            img.src = 'imagens/tarde.jpg' 
            document.body.style.backgroundColor = '#f4720f' 
        }else{
            if(hora >= 19 || hora == 0 ){
                r.innerHTML = `Boa noite !, agora são ${hora} horas. `
                img.src = 'imagens/noite.jpg'
                document.body.style.backgroundColor = '#100705'
            }
        }
    }

}

