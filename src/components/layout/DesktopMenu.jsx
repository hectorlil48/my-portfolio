import MenuLinks from "../common/MenuLinks";
import ToggleLightDark from "./ToggleLightDark";
import { toast } from "sonner";

const DesktopMenu = ({ activeId }) => {
  const handleDownload = () => {
    toast.success("Resume download started!");
  };

  return (
    <ul className="text-heading hidden items-center space-x-8 text-base font-medium 2xl:flex">
      <MenuLinks activeId={activeId} />

      <li>
        <a
          href="./Resume2.0.pdf"
          download
          onClick={handleDownload}
          aria-label="Download resume"
          className="bg-primary text-main-btn rounded-lg px-3 py-[8px] text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          Resume
        </a>
      </li>

      <li>
        <ToggleLightDark />
      </li>
    </ul>
  );
};

export default DesktopMenu;
