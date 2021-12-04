import React from "react"
import './ApartamentosEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ApartamentosEditar() {
    

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [edificio, setEdificio] = useState('');
    const [numero, setNumero] = useState('');
    const [andar, setAndar] = useState('');
    const [quarto, setQuarto] = useState('');
    const [morador, setMorador] = useState('');
    const [selecion, setSelecion] = useState([]);

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idApartamentos } = useParams();


    useEffect(() => {
        async function getMoradores() {
           
            var { data } = await urlapi.get('moradores');

            setSelecion(data);
            if (idApartamentos == 0) {
                setChecked(true);

            } else {
                //                try {
                const { data } = await urlapi.get('/apartamentos/' + idApartamentos);

                setCodigo(data[0].apt_codigo);

                setEdificio(data[0].apt_edificio);
                setNumero(data[0].apt_numero);
                setAndar(data[0].apt_andar);
                setQuarto(data[0].apt_quartos);
                setMorador(data[0].mor_codigo);
               
            }
        }
        getMoradores();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    function getSelect() {

        const arrayRegistros = selecion
    
        return arrayRegistros.map((item, i) => {
         
          return (
           <option value={item.mor_codigo}>{item.mor_nome}</option>
          )
        })
      }

    async function handleApartamento(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log(data)
       

        try {
            if (edificio.length === 0 || edificio.trim() == "" || edificio.length > 20) {
                alert('Insira um edificio válido com até 20 caracteres')
            }else {
                data.apt_andar = parseInt(data.apt_andar);
                data.apt_numero = parseInt(data.apt_numero);
                data.apt_quartos = parseInt(data.apt_quartos);
                data.mor_codigo = parseInt(data.mor_codigo);
                if (idApartamentos == 0) {
                    await urlapi.post('apartamentos', data);
                   alert('Salvo com sucesso')
                       
                } else {
                    // console.log("Alteração de Registro! ",idMoradores)
                    await urlapi.put('/apartamentos/' + idApartamentos, data)
                   alert('Salvo com sucesso')
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
            console.log(error)
        }
    }

    return (
        <div className="container">
            <section className="sectionTable" >

                <form className="mt-3" onSubmit={handleApartamento} >
                    <div  classname="mb-3">
                        <label className="form-label oculto"> Código </label>
                        <input type="text" className="form-control oculto"
                            name="apt_codigo"
                            value={codigo}
                            onChange={e => setCodigo(e.target.value)}
                        />
                    </div>
                    

                   
                    <div classname="my-3">
                        <label  className="form-label"> Edificio </label>
                        <input type="text" className="form-control"
                            name="apt_edificio"
                            value={edificio}
                            onChange={e => setEdificio(e.target.value)}
                        />
                    </div>

                    <div classname="mb-3">
                        <label  className="form-label"> Número </label>
                        <input type="number" min="0" step="1" className="form-control" name="apt_numero"
                            id="apt_numero"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                        />
                    </div>
                

                
                    <div classname="mb-3">
                        <label  className="form-label"> Andar </label>
                        <input type="number" min="0" step="1" className="form-control" name="apt_andar"
                            id="apt_andar"
                            value={andar}
                            onChange={e => setAndar(e.target.value)}
                        />
                    </div>
                

                
                    <div classname="mb-3">
                        <label  className="form-label"> Quartos </label>
                        <input type="number" min="0" step="1" className="form-control" name="apt_quartos"
                            id="apt_quartos"
                            value={quarto}
                            onChange={e => setQuarto(e.target.value)}
                        />
                    </div>
                
                    <div classname="mb-3">
                        <label  className="form-label"> Morador </label>
                        <select className="form-control"  value={morador} onChange={e => setMorador(e.target.value)} name="mor_codigo" id="mor_codigo">
                            {getSelect()}
                        </select>
                    </div>

                   
                    <button type="submit" className="btn btn-success mt-5">Salvar</button>
                    <Link to="/apartamentos" className="btn btn-primary separa-botao mt-5" >Voltar</Link>
                    
                
                </form>

            </section>

        </div>

    )
}
