# neppo
## Descrição
* O código se trata de um Jogo escrito em JavaScript que é conectado com um Banco de Dados MySQL.

* Para rodá-lo é necessário ter instalado no PC: NodeJS, Express e MySQL.

## Para rodar o jogo conectado com o Banco de Dados MySQL:
* Para criar o Banco de Dados abra um console e digite:
	
	$sudo mysql -p

* Insira sua senha. Feito isso rode os comandos no console:
	
	$create database PandaGame

	$use PandaGame

	$create table score (id int primary key auto_increment, score int)

* Abra o arquivo banco.js com algum editor de textos e altere os campos de conexão com o banco de dados (host, user, password e database) com as configurações do seu banco de dados.

* Abra um terminal e acesse a pasta referente ao jogo. Após isso rode o seguinte comando no console:

	$nodejs banco.js

* Se ocorreu tudo bem a seguinte mensagem aparecerá na sua tela: "Example app listening on port 'sua porta de acesso ao servidor' ". 

* Em seguida abra um Browser qualquer e digite na barra de endereços: "localhost:3000" (3000 é um exemplo de porta, insira a sua).

* Para parar o programa, abra o console em que a conexão foi estabelecida e pressione Ctrl + C.

# Pronto! Agora é só jogar!
