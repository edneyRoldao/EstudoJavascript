/*
	ERROR OBJECT
	Edney Roldão - 08/05/2016

	- Tratamento de exceptions
*/

/* Exemplo 01
		RefecenceError: a is not defined */
try {
	var x = a; // a variável a não foi definida.
	var b = x + 10;
	console.log( b );
} catch(e) {
	console.log(e.name + "  " + e.message);
	console.log( e.toString() ); // tem o mesmo efeito acima.
}

// Exemplo 02 - Criando uma função que vai lançar uma exception se o parâmetro não for passado 
var gerarSerial = function(max) {
	if(max === undefined) {
		throw "precisa informar um numero";
	}
	return Math.floor(Math.random() * max);
};

try {
	console.log( gerarSerial(1000) );
	console.log( gerarSerial() );
}catch(e) {
	console.log( e );
}
