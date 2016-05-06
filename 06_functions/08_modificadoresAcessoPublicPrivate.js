/*
	FUNCTIONS - parte 08
	Edney Roldão - 06/05/2016

	- Em js não temos os modificadores de acesso private e public como em outras linguagens.

	- Podemos proteger o acesso à nossas propriedades por meio de:
		01: Closures e Factory Function (FF)
		02: Constructor Function (CF)
		03: IIFE - Immediately Invoked Function Expression - elemina a chamada da function e o operador new
				   por meio de uma auto invacação.  
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 01 - Protegendo acesso de atributo por meio de CLOSURES e FF - fazemos o return daquilo que deve ser public
var criarContador = function() {
	var valor = 0;
	return {
		add: function() {
			return ++valor;
		}
	};
};

// Obtendo o contador a partir da FF
var contador = criarContador();

// testendo o acesso
console.log( contador.valor ); // perceba que não temos acesso ao atributo, recebemos undefined
console.log( contador.add() ); // resultado = 1
console.log( contador.add() ); // resultado = 2
console.log( contador.add() ); // resultado = 3



////////////////////////////////////////////////////////////////////////////////////
// 02 - Protegendo acesso de atributo por meio de CF - a diferença é o operador new
var Counter = function() {
	var valor = 0;
	this.add = function() {
		return ++ valor;
	};
};

// Obtendo o contador a partir da CF
var counter = new Counter();
console.log( counter.valor ); // perceba que não temos acesso ao atributo, recebemos undefined
console.log( counter.add() ); // resultado = 1
console.log( counter.add() ); // resultado = 2
console.log( counter.add() ); // resultado = 3



////////////////////////////////////////////////////////////////////////////////////////
// 03 - IIFE - Existem dois tipos: Module Pattern e Revealing Module Pattern


/* Module Pattern: com essa forma de encapsular, não precisamos fazer a chamada da função,
				   pois ocorre uma auto invacação da função. A maior parte dos frameworks
				   usam o encapsulamento dessa forma 

				   Como fica: var counter = (a implementação fica aqui)();   */
var novoContador = (function() {
	var valor = 0;
	return {
		add: function() {
			return ++valor;
		}
	};
})(); 

// Veja que a diferença entre os exemplos 01 e 02 é que não precisamos recuperar o contador, usamos ele direto.
console.log( novoContador.add() );


/* Revealing Module Pattern: O que vai acontecer aqui é que temos um atributo e duas funções que estão
							 inacessíveis externamente, porém foi declarada uma terceira função que cria uma
							 referencia para tudo aquilo que desejamos revelar público. */
var revealingCounter = (function() {
	var _valor = 0;
	
	var _add = function() {
		return ++_valor;
	};

	var _reset = function() {
		_valor = 0;
	};

	return {
		add: _add,
		reset: _reset
	};
})();

console.log();console.log();
/* Obs: Existe uma convenção em js onde todas as propriedades de escopo private devem iniciar seus nomes
		com underline, usamos isso para distinguir atributos private e public,  como visto acima. */

// Acessando os valores e funções
console.log( revealingCounter.valor );

console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
revealingCounter.reset();
console.log();

console.log( revealingCounter.add() );
revealingCounter.reset();
console.log();

console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
revealingCounter.reset();
console.log();

console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
console.log( revealingCounter.add() );
console.log( revealingCounter.add() );


