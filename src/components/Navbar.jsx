import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToggleLightDark from "./ToggleLightDark";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent py-4 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <a
                href="/"
                className="focus-visible:ring-primary focus:outline-none focus-visible:ring-2"
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
              className="hover:text-primary focus-visible:ring-primary text-gray-400 focus:outline-none focus-visible:ring-2"
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
          className="bg-background text-heading animate-fade-in rounded-b-lg p-5 shadow-lg sm:p-6 md:hidden"
        >
          <ul className="space-y-5 text-base font-medium">
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
