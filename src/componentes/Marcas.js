import React from "react";
import Control from "./SubComponents/Control";

function Marcas() {
  return (
    <div className="marcas-seccion">
      <h4>Nuestras marcas</h4>
      <div>
        <div className="logo-marcas">
          <div className="control-marcas">
            <div className="control-izq control-display1">
              <Control />
            </div>
            <div className="control-der control-display1">
              <Control />
            </div>
          </div>
          <ul>
            <li>
              <img src="/img/disney.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/logo_funko.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/logo_LOL.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/marvel.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/disney.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/logo_funko.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/logo_LOL.svg" alt="icon-disney" />
            </li>
            <li>
              <img src="/img/marvel.svg" alt="icon-disney" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Marcas;
