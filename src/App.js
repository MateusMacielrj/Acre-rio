import Cabecalho from "./componentes/cabecalho/Cabecalho.jsx";
import Botoes from "./componentes/botoes/Botoes.jsx";


import "./componentes/cabecalho/Cabecalho.css"
import "./componentes/botoes/Botoes.css"
import "../src/Geral.css"


function App() {
  return (
    <div className="App">
     <Cabecalho/>
     <Botoes/>
    </div>
  );
}

export default App;