

function soma ( a, b )  //Nomefunção  ( Parametros )
    {
        // console.log (a+b); Verificar chamada do parametro da função

        return a + b;  //
    }

    console.log ( "A Função soma retornou um valor = " , soma ( 3, 5), '\n')// Chamada da Função Soma        

function returnEvenValues (array)
{
    let evenNums = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            evenNums.push(array[i]);
        }
        else
        {
            console.log ('O número do Array não é Par :', array[i])
        }
    }

    console.log ('Os Números do Array são Par : ', evenNums, '\n');
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);

//  Funções da Lista

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
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