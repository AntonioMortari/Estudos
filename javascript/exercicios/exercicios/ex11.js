//Crie uma função que receba um objeto representando um livro (com propriedades como título, autor e ano de publicação) e exiba as informações desse livro no formato "Título: Autor (Ano)".

const livroFormatado = (livroF) =>{
    let livro = `${livroF.titulo}: ${livroF.autor} (${livroF.data})`

    return livro
}

let livro1 = {
    titulo: 'Revolução dos Bichos',
    autor: 'George Orwell',
    data: '1945'
}

let livro2 = {
    titulo: '12 regras para a vida',
    autor: 'Jordan Peterson',
    data: '2018'
}

let livroformatado = livroFormatado(livro2)

console.log(livroformatado)