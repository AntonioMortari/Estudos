//Implemente uma função que receba um objeto contendo nomes e idades de pessoas e retorne um novo objeto contendo apenas as pessoas maiores de idade (idade maior ou igual a 18).

const maiordeIdade = (people) =>{
    let people18 = {
        person : []
    }
    
    for (let pessoa in people) {
        if (people[pessoa].idade >= 18) {
            people18.person.push(people[pessoa].nome);
        }
    }

    return people18
}

let pessoas = {
    pessoa1: {
        nome: 'lucas',
        idade: 18
    },

    pessoa2: {
        nome: 'João',
        idade: 17
    },

    pessoa3: {
        nome: 'Maria',
        idade: 19
    },

    pessoa4: {
        nome: 'Pedro',
        idade: 28
    },

    pessoa5: {
        nome: 'Joana',
        idade: 22
    }
}

let maior18 = maiordeIdade(pessoas)
console.log('pessoas maiores que 18 anos:')
for (c = 0 ; c<maior18.person.length ; c++) {
    console.log(maior18.person[c])
}

