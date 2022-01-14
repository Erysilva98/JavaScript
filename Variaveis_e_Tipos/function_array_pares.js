function substituiPares(array)
{
    if (!array.length) return -1;
    for (let i =0; i < array.lengt; i++)
    {
        if (array[i] === 0)
        {
            console.log("Você já é Zero!");
        }
        else if (array[i] % 2 === 0 )
        {
            console.log('Substituindo ${array[i]} por 0 ...');
            array[i] = 0;
        }
    }
    return array;
}

let arr = [2, 1, 4, 5, 6];
console.log(substituiPares(arr));