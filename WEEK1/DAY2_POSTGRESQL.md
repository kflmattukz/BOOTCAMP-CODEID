# WEEK1 DAY2 postgresql

## COMMAND
  - WHERE
  - HAVING
  - COUNT
  - SUM
  - GROUP BY
  - LIKE

# SELECT data
```
SELECT * FROM locations l join countries c on l.country_id = c.country_id join region r on c.region_id = c.region_id
```

```
SELECT manager_id, COUNT(employee_id) AS employee FROM employees GROUP BY manager_id HAVING COUNT(employee_id) = 4
```

```
SELECT department_id, SUM(salary)salary FROM employees WHERE SUM(salary) <=4500 GROUP BY department_id
```

```
SELECT deparment_id, SUM(salary) FROM employees GROUP BY department_id HAVING SUM(salary) <=4500
```

```
SELECT employees_id,first_name,last_name from employees WHERE first_name LIKE 'Da%'
```

```
SELECT * FROM department WHERE location_id IN (select location_id from location l JOIN countries c on l.country_id = c.country_id and c.region_id=1)
```
