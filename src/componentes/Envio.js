import React from "react";
import ControlDer from "./SubComponents/ControlDer";
import ControlIzq from "./SubComponents/ControlIzq";

function Envio(){
  return(
    <div>
      <div className="envio">
        <div className="pos-izq control-display">
        <ControlIzq />
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
        <div className="pos-der control-display">
        <ControlDer />
        </div>
      </div>
    </div>

  );
}

export default Envio;
