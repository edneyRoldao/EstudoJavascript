/*
	FUNCTIONS - parte 06
	Edney Roldão - 06/05/2016

	- Uma function que é invocada a partir do return de outra function é chamada de INNER FUNCTION

	- Closures: É quando uma Inner Function faz referencia à uma variável presente no escopo da function onde ela
				está sendo invocada. O processo de closures consegue manter esse referencia sem o uso de qualquer
				operador como o this, por exemplo.

	- O motiva das funções de callback funcionarem tão bem no javascript é devido as closures.

	- Isso significa que podemos passar funções como parâmentro e manter as referencias externas à ela.
*/

// Explicando na prática como funciona Closures
// veja que a inner function retorna uma variável externa ao seu escopo e mesmo assim mantém a referencia
var welcomeMessage = function() {
	var welcome = "Oi, as Closures estão em ação";
	return function() {
		return welcome;
	};
};

// duas formas de usar a function acima:

/* 01 */
console.log( welcomeMessage()() );

/* 02 */
var fnWecomeMessage = welcomeMessage();
console.log( fnWecomeMessage() );

/* No próximo exemplo vamos ver: encapsulamento, closures  */