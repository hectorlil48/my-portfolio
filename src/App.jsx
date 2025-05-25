import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

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
