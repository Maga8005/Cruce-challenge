import React from "react";
import PropTypes from "prop-types";
import Boton1 from "./SubComponents/Boton1"

Card.propTypes = {
  nombre: PropTypes.string,
  imagen: PropTypes.string,
  descripcion: PropTypes.string,
  categoria: PropTypes.string,
  cuotas: PropTypes.number,
  interes: PropTypes.number,
  descuento: PropTypes.number,
};

function Card({
  nombre = "",
  imagen = "",
  descripcion = "",
  categoria = "",
  cuotas = "",
  interes = "",
  descuento = "",
}) {
  return (
    <div className="prodCard">
      <div className="img-prod">
        <img src={imagen} alt="prod" />
      </div>
      <p id="nombre"> {nombre} </p>
      <p className="descripcion"> {descripcion} </p>
      {/* <p className="categoria"> {categoria} </p> */}
      <p className="cuotas"> {cuotas} Cuotas/interés de</p>
      <h5 className="interes"> ${interes} </h5>
      {
        (descuento === 0 ? (
          <p>
            Final: <span id="precio-total">{[cuotas] * [interes]} </span>{" "}
          </p>
        ) : (
          <p>
            Final: <span id="precio-sinDesc">{[cuotas] * [interes]} </span>
            <span id="precio-final">
              {" "}
              {[cuotas] * [interes] -
                ([descuento] / 100) * ([cuotas] * [interes])}
            </span>
          </p>
        ))
      }
      <Boton1 />
    </div>
  );
}

export default Card;
