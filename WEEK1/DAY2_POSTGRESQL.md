# WEEK1 DAY2 postgresql

# SELECT data
```
SELECT * FROM locations l join countries c on l.country_id = c.country_id join region r on c.region_id = c.region_id
```

```
SELECT manager_id, COUNT(employee_id) AS employee FROM employees GROUP BY manager_id HAVING COUNT(employee_id) = 4
```

```
SELECT department_id, sum(salary)salary from employees WHERE SUM(salary) <=4500 GROUP BY department_id
```