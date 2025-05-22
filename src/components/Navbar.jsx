const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div>
          <h1 className="text-xl font-bold text-primary">
            <a href="/">Ramirez.</a>
          </h1>
        </div>
        <div className="border border-amber-300">
          <h1>Navbar</h1>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
