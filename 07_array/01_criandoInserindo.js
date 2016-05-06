/*
	ARRAY - parte 01
	Edney Roldão - 06/05/2016

		INTRODUÇÂO:
			- Não existe arrays de verdade na linguagem js

			- Os arrays são apenas objetos especiais que oferecem meios para acessar
			  e manipular suas propriedades por meio de índices.	
*/

// Criando e Inserindo valor ao array
var carros = [];
	console.log(carros);
carros[0] = "i30";
carros[1] = "vectra GT";
carros[2] = "focus";
	console.log(carros);

var carros2 = ["elantra", "fusion", "malibu"];
	console.log(carros2);

// Criando e Inserindo por meio do Constructor Function
var frutas = new Array("maça", "Laranja", "Banana");
	console.log(frutas);

// Iniciando array com tamanho inicial - o Array não tem tamanho fixo e o tamanho inicial é só uma forma de inicializar
var frutas2 = new Array(7);
	console.log(frutas2);

// Algumas funções básicas da API de Array.

// valueOf - retorna o valor do array
console.log( frutas.valueOf() );

// length - consultar o tamanho do array
console.log( carros.length );

// toString - converte o array em string
var cars = carros.toString();
console.log( typeof cars );

// indexOf - retorna o index do elemento no array
var index = carros.indexOf("focus");
console.log(index);


///////////////////  ORDENAÇÃO SIMPLES E REFINADA //////////////////////
// sort - ordena um array
carros.sort();
console.log( carros );
console.log();

// sort - podemos passar uma function como parâmetro no sort para definir uma lógica de ordenação
// Criando um array de objetos para explicar o funcionamento do sort refinado.

var produtosApple = [
	{modelo: 'macbook', preco: 6500.00},
	{modelo: 'mac mini', preco: 2600.00},
	{modelo: 'iPhone 6', preco: 3500.00}
];

console.log( produtosApple );
console.log();

// Vamos ordenar do mais caro para o mais barato (temos aqui uma expressão LAMBDA)
produtosApple.sort(function(a, b) {
	return b.preco - a.preco;
});
console.log( produtosApple );
console.log();

// Vamos ordenar do mais barato para o mais caro (outra expressão LAMBDA)
produtosApple.sort(function(a, b) {
	return a.preco - b.preco;
});
console.log( produtosApple );
console.log();


/* No próximo exemplo vamos conhecer melhor a API de arrays */