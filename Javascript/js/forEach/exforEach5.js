//Percorra um array de strings e crie um novo array com todas as strings em letras maiúsculas.

let array1 = [
    'olá',
    'javascript',
    'html',
    'css'
]

array2 = []



array1.forEach((item) =>{
    array2.push(item.toUpperCase())
})

array2.forEach((item2) =>{
    console.log(item2)
})