import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Envio() {
  const slideleft = () => {
    let slider = document.getElementById('slider2')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideright = () => {
    let slider = document.getElementById('slider2')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div>
      <div className="envio">
        <div className="control control-display">
          <FaChevronLeft onClick={slideleft} />
        </div>
        <div id="slider2" className='scrollbar-hide envio'>
          <div className="envio-cards">
            <img
              id="envio-icon"
              src="/img/icon-tarjeta.svg"
              alt="icono tarjeta"
            />
            <div>
              <p>12 y 18 cuotas</p>
              <p id="p-red">¡Sin interés!</p>
            </div>
          </div>
          <div className="linea"></div>
          <div className="envio-cards">
            <img
              id="envio-icon"
              src="/img/icon-carrito.svg"
              alt="icono tarjeta"
            />
            <div>
              <p>12 y 18 cuotas</p>
              <p id="p-red">¡Sin interés!</p>
            </div>
          </div>
          <div className="linea"></div>
          <div className="envio-cards">
            <img id="envio-icon" src="/img/icon-moto.svg" alt="icono tarjeta" />
            <div>
              <p>12 y 18 cuotas</p>
              <p id="p-red">¡Sin interés!</p>
            </div>
          </div>
        </div>
        <div className="control control-display">
          <FaChevronRight onClick={slideright} />
        </div>
      </div>
    </div>
  );
}

export default Envio;
