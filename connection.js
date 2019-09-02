const mysql = require('mysql');

require('dotenv/config');

  const db = mysql.createConnection({
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  })
  const connect = () => {
    db.connect((err) => {
      if(err) throw err;
      console.log(`conectado no banco ${process.env.DB_DATABASE}`)
    })
  }


module.exports = {db, connect};