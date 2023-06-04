import React from 'react'
import AgregarCliente from '../pages/AgregarCliente';
import { useState } from 'react';
import "../style/ButtonEvents.css"

const BotonAgregarCliente = ({agregarCliente}) => {
    const [formularioVisible, setFormularioVisible] = useState(false);

  const HandleClick = () => {
    setFormularioVisible({
      formularioVisible: true
    });
  };
  const cerrarFormulario = () => {
    setFormularioVisible(false);
  };
  return (
    <>
      <button
        className="btn btn-outline-success me-2"
        type="button"
        onClick={() => HandleClick()}
      >
        Agregar cliente
      </button>
      {formularioVisible && (
            <div className="fondo-difuminado" onClick={cerrarFormulario}>
            <div className="formulario" onClick={(e) => e.stopPropagation()}>
              {<AgregarCliente crearClientes={agregarCliente} />}
            </div>
          </div>
          )}

    </>
  )
}

export default BotonAgregarCliente