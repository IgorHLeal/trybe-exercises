/* Banco de dados utilizado nos Exercícios */

DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');


/* Exercise 01 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”. */
# USE Scientists;
# SELECT 'This is SQL Exercise, Practice and Solution';


/* Exercise 02 - Escreva uma query para exibir três números em três colunas. */
# SELECT 1, 2, 3;


/* Exercise 03 - Escreva uma query para exibir a soma dos números 10 e 15. */
# SELECT 10 + 15;


/* Exercise 04 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer. */
# SELECT 2000 / 20.5;


/* Exercise 05 - Escreva uma query para exibir todas as informações de todos os cientistas. */
# SELECT * FROM Scientists;


/* Exercise 06 - Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto. */
# SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;


/* Exercise 07 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética. */
# SELECT Name FROM Scientists
ORDER BY Name;


/* Exercise 08 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente. */
# SELECT Name FROM Projects ORDER BY Name DESC;


/* Exercise 09 - Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto. */
# SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS resultado FROM Projects;


/* Exercise 10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas. */
# SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;


/* Exercise 11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições. */
# SELECT DISTINCT(Project) FROM AssignedTo;


/* Exercise 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas. */
#  SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;


/* Exercise 13 - Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas. */
# SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;


/* Exercise 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas. */
# SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;


/* Exercise 15 - Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas. */
# SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS Resultado FROM Scientists;
