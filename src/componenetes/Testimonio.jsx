import React from "react";

export function Testimonio() {
  return (
    <div className="contenedor__testimonio">

      <img
        className="contenedor__testimonio__img"
        src={require("../imagenes/foto1.jpg")}
        alt="Foto de Luis"
      />

      <div className="contenedor__testimonio__textos">
        <p className="contenedor__testimonio__textos__nombre">Jose Luis</p>
        <p className="contenedor__testimonio__textos__cargo">Front-end developer</p>
        <p className="contenedor__testimonio__textos__testimonio">"He trabajado con esta empresa y mola un huevo y parte del otro. He trabajado con esta empresa y mola un huevo y parte del otro."</p>
      </div>

    </div>
  );
}


