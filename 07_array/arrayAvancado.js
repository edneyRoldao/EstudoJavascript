/*
	ARRAY - parte 03
	Edney Roldão - 16/05/2016

	- funções da API que fazem iteração em um array
		-> forEach
		-> filter
		-> every
		-> some
		-> map
		-> reduce
		-> concat
		-> slice
		-> sort
*/

console.log();

////////// - ITERANDO EM UM ARRAY COM FOR_EACH - ///////////////////////
var wweContenders = ["Brock Lesnar", "Kevin Onwes", "Stardust", "Triple H", "Dean Ambrose", "Sasha Banks"];

// Iterando - (temos uma fução de callback)
wweContenders.forEach(function(elemento) {
	console.log(elemento);
});

console.log();

////////// -  ITERANDO EM UM ARRAY COM FILTER  - ///////////////////////
var jogadores = [
	{nome: "Elias", time: "corinthians"},
	{nome: "Gabriel Jesus", time: "palmeiras"},
	{nome: "Caliery", time: "são paulo"},
	{nome: "Lucas Lima", time: "santos"},
	{nome: "Filepe", time: "corinthians"},
	{nome: "Dudu", time: "palmeiras"},
	{nome: "Ricardo Oliveira", time: "santos"},
	{nome: "Michel Bastos", time: "são paulo"},
	{nome: "Fagner", time: "corinthians"},
	{nome: "Fernando Praz", time: "palmeiras"}
];

// SEM FILTER 	-	Criando uma lista de jogadores do timão a partir da lista acima sem o use do recurso de filter.
var jogadoresTimao = [];
jogadores.forEach(function(elemento) {
	if(elemento.time === "corinthians")
		jogadoresTimao.push(elemento);
});
console.log(jogadoresTimao);
console.log();

/* COM FILTER 	-	Veja como podemos derivar uma nova lista a partir de outra usando filter. 
					Criando uma lista de jogadores do palmeiras a partir da lista principal */
var jogadoresVerdao = jogadores.filter(function(elemento) {
	return elemento.time === "palmeiras";
});
console.log(jogadoresVerdao);
console.log();



/* OBS: No filter podemos recuperar um elemento especifico, ao invés de um array.
		Isso é muito útil quando estamos trabalhando com atributos únicos */

var jogadorPalmeiras = jogadores.filter(function(elemento) {
	return elemento.time == 'palmeiras'; // Atenção aqui: não temos uma superComparacao, pois agora é retornado um objeto no lugar de um array de objetos
})[0]; // veja aqui que definimos a posição (index) que desejamos recuperar
console.log(jogadorPalmeiras); // vai retornar o Gabriel Jesus. Ele é o primeiro jogador do palmeiras que aparece na lista.
console.log();



////////// -  ITERANDO EM UM ARRAY COM EVERY  - ///////////////////////

/* O every retorna um true se todos os elementos do array atenderem uma mesma condição, 
   no caso vamos testar duas lista para se os jogadores são do mesmo time */
var isMesmoTime = jogadores.every(function(elemento) {
	return elemento.time === "corinthians";
});
console.log("Teste every: " + isMesmoTime); // nesse caso será false pois a lista tem jogadores de vários times
console.log();

isMesmoTime = jogadoresTimao.every(function(elemento) {
	return elemento.time === "corinthians";
});
console.log("Teste every: " + isMesmoTime); // vai retornar true, a lista só tem jogares do timão
console.log();

////////// -  ITERANDO EM UM ARRAY COM SOME  - ///////////////////////

/* O some vai retornar um true se pelo menos um elemento atender a condição, no caso vamos testar a lista principal e jogadores do palmeiras */
var hasAlgum = jogadores.some(function(elemento) {
	return elemento.time === "corinthians";
});
console.log("Teste some: " + hasAlgum); // resultado é true pois estamos testando a lista principal
console.log();

hasAlgum = jogadoresVerdao.some(function(elemento) {
	return elemento.time === "corinthians";
});
console.log("Teste some: " + hasAlgum); // resultado é false pois estamos testando uma lista que só tem jogadores do palmeiras
console.log();

////////// -  ITERANDO EM UM ARRAY COM MAP  - ///////////////////////

/* Com map podemos iterar um array e derivar outro com informações distintas, veja os exemplos. Vamos usar a lista de jogadores */

// exemplo 01: vamos derivar uma lista só com os times
var onlyTimes = jogadores.map(function(elemento) {
	return elemento.time;
});
console.log(onlyTimes);
console.log();

// exemplo 02: vamos derivar uma lista só com os jogadores
var onlyJogadores = jogadores.map(function(elemento) {
	return elemento.nome;
});
console.log(onlyJogadores);
console.log();

// exemplo 03: vamos derivar uma lista de inteiros com o tamanho de cada nome de jogador
var nameSize = jogadores.map(function(elemento) {
	return elemento.nome.length;
});
console.log(nameSize);
console.log();

////////// -  PROCESSANDO UM ARRAY COM REDUCE  - ///////////////////////

/* O reduce possui uma função de callback onde podemos realizar processamentos
   com o elemento atual que está sendo iterado e o anterior, com isso podemos realizar a soma total de valores de um array */

 // Vamos criar uma lista de valores para os exemplos
 var produtos = [
 	{produto: "coca-cola", preco: 4.55},
 	{produto: "sneakers", preco: 3.20},
 	{produto: "Batata", preco: 8.10},
 	{produto: "cookie", preco: 2.90},
 	{produto: "TNT", preco: 4.55}
 ];

// SEM REDUCE - vamos somar todos os valores da lista de produtos sem o uso do reduce
var totalProdutos = 0;
produtos.forEach(function(elemento) {
	totalProdutos += elemento.preco;
})
console.log(totalProdutos);
console.log();

// COM REDUCE - vamos somar todos os valores da lista
totalProdutos = produtos.reduce(function(elementoAnterior, elementoAtual) {
	return elementoAnterior + elementoAtual.preco;
}, 0); // o valor zero aqui é para definirmos a partir de qual index o reduce deve iniciar.

console.log(totalProdutos);
console.log();

////////// -  DERIVANDO NOVOS ARRAY COM SLICE  - ///////////////////////

/* Com slice podemos recortar um array de várias maneiras. Vamos usar o array só com nomes de jogadores */

/* exemplo 01: no primeiro parâmetro temos que passar o index inicial de onde o novo 
               array vai iniciar, depois passar o index final definindo um range, vamos recuperar da posicão 3 à 6 */
var jogadoresSlice = onlyJogadores.slice(2, 6);
console.log(jogadoresSlice);
console.log();

// Exemplo 02: vamos passar apenas o index inicial, assim vamos recuperar da posição inicial definida até o final do array
jogadoresSlice = onlyJogadores.slice(3); // da posicao 3 até o final
console.log(jogadoresSlice);
console.log();






