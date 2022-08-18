import React from "react";
import data from "../data.json";
import Card from "./CardProduct";
import Control from "./SubComponents/Control";

const maletas = data.filter((elemento) => elemento.categoria === "maleta");

const card = function (cardData, index) {
  return (
    <Card
      key={cardData.nombre + index}
      nombre={cardData.nombre}
      imagen={cardData.imagen}
      descripcion={cardData.descripcion}
      categoria={cardData.categoria}
      cuotas={cardData.cuotas}
      interes={cardData.interes}
      descuento={cardData.descuento}
    />
  );
};

function Jansport() {
  return (
    <div className="jansport">
      <div className="jansport-img">
        <img id="img-1" src="/img/jansport.png" alt="jansport-principal" />
        <img id="img-2" src="/img/jansport2.png" alt="jansport-secundaria" />
      </div>
      <div className="jansport-card-control">
        <div className="jansport-card">
          {Array.isArray(maletas) && maletas.map(card)}
        </div>
        <div className="novedad-control">
          <p> 4 de 12</p>
          <div className="d-control">
            <div className="control-izq control-display1">
              <Control />
            </div>
            <div className="control-der control-display1">
              <Control />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jansport;
