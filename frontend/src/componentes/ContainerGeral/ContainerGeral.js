import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
// import MenuBotoes from '../MenuBotoes/MenuBotoes';
import AreaDados from '../AreaDados/AreaDados';
import Rodape from '../Rodape/Rodape';

import { BrowserRouter } from 'react-router-dom';

import './ContainerGeral.css';

function ContainerGeral() {
  return (
    <>
    <div className="geral">
      <BrowserRouter>
      
        <ContainerSuperior />

        <AreaDados />

      </BrowserRouter>
    </div>
    <Rodape />
    </>
  );
}

export default ContainerGeral;
