/*
	SOBRE VALORES NULL E UNDEFINED:
	Edney Roldão - 05/05/2016
		Sobre UNDEFINED: 
			Esse valor é retorna quando uma propriedade de um objeto seja consultada e não exista

		Sobre NULL:
			É retornado null quando uma propriedade exista e não tem valor atribuido a ela quando consultada.
*/


// Em javascript quando tentamos acessar dados que não existe recebemos undefined
var animal = {};
console.log(animal.nome); // resultado = undefined - propriedade nome não existe.


var outroAnimal = {
	nome: 'gato tom',
	raca: null
};
console.log(outroAnimal); // Perceba que a na propriedade será exibido null


/* 	 Diferente do null, não podemos definir o valor undefined para uma propriedade já existente, 
   porém quando estamos adicionando uma nova propriedade podemos faze-lo. Ver em Atribuindo 
   propriedades e valores a Objetos, objetos02.js */

