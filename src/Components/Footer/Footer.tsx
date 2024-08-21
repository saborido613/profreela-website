import { Link } from "react-router-dom";
import Path from "../../Routes/paths";
import CookiesConsent from "../CookiesConsent/CookiesConsent";
import Menus from "../Nav/Menus/Menus";

export interface FooterProps {
  id: string;
}

export default function Footer({ id }: FooterProps) {
  return (
    <div id={id}>
      <div
        className="bg-footer
        h-auto
        py-10
        "
      >
        <div className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between text-nowrap text-center md:text-start">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl lg:text-4xl xl:text-7xl text-white font-bold">
              WayFreela
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Menus />
          </div>

          <div className="flex flex-col text-md items-center md:items-start gap-4">
            <Link
              to={Path.POLITICA_PRIVACIDADE}
              className="text-white font-medium"
            >
              Políticas de Privacidade
            </Link>
            <Link
              to={Path.TERMOS_E_CONDICOES}
              className="text-white font-medium"
            >
              Termos de Uso e Condições
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[5vh]">
        <p>
          © WayFreela Enterprise - since 2024 - until {new Date().getFullYear()}
        </p>
      </div>

      <CookiesConsent />
    </div>
  );
}
