/*
	SOBRE CRIAÇÃO DE OBJETOS:
	Edney Roldão - 05/05/2016
		Objetos em javascript é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.
		É possível adicionar e remover propriedades de um objeto a qualquer momento. 
*/

// Criando um objeto
var objeto = {};
console.log(typeof animal);


// Adicionando propriedades a um objeto (obs: isso não é um JSon, é um tipo literal) :
var objetoAnimal = {
	nome: 'lulu',
	idade: 2,
	raca: null,
	proprietario: {
		nome: 'edy',
		idade: 25
	}
};


// Exibindo todos os valores
console.log(objetoAnimal); // perceba que aqui será exibido todos os valores


// exibindo valor de uma propriedade específica.
console.log(objetoAnimal.proprietario.idade); // acessando as propriedades.