const {createPool} = require('mysql');
require('dotenv').config();

const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,   
  database: process.env.DB_NAME , 
  connectionLimit : 60 
}); 
 
db.getConnection((err) => {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = db;