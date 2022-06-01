<h2>Querys utilizadas nos exercícios</h2>


<p>Exercício 1:</p>

  `SELECT act.actor_id, act.first_name, fil.film_id`
  `FROM sakila.actor AS act`
  `INNER JOIN sakila.film_actor AS fil`
  `ON act.actor_id = fil.actor_id;`

---

<p>Exercício 2:</p>

  `SELECT sta.first_name, sta.last_name, addr.address`
  `FROM sakila.staff AS sta`
  `INNER JOIN sakila.address AS addr`
  `ON sta.address_id = addr.address_id;`
  

---

<p>Exercício 3:</p>

  `SELECT cust.customer_id, cust.first_name, cust.email, addr.address_id, addr.address`
  `FROM sakila.customer AS cust`
  `INNER JOIN sakila.address addr`
  `ON cust.address_id = addr.address_id`
  `ORDER BY cust.first_name DESC`
  `LIMIT 100;`

---

<p>Exercício 4:</p>

  `SELECT cust.first_name, cust.email, cust.address_id, addr.address, addr.district`
  `FROM sakila.customer AS cust`
  `INNER JOIN sakila.address addr`
  `ON cust.address_id = addr.address_id`
  `WHERE addr.district = 'California'`
  `AND cust.first_name LIKE '%rene%';`

---

<p>Exercício 5:</p>

`SELECT cust.first_name, COUNT(addr.address) AS qtd_enderecos`
`FROM sakila.customer AS cust`
`INNER JOIN sakila.address AS addr ON addr.address_id = cust.address_id`
`WHERE cust.active = 1`
`GROUP BY cust.customer_id`
`ORDER BY first_name DESC, last_name DESC;`

---

<p>Exercício 6:</p>

  `SELECT sta.first_name, sta.last_name, AVG(pay.amount)`
  `FROM sakila.staff AS sta`
  `INNER JOIN sakila.payment AS pay`
  `ON sta.staff_id = pay.staff_id`
  `WHERE YEAR(pay.payment_date) = 2006`
  `GROUP BY sta.staff_id;`

---

<p>Exercício 7:</p>

  `SELECT act.actor_id, fisrt_name, film_id, title`
  `FROM sakila.actor AS act`
  `INNER JOIN sakila.film_actor filmAct`
  `ON act.act_id = filmAct.act_id`
  `INNER JOIN sakila.film flm`
  `ON flm.film_id = filmAct.act_id;`

---
