// components/DesktopMenu.js
import MenuLinks from "../common/MenuLinks";
import ToggleLightDark from "./ToggleLightDark";

const DesktopMenu = ({ activeId }) => (
  <ul className="text-heading hidden items-center space-x-8 text-base font-medium md:flex">
    <MenuLinks activeId={activeId} />
    <li>
      <ToggleLightDark />
    </li>
  </ul>
);

export default DesktopMenu;
