import { useState } from "react";
import { MenuSource } from "./menuSection";
import { useLocation } from "react-router-dom";

export interface MenuProps {
  fonte: string;
}

export default function Menus({ isOpen }: { isOpen?: boolean }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };
  
  const {pathname} = useLocation();

  return (
    <>
      {MenuSource.map((item) => {
        const isActive = activeSection == item.source;
        const goTo = 
          (pathname.endsWith("privacidade") || pathname.endsWith("condicoes")) && item.source!="#contato"
          ? '/'
          : item.source;

        return (
          <a
            key={item.source}
            href={goTo}
            className={`
              ${isOpen && "block"}
              rounded-md
              px-3 py-2
              text-sm text-white hover:bg-purple-700
              ${isActive && "bg-purple-900"}
              font-medium   hover:text-gray-300

            `}
            onClick={() => handleMenuClick(item.source)}
          >
            {item.nome}
          </a>
        );
      })}
    </>
  );
}
