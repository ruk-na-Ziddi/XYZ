conn / as sysdba

PROMPT 'Creating Tablespaces'

-- Create tablespaces
CREATE TABLESPACE ts_emp_system DATAFILE 'C:\ORACLEXE\APP\ORACLE\ORADATA\XE\emp_system_01.dbf' SIZE 200M AUTOEXTEND ON;
PROMPT '.... Tablespace creation completed.'


DROP USER emp_user CASCADE;

-- Creating users
PROMPT 'Creating user'
CREATE USER emp_user IDENTIFIED BY password DEFAULT TABLESPACE ts_emp_system QUOTA UNLIMITED ON ts_emp_system;
GRANT CREATE SESSION TO emp_user;
GRANT CREATE VIEW TO emp_user;
GRANT RESOURCE TO emp_user;(has to be done by emp_user)

CREATE USER reporter IDENTIFIED BY 123 DEFAULT TABLESPACE ts_emp_system QUOTA UNLIMITED ON ts_emp_system;
GRANT CREATE SESSION TO reporter;
GRANT RESOURCE TO reporter;
GRANT SELECT ON PRODUCTION_employees TO reporter;

PROMPT '.... User created with required privileges'

-- Connect as the schema user
PROMPT 'Connecting as Employee user'
conn emp_user/password

-- Cleanup object before creating 
/* Uncomment when necessary */
-- DROP TABLE department CASCADE CONSTRAINTS;
-- DROP TABLE employee CASCADE CONSTRAINTS;
-- DROP SEQUENCE seq_emp_id;


-- Create Employee table
CREATE TABLE employee (
id			NUMBER(10),
name		VARCHAR(50) NOT NULL,
pan_number	VARCHAR(10) NOT NULL UNIQUE,
gender		CHAR(1),
cell_phone	VARCHAR(15),
CONSTRAINT emp_pk PRIMARY KEY(id),
CONSTRAINT emp_gender_chk CHECK(gender IN ('M', 'F') )
);

-- Create Department table - an example to create a table in a desired tablespace
CREATE TABLE department (
id			NUMBER(10),
dept_name	VARCHAR(50),
CONSTRAINT dept_pk PRIMARY KEY(id)
) TABLESPACE ts_emp_system; 

-- Create constraints
ALTER TABLE department ADD CONSTRAINT dept_name_u UNIQUE(dept_name);

-- Sequence
CREATE SEQUENCE seq_emp_id START WITH 1 INCREMENT BY 1 NOCACHE NOCYCLE;


-- Let us add SALARY column to employee table
ALTER TABLE employee ADD (salary number(10) );
ALTER TABLE employee ADD (dept_id NUMBER(10) );

-- Insert sample data
INSERT INTO department VALUES (2001,'PRODUCTION');
INSERT INTO department VALUES (2002,'SALES');
INSERT INTO department VALUES (2003,'MARKETING');
INSERT INTO department VALUES (2004,'SUPPORT');

COMMIT;

INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAA','ABCXX1000Z','M',9999900001,20000,2002);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAB','ABCXX1001Z','M',9999900002,18500,2001);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAC','ABCXX1002Z','F',9999900003,63000,2001);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAD','ABCXX1003Z','M',9999900004,7500,2003);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAE','ABCXX1004Z','F',9999900005,30000,2002);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAF','ABCXX1005Z','F',9999900006,24000,2001);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAF','ABCXX1006Z','F',9999900007,52000,2002);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAG','ABCXX1007Z','M',9999900008,14000,2003);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAH','ABCXX1008Z','M',9999900009,18500,2003);
INSERT INTO employee VALUES (seq_emp_id.nextval,'AAAI','ABCXX1009Z','M',9999900010,18500,2001);
INSERT INTO employee (id,name,pan_number,gender,cell_phone,salary) VALUES (seq_emp_id.nextval,'AAAj','ABCXX1010Z','M',9999900011,18600);

COMMIT;



--  id name deptname
-- id name deptid




