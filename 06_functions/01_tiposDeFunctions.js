/*
	SOBRE FUNCTIONS - parte 01
	Edney Roldão - 05/05/2016

	- No js não temos classes, construtores, métodos e módulos, porém existem as funções
	    que conferem o poder dessa linguagem.

	- Uma function é um objeto que possui um bloco de código executável, esse bloco é isolado 
	    podendo ser acessado externamente.

	- Um js as functions são de primeira classe, ou seja, elas podem ser atribuidas a uma
	    variável, assim podemos passa-la como parâmetro um outras functions ou ser retornadas
	    por elas.

	- Existe algumas formas de se declarar uma function:
		01: forma clássica chamada de Fuction Declaration
		02: por atribuição à variáveis que é chamada de Function Expression (função anônima)
		03: Igual a Function Expression, porém a function não é anônima. Named Function Expression

	- Em js a invocação de uma function é opcional, ou seja, se não colocarmos as aspas duplas com
	    ou sem argumentos, será returnado: [Function: nomeDaFuncao]. Isso faz muito sentido quando
	    estamos usando Function Expression ou Named Function Expression, pois elas podem ser passadas
	    como parâmetro em outras funções para serem invocadas posteriormente.

	Obs:
		Na forma 01, uma function declaration é carregada antes do código ser interpretado, 
		portanto podemos usá-la em qualquer lugar sem problemas, porém, nas formas 02 e 03
		o funcionamento é da mesma forma que as variáveis, ou seja, só podemos usar após a 
		sua declaração.   
*/

// Criando uma function que soma dois valores por meio da Function Declaration
function somar(n1, n2) {
	return n1 + n2;
}
// Isso funciona para conferir se uma variável tem uma function atribuida à ela.
console.log(somar);
// Invocando a function
console.log(somar(2, 2));


// Criando uma function que multiplica dois valores por meio da Function Expression
var multiplicar = function(n1, n2) {
	return n1 * n2;
};
// Isso funciona para conferir se uma variável tem uma function atribuida à ela.
console.log(multiplicar);
// Invocando a function
console.log(multiplicar(2, 2));


/* Criando uma function que divide dois valores por meio da Named Function Expression.
   A vantagem de usar está abordagem reside no debbuing pois ele aparece no stack trace */
var dividir = function dividir(n1, n2) {
	return n1 / n2;
};
// Isso funciona para conferir se uma variável tem uma function atribuida à ela.
console.log(dividir);
// Invocando a function
console.log(dividir(6, 2));


/* Veja no próximo exemplo como podemos aplicar a reutilização de código por meio das 
	functions expressions */