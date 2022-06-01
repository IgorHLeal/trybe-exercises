<h2>Querys utilizadas nos exercícios</h2>


<p>Exercício 1:</p>

  `SELECT`
    `CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",`
    `CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"`
  `FROM hr.employees AS Employee`
  `INNER JOIN`
    `hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID`
  `WHERE`
    `Employee.MANAGER_ID <> Manager.MANAGER_ID;`

---

<p>Exercício 2:</p>

  `SELECT`
    `CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",`
    `COUNT(*)`
  `FROM hr.employees AS Manager`
  `INNER JOIN`
    `hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID`
  `GROUP BY`
    `Manager.EMPLOYEE_ID;`

---