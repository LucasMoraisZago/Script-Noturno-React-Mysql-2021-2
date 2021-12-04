import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Moradores from '../Moradores/Moradores';
import MoradoresEditar from '../Moradores/MoradoresEditar';
import Apartamentos from '../Apartamentos/Apartamentos';
import ApartamentosEditar from '../Apartamentos/ApartamentosEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/moradores" component={Moradores}></Route>
        <Route exact path="/moradores/:idMoradores" component={MoradoresEditar}></Route>
        <Route exact path="/apartamentos" component={Apartamentos}></Route>
        <Route exact path="/apartamentos/:idApartamentos" component={ApartamentosEditar}></Route>
{/*
        <Route exact path="/livrossss"          component={AutoresEditar}></Route>

        <Route exact path="/autores/consultar/:codigo" component={AutoresEditar}></Route>

*/}


      </Switch>

    </div>
  );
}

