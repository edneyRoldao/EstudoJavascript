/*
	DATE OBJECT - parte 02
	Edney Roldão - 07/05/2016

	- Date API
*/

// Recuperando a data atual
var hoje = new Date();

// Recuperando o dia
console.log( hoje.getDate() );
console.log();

// Recuperando o dia da semana
console.log( hoje.getDay() ); // valor retornado é o index que inicia com zero.
console.log();

// Recuperando o ano
console.log( hoje.getFullYear() );
console.log();

// Recuperando a hora
console.log( hoje.getHours() );
console.log();

// Recuperando os milissegundos
console.log( hoje.getMilliseconds() );
console.log();

// Recuperando os minutos
console.log( hoje.getMinutes() );
console.log();

// Recuperando o mes
console.log( hoje.getMonth() ); // janeiro é considerado como zero.
console.log();

// Recuperando os segundos
console.log( hoje.getSeconds() );
console.log();

// Recuperando o tempo em milisegundos
console.log( hoje.getTime() );
console.log();

// Convertendo a data em string
var dataLiteral = hoje.toString();
console.log( dataLiteral );
console.log( typeof dataLiteral );


/* 
	Para saber mais:
		https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date	
 */
