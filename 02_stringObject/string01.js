/*
	SOBRE OBJETO STRING:
	Edney Roldão - 04/05/2016
		String Object.
		- Uma string é composta por uma sequência de 0 ou  mais caracteres.
		
		- São imutáveis, ou seja, precisa de uma operação de atribuição para ser alterada.
		
		- Podem ser declaradas com aspas simples ou duplas.
			Isso elimina a barra de scape presente em outras linguagens,
			basta intercalar entre aspas duplas e simples.
*/

var texto = 'aula de string object na linguagem javascript';
var nome = "edney";

// Retorna o char (letra) a partir da posição passada como argumento.
console.log(texto.charAt(0)); // resultado = a

// Retorna a posição (index) de um char (letra)
console.log(texto.indexOf('v')); // resultado = 37

// retorna o código do char a partir da posição passada como argumento.
console.log(texto.charCodeAt(2)); // resultado = 108 (letra l) 

// Concatena duas strings
console.log(nome.concat(' roldao')); // resultado = 'edney roldao'

/* Como dito anteriormente, as strings são imutáveis. Mesmo depois de aplicada
   a operação concat, o valor da string nome continua o mesmo pois não foi 
   utilizada a operação de atribuição 
*/
console.log(nome);

// Aplicando a operação de atribuição + concat
nome = nome.concat(' roldao');
console.log(nome); // agora a var nome recebeu o novo valor.  

/* A operação match verifica o posição de uma palavra em uma String
   retornando um array com o index de inicio da palavra e o a própria string. 
*/
console.log(nome.match('roldao'));

/* A função substring é usada para recuperar um texto dentro da String.
   parâmetros: substring(indexInicial, indexFinal - 1) */
console.log(texto.substring(15, 21)); // resultado = object

// Para substituir um texto dentro de uma String.
console.log(nome.replace('roldao', 'nogueira'));

// Remove os espaços em brando no inicio e final de uma String
var texto2 = "  linguagem de programação   ";
console.log(texto2.trim());

// divida uma string em partes retornando um array.
var listaCarros = "i30;x1;edge;sonata;santa fé";
console.log(listaCarros.split(';')); // resultado = uma lista de carros

/*
	Existem várias outras operações que não foram usadas aqui.
	saiba mais em:
		link 01: http://www.w3schools.com/jsref/jsref_obj_string.asp
		link 02: http://www.javascripture.com/String
*/