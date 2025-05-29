import { Menu, X } from "lucide-react";
import ToggleLightDark from "./ToggleLightDark";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useScrollSpy from "../../hooks/useScrollSpy";
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
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
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
                <X className="h-[26px] w-[26px] cursor-pointer" />
              ) : (
                <Menu className="h-[26px] w-[26px] cursor-pointer" />
              )}
            </button>
          </div>

          <DesktopMenu activeId={activeId} />
        </div>
      </div>

      {isOpen && (
        <MobileMenu activeId={activeId} onClose={() => setIsOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