select id,name,dept_id from  employee;
select E.id,E.name,D.dept_name from employee E,department D where E.dept_id = D.id;

select E.id,E.name,D.dept_name from employee E join department D on (E.dept_id = D.id);
select * from employee E join department D on (E.dept_id = D.id);
select * from employee E and department D on (E.dept_id = D.id);
-- instade of join we can use natural join;
-- cross join 
-- select E.id,E.name,D.dept_name from employee E join department D on emp_id;
select E.name from employee E join department D on (E.dept_id = D.id) where D.dept_name = 'PRODUCTION';
select sum(E.salary) from employee E join department D on (E.dept_id = D.id) where D.dept_name = 'SALES' and gender = 'F';
select avg(E.salary) from employee E join department D on (E.dept_id = D.id) where D.dept_name = 'MARKETING' and gender = 'M';
select avg(E.salary) from employee E join department D on (E.dept_id = D.id) where D.dept_name IN ('MARKETING','SALES');

SELECT avg(salary)
FROM employee 
WHERE dept_id IN (
	SELECT id 
	FROM department 
	WHERE dept_name IN ('MARKETING','SALES')
	);

select dept_name from department where id NOT IN (select dept_id from employee);
-- select D.dept_name from department D join employee E on D.dept_id NOT IN (Employee);

SELECT dept_name
FROM department
WHERE id NOT IN (
	SELECT dept_id
	FROM employee
	);

select e.name,d.dept_name from employee e join department d on (e.dept_id = d.id);
select e.name,d.dept_name from employee e left outer join department d on (e.dept_id = d.id);
SELECT e.name,d.dept_name FROM employee e join department d ON(e.dept_id = d.id);
select e.name,d.dept_name from department d right outer join employee e on (e.dept_id = d.id);
select e.name,d.dept_name from employee e right outer join department d on (e.dept_id = d.id);
SELECT e.name,d.dept_name from employee e FULL OUTER JOIN department d ON (e.dept_id = d.id);
SELECT e.name FROM employee e JOIN department d on (e.dept_id = d.id) WHERE d.dept_name = 'PRODUCTION' OR d.dept_name = 'SALES';  
SELECT e.name FROM employee e JOIN department d on (e.dept_id = d.id) WHERE d.dept_name IN('PRODUCTION','SALES');
SELECT e.name,e.id FROM employee e JOIN department d on (e.dept_id = d.id) WHERE d.dept_name NOT IN('PRODUCTION','SALES');   

SELECT e.* from employee e JOIN department d on(e.dept_id = d.id) WHERE d.dept_name IN ('PRODUCTION');




-- simple view
-- materialised view
-- db object table,sequence,view
-- sinonime

CREATE VIEW PRODUCTION_employees AS SELECT e.* from employee e JOIN department d on(e.dept_id = d.id) WHERE d.dept_name IN ('PRODUCTION');
CREATE SYNONYM pro_emp FOR emp_user.PRODUCTION_employees;
CREATE VIEW p
select * from user_views;
select view_name from user_views;
select view_name from all_views where owner = 'EMP_USER';

-- set theory
-- relational algebra
-- relation math



-- (use vein diagram)
-- union all/union
-- set items are records
-- intersection
-- a-b 
-- like wise set
select e.name,e.id from employee e where dept_id IN (2001,2002);
select e.name,e.id from employee e where dept_id IN (2001) union select e.name,e.id from employee e where dept_id IN (2002);
CREATE VIEW sales_employees AS SELECT e.* from employee e JOIN department d on(e.dept_id = d.id) WHERE d.dept_name IN ('SALES');
SELECT name from PRODUCTION_employees union SELECT name FROM sales_employees;
SELECT name from PRODUCTION_employees union all SELECT name FROM sales_employees;
SELECT name from PRODUCTION_employees where name in (select name from sales_employees);
SELECT name from PRODUCTION_employees intersect SELECT name FROM sales_employees;
SELECT name from PRODUCTION_employees minus SELECT name FROM sales_employees;
self referencing id;

 create table emp_backup as select * from employee;
 CREATE TABLE emp_sceleton as select * from employee WHERE rownum = 0;
