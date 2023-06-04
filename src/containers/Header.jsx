import React, { useState } from 'react'
import BotonAgregarCliente from '../components/BotonAgregarCliente';
import { Table,Button } from "reactstrap";
import EditarCliente from '../components/EditarCliente';

const Header = () => {

    const [ clientes,setClientes] = useState([]);

    const [formulario, setFormulario] = useState([]);

    const [editarForm,setEditarForm] = useState(false);
    const [cerrarFormulario, setCerrarForm] = useState(false); 
   

    const agregarCliente = (cliente) =>{
        setClientes([
            ...clientes,
            cliente
        ]);
    };

    const cerrarModalActualizar = () =>{
        setEditarForm(false);
    }

    const seleccionarElemento = (elemento) => {
        setFormulario({
            idCliente: elemento.idCliente,
            nombre: elemento.nombre,
            direccion: elemento.direccion,
            telefono: elemento.telefono,
            email: elemento.email,        
        });
            setEditarForm(true);
    };
    const eliminarCliente = (id) => {
        const nuevosClientes = clientes.filter((cliente) => cliente.idCliente !== id);
        setClientes(nuevosClientes);
    };

    const titulos = clientes.length === 0 ? 'No hay clientes registrados' : '';

  return (
    <>
        
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Usuarios</a>
          <nav className="navbar bg-body-tertiary">
            <div>

              <BotonAgregarCliente agregarCliente={agregarCliente} />
              
            </div>
          </nav>
        </div>
      </nav>

      <hr />
      

     
    <div className="grilla">
      
    <Table> 
        <thead>
          <tr>
            <th data-titulo="idCliente">Cedula</th>
            <th data-titulo="nombre">Nombre</th>
            <th data-titulo="direccion">Dirección</th>
            <th data-titulo="telefono">Telefono</th>
            <th data-titulo="email">Email</th>
          </tr>

        </thead>
        <tbody>
        
          {clientes.map((elemento) =>(
            
    <tr key={elemento.idCliente}>
            <td>{elemento.idCliente}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.direccion}</td>
            <td>{elemento.telefono}</td>
            <td>{elemento.email}</td>

            <td> <Button color="primary" onClick={() => seleccionarElemento(elemento)}>Editar</Button>
           
            <Button color="danger" onClick={() => eliminarCliente(elemento.idCliente)}>Eliminar</Button></td>
    </tr>))}


        </tbody>
        
</Table>
</div>
<EditarCliente modalActualizar={editarForm} cerrarModalActualizar={cerrarModalActualizar} form={formulario} editar={editarForm} />

    
    
      </>
  )
}

export default Header