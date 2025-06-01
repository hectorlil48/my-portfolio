import Intro from "./Intro";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between gap-10 px-8 py-24 lg:flex-row"
    >
      <Intro />
      <CodeCard />
    </section>
  );
};

export default Hero;
