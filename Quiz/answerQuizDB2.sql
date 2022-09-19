-- Active: 1663148684925@@127.0.0.1@5432@codeid19

----SULKIFLI ASMUNANDAR
----kflmattukz@gmail.com

---1. Tampilkan employees yang mendapatkan bonus akhir tahun, jika masa kerja 
---employees >= 20 tahun akan mendapatkan bonus 5x salary, jika kurang akan 
---mendapatkan 3x salary. Hint : gunakan extract(year from age(now(),hire_date))
SELECT employee_id,concat(first_name,' ',last_name) full_name, EXTRACT(YEAR FROM age(now(), hire_date)) year_job,salary,
  CASE 
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 20 THEN salary * 5
    ELSE salary * 3
    END end_year_bonus
  FROM employees;

---2. Tampilkan bonus tiap masa kerja.
SELECT EXTRACT(YEAR FROM age(now(),hire_date)) work_years, COUNT(EXTRACT(YEAR FROM age(now(),hire_date))) total_employees,
  CASE 
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 20 THEN SUM(salary + (salary * 5)) 
    ELSE SUM(salary + (salary * 3))
    END bonus
  FROM employees
  GROUP BY(work_years)
  ORDER BY(work_years) DESC;

---3. Tampilkan jumlah pegawai berdasarkan masa kerja nya.
SELECT EXTRACT(YEAR FROM age(now(),hire_date)) work_years,
  CASE 
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 20 THEN coalesce(COUNT(employee_id),0) END employee_hire_more_20y,
  CASE
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) < 20 THEN coalesce(COUNT(employee_id),0) END employee_hire_under_20y
  FROM employees
  GROUP BY(work_years)
  ORDER BY(work_years) DESC;

---4. Buat tampilan jumlah pegawai berdasarkan masa kerja di tiap department
SELECT d.department_name,EXTRACT(YEAR FROM age(now(),e.hire_date)) work_years,
  CASE 
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 20 THEN coalesce(COUNT(employee_id),0) END employee_hire_more_20y,
  CASE
    WHEN EXTRACT(YEAR FROM age(now(),hire_date)) < 20 THEN coalesce(COUNT(employee_id),0) END employee_hire_under_20y 
  FROM employees e JOIN departments d ON e.department_id = d.department_id
  GROUP BY(d.department_id,work_years);