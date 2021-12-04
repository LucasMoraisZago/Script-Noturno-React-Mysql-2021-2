import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
     
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.mor_codigo}>
          <td> {item.mor_codigo} </td>
          <td> {item.mor_nome} </td>
          <td> {item.mor_apelido} </td>
          <td> {item.mor_celular} </td>
          <td> {item.mor_cpf} </td>

          <td id="editar"> <a className="btn btn-light btn-block" href={props.chave + item.mor_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.mor_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Telefone </th>
            <th scope="col"> CPF </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Morador</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}