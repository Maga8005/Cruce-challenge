// import logo from "./logo.svg";
import "./App.css";
import Menu from "./componentes/Menu"
import Envio from "./componentes/Envio";
import ProductList from "./componentes/ProductList";

// import data from './data.json';


function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Envio />
      </header>
      <ProductList />
    </div>
  );
}

export default App;
