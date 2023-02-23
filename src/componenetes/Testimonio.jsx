import React from "react";
import '../hojas_estilos/Testimonio.css';


export function Testimonio(props) {
  return (
    <div className="contenedor__testimonio">

      <img
        className="contenedor__testimonio__img"
        src={require("../imagenes/foto1.jpg")}
        alt="Foto de Luis"
      />

      <div className="contenedor__testimonio__textos">
        <p className="contenedor__testimonio__textos__nombre">{props.nombre}</p>
        <p className="contenedor__testimonio__textos__cargo">{props.cargo}</p>
        <p className="contenedor__testimonio__textos__testimonio">"{props.testimonio}"</p>
      </div>

    </div>
  );
}


