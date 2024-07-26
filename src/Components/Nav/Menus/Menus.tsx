import { useState } from "react";

import { Path } from "./paths";

export default function Menus({ isOpen }: { isOpen?: boolean }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      {Path.map((item) => {
        const isActive = activeSection == item.section;

        return (
          <a
            key={item.section}
            href={`#${item.section}`}
            className={`
              ${isOpen && "block"}
              rounded-md
              px-3 py-2
              text-sm text-white hover:bg-purple-700
              ${isActive && "bg-purple-900"}
              font-medium   hover:text-gray-300

            `}
            onClick={() => handleMenuClick(item.section)}
          >
            {item.nome}
          </a>
        );
      })}
    </>
  );
}
