/*
	OPERADORES - parte 01
	Edney Roldão - 08/05/2016

	- CUIDADO COM OS OPERADORES DE COMPARAÇÃO:
		Em javaScript existe um processo conhecido por Coersão de tipos, com isso,
		devemos ter cuidado com operadores == e != (igual e diferente respectivamente)

	- Coersão de Tipos:
		Quando realizamos determinadas comparações são executadas alguns conversões implicitamente,
		isso ocorre pois a linguagem assume que você está comparando apenas os valores e não seus tipos,
		veja no exemplo 01 abaixo.
*/

// Exemplo 01 - comparando uma String com Number com os mesmos valores.
var numero = 10;
var numeroLiteral = "10";

console.log( typeof numero ); // resultado = Number
console.log( typeof numeroLiteral ); // resultado = String
console.log( numero == numeroLiteral ); // temos um TRUE, mesmo os objetos serem de tipos diferentes
/* Veja o que a coersão de tipo faz no exemplo acima:
	console.log( numero == ToNumber(numeroLiteral) - ocorre uma coversão de forma implicita ) */
console.log();


// exemplo 02 - Zero é igual a String vazia
console.log( 0 == "" ); // true
console.log();


// exemplo 03
console.log( null == undefined ); // true
console.log();


// exemplo 04 - exceto zero, qualquer numero comparado com true é true.
console.log( 1 == true ); // true
console.log();


// exemplo 05
console.log( false == 0 ); // true
console.log();


// exemplo 06
console.log( false == undefined ); // false
console.log();


// exemplo 07
console.log( false == null ); // false
console.log();


// exemplo 08
console.log( false == null ); // false
console.log();


// exemplo 09 - aqui é true pois só temos uma quebra de linha
console.log( 0 == "\n" ); // true
console.log();


// Exemplo 10 - comparando um tipo primitivo com tipo Object. temos uma conversão ToPrimitive(Obj)
console.log( 15 == new Number(15) ); // true
console.log();


/* No próximo exemplo vamos usar a superComparação */