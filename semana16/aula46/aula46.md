## Exercicio 1
### 1.a
```sh
ALTER TABLE Actor DROP COLUMN salary;
```
Ele elimina a coluna salary da table Actor

### 1.b
```sh
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Este comando altera o nome da coluna 'gender' para sex, e coloca um limite de 6 digitos para esta variável.

### 1.c
```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Este comando não altera o nome da variável gender, mas altera o limite de dígitos possíveis para 255.

### 1.d
```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
## Exercício 2

### 2.a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`
```sh
UPDATE Actor 
SET name = 'Harry Potter' , birth_date = '1980-07-31'
WHERE id = '003';
```
### 2.b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.

```sh
UPDATE Actor
SET name =UPPER(name)
WHERE name ='Juliana Paes';
```
```sh
UPDATE Actor
SET name='Juliana Paes' 
WHERE name='JULIANA PAES';
```
### 2.c. Escreva uma query que atualize todas as informações do ator com o id `005`*
```sh
UPDATE Actor
SET id= '010',
name='Bill Westwood',
salary = 800000,
birth_date ='1919-06-03',
gender='male'
WHERE id='005';
```
### 2.d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
```sh
UPDATE Actor
SET id='120'
WHERE id='21';
```

Não deu erro, ele procurou e não encontrou este id, por isto nada aconteceu.

## Exercício 3

### 3.a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro
```sh
DELETE FROM Actor WHERE name ='Fernanda Montenegro';
```
### 3.b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```sh
DELETE FROM Actor WHERE gender='male' AND salary>1000000;
```
## Exercício 4

#### 4.a. Escreva uma query que pegue o maior salário de todos os atores e atrizes
```sh
SELECT MAX(salary)  AS 'Maior salário de um ator(a)' FROM Actor ;
```
#### 4.b. Escreva uma query que pegue o menor salário das atrizes
```sh
SELECT MIN(salary)  AS 'Menor salário de uma atora' FROM Actor WHERE gender='female' ;
```
#### 4.c. Escreva uma query que pegue a quantidade de atrizes
```sh
SELECT COUNT(*) FROM Actor WHERE gender='female';
```
#### 4.d. Escreva uma query que pegue a soma de todos os salários
```sh
SELECT SUM(salary) FROM Actor;
```

## Exercício 5
```sh
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
### 5.a. Releia a última query. Teste-a. Explique o resultado com as suas palavras

Ela faz a soma total de atores, separando-os por gênero.  

### 5.b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sh
SELECT name,id FROM Actor ORDER BY name ;
```
### 5.c. Faça uma query que retorne todos os atores ordenados pelo salário
```sh
SELECT * FROM Actor ORDER BY salary DESC;
```
### 5.d. Faça uma query que retorne os atores com os três maiores salarios
```sh
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
### 5.e. Faça uma query que retorne a média de salário por gênero
```sh
SELECT AVG(salary),gender,COUNT(gender) FROM Actor GROUP BY gender;
```

## Exercício 6

### 6.a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
```sh
ALTER TABLE Filme
ADD playing_limit_date DATE ;
```
### 6.b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.
```sh
ALTER TABLE Filme
UPDATE avaliacao avaliacao float NOT NULL;
```
### 6.c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
```sh
UPDATE Filme
set playing_limit_date ='2021-12-12'
WHERE id='001';
```
```sh
UPDATE Filme
set playing_limit_date ='2020-02-17'
WHERE id='004';
```
### 6.d. `Delete` algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
```sh
DELETE FROM Filme 
WHERE id='002';
```
```sh
UPDATE Filme
set sinopse=' Eduardo e Mônica eram 2 crianças que fugiram de casa aos .....'
WHERE id='002';
```
Da mesma maneira da resposta do 2.d, ele não quebrou o código ou acusou erro, mas como o id não existe, ele não modificou nada.



## Exercício 7 
### Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

### 7.a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*

```sh
SELECT COUNT(*) FROM Filme
WHERE avaliacao>7.5; 
```
### 7.b. Qual a média das avaliações dos filmes?*
```sh
SELECT AVG(avaliacao),count(*) FROM Filme; 
```
### 7.c. Qual a quantidade de filmes em cartaz?*
```sh
SELECT COUNT(*) FROM Filme WHERE DATEDIFF(CURDATE(),playing_limit_date)<0;
```
### 7.d. Qual a quantidade de filmes que ainda irão lançar?*
```sh
SELECT * FROM Filme WHERE DATEDIFF(CURDATE(),data_de_lancamento)<0;
```
### 7.e. Qual a maior nota dos filmes?*
```sh
SELECT MAX(avaliacao) AS 'Maior nota de um filme: ' FROM Filme ;
```
### 7.f. Qual a menor nota dos filmes?*
```sh
SELECT MIN(avaliacao) AS 'Menor nota de um filme: ' FROM Filme ;
```

## Exercício 8

### Escreva **uma** query que:
 
### 8.a. Retorne todos os filmes em ordem alfabética*
```sh
SELECT * FROM Filme ORDER BY nome;
```
### 8.b. Retorne os 5 primerios filmes em ordem descrente alfabética* 
```sh
SELECT * FROM Filme ORDER BY nome DESC LIMIT 5;
```
### 8.c. Retorne os 3 filmes mais recentes em cartaz*
```sh
SELECT * FROM Filme WHERE CURDATE()<playing_limit_date ORDER BY data_de_lancamento DESC LIMIT 3;
```
### 8.d. Retorne os 3 filmes melhor avalidos*
```sh
SELECT * FROM Filme ORDER BY avaliacao DESC LIMIT 3;
```
