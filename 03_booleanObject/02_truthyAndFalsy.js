/*
	SOBRE OS TIPOS TRUTHY E FALSY:
	Edney Roldão - 05/05/2016
		A linguagem javascript assume o estado de alguns tipos como true ou false, dependendo do caso.
		Chamamos esse comportamento como:  ( tipos truthy e falsy )

		Obs: Perceba que nos exemplos abaixo estou usando !! (not not), com isso conseguimos comparar a os 
			 valores sem precisar recorer a operadores condicionais e de comparações.
*/

/* Todas as expressões abaixo são avaliadas como tipo falsy, portanto, 
	vão retornar false */
// todos as possibilidades de falsy estão listadas abaixo.

// zero é falsy
console.log(!!0); // false

// not a number é falsy
console.log(!!NaN); // false

// string vazia é falsy
console.log(!!""); // false

// false é falsy
console.log(!!false); // false

// null é falsy
console.log(!!null); // false

// undefined é falsy
console.log(!!undefined); // false


/* Tirando as expressões acima, todo o resto é avaliado com truthy, ou seja
	retornam true */


// números negativos são truthy	
console.log(!!-1); // true

// números positivos são truthy
console.log(!!10); // true

// string com valor são truthy
console.log(!!"edy"); // true

// objetos vazios são truthy
var animal = {};
console.log(!!animal); // true

// array vazio são truthy
var paises = [];
console.log(!!paises); // true
