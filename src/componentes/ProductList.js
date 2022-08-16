import React from "react";
import data from "../data.json";
import Card from "./CardProduct";
import Destacado from "./SubComponents/Destacado";
import Boton2 from "./SubComponents/Boton2";

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
  // let {categoria} = data.categoria;
  return (
    <div>
      <div id="page-prod">
        
        <div className="lista-productos">
          {
            // (categoria === "juguete")&&
            Array.isArray(data) && data.map(card)
          }
        </div>
        <div className="desta-boton">
          <Destacado />
          <Boton2 />
        </div>
     
      </div>

    </div>
  );
}

export default ProductList;
