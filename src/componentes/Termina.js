import React from "react";
import Tiempo from "./SubComponents/Tiempo"


function Termina() {
  return (
    <div className="buscado">
      <div className="cont-tit-buscado contador">
        <p className="tit-termina">Termina en:</p>
        <Tiempo
        contadorstampMs = {1659983662000} />
      </div>
      <div className="card-buscado">
        <img src="/img/dino.png" alt="dino" />
        <div>
          <p>Dinosaurio robot para armar</p>
          <p className="precio-sinDesc">$1.500</p>
          <p className="precio-final">$1.350</p>
        </div>
      </div>

      <div className="card-buscado">
        <img src="/img/mochila.png" alt="mochila" />
        <div>
          <p>Mochila de ToyStory</p>
          <p className="precio-total">$2.580</p>
        </div>
      </div>

      <div className="card-buscado">
        <img src="/img/dino.png" alt="dino" />
        <div>
          <p>Dinosaurio robot para armar</p>
          <p className="precio-sinDesc">$1.500</p>
          <p className="precio-final">$1.350</p>
        </div>
      </div>

      <div className="card-buscado">
        <img src="/img/mochila.png" alt="mochila" />
        <div>
          <p>Mochila de ToyStory</p>
          <p className="precio-total">$2.580</p>
        </div>
      </div>

      <div className="card-buscado">
        <img src="/img/dino.png" alt="dino" />
        <div>
          <p>Dinosaurio robot para armar</p>
          <p className="precio-sinDesc">$1.500</p>
          <p className="precio-final">$1.350</p>
        </div>
      </div>

    </div>
  );
}

export default Termina;
