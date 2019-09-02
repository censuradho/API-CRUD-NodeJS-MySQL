const { db } = require('../connection');
require('dotenv/config');

module.exports = {
  async index(req,res) {
    const { username } = req.body;
    
    if(username) {
      await db.query(`SELECT * FROM usuarios WHERE username = "${username}";`, (err,response) => {
        if(err) throw err;
        else  return res.json({response})
      })
    }
    
    await db.query(`SELECT * from ${process.env.DB_TABLE};`, (err,response) => {
      if(err) throw err;
      else return res.json({response, username})
    })
  }
}