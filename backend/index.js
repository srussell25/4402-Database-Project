const express = require('express');
const db = require('./database/database');
const queries = require('./database/queries');
const app = express();
app.use(express.json());


const cors = require('cors');
// Enable CORS for all origins
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
}));


app.get('/api/categories', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const rows = await db.all(queries.getAllCategories, [])
  res.send(`${JSON.stringify(rows)}`);
});

app.get('/api/employees', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const rows = await db.all(queries.getAllEmployees, [])
  res.send(`${JSON.stringify(rows)}`);
});


app.delete('/api/deleteEmployee/:id', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const employeeId = parseInt(req.params.id, 10); // Extract employee ID from the route parameter
  await db.all(queries.deleteEmployee, [employeeId])
  const rows = await db.all(queries.getAllEmployees, [])
  res.send(`${JSON.stringify(rows)}`);
});

app.delete('/api/deleteCategory/:id', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const employeeId = parseInt(req.params.id, 10); // Extract employee ID from the route parameter
  await db.all(queries.deleteCategory, [employeeId])
  const rows = await db.all(queries.getAllEmployees, [])
  res.send(`${JSON.stringify(rows)}`);
});

app.put('/api/updateEmployeeSalary/:id', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const { raise } = req.body; 
  const employeeId = parseInt(req.params.id, 10); 
  await db.run(queries.updateEmployeeSalary, [raise, employeeId])
  res.json({ message: `New Salary : ${raise}` });
});


app.post('/api/addEmployee', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const {name,dob, salary, start_date,role_name,ID} = req.body;
  await db.run(queries.insertEmployee, [name, dob, salary,start_date, role_name, ID]);
  res.send(`New Employee Added to DB` );
});

app.post('/api/addCategory', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const {name,ID} = req.body;
  await db.run(queries.insertCategory, [ID, name]);
  res.send(`New Category Added to DB` );
});

app.get('/', async (req, res) => {
  const rows = await db.all(queries.getAllCategories, [])
  res.send(`categores: ${JSON.stringify(rows)}`);
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
