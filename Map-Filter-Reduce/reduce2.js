lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];


const saldoDisponivel = 100;

function calculatSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        console.log('Rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculatSaldo(saldoDisponivel, lista));