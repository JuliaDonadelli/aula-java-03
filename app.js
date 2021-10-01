function Chutar(){
    

// sortear um numero aleatorio
let numeroSecreto = 3
// pegar o numero digitado
let chute = parseInt(document.querySelector("#valor").value)

/**

     * OPERADORES RELACIONAIS

     * < --> menor

     * > --> maior

     * <= --> menor ou igual

     * >= --> maior ou igual

     * == --> igual

     * != --> diferente

     */


// comparar o numero digitado com o numero aleatorio
if(numeroSecreto == chute){
// se tiver correto e os numeros forem iguais, mostrar a mensagem que a pessoa acertou

document.querySelector(".resultado").innerHTML = "Você acertou"
}
else 
{
//se estiver errado e os numeros forem diferentes, mostrar a mensagem que a pessoa errou
document.querySelector(".resultado").innerHTML = "Você errou"
}

}