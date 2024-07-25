import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../Logo";
import Menus from "./Menus/Menus";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-900 w-full">
      <div className="flex mx-auto py-2 justify-between items-center relative">
        <div className="container flex justify-between mx-auto">
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        <div
          className="
            hidden
            md:flex
            gap-5  
            text-2xl
            justify-center
            items-center"
        >
          <Logo />
          <Menus />
        </div>
        {isOpen && (
          // <div className="absolute top-16 flex flex-col items-end p-2 pt-0 md:hidden ">
          <div
            className={`md:hidden lg:flex lg:flex-row flex-col lg:gap-7 lg:items-center lg:text-white lg:font-bold lg:text-xl lg:bg-transparent lg:p-0`}
          >
            <Menus />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
