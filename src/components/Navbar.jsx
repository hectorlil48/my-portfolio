import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToggleLightDark from "./ToggleLightDark";
import useScrollSpy from "../hooks/useScrollSpy";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];
  const activeId = useScrollSpy(sectionIds);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 0;
          setScrolled((prev) => {
            if (prev !== isScrolled) return isScrolled;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Add this effect for Escape key when the menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled && !isOpen ? "bg-background/90 py-3 shadow-sm backdrop-blur-sm" : "bg-transparent py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <a
                href="#home"
                aria-current="page"
                title="Go to home section"
                className="focus-visible:ring-primary focus:outline-none focus-visible:ring-2"
              >
                Ramirez.
              </a>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 md:hidden">
            <ToggleLightDark />
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="hover:text-primary focus-visible:ring-primary dark:text-heading text-gray-400 focus:outline-none focus-visible:ring-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-[26px] w-[26px] cursor-pointer" />
              ) : (
                <Bars3Icon className="h-[26px] w-[26px] cursor-pointer" />
              )}
            </button>
          </div>

          <ul className="text-heading hidden items-center space-x-8 text-base font-medium md:flex">
            <li>
              <a
                href="#about"
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full ${activeId === "about" ? "before:w-full" : ""} `}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full ${activeId === "skills" ? "before:w-full" : ""} `}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full ${activeId === "projects" ? "before:w-full" : ""} `}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full ${activeId === "experience" ? "before:w-full" : ""} `}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full ${activeId === "contact" ? "before:w-full" : ""} `}
              >
                Contact
              </a>
            </li>
            <li>
              <ToggleLightDark />
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="bg-background text-heading animate-fade-in rounded-b-lg p-5 shadow-lg transition-colors duration-300 sm:p-6 md:hidden"
        >
          <ul className="space-y-5 text-base font-medium">
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => setIsOpen(false)}
                className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => setIsOpen(false)}
                className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => setIsOpen(false)}
                className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={() => setIsOpen(false)}
                className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
              >
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
