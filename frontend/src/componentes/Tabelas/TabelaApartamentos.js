import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
     
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.apt_codigo}>
          <td> {item.apt_codigo} </td>
          <td> {item.apt_edificio} </td>
          <td> {item.apt_numero} </td>
          <td> {item.apt_andar} </td>
          <td> {item.apt_quartos} </td>
          <td> {item.mor_nome} </td>

          <td id="editar"> <a className="btn btn-light btn-block" href={props.chave + item.apt_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.apt_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela container">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Edificio </th>
            <th scope="col"> Numero </th>
            <th scope="col"> Andar </th>
            <th scope="col"> Quantidade de quartos </th>
            <th scope="col"> Morador </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Apartamento</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}