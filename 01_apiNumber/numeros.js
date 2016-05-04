/*
	Edney Roldão - 04/05/2016.

	Number API.

	Só existe um tipo de numérico na linguagem js.
	IEEE (standard for floting-point)
	binary64 ou Double Precision
*/

// criando um variável do tipo Nubem
var numero = 5;

// para confirmar o tipo
console.log(typeof numero);

// função de potencia
console.log(numero.toExponential(2));

// definindo nomero de casas decimais após a vígula
console.log(numero.toFixed(2));

// para converter em tipo String
var numero02 = numero.toString();
console.log(typeof numero02);

// numero de numeros que deve ser exibido
var numero03 = 12.77;
console.log(numero03.toPrecision(3)); // 12.7

// Cuidado com as pegadinhas
console.log(0.1 + 0.2); // resultado = 0.3000000000000004

// divisão por zero não ocorre erro
console.log(3 / 0); // resutado = infinity

/* Cuidado com os NaN (not a number). O problema do NaN é que ele contamina
 as operações subsequentes sendo difícil de identificar onde está o erro. */
console.log("javascript" * 10); // resultado = NaN

/*
	Considerações finais:
		No js também temos a API Math para se trabalhar com numeros.
*/ 