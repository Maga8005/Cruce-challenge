// import logo from "./logo.svg";
import "./App.css";
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

// import data from './data.json';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Envio />
      </header>
      <body>
        <ProductList />
        <WhatsApp />
        <Marcas />
        <JugueteDia />
        <MasBuscado />
        <Novedades />
        <Jansport />
        <Termina />
        <Recomendados />
      </body>
    </div>
  );
}

export default App;
