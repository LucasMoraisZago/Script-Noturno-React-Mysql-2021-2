import React from "react"
import './Apartamentos.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaApartamentos";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Apartamento() {
  const [apartamentos, setApartamentos] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('apartamentos')
      .then(response => setApartamentos(response.data));

  }, []
  )

  return (
    <>
        <div id="idApartamento" className="apartamento container">
          <div id="corpo_rel">
            <legend> Registros de Apartamentos Cadastrados</legend>
            <Link to="/apartamentos/0" >incluir Novo Apartamento</Link>

            <div>

              <Tabela
                items={apartamentos}
                chave={'/apartamentos/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Apartamento;

