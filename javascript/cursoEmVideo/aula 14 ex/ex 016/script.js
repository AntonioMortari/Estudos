

function contar(){
    var txti = document.getElementById('inicio')
    var txtf = document.getElementById('fim')
    var txtp = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(txti.value)
    var fim = Number(txtf.value)
    var passo = Number(txtp.value)

    if (passo <=0){
        //erro se passo = 0
        alert('Passo inválido, tente novamente')
    }

    if (inicio < fim){
        //contagem normal
        for (var c = inicio ; c<=fim ; c = c+passo ){
            res.innerHTML += ' 👉 ' + c
            if (c == fim){
                res.innerHTML += '✅' 
            }
        }
    }else{
        //regressiva
        for (var c = inicio ; c>=fim ; c = c-passo ){
            res.innerHTML += ' 👉 ' + c
            if (c == fim){
                res.innerHTML += '✅' 
            }
         }
    }
}