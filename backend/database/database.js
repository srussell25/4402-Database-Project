const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

function createPromise(func, sql, params) {
  return new Promise((resolve, reject) => {
    func(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
function createPromise2(func, sql, params) {
  return new Promise((resolve, reject) => {
    func(sql, params, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(this.changes);
      }
    });
  });
}


let instance = null;

class Database {
  constructor() {
    if (!instance) {
      this.db = new sqlite3.Database(__dirname + "/grocery_store.db", (err) => {
        if (err) {
          console.error('Error opening database:', err.message);
        } else {
          console.log('Connected to SQLite database.');
          //Read the schema.sql file and run its commands    
          const schemaPath = path.join(__dirname, 'schema.sql');
          const schema = fs.readFileSync(schemaPath, 'utf8');
          //comment out this section if schema is finished so it does not overwrite our final data
          this.db.exec(schema, (err) => {
            if (err) {
              console.error('Error executing schema:', err.message);
            } else {
              console.log('Database schema applied.');
            }
          });
        }
      });
      instance = this;
    }
    return instance;
  }

  /**
   * Get the database instance.
   * @returns {sqlite3.Database} The SQLite database instance.
   */
  getDb() {
    return this.db;
  }

  /**
   * Execute an SQL query that returns multiple rows.
   * @param {string} sql - The SQL query to execute.
   * @param {Array} params - The parameters for the SQL query.
   * @returns {Promise<Array>} A promise that resolves to the rows returned by the query.
   */
  all(sql, params) {
    return createPromise(this.db.all.bind(this.db), sql, params);
  }

  /**
   * Execute an SQL query that returns a single row.
   * @param {string} sql - The SQL query to execute.
   * @param {Array} params - The parameters for the SQL query.
   * @returns {Promise<Object>} A promise that resolves to the row returned by the query.
   */
  get(sql, params) {
    return createPromise(this.db.get.bind(this.db), sql, params);
  }

  /**
   * Execute an SQL query that does not return any rows.
   * @param {string} sql - The SQL query to execute.
   * @param {Array} params - The parameters for the SQL query.
   * @returns {Promise<void>} A promise that resolves when the query has been executed.
   */
  run(sql, params) {
    return createPromise2(this.db.run.bind(this.db), sql, params);
  }
}

module.exports = new Database();
