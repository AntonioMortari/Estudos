//Implemente uma função que receba um objeto contendo informações de um produto (nome, preço, quantidade) e retorne o valor total desse produto (preço multiplicado pela quantidade).

const precoTotal = (produto) =>{
    total = produto.preco * produto.qnt
    return total
}

let produto1 = {
    nome: 'tv',
    preco: 1000,
    qnt: 100
}

let produto2 = {
    nome: 'celular',
    preco: 800,
    qnt: 10
}

let precoT = precoTotal(produto2)

console.log(precoT)