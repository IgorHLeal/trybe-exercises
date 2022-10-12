/* Link para realização dos exercícios:
https://sqlbolt.com/lesson/select_queries_with_constraints */


/* Bônus 01 - Encontre o filme com uma linha id de 6 */
# SELECT Title FROM movies Limit 1 OFFSET 5;


/* Bônus 02 - Encontre os filmes lançados na década de year 2000 e 2010 */
# SELECT title, year FROM movies
WHERE year BETWEEN 2000 AND 2010;


/* Bônus 03 - Encontre os filmes não lançados na década de year2000 e 2010 */
# SELECT title, year FROM movies
WHERE NOT year BETWEEN 2000 AND 2010;


/* Bônus 04 - Encontre os 5 primeiros filmes da Pixar e seu lançamento year */
# SELECT title, year FROM movies
WHERE year <= 2003;
