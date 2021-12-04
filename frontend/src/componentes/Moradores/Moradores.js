import React from "react"
import './Moradores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaMoradores";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Moradores() {
  const [moradores, setMoradores] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('moradores')
      .then(response => setMoradores(response.data));
  }, []
  )

  return (
    <>
        <div id="idMoradores" className="moradores container">
          <div id="corpo_rel">
            <legend> Registros de Moradores Cadastrados</legend>
            <Link classname="link-topo" to="/moradores/0">incluir Novo Morador</Link>

            <div>

              <Tabela
                items={moradores}
                chave={'/moradores/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Moradores;

