import React from "react";
import {FaChevronLeft } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";

function Marcas() {
  const slideleft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideright = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="marcas-seccion">
      <h4>Nuestras marcas</h4>
      <div>
        <div className="logo-marcas">
          <div className="control-marcas">
            <div className="control control-display1">
              <FaChevronLeft onClick={slideleft} />
            </div>
            <div className="control control-display1">
              <FaChevronRight onClick={slideright} />
            </div>
          </div>
          <ul id="slider" className='scrollbar-hide'>
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
