//Crie uma função que receba um array de objetos contendo informações de alunos (nome, nota1, nota2) e retorne um novo array com os nomes dos alunos aprovados (média das notas igual ou superior a 7).

const mediaAlunos = (alunos) =>{
    let aprovados = []
    for(let aluno in alunos){
        alunos[aluno].media = (alunos[aluno].nota1 + alunos[aluno].nota2) / 2 
        if(alunos[aluno].media >=7){
            aprovados.push(alunos[aluno].nome)
        }
    } 

    return aprovados
}

objetoalunos = {
    aluno1:{
        nome: 'Antonio',
        nota1: 7.4,
        nota2: 8
    },

    aluno2:{
        nome: 'Lucas',
        nota1: 6,
        nota2: 10
    },

    aluno3:{
        nome: 'Joana',
        nota1: 2,
        nota2: 3
    }
}

let alunosAprovados = mediaAlunos(objetoalunos) ;

console.log(alunosAprovados) ;

// for(c = 0 ; c<alunosAprovados.length ; c++){
//     console.log(alunosAprovados[c])
// }

