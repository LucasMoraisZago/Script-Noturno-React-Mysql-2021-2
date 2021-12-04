const models = require('../models/apartamentosModels.js');

module.exports = {
    //    moradorMenu,
    apartamentosGetAll,
    apartamentosGetById,
    apartamentosNovo,
    apartamentosEditar,
}

// function moradoresMenu(req, res) {
//     res.json('Rota morador Encontrada!!!');
//     console.log('Rota morador Encontrada!!!');
// }

function apartamentosGetAll(req, res) {
    // console.log('Lista apartamentos');
    models.getAllApartamentos(function (err, resposta) {
        // console.log('Retorno demoradores {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function apartamentosGetById(req, res) {
    const id = req.params.codigo
    // console.log('Parametro Esperado Get: ' + id);
    models.getByIdApartamentos(id, function (err, resposta) {
        console.log('Retorno demoradores Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 



function apartamentosNovo(req, res) {
    var dados = req.body;
    // console.log("Gravando Novo Registro de morador...");
    // console.log(req.body);
    dados.apt_codigo = null;
    // console.log("Inserindo novo registro de morador...");
    models.novoApartamentos(dados, function (err, result) {
        if (err) {
            throw err;
        }
        // res.redirect('/moradores');
    })
}


function apartamentosEditar(req, res) {
    var dados = req.body;

    // console.log(dados);
    // console.log("Alterando Registro de morador...",dados);

    models.editarApartamentos(dados, function (error, result) {
        // console.log(result)
        // console.log(err)
        if(error){
            throw error;
        }else{
            // console.log(res)
            // res.redirect('/moradores')
        }
        
    });
}