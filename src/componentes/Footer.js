import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <button className="btn-footer">
          <img src="/img/volver.png" alt="boton_volver" />
        </button>
      </div>
      <div className="footer-col">
        <ul>
          <li className="redes">
            <img src="/img/instagram.svg" alt="instagram-logo" />
            <p>INSTAGRAM</p>
          </li>
          <li className="redes">
            <img src="/img/youtube.svg" alt="youtube-logo" />
            <p>YOUTUBE</p>
          </li>
          <li className="redes">
            <img src="/img/facebook.svg" alt="facebook-logo" />
            <p>FACEBOOK</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>PREGUNTAS FREC.</p>
          </li>
          <li>
            <p>TERM &#38; COND</p>
          </li>
          <li>
            <p>MIS PEDIDOS</p>
          </li>
        </ul>
        <ul id="ofertas">
          <li id="oferta-footer">
            <p>BUSCAS OFERTAS?</p>
          </li>
          <li>
            <form>
              <input id="input-footer" type="email" value="Ingresa tu eMail" />
            </form>
          </li>
          <li>
            <button id="boton-footer"><p id="p-footer-enviar">ENVIAR</p></button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
