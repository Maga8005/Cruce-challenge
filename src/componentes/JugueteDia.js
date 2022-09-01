import React from "react";
import Card from "./CardProduct";
import data from "../data.json";
import { useMediaQuery } from "react-responsive";

const cardDestacado = data.find((element) => element.destacado === 1);

function JugueteDia() {
  const Screen = useMediaQuery({ query: "(min-width: 768px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="juguete-dia">
      <p id="juguete-titulo">Juguete del día</p>
      {Screen && (
        <div id="card-video">
          <div id="card-juguete">
            {
              <Card
                key={cardDestacado.nombre + 1}
                nombre={cardDestacado.nombre}
                imagen={cardDestacado.imagen}
                descripcion={cardDestacado.descripcion}
                categoria={cardDestacado.categoria}
                cuotas={cardDestacado.cuotas}
                interes={cardDestacado.interes}
                descuento={cardDestacado.descuento}
              />
            }
          </div>
          <img id="img-video" src="/img/miniatura.png" alt="img-video" />
        </div>
      )}

      {Tablet && (
        <div id="card-video">
           <img id="img-video" src="/img/miniatura.png" alt="img-video" />
          <div id="card-juguete">
            {
              <Card
                key={cardDestacado.nombre + 1}
                nombre={cardDestacado.nombre}
                imagen={cardDestacado.imagen}
                descripcion={cardDestacado.descripcion}
                categoria={cardDestacado.categoria}
                cuotas={cardDestacado.cuotas}
                interes={cardDestacado.interes}
                descuento={cardDestacado.descuento}
              />
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default JugueteDia;
