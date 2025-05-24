import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToggleLightDark from "./ToggleLightDark";
import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and has the largest intersection ratio (most visible)
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio descending
          visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          );
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px", // trigger when section middle is in viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds]);

  return activeId;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sections);

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled && !isOpen
          ? "bg-background/90 py-3 shadow-sm backdrop-blur-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <a
                href="#home"
                aria-current={activeSection === "home" ? "page" : undefined}
                title="Go to home section"
                className="focus-visible:ring-primary focus:outline-none focus-visible:ring-2"
              >
                Ramirez.
              </a>
            </h1>
          </div>

          {/* Mobile hamburger */}
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

          {/* Desktop menu */}
          <ul className="text-heading hidden items-center space-x-8 text-base font-medium md:flex">
            {sections.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`border-b-3 pb-1 transition-colors ${
                    activeSection === id
                      ? "border-primary"
                      : "hover:text-primary border-transparent"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <ToggleLightDark />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="bg-background text-heading animate-fade-in rounded-b-lg p-5 shadow-lg transition-colors duration-300 sm:p-6 md:hidden"
        >
          <ul className="space-y-5 text-base font-medium">
            {sections.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`block border-b-2 pb-1 transition-colors ${
                    activeSection === id
                      ? "border-primary"
                      : "hover:text-primary border-transparent"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
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
