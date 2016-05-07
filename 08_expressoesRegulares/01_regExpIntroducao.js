/*
	EXPRESSÕES REGULARES - parte 1
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
		na 1º posição: o própria RegExp
		na 2º posição: o index inicial quando o padrão é encontrado
		na 3º posição: o valor que foi testado pela expressão,
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


//////////////////////////// INICIO TERCEIRO TESTE ///////////////////////////////////////
	/* Nas validações atuais, a regExp está aceitando valores antes e depois do padrão, 
		vamos fazer com que o telefone seja reconhecido únicamente */
	var telefone3 = "O telefone é: (11) 9999-9999, falar com Edy";
	var telefone3b = "(11) 9999-9999";
	console.log( regExpTel2.test(telefone3) ); // usando a RegExp 2 para testar o tel 3, recebemos true

	/* ^ - este caractere é para definirmos como o padrão testado deve iniciar
	   $ - este caractere é para definirmos como o padrão testado deve ternimar */
	var regExpTel3 = /^\(11\) 9999-9999$/;
	console.log( regExpTel3.test(telefone3) ); 
	// agora vamos receber um false pois a RegExp3 só aceita o telefone exato

	// Agora com o telefone exato temos true novamente
	console.log( regExpTel3.test(telefone3b) ); 
	console.log();
//////////////////////////// FIM TERCEIRO TESTE /////////////////////////////////////////


//////////////////////////// INICIO QUARTO TESTE ///////////////////////////////////////
	/* GRUPO DE CARACTERES
			1º  [xpto] = aceita qualquer caractere dentro dos colchetes
			2º [^xpto] = o acento circunflexo dentro do grupo atua como operador de negação,
						 portanto não aceita os caracteres dentro do grupo []
			3º   [0-9] = o traço entre os valores é a definição de um range, então nesse caso,
						 aceitos todos os números (0 até 9)
			4º  [^0-9] = é o mesmo caso do 2º, ou seja, não aceita números */

	// Vamos criar uma RegExp que vai aceitar qualquer número
	var regExpTel4 = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
	var telefone4 = "(11) 6464-3232";

	// testando a expressão
	console.log( regExpTel4.test(telefone4) ); // podemos colocar qualquer numero que retorna true
	console.log();
//////////////////////////// FIM QUARTO TESTE /////////////////////////////////////////


//////////////////////////// INICIO QUINTO TESTE //////////////////////////////////////////
	/* QUANTIFICADORES - PARTE 1
			- Esses quantificadores podem ser aplicados a caracteres, grupos ou metacaracteres

			  {n} = para definir a quantidade exata
			 {n,} = para definir a quantidade mínima
			{n,m} = para definir a quantidade mínima e máxima */

	// Com os quantificadores podemos diminuir a quantidade de [0-9] da nossa RegExp4
	var regExpTel5 = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
	var telefone5 = "(12) 6445-3992";

	// A RegExpTel5 tem o mesmo efeito que a RegExpTel4, porém mais enxuta.
	console.log( regExpTel5.test(telefone5) ); // podemos colocar qualquer numero que retorna true
	console.log();
/////////////////////////////// FIM QUINTO TESTE /////////////////////////////////////////


//////////////////////////// INICIO SEXTO TESTE //////////////////////////////////////////
	/* Vamos usar o mesmo exemplo acima, só que agora a RegExp  vai aceitar 8 ou 9 dígitos no telefone */
	var regExpTel6 = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
	var telefone6  = "(12) 96445-3992";
	var telefone6b = "(12) 6445-3992";

	// Testando o telefone com 9 e 8 dígitos
	console.log( regExpTel6.test(telefone6) );  // true 
	console.log( regExpTel6.test(telefone6b) ); // true 
	console.log();
/////////////////////////////// FIM SEXTO TESTE /////////////////////////////////////////


