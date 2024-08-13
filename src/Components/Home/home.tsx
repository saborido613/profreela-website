import Footer from "../Footer/Footer";
import Nav from "../Nav/nav";
import SectionCadastro from "../Sections/SectionCadastro/SectionCadastro";
import SectionDispositivos from "../Sections/SectionDispositivos/SectionDispositivos";
import SectionFuncionalidades from "../Sections/SectionFuncionalidades/SectionFuncionalidades";
import SectionSobre from "../Sections/SectionSobre/SectionSobre";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <SectionSobre id="sobre" title="O que é o ProFreela?" />
      <SectionFuncionalidades id="funcionalidades" title="Funcionalidades"/>
      <SectionDispositivos id="dispositivos" title="Dispositivos"/>
      <SectionCadastro id="pre-cadastro"/>
      <Footer/>
    </div>
  );
}

export default Home;

function Header() {
  return (
    <div className="flex h-[85vh] bg-profreela_backgroundImage bg-contain bg-no-repeat bg-center text-white">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <p className="text-7xl lg:text-9xl font-bold">ProFreela</p>
        <hr className="bg-white h-1 w-[35vh] lg:w-[60vh]" />
        <p className="text-sm lg:text-xl">
          Um app feito de freela para freelas
        </p>
      </div>
    </div>
  );
}

export {Header};
