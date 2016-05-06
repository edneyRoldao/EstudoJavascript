/*
	FUNCTIONS - parte 07
	Edney Roldão - 06/05/2016

	- Temos que tomar cuidade com o escopo global, conforme usamos este escopo, 
	  acabamos inserindo atributos undefined dentro de outros coisas.

	- Qual o motivo de usar o escopo global ?
			Como a linguagem não possui um linker, que faz uso de um escopo global compartilhado
			para estabelecer os vínculos entre diferentes partes de aplicãção, ou seja, não tem uma
			resolução para referencias externas, por isso usamos este escopo.
*/

/* Imagine que no seu projeto existem duas funções add incrementais distintas, uma de numeros 
   e outra de literais. Veja como uma acaba gerando valores undefined dentro da outra */


//////// CRIANDO AS FUNÇÕES DE INCREMENTO DE LITERAIS E NUMÉRICOS ////////////////////////////////////////
// function que incrementa numeros
var contador = 0;
var add = function() {
	return ++contador;
};

// function que incrementa literais
var itens = [];
var add = function(item) {
	itens.push(item);
	return itens;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//////// INVOCANDO AS FUNÇÕES CRIADAS ACIMA ////////////////////////////////////////////////////////////
// invocando a function de incremento numérico (aqui fica tudo normal, vai funcionar normalmente)
console.log( add() ); // resultado = 1
console.log( add() ); // resultado = 2
console.log( add() ); // resultado = 3

// invocando a function de incremento de literais (aqui fica tudo normal, vai funcionar normalmente)
console.log( add('A') ); // resultado = [ 'A' ]
console.log( add('B') ); // resultado = [ 'A', 'B' ]
console.log( add('C') ); // resultado = [ 'A', 'B', 'C' ]

/* CUIDADO COM O ESCOPO GLOBAL
	   Perceba que agora vamos invocar a function de incremento numérico e ela alterar
	   a function de incremento literal */

console.log( add() ); // resultado = [ 'A', 'B', 'C', undefined ] - valor esperado: 4
console.log();
///////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Para resolver esse problema, temos que encapsular essas functions por meio de objetos */

// Criando as mesmo funções acima dentro de objetos
var incrementaNumeros = {
	value: 0,
	add: function() {
		return ++this.value;
	}
};

var incrementaLiterais = {
	value: [],
	add: function(item) {
		this.value.push(item);
		return this.value;
	}
};

// Invocando as funções encapsuladas em objetos na mesma ordem da chamada anterior.
console.log( incrementaNumeros.add() ); // resultado = 1
console.log( incrementaNumeros.add() ); // resultado = 2
console.log( incrementaNumeros.add() ); // resultado = 3

console.log( incrementaLiterais.add('A') ); // resultado = [ 'A' ]
console.log( incrementaLiterais.add('B') ); // resultado = [ 'A', 'B' ]
console.log( incrementaLiterais.add('C') ); // resultado = [ 'A', 'B', 'C' ]

console.log( incrementaNumeros.add() ); // resultado = 4

console.log( incrementaLiterais.add('D') ); // resultado = [ 'A', 'B', 'C', 'D' ]

console.log( incrementaNumeros.add() ); // resultado = 5

/* Perceba que os resultados estão todos corretos */
///////////////////////////////////////////////////////////////////////////////////////////////////////


/* No próximo exemplo vamos ver como proteger e controlar o acesso aos atributos */