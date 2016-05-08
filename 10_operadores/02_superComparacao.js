/*
	OPERADORES - parte 02
	Edney Roldão - 08/05/2016

	- Os operadores de superComparação são: ( === e !== )

	- Quando desejmos comparar valores e seus tipos, usamos a superComparação que é mais
		determinístico e legível.
*/

// Exemplo 01
console.log( 10 === "10" ); // false
console.log();


// Exemplo 02
console.log( "10" === "10" ); // true
console.log();


// Exemplo 03 - Dois objetos de mesmo tipo vazios são considerados diferentes
var obj1 = {};
var obj2 = {};
console.log( obj2 == obj1 ); // false
console.log( obj2 === obj1 ); // false
console.log();

var str1 = new String();
var str2 = new String();
console.log( str2 == str1 ); // false
console.log( str2 === str1 ); // false
console.log();

/* No próximo exemplo vamos ver sobre operadores lógicos || e && */