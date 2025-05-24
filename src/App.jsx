import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-background dark:bg-background font-inter min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
