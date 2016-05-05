/*
	FUNCTIONS - parte 04
	Edney Roldao - 05/05/2016

	- Usando os operadores CALL e APPLY para invocar functions.

	- Parte do código foi retirado do exemplo 03.
*/

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

/* 	Como vista no exemplo 03, a function acima quando invocada a partir do escopo global, retorna UNDEFINED
	pois a propriedade que está sendo referenciada só existe no escopo do objeto carro, porém podemos chamar a 
	function no escopo global a partir do operador call ou apply que recebem como argumento no primeiro parâmetro 
	o escopo que se deseja chamar a function.
 */

 // Todos exemplos abaixo retornam o mesmo resultado.

 /* pelo operador call */  console.log(  getPotencia.call(carro)  );
 /* pelo operador apply */ console.log(  getPotencia.apply(carro)  );
 /* a partir do objeto */  console.log(  carro.getPotencia()  );


/* Diferença entre call e apply:
 	- No call temos que passar cada parâmetro separados por vígula, sendo que o primeiro deve ser o escopo visto antes.
 	- No apply o processo é o mesmo, só que depois do primeiro parâmetro que deve ser o escopo como dito antes, os 
 	  outros parâmetros devem ser passados dentro de um array.

 	- Vou criar um novo objeto e uma nova function que vai receber dois parâmetros além do escopo do objeto 
*/

// Criando a function
var getSalarioReal = function(valorDescontos, valorHoraExtra) {
	return (this.salarioBase + valorHoraExtra) - valorDescontos;
};

// Criando o objeto
var pessoa = {
	nome: "edy",
	salarioBase: 2200.00,
	getSalarioReal: getSalarioReal
};

// Invocando a function com parâmetros pelo operador call
console.log(  getSalarioReal.call(pessoa, 450.00, 700.00)  ); // passando os parâmetros separados por vígula

// Invocando a function com parâmetros pelo operador apply
// declarando um array com os valores
var salarioAccounts = [450.00, 700.00];
console.log(  getSalarioReal.apply(pessoa, salarioAccounts)  ); // passando um array como parâmetro

// Outra forma de passar o array no apply
console.log(  getSalarioReal.apply(pessoa, [450.00, 700.00])  );


/* No próximo exemplo vamos estudar sobre funções construtoras e funções fábrica para criar objetos */