CREATE DATABASE PROJETOINSTRUMENTO;

USE PROJETOINSTRUMENTO; /*usado para conectar para usar o banco projetoinstrumento, ai fica em negrito pra indicar que to usando*/ 

CREATE TABLE CLIENTE(
    ID INT NOT NULL auto_increment, /*id do cliente, do tripo inteiro, não pode ser nulo e tem auto incremento*/
    NOME VARCHAR(100) NOT NULL,
    CPF BIGINT NOT NULL unique, /*é um inteiro grande, bigint pq é um numero grande, o unique é pq o CPF é unico*/
    ENDERECO VARCHAR(100) NULL, /*esse null é pq pode não ser preenchido*/
    TELEFONE BIGINT NULL,
    PRIMARY KEY(ID) /*é a chave primaria*/
);/*lembrar de selecionar só a parte que quer executar*/	

INSERT INTO CLIENTE(NOME, CPF, ENDERECO, TELEFONE) /*inserindo dados na tabela cliente*/ 
VALUES('TIAGO',12345678912,'RUA A, BROTAS',71985246234); /*aqui são os valorfes*/

INSERT INTO CLIENTE
VALUES(0, 'DANIEL',45632193124, 'RUA B, LAURO',71985327435); /*como não coloquei parametro, coloco na ordem que aparece na tabela, nesse caso começa com id, ele é 0 pq é auto incremento*/

INSERT INTO CLIENTE
VALUES(0, 'JULIA',61545565284, 'RUA C, SALVADOR',71986899632);

SELECT * FROM CLIENTE; /*ele exibe as informações de uma determinada tabela*/ /* o '*' significa que quer usar tudo da tabela cliente*/
SELECT NOME, CPF FROM CLIENTE;

UPDATE CLIENTE/*serve para atualizar as informaçoes do cliente*/
	SET NOME = 'JOSEANE', TELEFONE = 71555555 /*se selecionar essa parte e executar, vai atualizar os dados de todos os cliente automaticamente, não queremos isso*/
    WHERE id = 1; /*é um seletor, só vai atualizar os dados do primeiro cliente*/
    
DELETE FROM CLIENTE /*serve para deletar alguma informação de cliente*/
    WHERE ID = 1; /*é um seletor, só vai deletar os dados do primeiro cliente*/   

CREATE TABLE FUNCIONARIO (
    ID INT NOT NULL auto_increment,
    NOME VARCHAR(100) NOT NULL,
    CPF BIGINT NOT NULL unique,
    TELEFONE BIGINT NULL,
    PRIMARY KEY(ID)
);

INSERT INTO FUNCIONARIO
VALUES(0, 'ALBERTO',20781565284,71985739632);

INSERT INTO FUNCIONARIO
VALUES(0, 'VANESSA',86314578235,71985739632);

INSERT INTO FUNCIONARIO
VALUES(0, 'BEATRIZ',31498753213,71985739632);

CREATE TABLE INSTRUMENTO (
    ID INT NOT NULL auto_increment,
    NOME VARCHAR(100) NOT NULL,
    NUMERO INT NULL, 
    DESCRICAO VARCHAR(100) NULL,
    VALOR NUMERIC(9,2), /*quer dizer que o numero vai crescer até 9 digitos com 2 casas decimais*/
    PRIMARY KEY(ID)
);

INSERT INTO INSTRUMENTO
VALUES(0, 'GUITARRA',524,'Modelo Gibson',840.00);

INSERT INTO INSTRUMENTO
VALUES(0, 'BATERIA',296,'Modelo Sonor',2400.00);

INSERT INTO INSTRUMENTO
VALUES(0, 'BAIXO',821,'Modelo Giannini',920.00);

INSERT INTO INSTRUMENTO
VALUES(0, 'VIOLÃO',969,'Modelo Fender',370.00);

INSERT INTO INSTRUMENTO
VALUES(0, 'PIANO',247,'Modelo Yamaha',5300.00);

CREATE TABLE VENDE(
    ID INT NOT NULL auto_increment,
    ID_CLIENTE INT NULL, /*esse é o mesmo id da tabela cliente, só esta com nome diferente*/
    ID_FUNCIONARIO INT NULL,
    ID_INSTRUMENTO INT NULL, /*esse é o mesmo id da tabela cliente, só esta com nome diferente, etc, e assim os outros*/
    DATA_COMPRA DATE NULL,
    FORMA_PAGAMENTO VARCHAR(100) NOT NULL,

    PRIMARY KEY(ID)
);

INSERT INTO VENDE
VALUES(0, 5, 1, 2, '2022-9-5','Pix');

INSERT INTO VENDE
VALUES(0, 6, 2, 4, '2022-10-15','Débito');

INSERT INTO VENDE
VALUES(0, 7, 3, 1, '2022-11-28','Crédito');


