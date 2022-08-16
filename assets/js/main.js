const inputTarefa = document.querySelector('.input-tarefa');//seleciona a caixa de texto
const btnTarefa = document.querySelector('.btn-tarefa');//seleciona o botao
const tarefas = document.querySelector('.tarefas');//seleciona a lista de tarefas

function criaLi(){//serve apenas para criar um elemento li da ul
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();//chama a função e joga na cosnt
    li.innerText = textoInput;//poderia ser innerHTLM aqui também
    tarefas.appendChild(li);//coloca a li dentro da ul

}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;//previne que colocar nada na caixa adicione algo
    criaTarefa(inputTarefa.value);


});