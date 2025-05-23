import { Bars3Icon } from "@heroicons/react/24/outline";
import ToggleLightDark from "./ToggleLightDark";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div>
            <h1 className="text-2xl font-bold text-primary ">
              <a
                href="/"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Ramirez.
              </a>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            <ToggleLightDark />
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="h-110 bg-amber-600 md:hidden shadow-lg rounded-b-lg mt-1 "></div>
      )}
    </nav>
  );
};

export default Navbar;
