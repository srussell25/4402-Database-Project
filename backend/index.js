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
  res.send(`categores: ${JSON.stringify(rows)}`);
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
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   const employeeId = parseInt(req.params.id, 10); // Extract employee ID from the route parameter
  await db.all(queries.deleteEmployee, [employeeId])
  const rows = await db.all(queries.getAllEmployees, [])
  res.send(`${JSON.stringify(rows)}`);
});


app.get('/', async (req, res) => {
  const rows = await db.all(queries.getAllCategories, [])
  res.send(`categores: ${JSON.stringify(rows)}`);
});

// app.get('/api/categories', async (req, res) => {
//   const rows = await db.all(queries.getAllCategories, [])
//   res.send(`categores: ${JSON.stringify(rows)}`);
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
