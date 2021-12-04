const conexao = require('../../config/conexao.js');

module.exports = {
    getAllmoradores,
    getByIdmoradores,
    editarmorador,
    novoMorador            
}

function getAllmoradores (callback) {
    conexao.query('SELECT * FROM moradorproprietario', callback)
}

function getByIdmoradores (id, callback) {
    conexao.query('select * from moradorproprietario WHERE mor_codigo = ' + id, callback)
}

// function ativarInativar (id, ativo, callback) {
//     console.log('Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

//     const m_sql = "update moradorproprietario set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

//     conexao.query( m_sql, callback );

//     console.log('Retornando { M O D E L } Autores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
// }

function novoMorador(dados, callback) {
    
    var msql = 'INSERT INTO moradorproprietario SET ? ';

	conexao.query(msql, dados, callback);
    console.log(callback)
}

function editarmorador(dados, callback) {
    // console.log('Estou alterando o moradores { M O D E L } .......' + dados);

    var msql = "UPDATE moradorproprietario SET mor_nome = '" + dados.mor_nome +     
    "' , mor_apelido      = '" + dados.mor_apelido + 
    "' , mor_celular         = '" + dados.mor_celular + 
    "' , mor_cpf     = '" + dados.mor_cpf + 
    "'  WHERE mor_codigo  = '" + dados.mor_codigo + "'";

    // console.log(msql);
    
    var a =  conexao.query(msql, callback);
    
}

