/*
	FUNCTIONS - parte 07
	Edney Roldão - 06/05/2016

	- Temos que tomar cuidade com o escopo global, conforme usamos o este escopo, 
	  acabamos inserindo atributos undefined dentro de outros coisas
*/

// Exemplo de como poluir o escopo global
var contador = 0;
var add = function() {
	return ++contador;		
};
// A cada chamado ocorre alteração indevida na contador global.
console.log( add() ); // 1
console.log( add() ); // 2
console.log( add() ); // 3

// Vamos encapsular e obter o mesmo resultado.
var contador2 = {
	valor: 0,
	add: function() {
		return ++this.valor;
	}
};
console.log( contador2.add() );
console.log( contador2.add() );
console.log( contador2.add() );
