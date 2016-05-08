/*
	OPERADORES - parte 03
	Edney Roldão - 08/05/2016

	- Os operadores lógicos também apresentam suas diferenças em javaScript.
		Suas operações são de curto-circuito e retorna um de seus operandos.
*/

/* ANÁLISE DA COMPARAÇÃO: ( 0 || 2 )
	Sabemos que: zero em js é considerado false e que, quando usamos || apenas um operando precisa ser true.
	A comparação passa pelo zero que é false e quando o encontra o 2 que é true,
	o processo acaba e o 2 é retornado.  */

console.log( 0 || 2 ); // retorna 2
console.log();

// Nesse caso como todos os operando devem ser true, é vai retornar o último comparado.
console.log( 1 && 2 ); // retorna 2
console.log();

// Como todos devem ser true com &&, o primeiro false encontrado é retornado pois a expressão é false
console.log( 0 && 2 ); // retorna 0
console.log();


// EXEMPLO PRÁTICO de como podemos usar esses retornos

// Criando uma função 
var gerarSerial = function(max) {
	return Math.floor(Math.random() * max);
};

// Perceba que quando não passamos o parâmetro recebemos o indesejado NaN.
console.log( gerarSerial(1000) );
console.log( gerarSerial() ); // Temos um NaN
console.log();

// 1º suloção para o NaN sem o usa do curto-circuito
var gerarSerial2 = function(max) {
	if(!max) {
		max = 1000;
	}
	return Math.floor(Math.random() * max);
};
console.log( gerarSerial2(1000) );
console.log( gerarSerial2() ); 
console.log();


// 2º suloção para o NaN sem o usa do curto-circuito com mais validações
var gerarSerial3 = function(max) {
	if(max === undefined || max === null || max === 0) {
		max = 1000;
	}
	return Math.floor(Math.random() * max);
};
console.log( gerarSerial3(1000) );
console.log( gerarSerial3() ); 
console.log();

// 3º suloção com curto-circuito, bem mais enxuto
var gerarSerial4 = function(max) {
	max = max || 1000;

	return Math.floor(Math.random() * max);
};
console.log( gerarSerial4(1000) );
console.log( gerarSerial4() ); 
console.log();


/* No próximo exemplo vamos ver sobro instanceof e in */