const models = require('../models/moradoresModels.js');

module.exports = {
    //    moradorMenu,
    moradoresGetAll,
    moradoresGetById,
    moradoresNovo,
    moradoresEditar,
}

// function moradoresMenu(req, res) {
//     res.json('Rota morador Encontrada!!!');
//     console.log('Rota morador Encontrada!!!');
// }

function moradoresGetAll(req, res) {
    // console.log('Listarmoradores {M O D E L}');
    models.getAllmoradores(function (err, resposta) {
        // console.log('Retorno demoradores {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function moradoresGetById(req, res) {
    const id = req.params.codigo
    // console.log('Parametro Esperado Get: ' + id);
    models.getByIdmoradores(id, function (err, resposta) {
        // console.log('Retorno demoradores Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function moradoresNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de morador...");
    console.log(req.body);
    dados.mor_codigo = null;
    console.log("Inserindo novo registro de morador...");
    models.novoMorador(dados, function (err, result) {
        if (err) {
            throw err;
        }
        // res.redirect('/moradores');
    })
}


function moradoresEditar(req, res) {
    var dados = req.body;

    // console.log(dados);
    // console.log("Alterando Registro de morador...",dados);

    models.editarmorador(dados, function (err, result) {
        // console.log(result)
        // console.log(err)
        if (err != null) {
            throw err;
        }else{
            // console.log(res)
            // res.redirect('/moradores')
        }
        // return true;
    });
}