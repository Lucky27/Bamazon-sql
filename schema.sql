DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;


CREATE TABLE products(
	id INT(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(40),
	department_name VARCHAR(40),
	price DECIMAL(40,3),
	stock INTEGER(10),
	PRIMARY KEY(id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Abosute_vodka","liquor", 27.99, 4),
	   ("Hennesy","liquor", 39.99, 3),
	   ("Bacardi","liquor", 24.99, 5),
	   ("Baileys","liquor", 26.99, 2),
	   ("Tanqueray","liquor", 23.99, 3),
	   ("Jack_daniels","liquor", 28.99, 4),
	   ("Ciroc","liquor", 37.99, 5), 
	   ("Black_label","liquor", 39.99, 6),
	   ("Grey_goose","liquor", 34.99, 2),
	   ("Crown_royal","liquor", 31.99, 3), 
	   ("Jose_cuervo","liquor", 27.99, 5);