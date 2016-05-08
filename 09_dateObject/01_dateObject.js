/*
	DATE OBJECT - parte 01
	Edney Roldão - 07/05/2016

	- A data em js é representada pela quantidade de milissegundos desde o inicio da ERA UNIX
	- A Era Unix teve inicio no dia 01/01/1970 às 00:00:00 do Tempo Universal Coordenado (UTC)
	- UTC é a referencia a partir de onde se calculam os fusos horários do mundo todo.	
*/

// Existe quatro formas de se declarar uma data

/* 1º forma: A partir da Constructor Function e sem parâmetros */
var agora = new Date();
console.log( agora );
console.log();

// exibindo a data em milissegundos até agora
console.log( agora.getTime() );
console.log();


/* 2º forma: A partir da Constructor Function passando como parâmetro o tempo em milissegundos */
var agoraEmMS = new Date(1455441021214);
console.log( agoraEmMS );
console.log();

// exibindo a data em milissegundos até agora
console.log( agoraEmMS.getTime() );
console.log();

/* 3º forma: Criando uma data passando uma String como parâmetro */

/* yyyy/MM/dd */
var data01 = new Date("2015/05/10");
console.log( data01 );
console.log();

/* MM/dd/yyyy */
var data02 = new Date("08/15/1988");
console.log( data02 );
console.log();

/* dd/MM/yyyy  - esse padrão não é aceito*/
var data03 = new Date("17/11/2002");
console.log( data03 ); // resultado = Invalid Date
console.log();

/* No padrão RFC 2822 */
var data04 = new Date("Thu Dec 25 2014");
console.log( data04 ); 
console.log();

/* No padrão ISO 8601 */
var data05 = new Date("2016-02-15");
console.log( data05 ); 
console.log();

var data06 = new Date("2016-02-15T15:08:00");
console.log( data06 ); 
console.log();

/*  Declarando uma data passando a própria data */
var data07 = new Date(2002, 17, 11);
console.log( data07 ); 
console.log();

var data08 = new Date(2002, 17, 11, 11, 40, 0);
console.log( data08 ); 
console.log();


/* No próximo exemplo vamos ver um pouco sobre Date API */