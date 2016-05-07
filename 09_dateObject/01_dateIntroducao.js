/*
	DATE OBJECT
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
var data01 = new Date("2015/05/10");