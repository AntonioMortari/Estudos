
let addnote = document.getElementById('add-note')
let pai = document.querySelector('#notes')
let removeall = document.getElementById('remove-all')



const addNote = () =>{
    let inputTitle = document.getElementById('note-title')
    let inputNote = document.getElementById('input-note')
    let titleNote = document.getElementById('note-title').value
    let note = document.getElementById('input-note').value
    if (note.length == 0 || titleNote.length == 0) {
        alert('[ERRO] Preencha a nota corretamente!')
    } else {

        //criando div e adicionando classe e os seus filhos
        let div = document.createElement('div')
        div.classList.add('note')
        div.innerHTML = `
    <h3>${titleNote}</h3>
    <p class="txt">${note}</p>
    <button class="remove-note">
        <i class="bi bi-trash3"></i>
    </button>
    <button class="edit-note">
        <i class="bi bi-pencil-square"></i>
    </button>
    `

        //adicionar o elemento criado div ao conteiner
        pai.appendChild(div)

        //limpar input
        inputTitle.value = ''
        inputNote.value = ''
    }

}

//remover todas as notas
const removeAll = () =>{
    let confirmed = confirm('Tem certeza que deseja apagar todas as notas?')
    // let divs = document.querySelectorAll('.note')
    // divs.forEach((notas) =>{
    //     notas.remove()
    // })
    if(confirmed){
        pai.innerHTML = ''
    }
}

//remover nota
const removeNote = (event) => {
    event.target.closest('.note').remove();
    // removenote.remove();
};

// //editar nota
// const editNote = (event) =>{
//     event.target.classList.toggle('bi-pencil-square')
//     event.target.classList.toggle('bi-check2')

//     if(event.target.classList.contains('bi-check2')){
//         let note = event.target.closest('.note')
//         let div = event.target.closest('.txt')
//         let input = document.createElement('input')
//         let conteudo = div.textContent
//         input.type = 'text'
//         input.value = conteudo
//         input.classList.add('input-edit')
//         div.replaceWith(input)
//         input.select()
//         note.appendChild(input)
        
//     }
// }

addnote.addEventListener('click', addNote);
removeall.addEventListener('click', removeAll);
pai.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-note')|| event.target.classList.contains('bi-trash3')) {
        removeNote(event);
    }
});
pai.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit-note') || event.target.classList.contains('bi-pencil-square') || event.target.classList.contains('bi-check2')){
        editNote(event)
    }
})


