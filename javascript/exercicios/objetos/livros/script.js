let btnN = document.getElementById('btnN');
let btnP = document.getElementById('btnP');
let img = document.getElementById('img');
let titulo = document.getElementById('titulo');
let autor = document.getElementById('autor');
let index = 0


let livro1 = {
    titulo:'Revolução dos Bichos',
    autor : 'George Orwell',
    file: 'https://www.meucatalogodelivros.com.br/wp-content/uploads/2021/05/Capa-A-revolucao-dos-bichos-1-661x1024.jpg'
}

let livro2 = {
    titulo:'1984',
    autor : 'George Orwell',
    file: 'https://media.senscritique.com/media/000016941163/source_big/1984.jpg'
}

let livro3 = {
    titulo:'12 regras para a vida',
    autor : 'Jordan Peterson',
    file: 'https://th.bing.com/th/id/OIP.z-p3xZ1sHnvKpFA-TXnkLAAAAA?pid=ImgDet&rs=1'
}

let livro4 = {
    titulo:'O Diário de Anne Frank',
    autor : 'Anne Frank',
    file: 'https://img.wook.pt/images/o-diario-de-anne-frank-anne-frank/MXwyNDE3NzEzNHwyMDI1MTI3N3wxNTk0NzY3NjAwMDAw/500x'
}

let livro5 = {
    titulo:'Além da ordem',
    autor : 'Jordan Peterson',
    file: 'https://adonisnobrega.com/wp-content/uploads/2021/08/alem-da-ordem-mais-12-regras-para-a-vida-de-jordan-b-peterson.jpg'
}


let livro6 = {
    titulo:'Bilionários por acaso',
    autor : 'Ben Mezrich',
    file: 'https://th.bing.com/th/id/R.d7a300ee74061a41d4b894992cca44f0?rik=U76AeAQcynkOow&pid=ImgRaw&r=0'
}


let livro7 = {
    titulo:'Princípios',
    autor : 'Ray Dalio',
    file: 'https://img.bertrand.pt/images/principios-ray-dalio/NDV8MjMzMzQ2OTB8MTkyODIyMDF8MTY0ODIwMzgyNTAwMA==/500x'
}


let livro8 = {
    titulo:'Do Mil ao Milhão',
    autor : 'Thiago Nigro',
    file: 'https://th.bing.com/th/id/R.5bd3c15993d47489a4fef97b05bf7568?rik=QamWz%2bQqPyNmqw&pid=ImgRaw&r=0'
}


let livro9 = {
    titulo:'O Menino do Pijama Listrado',
    autor : 'Jonh Boyne',
    file: 'https://http2.mlstatic.com/D_NQ_NP_751056-MLB31988727165_082019-O.webp'
}



let livro10 = {
    titulo:'Inteligência Emocional',
    autor : 'Daniel Goleman',
    file: 'https://th.bing.com/th/id/R.852a080d803b9227dbe55e67ba04396a?rik=jpw6Mc9uE6pq3w&pid=ImgRaw&r=0'
}

let livros = [livro1, livro2, livro3, livro4, livro5, livro6, livro7, livro8, livro9, livro10]

const initializeBook = () =>{
    titulo.innerText = `${livros[index].titulo}`
    autor.innerText = `${livros[index].autor}`
    img.src = `${livros[index].file}`
}

initializeBook()

const nextBook = () =>{
    if (index == livros.length - 1) {
        index = 0
    }else{
        index++
    }
    initializeBook()
}

const previousBook = () =>{
    if (index == 0){
        index = livros.length - 1
    }else{
        index--
    }
    initializeBook()
}




btnN.addEventListener('click', nextBook)
btnP.addEventListener('click', previousBook)