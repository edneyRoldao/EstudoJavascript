/*
	FUNCTIONS - parte 3
	Edney Roldão - 05/05/2016

	Nos exemplos a seguir apresento alguns conceitos mais avançados.

	- Em js é possível criar uma function que retorna outra function.

	- Em js é possível invocar uma function a partir de uma propriedade de um objeto.
*/


// Declarando uma function que retorna outra function.
var retornaFunction = function() { 

	// Perceba que está sendo retornado uma outro function
	return function() { 
		return "Sou uma function invocada a partir do return de outra function";
	};

};


// Chamando uma function que retorna outra.
// Para chamar uma function mais interna, temos que usar as aspas duas vezes. ()()
console.log( retornaFunction ); // Resultado = [Function]
console.log( retornaFunction() ); // Resultado = [Function]
console.log( retornaFunction()() ) // Resultado = Sou uma function invocada a partir...  


// Criando um objeto com uma propriedade que invoca uma function.
var pais = {
	nome: "USA",
	populacao: 300000000,
	getPopulacao: function() {
		return this.populacao;
	// como o propriedade populacao está em um escopo externo à function, temos que usar o operador this
	}
};
console.log(pais);
console.log(pais.getPopulacao);
console.log(pais.getPopulacao());

/* Vamos criar um objeto com uma propriedade que vai invocar uma Expression Function declarada 
	externamente ao escopo do objeto, ou seja, no escopo global. Perceba que será criada uma referência */

/* Criando uma function para ser chamada dentro de um objeto, atenção no return da function pois ela está
   referenciando uma propriedade ( potencia ) que só existe no escopo do objeto, portanto ela só tem utilidade
   quando invocada pelo objeto. */
var getPotencia = function() {
	return this.potencia; // uma function externa criando uma referência para o propriedade de um objeto
};

// Criando o objeto com uma propriedade que vai referenciar a function que está no escopo global
var carro = {
	nome: "Cayenne",
	potencia: "4.5 v8 340 cv",
	getPotencia: getPotencia
};

/*  Aqui estamos invocando a function a partir do escopo global, portando vamos receber um resultado ( undefined ) 
	pois a propriedade 'potencia' só existe no escopo do objeto, ou seja, a function só vai reconhecer a propriedade
	'potencia' quando acessada a partir do objeto */
console.log( getPotencia() );

// Chamando uma fuction de escopo global a partir de uma propriedade que está dentro do escopo de um objeto
console.log( carro );
console.log( carro.getPotencia );
console.log( carro.getPotencia() );

/* No próximo exemplo vamos ver chamadas de functions a partir de call e apply e suas diferenças */
