import React from "react";
import data from "../data.json";
import Card from "./CardProduct";
import Destacado from "./SubComponents/Destacado";
import Boton2 from "./SubComponents/Boton2";
import { useMediaQuery } from "react-responsive";

const cardData = data.filter((element) => element.categoria === "juguete");
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

function ProductList() {
  const Screen = useMediaQuery({ query: "(min-width: 768px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div>
      {Screen && (
        
        <div id="page-prod">
          <div className="lista-productos">
            {Array.isArray(cardData) && cardData.map(card)}
          </div>
          <div className="desta-boton">
            <Destacado />
            <Boton2 />
          </div>
        </div>
      )}
      {Tablet && (
        <div id="page-prod">
          <Destacado />
          <div className="lista-productos">
            {Array.isArray(cardData) && cardData.map(card)}
          </div>
          <div className="desta-boton">
            <Boton2 />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
