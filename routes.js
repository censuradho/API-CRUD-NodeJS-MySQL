const express = require('express');
const userIdxControll = require('./controllers/userIdxControll');
const userStrControll = require('./controllers/userStrControll');
const userDelControll = require('./controllers/userDelControll');
const userUpControll = require('./controllers/userUpControll');

const routes = express.Router();

routes.get('/', userIdxControll.index)
routes.get('/:username',userIdxControll.index);
routes.post('/cadastro', userStrControll.store);
routes.delete('/deletar', userDelControll.delete);
routes.put('/atualizar', userUpControll.update);
module.exports = routes;