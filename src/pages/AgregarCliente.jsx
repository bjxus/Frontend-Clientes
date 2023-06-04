import React, { useState } from 'react'
import "../style/AddClients.css"

const AgregarCliente = ({crearClientes}) => {
    
    const [clientes, setClientes] = useState({
        idCliente: "",
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
    });

    const [error, setError] = useState(false);

    const actualizarEstado = (e) =>{
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        });
    };

    const {idCliente, nombre, direccion, telefono, email} = clientes;

    const submitCliente = (e) => {
        e.preventDefault();

        if (
            idCliente.trim() === "" ||
            nombre.trim() === "" ||
            direccion.trim() === "" ||
            email.trim() === ""
        ) {
            setError(true);
            return
        }

        setError(false);

        crearClientes(clientes);

        setClientes({
            idCliente: "",
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        });
    };
  return (
    <form onSubmit={submitCliente}>
        <div>
            <label>
                Cedula
            </label>
            <input 
            type="text"
            name="idCliente"
            value={idCliente}
            onChange={actualizarEstado}
            required
            />

            <br />

            <label>
                Nombre
            </label>
            <input 
            type='text'
            name='nombre'
            value={nombre}
            onChange={actualizarEstado}
            required
            />

            <br />

            <label>
                Dirección
            </label>
            <input
            type='text'
            name="direccion"
            value={direccion}
            onChange={actualizarEstado}
            required
            />

           <br />

           <label>
                Telefono
            </label> 
            <input 
            type='number'
            name='telefono'
            value={telefono}
            onChange={actualizarEstado}
            />

            <br />

            <label>
                Email
            </label>
            <input
            type='email'
            name='email'
            value={email}
            onChange={actualizarEstado}
            required
            />

            <br /> 
        </div>

        <button type="submit" className="btn btn-outline-success">
            CREAR 
        </button>
    </form>
  )
}

export default AgregarCliente;