const { join } = require('path');
const conexao = require('../../config/conexao.js');

module.exports = {
    getAllApartamentos,
    getByIdApartamentos,
    editarApartamentos,
    novoApartamentos           
}

function getAllApartamentos (callback) {
    conexao.query('SELECT * FROM apartamento INNER jOIN moradorproprietario ON moradorproprietario.mor_codigo = apartamento.mor_codigo', callback)
}

function getByIdApartamentos (id, callback) {
    conexao.query('select * from apartamento WHERE apt_codigo = ' + id, callback)
}


function novoApartamentos(dados, callback) {
    var msql = 'INSERT INTO apartamento SET ? ';

	conexao.query(msql, dados, callback);
}

function editarApartamentos(dados, callback) {
    // console.log('Estou alterando o apartamentos { M O D E L } .......' + dados);

    var msql = "UPDATE apartamento SET apt_edificio = '" + dados.apt_edificio +     
    "' , apt_numero      = '" + dados.apt_numero + 
    "' , apt_andar         = '" + dados.apt_andar + 
    "' , apt_quartos     = '" + dados.apt_quartos + 
    "' , mor_codigo     = '" + dados.mor_codigo + 
    "'  WHERE apt_codigo  = '" + dados.apt_codigo + "'";

    // console.log(msql);
    
    var a =  conexao.query(msql, callback);
    // console.log(a)
}

