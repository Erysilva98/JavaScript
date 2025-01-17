function validaArray(arr, num) 
{
    try {

        if(!arr && ! !num) throw new ReferenceError("Envie os Parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array Precisa ser do tipo object");

        if(typeof arr !== 'number') throw new TypeError("Array Precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");  
        
        return arr;

    } catch (e) {
        
        if (e instanceof ReferenceError)
        {
            console.log("Este erro é um ReferenceError! ");
            console.log(e.message)
        }
        else if (e instanceof TypeError)
        {
            console.log("Este erro é um TypeError! ");
            console.log(e.message)
        }
        else if (e instanceof RangeError)
        {
            console.log("Este erro é um RangeError! ");
            console.log(e.message)
        }
        else
        {
            console.log("Ocorreu um erro não esperado! " + e);
        }
    }
}

console.log(validaArray( ) );