const { db } = require('../connection');
require('dotenv/config');

module.exports = {
  async update( req,res) {
    const { username, newUserName } = req.body;

    const checkUser =  await db.query(`SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}";`)
    if(checkUser) {
      return res.json({message: "Usuário não encontrado."})
    }
    
    const request = `UPDATE ${process.env.DB_TABLE} SET username = "${newUserName}" WHERE username = "${username}";`

    db.query(request, (err,response) => {
      if(err) throw err;
      else return res.json({message: "Usuário atualizado com sucesso", response})
    })
  }
}