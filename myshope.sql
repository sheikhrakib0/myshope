-- creating the database-- 
create database myshope;

-- use that database 
use myshope;

-- First we need a user table to keep user info from signup page
create table users (
	userId int auto_increment primary key,
    userName varchar(100) not null,
    userEmail varchar(100) not null,
    userPass varchar(255) not null
    );

-- Add user from signup page (adding for example)
insert into users (userName, userEmail, userPass, phone) values
	('Md. Ruhul Amin', 'ruhulamin0@gmail.com','ruhul1234', '01722905403'),
	('Samia akter', 'samia0@gmail.com','samia1234', '017988204567');

-- Creating a product table
create table products (
	productId varchar(255) primary key,
    productName varchar(100),
    productDetails varchar(255),
    price float,
    quantity int);

-- Adding product from admin panel
insert into products values
	('sh2001', 'high converts', 'red color high converts',3000, 100);

-- show all the products 
select * from products;

-- update product 
update products
	set quantity = 85
    where productId = 'sh2001';
    
-- delete a product 
delete from products
	where productId = 'sh2001';

-- Create a cart table
create table cart (
	userId int,
    productId varchar(255),
    product varchar(100),
    price float, quantity int,
    total float,
    foreign key(productId) references products(productId),
    foreign key(userId) references users(userId));
    
    
-- insert into the cart by user click
insert into cart values
	(1, 'sh2001', 'high converts', 3000, 1, 3000);

-- show all the items in a cart for a customer
select * from cart
	where userId = userId;
    
-- calculating total bill of a customer
select sum(price*quantity) as totalBill from cart;

-- updating cart by deleting/increasing quantity
update cart
	set quantity = newQuantity
    where productId = 'sh2001';
delete from cart
	where productId = 'sh2001';
