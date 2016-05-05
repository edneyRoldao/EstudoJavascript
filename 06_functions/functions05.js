/*
	FUNCTIONS - parte 05
	Edney Roldão - 05/05/2016

	- Factory functions and Constructor functions

	- A forma como criamos objetos até agora não é a forma correta.3
	- Podemos criar funções que nos auxiliam na criação de objetos.
*/

/////////////////////////////////////////////////////////////////////
// INICIO EXEMPLOS FACTORY FUNCTION

// Criando a função fábrica que vai automatizando a criação de objetos
var createCarObject = function(nome, montadora, potencia, preco) {
	return {
		nome: nome,
		montadora: montadora,
		potencia: potencia,
		preco: preco
	};
};

// criando dois objetos a partir de uma factory function
var carro01 = createCarObject("mustang", "ford", "v12 650cv", 200000);
var carro02 = createCarObject("opala", "GM", "v8 350cv", 50000);

// exibindo os objetos criados
console.log( carro01 );
console.log("");
console.log( carro02 );

// FIM EXEMPLOS FACTORY FUNCTION
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
// INICIO EXEMPLOS CONSTRUCTOR FUNCTION

// Criando a função construtora que vai automatizando a criação de objetos
var Animal = function(nome, raca, idade) { 
	this.nome = nome;
	this.raca = raca;
	this.idade = idade;
};

/* Por convenção, as funções construtoras devem ser declaradas em UpperCamelCase, esse padrão é adotado
   para que possamos lembrar de usar o operador new para criação dos objetos */
var animal01 = new Animal("Garrosh", "warrior", 10);
var animal02 = new Animal("Naruto", "ninja", 17);

// exibindo os objetos criados por meio de constructor factory.
console.log(animal01);
console.log("");
console.log(animal02);

// Quando usamos o operador new, na verdade estamos usando o operador call de forma implícita, Veja...
var animal03 = {};
Animal.call(animal03, "Pain", "ninja", 25);
console.log(animal03);

/* Obs: não podemos esquecer de usar o operador new para criar objetos a partir de funções construtoras
		pois corremos o risco de sobrescrever uma função de escopo global ou redefinir valores, tudo isso por
		conta da utilização do operador this */

// FIM EXEMPLOS CONSTRUCTOR FUNCTION
/////////////////////////////////////////////////////////////////////

/* No próximo exemplo vamos conhecer as Closures e sua grande importância para as functions */