function verificar(){

    var txtano = document.getElementById('data')
    var ano = Number(txtano.value)
    var res = document.getElementById('res')

    

//Ano atual
    var anoa = new Date()
    var anoatual = anoa.getFullYear()

    
//erros
    if (txtano.value.length == 0 || ano > anoatual){
    window.alert('[ERRO] Preencha os dados corretamente')
    } 
    
//idade    
    var idade = anoatual - ano

        
    

//valor input radio
    var g = document.getElementsByName('g')
    var gênero = ('')

    if (g[0].checked){
        var gênero = "Homem"
    }else{
        var gênero = "Mulher"
    }

    res.innerHTML = `Você é ${gênero} e tem ${idade} anos`
    
    
    

    
    

} //fimfunction