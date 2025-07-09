// components/MobileMenu.js
import MenuLinks from "../common/MenuLinks";

const MobileMenu = ({ activeId, onClose }) => (
  <div
    id="mobile-menu"
    className="bg-background text-heading animate-fade-in rounded-b-lg p-5 shadow-lg transition-colors duration-300 sm:p-6 2xl:hidden"
  >
    <ul className="space-y-5 text-base font-medium">
      <MenuLinks activeId={activeId} onLinkClick={onClose} isMobile />

      <li>
        <a
          href="public/Resume 2.0.pdf"
          download
          aria-label="Download resume"
          className="bg-primary text-main-btn ml-[-6px] rounded-lg px-3 py-[8px] text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          Resume
        </a>
      </li>
    </ul>
  </div>
);

export default MobileMenu;
