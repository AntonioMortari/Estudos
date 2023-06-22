//Percorra um array de objetos que representam alunos, atualizando a propriedade "aprovado" para true se a nota do aluno for maior ou igual a 7.

alunos = [
    {
        nome:'André',
        nota:8,
        aprovado:false
    },

    {
        nome:'Joana',
        nota:10,
        aprovado:false
    },

    {
        nome:'Maria',
        nota:6,
        aprovado:false
    },

    {
        nome:'Lucas',
        nota:2,
        aprovado:false
    },
]

alunos.forEach((aluno) =>{
    if(aluno.nota >=7){
        aluno.aprovado = true
    }else{
        aluno.aprovado = false
    }

    console.log(`${aluno.nome}: Aprovado?:${aluno.aprovado}`)
})