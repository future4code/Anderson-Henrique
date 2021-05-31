
## Exercicio 1

### 1.a create table : cria uma tabela com as colunas pré-estabelecidas 
### varchar(255) : cria uma variável tipo string com limite de 255 caracteres
### not null : faz a adicão de algo com esse comando ser obrigatório
### primary key : seria um identificador único para uma variável.
### date :seria aceio uma variável do tipo YYYY-MM-DD , neste formato.


CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

### 1.b show datases imprimiu as DBs dispiníveis/criadas 
### show tables: mostra as tabelas disponíveis/criadas ( no caso do exercício, Actor )

SHOW databases;
show tables;



### 1.c Ele exibe uma tabela próxima a do excel, mostrando as informações básicas 
### como field ( nome da variável ), o seu type, se e orbigatória, etc.


describe Actor;

insert into Actor ( id,name,salary,birth_date,gender) 
values(
'001',
'Tony Ramos',
400000,
'1948-08-25',
'male'
);

## Exercício 2

### 2.a
insert into Actor 
values(
'002',
'Glória Pires',
1200000,
'1963-08-23','female' 
);
 
insert into Actor 
values(
'006',
'Joe Pires',
410000,
'1923-08-13',
'male' 
);

 Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,204 sec
### 2.b O DB não aceita a adição de uma primary ( PRIMARY KEY ) igual, pois ela tem que ser única. Resolvido inserindo key única.

INSERT INTO Actor (id, name, salary,birth_date,gender)
VALUES(
  '003', 
  'Fernanda Montenegro',
  300000,
  '1929-10-19', 
  'female'
);
 Error Code: 1136. Column count doesn't match value count at row 1
### 2.c : Foi passado 3 dados de entrada, mas adicionado 5, reclamando um erro.
 corrigido passando os campos faltantes ( birth_date e gender )

INSERT INTO Actor (id, salary, birth_date, gender,name)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male",
  "El Chavo"
);

 Error Code: 1364. Field 'name' doesn't have a default value
### 2.d : O Campo nome está como obrigatório no DB, e neste caso não foi passado nenhum.
### corrigido adicionando name no fim e colocando 1 nome
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  '1979-03-26', 
  "female"
);

 Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

### 2.e : O formato da data estava passando como n°, e foi corrigido colocando aspas.


insert into Actor ( id,name,salary,birth_date,gender) values(
'6',
'Hodor Felix',
129999,
'1949-02-02',
'male'
);

insert into Actor ( id,name,salary,birth_date,gender) values(
'7',
'Angelina Jordan',
1480000,
'1979-12-02',
'female'
);

### 3.a 
select * from Actor where gender = 'female';

### 3.b
select salary from Actor where name="Tony Ramos";

### 3.c Resultado é vazio, pois no DB, no momento só existe male e female

select * from Actor where gender ='invalid';

### 3.d

select id,name,salary from Actor where salary<=500000;

 ### 3.e Erro de typo, pois a variável se chama 'name' e nao nome ( nome = pt, name = en )

SELECT id, nome from Actor WHERE id = "002";

### correção: 

SELECT id, name from Actor WHERE id = "002";

 ## Exercício 4 

select * from Actor where( name like 'A%' or 'J%' ) and salary >300000;

 ### 4.a A query será formada pela união de 2 operadores: a união de todas as pessoas que começão com A OU J,
 além disso , E que ganham 300000 ou mais. O like permite essa comparação, e o % é usado como um coringa
 para ser obrigatório apenas a primeira letra A ou J, neste caso.


### 4.b

select * from Actor where name not like 'A%' and salary>350000;

 ### 4.c
 
 select * from Actor where( name like 'G%' or name like '%g' or name like '%g%' );

### 4.d

select * from Actor where( name like '%g%' or name like 'G%' or name like '%g'or  name like '%a%' or name like 'A%' or name like '%a' ) and salary>350000 and salary <900000 ;  


## Exercício 5
create table Filme ( 
id varchar(255) primary key,
nome varchar(255) not null,
sinopse text not null,
data_de_lancamento date not null,
avaliacao float not null
 );
 
insert into Filme (id,nome,sinopse,data_de_lancamento,avaliacao) value(
 '001',
 'Se eu fosse Você',
'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
'2006-01-06',
7
 );
 
insert into Filme (id,nome,sinopse,data_de_lancamento,avaliacao) value(
'002',
'Doce de mãe',
'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
'2012-12-27',
10
);

insert into Filme (id,nome,sinopse,data_de_lancamento,avaliacao) value(
'003',
'Dona Flor e Seus Dois Maridos',
'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
'2017-11-02',
8
);

insert into Filme (id,nome,sinopse,data_de_lancamento,avaliacao) value( 
'004',
'O Auto da Compadecida',
'O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.',
'2000-09-15',
9
);

## Exercício 6
### 6.a
select id,nome,avaliacao from Filme where id= '004'  ;
### 6b
select * from Filme where nome ='Se eu fosse Você';
### 6.c
select id,nome,sinopse from Filme where avaliacao>7;

## Exercício 7

### 7a

select * from Filme where nome like '%vida%';

 ### 7b
 
select * from Filme where (nome like '%vida%' or sinopse like '%vida%');

### 7c

select * from Filme where(data_de_lancamento< '2021-05-24');

### 7d

select * from Filme where(data_de_lancamento< '2021-05-24') and (nome like '%vida%' or sinopse like '%vida%') and avaliacao>7; 
