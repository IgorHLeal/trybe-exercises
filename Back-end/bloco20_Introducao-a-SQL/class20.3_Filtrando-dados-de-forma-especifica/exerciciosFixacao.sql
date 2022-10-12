/* Entre no banco de dados sakila e siga as instruções: */

/* Fixar 01 - Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer */
# SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';


/* Fixar 02 - Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer */
# SELECT first_name FROM sakila.customer
# WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name;


/* Fixar 03 - O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film */
# SELECT title, description, release_year, replacement_cost FROM sakila.film
# WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
# ORDER BY replacement_cost DESC, title
# LIMIT 100;


/* Fixar 04 - Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer */
# SELECT COUNT(*) AS ClientesAtivos FROM sakila.customer
# WHERE active = 1 AND store_id = 1;


/* Fixar 05 - Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer */
# SELECT * FROM sakila.customer
# WHERE active=0 AND store_id=1;


/* Fixar 06 - Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film */
# SELECT title FROM sakila.film
# WHERE rating = 'NC-17'
# ORDER BY rental_rate, title 
# LIMIT 50;


/* Fixar 07 -Mostre todos os detalhes dos filmes que contêm a palavra ace no nome. */
# SELECT * FROM sakila.film WHERE title LIKE '%ace';


/* Fixar 08 - Mostre todos os detalhes dos filmes cujas descrições finalizam com china. */
# SELECT * FROM sakila.film WHERE description LIKE 'china%';


/* Fixar 09 - Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord. */
# SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';


/* Fixar 10 - Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon. */
# SELECT * FROM sakila.film WHERE title LIKE '___gon%';


/* Fixar 11 - Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary. */
# SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';


/* Fixar 12 - Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito */
# SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';


/* Fixar 13 - Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições. */
# SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';


/* Fixar 14 - Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética. */
# SELECT first_name, last_name, email FROM sakila.customer
# WHERE last_name IN ('hicks','crawford','henry', 'boyd', 'mason', 'morales', 'kennedy')
# ORDER BY first_name;


/* Fixar 15 - Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética. */
# SELECT email FROM sakila.customer
# WHERE address_id IN (172, 173, 174, 175, 176)
# ORDER BY email;


/* Fixar 16 - Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano. */
# SELECT COUNT(*) FROM sakila.payment
# WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';


/* Fixar 17 - Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título. */
# SELECT title, release_year, rental_duration FROM sakila.film
# WHERE rental_duration BETWEEN 3 AND 6
# ORDER BY rental_duration DESC, title;


/* Fixar 18 - Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título. */
SELECT title, rating FROM sakila.film
WHERE RATING IN ('G', 'PG', 'PG-13') 
ORDER BY title
LIMIT 500;


/* Fixar 19 - Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta. */
# SELECT * FROM sakila.payment;


/* Fixar 20 - Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005? */
# SELECT COUNT(*) Pagamentos FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25';


/* Fixar 21 - Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações. */
# SELECT COUNT(*) Pagamentos FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';


/* Fixar 22 - Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas. */
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM sakila.rental
WHERE rental_id = 10330;
