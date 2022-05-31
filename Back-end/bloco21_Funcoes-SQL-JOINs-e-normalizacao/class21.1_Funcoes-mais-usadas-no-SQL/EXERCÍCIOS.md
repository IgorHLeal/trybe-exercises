<p>Exercício 1:</p>

  `SELECT MAX(SALARY) FROM hr.employees;`

---

<p>Exercício 2:</p>

  `SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;`

---

<p>Exercício 3:</p>

  `SELECT JOB_ID, AVG(SALARY) AS media_salarial`
  `FROM hr.employees`
  `GROUP BY JOB_ID`
  `ORDER BY media_salarial DESC;`

---

<p>Exercício 4:</p>

  `SELECT SUM(SALARY) FROM hr.employees;`

---

<p>Exercício 5:</p>

  `SELECT ROUND(MAX(SALARY), 2) AS maior_salário,`
  `ROUND(MIN(SALARY), 2) AS menor_salário,`
  `ROUND(SUM(SALARY), 2) AS soma_salarial,`
  `ROUND(AVG(SALARY), 2) AS média_salarial`
  `FROM hr.employees;`

---

<p>Exercício 6:</p>

  `SELECT COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';`

---

<p>Exercício 7:</p>

  `SELECT JOB_ID, SUM(SALARY) AS custo_salarial FROM hr.employees GROUP BY JOB_ID;`

---

<p>Exercício 8:</p>

  `SELECT JOB_ID, SUM(SALARY) AS custo_salarial`
  `FROM hr.employees`
  `GROUP BY JOB_ID`
  `HAVING JOB_ID = 'IT_PROG';`

---

<p>Exercício 9:</p>

  `SELECT JOB_ID, AVG(SALARY) AS media_salarial`
  `FROM hr.employees`
  `GROUP BY JOB_ID`
  `HAVING JOB_ID <> 'IT_PROG'`
  `ORDER BY media_salarial DESC;`

---

<p>Exercício 10:</p>

  `SELECT DEPARTMENT_ID,`
  `ROUND(AVG(SALARY), 2) AS average_salary,`
  `COUNT(*) AS number_of_employees`
  `FROM hr.employees`
  `GROUP BY department_id`
  `HAVING number_of_employees > 10;`

---

<p>Exercício 11:</p>

  `SET SQL_SAFE_UPDATES = 0;`
  `UPDATE hr.employees`
  `SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')`
  `WHERE PHONE_NUMBER LIKE '%515%'; `
  `SET SQL_SAFE_UPDATES = 1;`

---

<p>Exercício 12:</p>

  `SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;`

---

<p>Exercício 13:</p>

  `SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;`

---

<p>Exercício 14:</p>

  `SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;`

---

<p>Exercício 15:</p>

  `SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;`

---

<p>Exercício 16:</p>

  `SELECT UPPER(CONCAT(first_name, ' ', last_name)) FROM hr.employees;`

---

<p>Exercício 17:</p>

  `SELECT last_name, hire_date FROM hr.employees WHERE hire_date LIKE '%1987-07%';`

---

<p>Exercício 18:</p>

  `SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM hr.employees;`

---