const controller = require('../controllers/apartamentosControllers.js');

//server.get('/autores', controller.autoresMenu)

server.get('/apartamentos', controller.apartamentosGetAll)
server.get('/apartamentos/:codigo', controller.apartamentosGetById)


server.put('/apartamentos/:codigo', controller.apartamentosEditar)
server.post('/apartamentos', controller.apartamentosNovo)

