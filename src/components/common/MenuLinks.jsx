// components/MenuLinks.js
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "My Journey" },
  { href: "#contact", label: "Contact" },
];

const MenuLinks = ({ activeId, onLinkClick = () => {}, isMobile = false }) => {
  return (
    <>
      {links.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            onClick={onLinkClick}
            aria-current={activeId === href.slice(1) ? "page" : undefined}
            className={`${
              isMobile
                ? "hover:text-primary focus-visible:ring-primary transition-colors focus:outline-none focus-visible:ring-2"
                : `text-heading before:bg-primary relative px-1 py-1 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
                    activeId === href.slice(1)
                      ? "before:origin-left before:scale-x-100"
                      : "before:origin-right before:scale-x-0"
                  }`
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </>
  );
};

export default MenuLinks;
