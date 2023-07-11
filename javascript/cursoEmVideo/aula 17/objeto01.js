var amigo = {
    nome:'Josá',
    sexo:'M' ,
    peso:84.5,
    engordar(p=0){
        console.log('Você pesava ' + this.peso)
        console.log(`Engordou ${p} Kg`)
        this.peso += p
    }
}

amigo.engordar(2)

console.log('Peso atual = ' + amigo.peso)
