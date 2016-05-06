/*
	ARRAY - parte 02
	Edney Roldão - 06/05/2016

	- funções da API de Array
*/

// Declarando o array de exemplo
var paises = ['Brazil', 'USA', 'England', 'Germany'];
	console.log( paises );

// PUSH: insere elementos no final do array
paises.push("Japan");
	console.log( paises );

// POP: retirar elementos do final do array
paises.pop();
	console.log( paises );

// UNSHIFT: adicona elementos no inicio do array
paises.unshift('Spain');
	console.log( paises );

// SHIFT: retina elementos no inicio do array
paises.shift();	
	console.log( paises );

// SPLICE: é o nosso canivete suiço para manipular arrays, vamos criar um novo array para testar
var carros = ["Cruze", "i30", "fucus", "fusion", "azera", "sonata", "x1"];
	console.log( carros );

// Removendo elementos com splice passando o range como parâmetro: arrayName.splice(indexInicial, indexFinal) 
carros.splice(0,2);
	console.log( carros );

// Substituindo o um elemento do array com splice: arrayName.splice(indexInicial, indexFinal, valorSubstituicao)
carros.splice(1,1, "Cayenne");
	console.log( carros );

/* Adicionando elementos um uma posição específica com splice.
	arrayName.splice(valorIndexPosteriorAPosicaoDaAdicao, 0, "Mustang") */

// Vamos adicionar uma BMW X6 antes da Cayenne
var apos = carros.indexOf("Cayenne");
carros.splice(apos, 0, "BMW X6");
	console.log( carros );

// REVERSE: inverte a ordem de um array
carros.reverse();
	console.log( carros );

// JOIN: permite a utilização de um separador específico para os elementos do nosso array, vou usar ( - ) para separar
// quando usamos join recebemos uma string como retorno
var carros2 = carros.join(" - ");
	console.log(typeof carros2);
	console.log( carros2 );

// JOIN: podemos multiplicar o valor de uma string com join

/* forma errada */
var multiplica = "Marjorie" * 10;
	console.log( multiplica ); // resultado = NaN

/* forma correta */
var myDaughter = "Marjorie ";
var multiplica2 = new Array(10).join(myDaughter);
	console.log( multiplica2 ); // resultado = 'Marjorie Marjorie Marjorie Marjorie...10x'

// SPLIT: é o inverso do JOIN, ele transforma uma string em array a partir de um separador.
var carros3 = carros2.split(" - ");	
	console.log(typeof carros3);
	console.log( carros3 );


