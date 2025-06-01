import TypewriterTitle from "./TypewriterTitle";
import CTAButtons from "./CTAButtons";

const Intro = () => {
  return (
    <header className="flex max-w-xl flex-col space-y-6 text-center lg:text-left">
      <span className="text-primary text-sm font-medium transition-[font-size] duration-300 md:text-base">
        Hello, I'm
      </span>
      <h1 className="text-heading text-4xl font-bold transition-[font-size] duration-300 md:text-5xl lg:text-6xl">
        Hector <span className="text-primary">Ramirez</span>
      </h1>

      <TypewriterTitle />

      <p className="text-foreground">
        I build responsive, full-stack web apps with React, Node.js, and Django.
        Focused on clean code, modern UI, and solving real problems.
      </p>

      <CTAButtons />
    </header>
  );
};

export default Intro;
