
const stringtoUppercase = (vetor) =>{
    for (c = 0 ; c<vetor.length ; c++){
        vetor[c] = vetor[c].toUpperCase();
    }

    return vetor
}

const array = ['olá' , 'mundo' , 'javascript']

const arraytoUp = stringtoUppercase(array)

console.log(arraytoUp)