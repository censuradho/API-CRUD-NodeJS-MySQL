const express = require('express');
const routes = require('./routes');

const { connect }  = require( './connection');
const server = express();

connect();

server.use(express.json())
server.use(routes);


const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.log(`Rodando na pora http://localhost:${port}`)
})
