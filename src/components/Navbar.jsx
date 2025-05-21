const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="border border-sky-400">
          <h1>Ramirez.</h1>
        </div>
        <div className="border border-amber-300">
          <h1>Navbar</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
