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

-- Insert Categories
insert into category (name) values 
("Dairy"),
('Bakery'),
('Produce'),
('Meat & Seafood'),
('Frozen'),
('Beverages');

-- Insert Employees
INSERT INTO Employees (name, date_of_birth, salary, start_date, role_name, ID) VALUES
('Alice Johnson', '1985-03-10', 45000, '2015-06-01', 'Cashier', 1),
('Bob Smith', '1990-07-25', 52000, '2018-08-15', 'Manager', 2),
('Charlie Brown', '1995-11-12', 30000, '2021-04-22', 'Stock Clerk', 3),
('Diane Roberts', '1982-01-15', 40000, '2017-03-12', 'Cashier', 4),
('Ethan Davis', '1988-09-05', 60000, '2014-02-10', 'Supervisor', 5);

-- Insert Aisles
INSERT INTO Aisle (number, categories) VALUES
(1, 1), -- Dairy
(2, 2), -- Bakery
(3, 3), -- Produce
(4, 4), -- Meat & Seafood
(5, 5), -- Frozen
(6, 6); -- Beverages

-- Insert Items
INSERT INTO Item (name, price, stock_remaining, item_Id, category) VALUES
('Milk', 3, 50, 1, 1), -- Dairy
('Cheese', 4, 25, 2, 1), -- Dairy
('Butter', 5, 20, 3, 1), -- Dairy
('Bread', 2, 30, 4, 2), -- Bakery
('Croissant', 3, 15, 5, 2), -- Bakery
('Apples', 1, 100, 6, 3), -- Produce
('Bananas', 1, 120, 7, 3), -- Produce
('Carrots', 1, 80, 8, 3), -- Produce
('Ground Beef', 5, 20, 9, 4), -- Meat & Seafood
('Chicken Breast', 6, 15, 10, 4), -- Meat & Seafood
('Fish Fillets', 8, 10, 11, 4), -- Meat & Seafood
('Ice Cream', 4, 40, 12, 5), -- Frozen
('Frozen Pizza', 6, 25, 13, 5), -- Frozen
('Coca-Cola', 2, 60, 14, 6), -- Beverages
('Orange Juice', 3, 50, 15, 6), -- Beverages
('Bottled Water', 1, 100, 16, 6); -- Beverages