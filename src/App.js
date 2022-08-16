// import logo from "./logo.svg";
import "./App.css";
import Menu from "./componentes/Menu"
import Envio from "./componentes/Envio";
import ProductList from "./componentes/ProductList";
import WhatsApp from "./componentes/SubComponents/WhatsApp";
import Marcas from "./componentes/Marcas";
import JugueteDia from "./componentes/JugueteDia";
import MasBuscado from "./componentes/MasBuscado";

// import data from './data.json';


function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Envio />
      </header>
      <ProductList />
      <WhatsApp />
      <Marcas />
      <JugueteDia />
      <MasBuscado />
    </div>
  );
}

export default App;
