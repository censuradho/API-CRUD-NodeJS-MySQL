const { db } = require('../connection');
require('dotenv/config');

module.exports = {
  async store(req,res) {
    const { username,password } = req.body;

    const request = `INSERT INTO ${process.env.DB_TABLE}(username,password) VALUES('${username}','${password}')`
    await db.query(request,(err,response) => {
      if(err) throw err;
      else return res.json({message: "usuario cadastrado",response})
    })
  }
}