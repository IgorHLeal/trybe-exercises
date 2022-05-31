<h2>Comandos utilizados nos exercícios:</h2>

<h3>Praticando o GROUP BY:</h3>

  * `SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;`

  * `SELECT store_id , active, COUNT(*) FROM sakila.customer GROUP BY store_id, active;`

  * `SELECT AVG(rental_duration) AS avg_rental_duration`
    <br>
    `FROM sakila.film`
    <br>
    `GROUP BY rating`
    <br>
    `ORDER BY avg_rental_duration DESC;`

  * `SELECT district, COUNT(*) FROM sakila.address GROUP BY district ORDER BY COUNT(*) DESC;`


<h3>Fixar GROUP BY e HAVING</h3>

  * `SELECT rating, AVG(length) AS avg_duration FROM sakila.film`
    <br>
    `GROUP BY rating`
    <br>
    `HAVING avg_duration BETWEEN 115.0 AND 121.50`
    <br>
    `ORDER BY avg_duration DESC;`


  * `SELECT rating, SUM(replacement_cost) AS custo_de_substituicao`
    <br>
    `FROM sakila.film`
    <br>
    `GROUP BY rating`
    <br>
    `HAVING custo_de_substituicao > 3950.50`
    <br>
    `ORDER BY custo_de_substituicao;`