var idade = 23

if (idade >= 18 && idade < 65){
    console.log('Voto Obrigatório')
}else{
    if (idade >=16 && idade < 18 || idade > 65){
        console.log('Voto Opcional')
    }else{
        console.log('Não vota')
    }
}