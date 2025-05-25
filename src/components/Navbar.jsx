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
            <span className="text-primary text-2xl font-bold">
              <a
                href="#home"
                aria-current="page"
                title="Go to home section"
                className="focus-visible:ring-primary focus:outline-none focus-visible:ring-2"
              >
                Ramirez.
              </a>
            </span>
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
                aria-current={activeId === "about" ? "page" : undefined}
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                  activeId === "about"
                    ? "before:origin-left before:scale-x-100"
                    : "before:origin-right before:scale-x-0"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                aria-current={activeId === "skills" ? "page" : undefined}
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                  activeId === "skills"
                    ? "before:origin-left before:scale-x-100"
                    : "before:origin-right before:scale-x-0"
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-current={activeId === "projects" ? "page" : undefined}
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                  activeId === "projects"
                    ? "before:origin-left before:scale-x-100"
                    : "before:origin-right before:scale-x-0"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                aria-current={activeId === "experience" ? "page" : undefined}
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                  activeId === "experience"
                    ? "before:origin-left before:scale-x-100"
                    : "before:origin-right before:scale-x-0"
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-current={activeId === "contact" ? "page" : undefined}
                className={`text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                  activeId === "contact"
                    ? "before:origin-left before:scale-x-100"
                    : "before:origin-right before:scale-x-0"
                }`}
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
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
