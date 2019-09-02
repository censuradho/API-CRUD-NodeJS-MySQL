# Comandos mySQL  :whale:

Esse repositório tem como finalidade servir de consulta para comandos [my-SQL](https://www.mysql.com/), com exemplos práticos.
  
## Menu
- [Usuário](#-usuario)
- [Conectando](#-conectando)
- [Comandos](#-comandos)
## Usuário

:key: Gerenciando acesso

 Criar usuário
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'senha';
```

 Alterar senha
```sql
SET PASSWORD FOR user = PASSWORD('senha');
```

Excluir usuário
```sql
DROP USER 'user@localhost';
```

Privilégios
```sql
GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost';
```
Depois de já estar logado no banco.

| *USE* - acessar uma tabela |

| *DESCRIBE* - mostrar detalhes da tabela |

| *STATUS* - mostra qual banco esta online |


## Conectando

> comando para se conectar ao banco de dados via terminal.
```bash
mysql -h localhost -u username -p password
```

## Comandos

> comandos básicos DDL ( Data Definition Language )

---------------------------------------
Cria uma base de dados.

```sql
  CREATE DATABASE pessoas;
  
```

--------------------------------
 Mostra as bases de dados já criadas.
```sql
  SHOW DATABASES;
```

-----------------------------

Cria uma tabela de dados.

```sql
CREATE TABLE usuarios(
  username VARCHAR(30),
  password VARCHAR(18)
);
```
---------------------------------
Mostra as tabelas já criadas.

```sql
SHOW TABLES;
```
-------------------------------

 Criar dados na tabela.
 
```sql
INSERT INTO usuarios(username,password) VALUES(
  "Gustavo Leite", 
  "000"
);
```
-------------------------

 Lista os dadosda tabela.

```sql 
SELECT * FROM tabela WHERE username = gustavo;
 ```
---------------------------

Deleta dados (NUNCA use um DELETE sem um WHERE)

```sql

DELETE FROM usuarios WHERE username = gustavo;
```
------------------------------

Atualizar dados

```sql
UPDATE usuarios SET nome = "novo nome" WHERE nome = "antigo nome";
```
--------------------------------
