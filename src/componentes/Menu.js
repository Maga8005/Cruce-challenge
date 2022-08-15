import React from "react";
import { useMediaQuery } from "react-responsive";

function Menu() {
  const Screen = useMediaQuery({ query: "(min-width: 768px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 767px)" });
  // const Mobile = useMediaQuery({ query: '(max-width: 361px)' })

  return (
    <nav>
      <div className="navMenu">
        <div className="navMenu2">
          <a href="/">
            <img
              id="hamburger-icon"
              src="img/Hamburguer_menu.svg"
              alt="menu-icon"
            />
          </a>

          {Tablet && (
            <a href="/">
              <img id="cruce-logo" src="img/Cruce-logo.svg" alt="Logo-Cruce" />
            </a>
          )}

          {Screen && (
            <ul className="navMenu menu1">
              <a href="/categorias">
                <li id="highlight">Categorias</li>
              </a>
              <a href="/#">
                <li>LOL</li>
              </a>
              <a href="/#">
                <li>CryBabies</li>
              </a>
              <a href="/#">
                <li>Funko</li>
              </a>
              <span className="dot" id="position1"></span>
              <span className="dot" id="position2"></span>
              <span className="dot" id="position3"></span>
              <span className="dot" id="position4"></span>
              <a href="/#">
                <li id="hotSale">Hot sale</li>
              </a>
            </ul>
          )}
        </div>

        <ul className="navMenu menu2">
          {Screen && (
            <a href="/#">
              <li>
                <img
                  id="lupa"
                  className="icon-menu"
                  src="img/lupa.svg"
                  alt="lupa"
                />
              </li>
            </a>
          )}
          {Screen && (
            <a href="/#">
              <li>
                <img
                  id="usuario"
                  className="icon-menu"
                  src="img/usuario.svg"
                  alt="usuario"
                />
              </li>
            </a>
          )}
          <a href="/#"><li id="carrito">
            <img className="icon-menu" src="img/carrito.svg" alt="carrito" />3
          </li></a>
        </ul>
      </div>
      <div id="highligth-morado">
        {Tablet && (
          <p>Mantené pulsado cualquier artículo para agregarlo al carrito.</p>
        )}
        {Screen && <p>Sólo por hoy: envío gratis en todos los productos</p>}
        <img src="img/equis.svg" alt="menu-icon-equis" />
      </div>
      {Tablet && (
        <div id="buscador">
          <img src="img/lupa.svg" alt="lupa-icon" />
          <p>¿Qué estás buscando?</p>
        </div>
      )}
    </nav>
  );
}

export default Menu;
