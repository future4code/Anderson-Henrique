# Tabelas usadas como referência para  o projeto.

```
SELECT * FROM USER;
```
```
CREATE TABLE USER(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
);
```
```
INSERT INTO USER (name,nickname,email) 
VALUES(
'Anderson Oliveira',
'tandersonf',
'tandersonf@gg.com'),
('Harry Potker',
'O da Marca',
'harrypt@gamer.com');
```
```
CREATE TABLE TASK (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
limitDate DATE NOT NULL,
creatorUserId INT,
FOREIGN KEY (creatorUserId) REFERENCES USER(id)
);
```
```
SELECT * FROM TASK;
```
```

SELECT TASK.id,
title,description,
LEFT(limitDate,8),
creatorUserId,status
,nickname as 'creatorUserNickname' FROM TASK
JOIN USER
ON creatorUserId = USER.id
WHERE creatorUserId =2;
```
```
ALTER TABLE TASK
ADD status ENUM('to_do','doing','done') default 'to_do';
```
```
ALTER TABLE TASK
CHANGE status status ENUM('to_do','doing','done','delayed') default 'to_do';
```

```

SELECT * FROM USER
WHERE ( name LIKE '%al' OR   '%al%' OR  'al%' )
OR (nickname LIKE '%al' OR  '%al%' OR  'al%')  ;
```
```
CREATE TABLE RESPONSIBLE (
task_id INT NOT NULL,
responsible_user_id INT NOT NULL,
FOREIGN KEY (responsible_user_id) REFERENCES USER(id),
FOREIGN KEY (task_id) REFERENCES TASK(id)
);
```