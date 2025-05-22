import { Bars3Icon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div>
          <h1 className="text-xl font-bold text-primary ">
            <a
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Ramirez.
            </a>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button>
            <SunIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
