## Exercicio 1


No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 

As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

*a. Explique o que é uma chave estrangeira*
A Foreign Key serve para estabelecer uma relação entre tabelas e seus dados, facilitando a manutenção e organização, além de segurança de dados sensíveis.

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
```sh
INSERT INTO Rating Values ('1001','Um bom filme para um fim de tarde',8,'001'),
('3001','Não gostei tanto do filme, é uma comédia forçada',4,'003'),
('4001','Me diverti muito com o filme, é atemporal!',10,'004' );
```
*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

Deu erro de sintaxe, indicando que com a Foreign Key ele só vai aceitar adicionar algo com um ID válido.

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

```sh
ALTER TABLE Filme
DROP COLUMN avaliacao; 
```
Ocorreu sem problemas
*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
```sh
DELETE FROM Filme WHERE id = "001";
```
Foi negado, pois ele está ligado a uma Foreign Key 'Rating', demonstrando assim mais segurança na hora da deleção.

## Exercicio 2
Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

*a. Explique, com as suas palavras, essa tabela*

Esta tabela foi criada apenas para conectar as informações de mais de uma tabela.
Foi criado 2 Foreign Keys para cada uma referenciar outra tabela.

*b. Crie, ao menos, 6 relações nessa tabela* 

```sh
INSERT INTO MovieCast VALUES 
('001','007'),
('003','003'),
('004','004'),
('001','010'),
('004','15'),
('004','007');
```


*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

Teve o mesmo resultado da questão 1.e . Para inserir algo nesta table, os ID's passados precisam já existir  ( pois estão referenciando algo).

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
```sh
DELETE FROM Actor 
WHERE id = '15';
```

Também não foi possível deletar, pois o ator em questão está referenciado em outra table.
## Exercício 3

Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*

O ON funciona basicamente como o WHERE , colocando uma condição de retorno.
Sem ele, os resultados que retornariam seria algo como N * M linhas e sem relação direta entre elas. O ON permite filtrar os dados.

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
```sh
SELECT Movie.name,Movie.id, Rating.rate FROM Filme
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

## Exercício 4

Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.

*a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
```sh
SELECT Movie.nome,Movie.id, Rating.rate FROM Movie
LEFT JOIN Rating 
ON Movie.id = Rating.movie_id;
```

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
```sh
SELECT Movie.id,Movie.nome,Actor.name FROM MovieCast
JOIN Movie
ON Movie.id = MovieCast.movie_id
JOIN Actor
ON Actor.id = MovieCast.actor_id
;
```
*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*
```sh
SELECT Movie.name,Movie.id,Rating.rate, Rating.comment FROM Movie
 RIGHT JOIN Rating 
 ON Movie.id = Rating.movie_id
 ;
```
