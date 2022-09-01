// import logo from "./logo.svg";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import Menu from "./componentes/Menu";
import Envio from "./componentes/Envio";
import ProductList from "./componentes/ProductList";
import WhatsApp from "./componentes/SubComponents/WhatsApp";
import Marcas from "./componentes/Marcas";
import JugueteDia from "./componentes/JugueteDia";
import MasBuscado from "./componentes/MasBuscado";
import Novedades from "./componentes/Novedades";
import Jansport from "./componentes/Jansport";
import Termina from "./componentes/Termina";
import Recomendados from "./componentes/Recomendamos";
import Footer from "./componentes/Footer";

// import data from './data.json';

function App() {
  const Screen = useMediaQuery({ query: "(min-width: 768px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      {Screen && (
        <body>
          <Envio />
          <ProductList />
          <WhatsApp />
          <Marcas />
          <JugueteDia />
          <MasBuscado />
          <Novedades />
          <Jansport />
          <Termina />
          <Recomendados />
          <Footer />
        </body>
      )}
      {Tablet && (
        <body>
          <ProductList />
          <WhatsApp />
          <Marcas />
          <Envio />
          <JugueteDia />
          <MasBuscado />
          <Novedades />
          <Jansport />
          <Termina />
          <Recomendados />
          <Footer />
          
        </body>
      )}
    </div>
  );
}

export default App;
