let pessoa = {
    nome: 'João',
    idade : 30,
    profissao: 'Engenheiro',

    //metodo do objeto
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.profissao}`)
    }
}

pessoa.saudacao()