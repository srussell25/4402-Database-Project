const express = require('express');
const db = require('./database/database');
const queries = require('./database/queries');
const app = express();
app.use(express.json());


app.get('/', async (req, res) => {
  const rows = await db.all(queries.getAllCategories, [])
  res.send(`categores: ${JSON.stringify(rows)}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
