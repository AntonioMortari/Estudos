//Percorra um array de objetos que representam produtos e exiba o nome e o preço de cada produto no console.

produtos = [
    {
        nome:'arroz',
        preço:15
    },

    {
        nome:'feijão',
        preço:10
    },

    {
        nome:'leite',
        preço:5
    },

    {
        nome:'Bife',
        preço:40
    }
]

produtos.forEach((item) =>{
    console.log(`${item.nome}: ${item.preço}`)
})