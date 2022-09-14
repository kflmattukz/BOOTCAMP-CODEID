-- Active: 1663148684925@@127.0.0.1@5432@codeid19

---1. Informasi jumlah department di tiap regions
SELECT r.region_name, count(l.location_id) as total_departments
  FROM regions r left join countries c on r.region_id = c.region_id
  left join locations l on c.country_id = l.country_id
  left join departments d on l.location_id = d.location_id
  GROUP BY(r.region_id);
  
---2. Informai jumlah department tiap countries.
SELECT c.country_name,COUNT(l.location_id)
FROM countries c left JOIN locations l ON c.country_id = l.country_id
left JOIN departments d on l.location_id = d.location_id
GROUP BY(c.country_id);

---3. Informasi jumlah employee tiap department.
SELECT d.department_name,count(d.department_id) AS total_employees
  FROM departments d left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(d.department_name);

---4. Informasi jumlah employee tiap region.
SELECT r.region_name,count(r.region_id) AS total_employees
  FROM regions r left JOIN countries c ON r.region_id = c.region_id
  left JOIN locations l ON c.country_id = l.country_id
  left JOIN departments d ON l.location_id = d.location_id
  left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(r.region_id);

---5. Informasi jumlah employee tiap countries.
SELECT c.country_name,count(c.country_id) AS total_employees
  FROM countries c left JOIN locations l ON c.country_id = l.country_id
  left JOIN departments d ON l.location_id = d.location_id
  left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(c.country_id);

---6. Informasi salary tertinggi tiap department.
SELECT d.department_name,MAX(e.salary) AS max_salary
  FROM departments d left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(d.department_id);

---7. Informasi salary terendah tiap department.
SELECT d.department_name,MIN(e.salary) AS min_salary
  FROM departments d left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(d.department_id);

---8. Informasi salary rata-rata tiap department.
SELECT d.department_name,AVG(e.salary)::NUMERIC(10) AS average_salary
  FROM departments d left JOIN employees e ON d.department_id = e.department_id::INTEGER
  GROUP BY(d.department_id);

---9. Informasi jumlah mutasi pegawai tiap deparment.
SELECT d.department_name,COUNT(jh.employee_id) AS total_employee
  FROM departments d left JOIN employees e ON d.department_id = e.department_id::INTEGER
  left JOIN job_history jh on e.employee_id = jh.employee_id
  GROUP BY(d.department_id);

---10.Informasi jumlah mutasi pegawai berdasarkan role-jobs.
SELECT j.job_title,count(jh.employee_id) AS total_mutation
  FROM jobs j left JOIN job_history jh on j.job_id = jh.job_id
  left JOIN employees e on jh.employee_id = e.employee_id
  GROUP BY(j.job_id);

---11.Informasi jumlah employee yang sering dimutasi.
SELECT concat(e.first_name,' ',e.last_name) as full_name, count(jh.employee_id) as total_mutate
  FROM job_history jh left JOIN employees e on jh.employee_id = e.employee_id
  GROUP BY(full_name) HAVING count(jh.employee_id) > 1;

---12.Informasi jumlah employee berdasarkan role jobs-nya.
SELECT j.job_title,count(e.employee_id) as total_employee
  FROM jobs j left JOIN employees e ON j.job_id = e.job_id
  GROUP BY(j.job_id);

---13.Informasi employee paling lama bekerja di tiap deparment.
SELECT d.department_name, concat(e.first_name,' ',e.last_name) as full_name
  FROM departments d left JOIN employees e on d.department_id = e.department_id 
  WHERE e.hire_date IN (SELECT min(hire_date) FROM employees WHERE e.department_id = department_id )
  ORDER BY(hire_date);

---14.Informasi employee baru masuk kerja di tiap department.
SELECT d.department_name, concat(e.first_name,' ',e.last_name) as full_name
  FROM departments d left JOIN employees e on d.department_id = e.department_id 
  WHERE e.hire_date IN (SELECT max(hire_date) FROM employees WHERE e.department_id = department_id )
  ORDER BY(hire_date);

---15.Informasi lama bekerja tiap employee dalam tahun dan jumlah mutasi history-nya
SELECT concat(e.first_name,' ',e.last_name)as full_name,EXTRACT(YEAR FROM now()) - EXTRACT(YEAR FROM e.hire_date) AS long_hired,count(jh.employee_id) as total_mutation
  FROM employees e left JOIN job_history jh on e.employee_id = jh.employee_id
  GROUP BY(full_name,long_hired);