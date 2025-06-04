import Intro from "./Intro";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-10 lg:px-8"
    >
      <Intro />
      <CodeCard />
    </section>
  );
};

export default Hero;
