#BOOTCAMP Week1 Day1 PostgreSQL

##TYPE DATA PostgresSQL
INT
VARCHAR


##COMMAND
SERIAL = Type INT Auto Increment
PRIMARY KEY = membuat primary key pada table
CONSTRAINT = membuat nama beda KEY(PRIMARY/FOREIGN) pada TABLE 
		* jika kita men join dua TABLE yg nantinya sama-sama ada coloumn region_id,maka 
		kita akan bingung "region_id yg mana dari countries" dan "region_id dari region"
		jadi saat kita membuat counstrain kita bisa membedakan region_id dari region dan region_id dari countries 
		karna kita sudah membuat nama berbeda menggunakan CONSTRAINT menjadi region_id_fk
CASCADE = membuat relasi pada setiap TABLE
REFERENCES = membuat referensi FOREIGN KEY pada table lain 

PostgresSQL
 ###Create Table
	CREATE TABLE region(
		region_id SERIAL PRIMARY KEY,
		region_name varchar(25)
	)

 ###Create Table with Constraint
	CREATE TABLE countries(
		country_id serial,
		country_name varchar(25),
		region_id int not null,
		constraint country_id_pk primary key (country_id),
		constraint region_id_fk foreign key (region_id) references region(region_id) on delete cascade on update cascade
	)

 ###Alter Table
	ALTER TABLE region ADD COLUMN region_x varchar(25)
	ALTER TABLE region RENAME COLUMN region_x to region_xo
	ALTER TABLE region ALTER COLUMN region_xo type int
	ALTER TABLE region DROP COLUMN region_xo

 ###DROP Table
	DROP TABLE countries
	DROP TABLE region cascade

 ###INSERT DATA to table
	INSERT INTO region (region_name) values ('Indonesia')
	INSERT INTO region (region_name) values ('Indonesia'),('Rusia'),('Amerika')
	INSERT INTO countries (country_name, region_id) values
		('new york' ,3),
		('jakarta' , 1),
		('moskow', 2)

 ###SELECT Table 
	SELECT * FROM region

 ###UPDATE Data on Table
	UPDATE region set region_name = 'Artic' WHERE region_id = 1

 ###DELETE Data on Table 
	DELETE FROM region WHERE region_id = 1	