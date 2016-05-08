/*
	OPERADORES - parte 04
	Edney Roldão - 08/05/2016

	- instanceof: funciona igual em outras linguagens para objetos criados a partir do operador new.

	- in: verifica se o objeto possui uma determinada propriedade. 
*/

// Declarando um objeto para os exemplos
var Pessoa = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

var edy = new Pessoa("edney", 28);

// usando instanceof
console.log( edy );
console.log( edy instanceof Pessoa ); // true
console.log( edy instanceof Date );   // false
console.log();

// usando in
console.log( "nome" in edy );   // true
console.log( "altura" in edy ); // false