-- CREATE statement is always ddl

delete from tablename WHERE 
CREATE TABLE manager as select neme,emp_id from employee;

SELECT e.id,e.name,m.name 
FROM employee e join employee m ON(e.id = m.mgr_id);

SELECT e.id,e.name,m.name,d.dept_name 
FROM employee e JOIN employee m ON (e.id = m.mgr_id) JOIN department d ON (e.dept_id = d.id);

SELECT e.id,e.name,m.name,d.dept_name 
FROM employee e LEFT OUTER JOIN employee m 
ON (e.id = m.mgr_id) join department d ON (e.dept_id = d.id);




SELECT dept_id
FROM employee
WHERE id NOT IN (
	SELECT id
	FROM department
	);

SELECT distinct id 
FROM department 
MINUS 
SELECT dept_id 
FROM employee;

SELECT id 
FROM department 
MINUS 
SELECT dept_id 
FROM employee;

SELECT distinct gender 
FROM employee;

SELECT max SALARY 
FROM employee 
WHERE dept_name = 'PRODUCTION';

SELECT gender,count(*) 
FROM employee GROUP BY gender;

SELECT max(salary)
FROM employee 
WHERE dept_id IN (
	SELECT id 
	FROM department 
	WHERE dept_name = 'PRODUCTION'
	);

SELECT count(*) 
FROM employee
GROUP BY gender;

SELECT e.dept_id,max(e.salary),e.gender
FROM employee e JOIN department d 
ON (e.dept_id = d.id)
GROUP BY e.dept_id,e.gender;

SELECT e.name,e.dept_id,e.salary,e.gender
FROM employee e join department d
ON (e.dept_id = d.id)
WHERE salary IN (
	SELECT max(e.salary)
	FROM employee e JOIN department d
	ON (e.dept_id = d.id)
	GROUP BY e.dept_id,e.gender
	);

SELECT LOWER(name)
FROM employee;

SELECT avg(salary) FROM employee;

SELECT e.name,e.dept_id,e.salary,d.dept_name  
FROM employee e JOIN department d 
ON (e.dept_id = d.id)
WHERE e.salary IN (
	SELECT avg(salary) 
	FROM employee
	GROUP BY dept_id
	); 

SELECT avg(e.salary),e.name  
FROM employee e JOIN department d 
ON (e.dept_id = d.id) 
GROUP BY e.dept_id; 

SELECT * 
FROM (
	SELECT *
	FROM employee
	);
--inline view

SELECT e.id,e.name,e.dept_id,e.salary,avg_sal.sal
FROM employee e JOIN (
		SELECT dept_id,avg(salary) sal
		FROM employee
		GROUP BY dept_id
	) avg_sal
ON (e.dept_id = avg_sal.dept_id);


SELECT e.id,e.name,e.dept_id,e.salary,avg(e.salary)
OVER (PARTITION BY dept_id)
FROM employee e;


SELECT ROUND(salary,2.2) 
FROM employee;


SELECT e.id,e.name,e.dept_id,e.salary,avg_sal.sal,d.dept_name
FROM employee e JOIN department d
ON (e.dept_id = d.id) JOIN
		(
		SELECT dept_id,avg(salary) sal
		FROM employee
		GROUP BY dept_id
	) avg_sal
ON (e.dept_id = avg_sal.dept_id);

SELECT ROUND(AVG(salary),1.1F)
FROM employee
GROUP BY dept_id;

SELECT e.id,e.name,NVL(e.dept_id,'NOT IN ANY DEPARTMENT'),e.salary,avg(e.salary)
OVER (PARTITION BY dept_id)
FROM employee e;

SELECT d.id,d.dept_name,(SELECT COUNT(*) FROM employee e WHERE e.dept_id=d.id) as XYZ FROM DEPARTMENT d;