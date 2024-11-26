
const queries = {

  insertEmployee: `
  INSERT INTO Employees (name, date_of_birth, salary, start_date, role_name, ID) 
  VALUES (?, ?, ?, ?, ?, ?);
`,

insertCategory: `
  INSERT INTO Category (name) 
  VALUES (?);
`,

insertAisle: `
  INSERT INTO Aisle (number, categories) 
  VALUES (?, ?);
`,

insertItem: `
  INSERT INTO Item (name, price, stock_remaining, item_Id, category) 
  VALUES (?, ?, ?, ?, ?);
`,


getAllEmployees: `
  SELECT * FROM Employees;
`,

getAllCategories: `
  SELECT * FROM Category;
`,

getItemsInCategory: `
  SELECT Item.name, Item.price, Item.stock_remaining 
  FROM Item
  INNER JOIN Category ON Item.category = Category.category_Id
  WHERE Category.name = ?;
`,

getAislesWithCategory: `
  SELECT Aisle.number, Category.name 
  FROM Aisle
  INNER JOIN Category ON Aisle.categories = Category.category_Id;
`,


updateEmployeeSalary: `
  UPDATE Employees
  SET salary = ?
  WHERE ID = ?;
`,

updateItemStock: `
  UPDATE Item
  SET stock_remaining = ?
  WHERE item_Id = ?;
`,

deleteEmployee: `
  DELETE FROM Employees
  WHERE ID = ?;
`,

deleteItem: `
  DELETE FROM Item
  WHERE item_Id = ?;
`,
}

module.exports = queries