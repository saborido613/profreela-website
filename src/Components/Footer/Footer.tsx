import CookiesConsent from "../CookiesConsent/CookiesConsent";
import Menus from "../Nav/Menus/Menus";

export interface FooterProps {
  id: string;
}

export default function Footer() {
  return (
    <div>
      <div
        className="bg-footer
        h-[60vh]
        md:h-[35vh]
        lg:h-[30vh]
        flex
        flex-col
        md:flex-row 
        gap-5
        md:gap-24 
        lg:gap-60"
      >
        <div className="flex items-center justify-center pt-5 lg:pt-0 md:pl-10 lg:pl-32">
          <h1 className="text-6xl lg:text-9xl text-white font-bold">
            ProFreela
          </h1>
        </div>

        <div className="flex flex-col items-center md:items-start md:pt-12">
          <Menus />
        </div>

        <div className="flex flex-col items-center md:items-start pt-12 gap-4">
          <a href="" className="text-white text-sm font-medium">
            Políticas de Privacidade
          </a>
          <a href="" className="text-white text-sm font-medium">
            Termos de Uso e Condições
          </a>
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
