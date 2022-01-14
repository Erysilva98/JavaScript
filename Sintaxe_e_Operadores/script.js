/*
    Crie uma função que recebe dois números como parâmetros.
    Confira se os números são iguais.
    Confira se a soma dos números é maior que 10 ou menor que 20.
    Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

    Exemplo:

    Input: 1, 2
    Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/ 

// function verificar (num1, num2)
// {
//     const NumIguais = num1 === num2;
//     const Soma = num1 + num2;

//    /*
//     COM IF E ELSE
//     if (NumIguais)
//     {
//         return "Os Números são Iguais";
//     }
//     else
//     {
//         return "Números Diferentes";
//     } 
//     */

//     IF ternário

//     return NumIguais ? "Os Números são Iguais" : "Números Diferentes";

    
// }


function verificar (num1, num2)
{
    const PrimeiraFrase = criarPrimeiraFrase(num1, num2);
}

function criarPrimeiraFrase(num1, num2) 
{
    let NumIguais = '';

    if (num1 !== num2)
    {
        NumIguais = 'Não';
    } 

    return 'Os números ${num1} e ${num2} ${NumIguais} são Iguais.'
};

function criarSegundaFrase(num1, num2) 
{
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const
};