//////////////////////////// INICIO SÉTIMO TESTE //////////////////////////////////////////
	/* QUANTIFICADORES - PARTE 2
			- Esses quantificadores podem ser aplicados a caracteres, grupos, CONJUNTOS ou metacaracteres
			
			? = zero ou um
			* = zero ou mais
			+ = um ou mais	*/

	// Como estes novos quantificadores podemos deixar o hífen que separa os números opcional
	var regExpTel7 = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

	// Vamos testar dois telefones, com e sem hífen.
	var telefone7 = "(13) 98745-4444";
	var telefone7b = "(66) 66665555";

	console.log( regExpTel7.test(telefone7) );  // true 
	console.log( regExpTel7.test(telefone7b) ); // true 
	console.log();
/////////////////////////////// FIM SÉTIMO TESTE /////////////////////////////////////////


//////////////////////////// INICIO OITAVO TESTE //////////////////////////////////////////
	/* CONJUNTOS - como visto no exemplo anterior, podemos criar conjuntos e aplicar os quantificadores
				    ?,  *  e  +  
	*/

	/* Vamos colocar vários telefones em uma tabela, a parte das td serão isoladas em um conjunto para 
		podermos aplicar os quantificadores listados acima. */
	var telefonesNaTabela = "<table><th><td>(13) 98745-4444</td><td>(13) 98745-4444</td><td>(13) 98745-4444</td></th></table>";

	/* Preste atenção na regExp abaixo, ele está envolvendo o trecho da td com aspas para criar um conjunto, 
		assim será aplicado + que é um quantificador que aceita um ou mais conjuntos. */
	var regExpTelefonesNaTabela = /^<table><th>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/th><\/table>$/;

	/*
		 DESTRINCHANDO A regExp acima:

		/^<table><th> : aqui é definido como o padrão testado deve iniciar

		( <td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td> )+ : coloquei a parte da td onde realmente estão os telefones
														    em um conjunto para ser definido quantas ocorrências deve
														    ter com os quantificadores aplicáveis a conjuntos, nesse 
														    caso utilizei (conjunto)+ que aceita um ou mais ocorrêcias

		<\/th><\/table>$/ : aqui é definido como o padrão testado deve terminar

		OBS: perceba que escapar a para que fecha as tags pois é um caracter especial, ficou assim: \/ 
	*/

	console.log("Esse expressão regular é complexa");
	console.log( regExpTelefonesNaTabela.test(telefonesNaTabela) );  // true 
	console.log( regExpTelefonesNaTabela.exec(telefonesNaTabela) ); 
	console.log();
/////////////////////////////// FIM OITAVO TESTE /////////////////////////////////////////


//////////////////////////// INICIO NONO TESTE //////////////////////////////////////////
	/* 
		METACARACTERES - podemos substituir os grupos mostrados no quarto exemplo por estes listados abaixo.

			\w (representa o grupo [a-zA-Z0-9-]) aceita tudo
			\W (representa a negação do grupo acima [^a-zA-Z0-9-])
			\d (representa o grupo [0-9]) aceita todos os números
			\D (não aceita números, é a negação do grupo acima)
			\s (aceita espaço em branco)
			\S (não aceita espaço em branco)
			\n (aceita quebra de linha)
			\t (aceita espaço com tab)

	*/

	// Então vamos fazer uma regExp que vai substituir os [0-9] por \d e o espaço em branco por \s
	//  vamos mudar essa regExp  /^<table><th>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/th><\/table>$/

	var regExpMetacaracter = /^<table><th>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/th><\/table>$/;

	// Vamos testar a mesma tabela de telefones
	console.log("Esse expressão regular usa metacaracteres no lugar de grupos");
	console.log( regExpMetacaracter.test(telefonesNaTabela) );  // true 
	console.log( regExpMetacaracter.exec(telefonesNaTabela) );  // true 
	console.log();
/////////////////////////////// FIM NONO TESTE /////////////////////////////////////////


/* No próximo exemplo vamos extrair e substituir valor de um texto a partir das expressões regulares */