// Array
// Um array é uma lista que pode armazenar vários valores.

let frutas = ["Maçã", "Banana", "Uva" ];
// let frutas = ["0", "1", "2"]
console.log (frutas[1])

// Podemos adicionar itens!, sem alterar o array diretamente 
frutas.push ("laranja"); //Adiciona ao final 
console.log (frutas [3]);
frutas.pop (); //Remove do final (no nosso caso a laranja [3])
console.log(frutas);

// - Crie um array chamado 'animais' e adicione três animais.
// - Exibe o primeiro e o último console

let animais = ["Gato", "Cachorro", "Passáro"];
console.log (animais [1]);
animais.push ("Hamster");
console.log (animais [3]);
animais.pop ();
console.log (animais)