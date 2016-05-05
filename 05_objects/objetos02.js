/*
	SOBRE ATRIBUIÇÃO DE PROPRIEDADES E VALORES À OBJETOS:
	Edney Roldão - 05/05/2016
		Atribuindo propriedades e valores a Objetos.
*/

// adicionando uma propriedade e valor
var carro = {};
console.log(carro); // sem prop
carro.marca = 'volvo';
console.log(carro); // prop adicionada


/* podemos adicionar propridades com espaços por meio de introspecção.
   Isso faz todo sentido se lembrarmos que Objetos são coleções dinâmicas
   de chaves e valores */
carro["tipo de combustivel"] = "gasolina";
console.log(carro); // veja na exibição a prop com espaços


// Para acessar valor da propriedade com espaços, só por meio da introspecção
console.log(carro["tipo de combustivel"]);


/*	 Adicionando o valor undefined na adição de uma propriedade. Obs: não podemos atribuir undefined
   a uma propriedade já existente. */
carro.potencia = undefined;
console.log(carro);

// Podemos atribuir null para propriedades existentes e não existentes
var frutas = { nome: "laranja" };
frutas.nome = null;
frutas.tipo = null;
console.log(frutas);


// Podemos deletar uma propriedade já que estamos trabalhando com uma coleção dinâmica de chaves e valores.

// criando o objeto
var pessoa = {
	nome: 'Marjorie',
	idade: 0.3,
	telefone: undefined
};

// iterando o obj para exibir somente as props.
for(var prop in pessoa) {
	console.log(prop);
}

console.log(""); 

// deletando a propriedade.
delete pessoa.telefone;
// Iterando novamento após prop deletada.
for(var prop in pessoa) {
	console.log(prop);
}
