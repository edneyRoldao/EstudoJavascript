/*
	EXPRESSÕES REGULARES
	Edney Roldão - 06/05/2016

		- São expressões formadas por caracteres que especificam um padrão formal.

		- São usados para:
			01: Validação de padrões como por exemplo, formato de emails, CPF dentre outros.
			02: Extração de dados dentro de um texto.
			03: Substituição de caracteres em um texto.

		- RegExp API
			exec: executa uma expressão regular retornando os detalhes.
			test: Testa a expressão regular, retornando true ou false. 

		- Caracteres de scape: usamos \ para escapar caracteres especiais.
*/

// Existe duas formas para se declarar uma expressão regular

/* 1º forma */ 
var regExp = /expressaoRegular/; // colocamos a regExp dentro das barras.

/* 2º forma */
var regExp2 = new RegExp("expressaoRegular"); // temos a mesma expressão acima.


// A seguir teremos vários testes de RegExp, a cada passo ele vai se refinando

//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
// Vamos testar diversas formas de validar o padrão de um telefone
var telefone = "99999-9999";
var regExpTel = /9999-9999/;

// teste com exec
/* Nesse teste será retornado um array com os seguintes valores:
	na 1º posição: o própria regeXP
	na 2º posição: o index inicial quando o padrão é encontrado
	na 3º posição: o valor que foi testado pela expressão
	Se não encontrar retorna null */
console.log( regExpTel.exec(telefone) );

// teste com test: vai retorna true se encontrar o padrão
console.log( regExpTel.test(telefone) );
console.log();
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////


//////////////////////////// INICIO SEGUNDO TESTE ///////////////////////////////////////
/* Agora o nosso telefone tem código de área */
var telefone2 = "(11) 9999-9999"; 
var regExpTel2 = /\(11\) 9999-9999/; // temos que usar scape para caracteres especiais

console.log( regExpTel2.test(telefone2) );
console.log();
//////////////////////////// FIM SEGUNDO TESTE /////////////////////////////////////////


//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
/* Nas validações atuais, a regExp está aceitando valores antes e depois do padrão, 
	vamos fazer com que o telefone seja reconhecido únicamente */
var telefone3 = "O telefone é: (11) 9999-9999, falar com Edy"; 
console.log( regExpTel2.test(telefone3) ); // usando a RegExp 2 para testar o tel 3, recebemos true

/*  */
var regExpTel3 = /\(11\) 9999-9999/;


//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////








//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////

//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////

//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////

//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////

//////////////////////////// INICIO PRIMEIRO TESTE ///////////////////////////////////////
//////////////////////////// FIM PRIMEIRO TESTE /////////////////////////////////////////






