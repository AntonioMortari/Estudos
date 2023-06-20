/* <label class="todo__item">
    <input type="checkbox">
    <div>Teste de item 1</div>
    <input type="button" value="X">
</label> */
index = 0
//cirar tarefa
const criarItem = () =>{
    if(tarefa.length  > 0){
        const item = document.createElement('label')
        item.classList.add('todo__item')
        item.id = `index-${index}`
        item.innerHTML = `
        <input type="checkbox">
        <div>${tarefa}</div>
        <input type="button" value="X" id="btn-x">
        `
    
        document.getElementById('todoList').appendChild(item)
    }else{
        window.alert('[ERRO] Digite uma tarefa')
}
}


//tecla pressionada+ criar tarefa
let input = document.querySelector('#newItem input')
input.addEventListener('keydown' , function(event){
    if(event.key == 'Enter'){
        tarefa = input.value
        input.value = ''
        criarItem()
    }
})

//remover tarefa
const removerItem = (event) => {
    const item = event.target.parentNode;
    item.remove();
}

// ...


// Adicionar ouvinte de evento de clique para remoção
document.addEventListener('click', function (event) {
    if (event.target.id === 'btn-x') {
        removerItem(event);
    }
});
