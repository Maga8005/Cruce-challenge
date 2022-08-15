import React from "react";
import Control from "./SubComponents/Control";

function Envio(){
  return(
    <div>
      <div className="envio">
        <div className="control-izq">
        <Control />
        </div>
        <div className="envio-cards">
          <img id="envio-icon" src="/img/icon-tarjeta.svg" alt="icono tarjeta"/>
          <div>
            <p>12 y 18 cuotas</p>
            <p id="p-red">¡Sin interés!</p>
          </div>
        </div>
        <div className="linea"></div>
        <div className="envio-cards">
          <img id="envio-icon" src="/img/icon-carrito.svg" alt="icono tarjeta"/>
          <div>
            <p>12 y 18 cuotas</p>
            <p id="p-red">¡Sin interés!</p>
          </div>
        </div>
        <div className="linea"></div>
        <div className="envio-cards">
          <img id="envio-icon" src="/img/icon-moto.svg" alt="icono tarjeta"/>
          <div>
            <p>12 y 18 cuotas</p>
            <p id="p-red">¡Sin interés!</p>
          </div>
        </div>
        <div className="control-der">
        <Control />
        </div>
      </div>
    </div>

  );
}

export default Envio;
