num = []
maior = 0
soma = 0
media = 0

function adcvalor(){
    
    var n = Number(document.getElementById('num').value)
    var valores = document.getElementById('valores')
    var res = document.getElementById('res')
    if(n == 0 || n > 100 || n<0){
        alert('Digite os dados corretamente')
    }else{
        for (c = 0; c < num.length; c++){
            if(num[c] == n){
                alert('Valor duplicado')
                c = num.length
            } 
        }
        num.push(n)
        valores.innerHTML += `O valor ${n} foi adicionado !
        `
        
        
    }
    
}



function resultado(){
    menor = num[0]
    res = document.getElementById('res')
    for (c = 0 ; c<num.length ; c++){
        if(num[c] > maior){
            maior = num[c]
        }
    }

    for (c = 0 ; c<num.length ; c++){
        if(num[c] < menor){
            menor = num[c]
        }
    }

    for (c = 0  ; c<num.length ; c++){
        soma = soma + num[c]
    } 

    media = soma / num.length

    res.innerHTML = `Foram digitados ${num.length} números
    <br>`
    res.innerHTML += `O maior numero digitado foi ${maior}
    <br>`
    res.innerHTML += `O menor número digitado foi ${menor}
    <br>`
    res.innerHTML += `A soma de todos os valores é ${soma}
    <br>`
    res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}
    <br>`
}