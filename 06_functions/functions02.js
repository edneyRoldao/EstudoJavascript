/*
	FUNCTIONS - parte 02
	Edney Roldão - 05/05/2016

	- Formas de usar e invocar functions expressions aplicando conceitos de reuso de código.

	- Vamos conhecer o poder da Expressão Lambda no reaproveitamento de código.

	- Vamos criar uma função que vai calcular o valor final de um produto, considerando
	  preco mais impostos.
*/


// Criando um objeto produto
var produto = {
	nome: "macbook pro retina",
	preco: 6000.00
};


// Criando a function que calcula impostos federais de São Paulo
var calcularImpostosEstadoSP = function(precoProduto) {
	return precoProduto * 0.3;
};


// Criando a function que calcula impostos federais de Paraná
var calcularImpostosEstadoPR = function(precoProduto) {
	return precoProduto * 0.6;
};


// Criando function que calcula o valor de venda final de um produto
var calcularValorFinalProduto = function(produto, estadoImposto) {
	return produto.preco + estadoImposto(produto.preco);
};


/*   Agora vamos calcular o valor final passando como argumento o objeto produto e a 
   function que calcula o imposto Estadual. */

// valor do produto em São Paulo   
console.log(calcularValorFinalProduto(produto, calcularImpostosEstadoSP));

console.log('********************');

// valor do produto no Paraná
console.log(calcularValorFinalProduto(produto, calcularImpostosEstadoPR));

/* No próximo exemplo apresento conceitos mais avançados com functions, como a referenciar props em escopos diferentes */