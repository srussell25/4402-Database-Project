drop table if exists Employees;
drop table if exists Category;
drop table if exists Aisle;
drop table if exists Item;


CREATE TABLE Employees (
    name TEXT NOT NULL,
    date_of_birth DATE,
    salary INTEGER,
    start_date DATE,
    role_name TEXT, 
    ID INTEGER PRIMARY KEY
);

CREATE TABLE Category ( 
    category_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE Aisle (
    number INTEGER PRIMARY KEY,
    categories INTEGER,
    FOREIGN KEY (categories) REFERENCES Category(category_Id)
);

CREATE TABLE Item (
    name TEXT, 
    price INTEGER, 
    stock_remaining INTEGER, 
    item_Id INTEGER PRIMARY KEY,
    category INTEGER,
    FOREIGN KEY (category) REFERENCES Category(category_Id)
);


insert into category (name) values ("Dairy")