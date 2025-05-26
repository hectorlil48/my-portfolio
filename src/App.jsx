import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

const App = () => {
  return (
    <div className="bg-background dark:bg-background font-inter min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
