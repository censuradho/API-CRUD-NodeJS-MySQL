const { db } = require('../connection');
require('dotenv/config');

module.exports = {
  async delete(req,res) {
    const { username } = req.body;

    const request = `DELETE FROM ${process.env.DB_TABLE} WHERE username = "${username}";`
    await db.query(request, (err,response) => {
      if(err) throw err;
      else return res.json({message: "usuário deletado", response});
    })
  }
}