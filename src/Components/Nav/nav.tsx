import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../Logo";
import Menus from "./Menus/Menus";

function Nav() {
  const elementRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* eslint-disable */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsVisible(entry.isIntersecting);

        if (!entry.isIntersecting) {
          console.log("passei: ", entry.isIntersecting);

          setIsOpen(isVisible);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);
  /* eslint-enable */

  return (
    <nav className="bg-purple-600 fixed w-full">
      <div className="container mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <Logo />
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/*  Mobile menu button */}
            <button
              ref={elementRef}
              onClick={toggleMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-purple-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Menus />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${!isOpen && "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Menus isOpen />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
