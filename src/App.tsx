import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/home";
import Nav from "./Components/Nav/nav";
import SectionCadastro from "./Components/Sections/SectionCadastro/SectionCadastro";
import SectionDispositivos from "./Components/Sections/SectionDispositivos/SectionDispositivos";
import SectionFuncionalidades from "./Components/Sections/SectionFuncionalidades/SectionFuncionalidades";
import SectionSobre from "./Components/Sections/SectionSobre/SectionSobre";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <SectionSobre id="sobre" title="O que é o ProFreela?" />
      <SectionFuncionalidades id="funcionalidades" title="Funcionalidades"/>
      <SectionDispositivos id="dispositivos" title="Dispositivos"/>
      <SectionCadastro id="pre-cadastro"/>
      <Footer/>
    </div>
  );
}

export default App;
