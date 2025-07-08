import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skill/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey/Journey";
import Contact from "./components/sections/Skill/Contact/Contact";

const App = () => {
  return (
    <div className="font-inter bg-background dark:bg-background min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-[90px] lg:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
};

export default App;
