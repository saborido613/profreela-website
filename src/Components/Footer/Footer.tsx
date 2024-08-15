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
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-nowrap">
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-6xl xl:text-9xl text-white font-bold">
              ProFreela
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Menus />
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href={Path.POLITICA_PRIVACIDADE}
              className="text-white text-sm font-medium"
            >
              Políticas de Privacidade
            </a>
            <a
              href={Path.TERMOS_E_CONDICOES}
              className="text-white text-sm font-medium"
            >
              Termos de Uso e Condições
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[5vh]">
        <p>
          © ProFreela Enterprise - since 2024 - until {new Date().getFullYear()}
        </p>
      </div>

      <CookiesConsent />
    </div>
  );
}
