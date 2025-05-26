// components/MobileMenu.js
import MenuLinks from "../common/MenuLinks";

const MobileMenu = ({ activeId, onClose }) => (
  <div
    id="mobile-menu"
    className="bg-background text-heading animate-fade-in rounded-b-lg p-5 shadow-lg transition-colors duration-300 sm:p-6 md:hidden"
  >
    <ul className="space-y-5 text-base font-medium">
      <MenuLinks activeId={activeId} onLinkClick={onClose} isMobile />
    </ul>
  </div>
);

export default MobileMenu;
