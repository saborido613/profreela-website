import Home from "./Components/Home/home";
import Nav from "./Components/Nav/nav";
import SectionSobre from "./Components/Sections/SectionSobre/SectionSobre";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <SectionSobre id="sobre" title="O que é o ProFreela?" />
    </div>
  );
}

export default App;
