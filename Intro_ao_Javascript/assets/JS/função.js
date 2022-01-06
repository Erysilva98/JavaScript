

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

