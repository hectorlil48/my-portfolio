import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-background dark:bg-background font-inter min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
