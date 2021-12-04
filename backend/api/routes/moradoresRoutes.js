const controller = require('../controllers/moradoresControllers.js');

//server.get('/autores', controller.autoresMenu)

server.get('/moradores', controller.moradoresGetAll)
server.get('/moradores/:codigo', controller.moradoresGetById)


server.put('/moradores/:codigo', controller.moradoresEditar)
server.post('/moradores', controller.moradoresNovo)

