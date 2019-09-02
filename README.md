# Comandos mySQL

## MENU
- [Usuário](#-usuario)
- [Conectando](#-Conectando)
- [Comandos](#-Comandos)
## Usuario

:key: Gerenciando acesso

- Criar usuário
CREATE USER 'user'@'localhost' IDENTIFIED BY 'senha';

- Alterar senha
SET PASSWORD FOR user = PASSWORD('senha');

- Excluir usuário
DROP USER 'user@localhost';

- Privilégios
GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost';


USE - acessar uma tabela
DESCRIBE - mostrar detalhes da tabela
STATUS - mostra qual banco esta aberto

## Conectando
> comando para se conectar ao banco de dados via terminal.
mysql -h localhost -u username -p password


## Comandos
> comandos básicos DDL ( Data Definition Language )

CREATE DATABASE;
SHOW DATABASES;

```sql
  CREATE DATABASE pessoas
```
-----------------------------

CREATE TABLE;
SHOW TABLES;

```sql
CREATE TABLE usuarios(
  username VARCHAR(30),
  password VARCHAR(18)
);
```
-------------------------------
INSERT INTO - criar dados na tabela
```sql
INSERT INTO usuarios(username,password) VALUES(
  "Gustavo Leite", 
  "000"
);
```
-------------------------

SELECT * FROM tabela - lista os dadosda tabela

```sql 
SELECT * FROM tabela WHERE username = gustavo;
 ```
---------------------------

DELETE FROM usuarios WHERE username = gustavo;

UPDATE usuarios SET nome = "novo nome" WHERE nome = "antigo nome";
