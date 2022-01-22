function filterPares (arr) {
    return arr.filter(callback);

}

function callback(intem){
    // Retorna números Pares
    return intem % 2 === 0;
    // Retorna números Impares
    // return intem % 2 !== 0;  
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPares(meuArray));