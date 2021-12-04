import React from "react"
import './MoradoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link } from "react-router-dom";

export default function MoradoresEditar() {

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');


    //    const [nomePag, setNomePag] = useState(false);

    const { idMoradores } = useParams();
    console.log(useParams())

    useEffect(() => {
        async function getMoradores() {
            if (idMoradores == 0) {

            } else {
                //                try {
                const { data } = await urlapi.get('/moradores/' + idMoradores);

                setCodigo(data[0].mor_codigo);
                setNome(data[0].mor_nome);
                setApelido(data[0].mor_apelido);
                setCelular(data[0].mor_celular);
                setCpf(data[0].mor_cpf);



            }
        }
        getMoradores();
    }, []);




    async function handleMoradores(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data);

        try {
            if (nome.length === 0 || nome.trim() === "" || nome.length > 30) {
                alert('Insira um nome válido com até 30 caracteres')
            } else {
                console.log('entrei')
                if (idMoradores == 0) {
                    console.log('entrei post')

                    await urlapi.post('moradores', data)

                } else {
                    // console.log("Alteração de Registro! ",idMoradores)
                    console.log('entrei put')

                    await urlapi.put('/moradores/' + idMoradores, data)

                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')

        }
    }

    return (
        <div className="container">
            <section className="sectionTable" >

                <form  className="mt-3" onSubmit={handleMoradores} >
                    
                    <div classname="mb-3">
                        <label> Código </label>
                        <input type="text" className="form-control"
                            name="mor_codigo"
                            value={codigo}
                            onChange={e => setCodigo(e.target.value)}
                        />
                    </div>
                   
                    <div classname="mb-3">
                        <label> Nome do Morador </label>
                        <input type="text" className="form-control"
                            name="mor_nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    

                   
                    <div classname="mb-3">
                        <label> Apelido </label>
                        <input type="text" className="form-control" name="mor_apelido"
                            id="mor_apelido"
                            value={apelido}
                            onChange={e => setApelido(e.target.value)}
                        />
                    </div>
                
                
                    <div classname="mb-3">
                        <label> Celular </label>
                        <input type="text" className="form-control" name="mor_celular"
                            id="mor_celular"
                            value={celular}
                            onChange={e => setCelular(e.target.value)}
                        />
                    </div>
                

                
                    <div classname="mb-3">
                        <label> CPF </label>
                        <input type="text" className="form-control" name="mor_cpf"
                            id="mor_cpf"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    

                    <button type="submit" className="btn btn-success mt-5">Salvar</button>
                    <Link to="/moradores" className="btn btn-primary separa-botao mt-5" >Voltar</Link>
                </form >

            </section >

        </div >

    )
}
