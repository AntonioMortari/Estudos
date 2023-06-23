/* <div class="note">
            <h3>Título da nota</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus perferendis facere nihil laborum dolor sunt eaque, saepe inventore perspiciatis at commodi assumenda aliquam. Quam ex ducimus eveniet nihil corrupti!</p>
            <button class="remove-note">
                <i class="bi bi-trash3"></i>
            </button>
        </div> */

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
    <p>${note}</p>
    <button class="remove-note">
        <i class="bi bi-trash3"></i>
    </button>
    `

        //adicionar o elemento criado div ao conteiner
        pai.appendChild(div)

        //limpar input
        inputTitle.value = ''
        inputNote.value = ''
    }

}

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

const removeNote = (event) => {
    event.target.closest('.note').remove();
    // removenote.remove();
};

addnote.addEventListener('click', addNote);
removeall.addEventListener('click', removeAll);
pai.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-note')|| event.target.classList.contains('bi-trash3')) {
        removeNote(event);
    }
});


