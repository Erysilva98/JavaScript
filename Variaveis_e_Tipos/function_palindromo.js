// Solução 1
function verificaPalindromo(string)
{
    if (!string) return "String Inexistente"; 

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

// Solução 2
// Se os 2 caracteres inicias forem iguais aos caracteres final. Verificação
//  omo
//  012  for diferente a 210 não é um Palíndromo

function verificaPalindromo2(string)
{
    if (!string) return "String Inexistente";

    for (let i =0; i < string.length / 2; i++)
    {
        if (string[i] !== string[string.length -1 - i])
        {
            return false;
        }  
    }
    return true;
}

console.log(verificaPalindromo2("abba"));