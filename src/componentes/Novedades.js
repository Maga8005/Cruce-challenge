import React from "react";
import data from "../data.json";
import Card from "./CardProduct";
import {FaChevronLeft } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";

const novedades = data.filter((element) => element.novedad === 1);

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

function Novedades() {
  return (
    <div>
      <div className="novedades">
        <div className="nov-tit">
          <p>
            Novedades <span>VER TODO</span>
          </p>
        </div>
        <div className="novedad-productos">
          {Array.isArray(novedades) && novedades.map(card)}
        </div>
      </div>
      <div className="novedad-control">
        <div className="d-control">
          <div className="control">
            <FaChevronLeft />
          </div>
          <div className="control">
            <FaChevronRight />
          </div>
        </div>
        <p> 4 de 12</p>
      </div>
    </div>
  );
}

export default Novedades;
