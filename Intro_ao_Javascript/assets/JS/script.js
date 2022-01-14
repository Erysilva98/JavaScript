// Variaveis da Função para o Contador com JavaScript
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var inputUser = "";

// Variaveis da Para as Funções de Listagem
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');


// Função para o Contador com JavaScript
function increment() {
    currentNumber= currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber= currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
}


var captar = "";
	function chamar (){
	captar = document.getElementById('valor').value;
	document.getElementById('digito').innerHTML = captar;
}

// Função de Listagem do Formulário da página

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.requestFullscreen();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}