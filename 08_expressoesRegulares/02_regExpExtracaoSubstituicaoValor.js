/*
	EXPRESSÕES REGULARES - parte 2
	Edney Roldão - 07/05/2016

	- Vamos usar alguns recursos da API de String para extrair e substituir valores de um texto a partir das
		expressões regulares.

	- MATCH: executa uma busca no texto e retorna um array com os dados encontrados ou null.

	- SPLIT: vamos dividir um texto com base em uma expressão regular.

	- REPLACE: vamos substituir um texto com base em uma expressão regular.
*/

// Primeiro vou declarar a mesma tabela de telefones do exemplo 01
var tabelaFones = "<table><th><td>(13) 91234-5678</td><td>(13) 99999-9999</td><td>(13) 11111-1111</td></th></table>";


/* PRIMEIRO EXEMPLO DE EXTRAÇÃO DE VALOR */
// Agora vou criar uma regExp para extrair a primeira ocorrência do padrão encontrada
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;

// Esse operação retorna um array com a mesma estrutura citada no primeiro teste do exemplo 01
var primeiroFone = tabelaFones.match(regExp);

// A primeira ocorrência fica na posição 0 do array
console.log( primeiroFone[0] );
console.log();
////////////////////////////////////////////////////////////////////////////////////////////////////


/* SEGUNDO EXEMPLO DE EXTRAÇÃO DE VALOR */ 
/*
	MODIFICADORES:
		i - Case-insensitive matching
		g - Global matching
		m - multiline matching
*/

// Vamos extrair todos os telefones da tabela usando global matching
var regExpComGlobalMatching = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;

var todosOsTelefonesEncontrados = tabelaFones.match(regExpComGlobalMatching);

// é retornado um array com todas as ocorrências do padrão encontradas.
console.log( todosOsTelefonesEncontrados );
console.log();
////////////////////////////////////////////////////////////////////////////////////////////////////


/* ÚLTIMO EXEMPLO - vamos substituir todos os telefones encontrados com replace */
console.log( tabelaFones.replace(regExpComGlobalMatching, " telefone ") );
///////////////////////////////////////////////////////////////////////////////////////////////////

/* 
	PARA CONHECER MAIS SOBRE EXPRESSÕES REGULARES:
		link: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
*/