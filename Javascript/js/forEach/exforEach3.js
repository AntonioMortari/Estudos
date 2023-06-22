//Percorra um array de objetos que representam pessoas, exibindo o nome de cada pessoa no console.

pessoas = [
    {
        nome:'Ana'
    },

    {
        nome:'joão'
    },

    {
        nome:'Pedro'
    },

    {
        nome:'Maria'
    }
]

pessoas.forEach((item) =>{
    console.log(item.nome)
})