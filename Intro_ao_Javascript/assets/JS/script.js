var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var inputUser = "";

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