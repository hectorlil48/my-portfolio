import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-gray-400 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-[26px] w-[26px] cursor-pointer" />
              ) : (
                <Bars3Icon className="h-7 w-7 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="bg-background text-heading p-5 sm:p-6 md:hidden shadow-lg rounded-b-lg animate-fade-in"
        >
          <ul className="space-y-5 font-medium text-base">
            <li>
              <a href="" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
