import TypewriterTitle from "./TypewriterTitle";
import CTAButtons from "./CTAButtons";

const Intro = () => {
  return (
    <header className="mx-auto flex max-w-xl flex-col space-y-6 text-center lg:text-left">
      <span className="text-primary text-sm font-medium md:text-base">
        Hello, I'm
      </span>

      <h1 className="text-heading text-4xl font-bold md:text-5xl lg:text-6xl">
        Hector <span className="text-primary">Ramirez</span>
      </h1>

      {/* Accessible fallback for screen readers */}
      <strong className="sr-only">Full-Stack Developer</strong>

      <TypewriterTitle />

      <p className="text-foreground mx-auto mt-4 mb-8 max-w-md lg:mx-0">
        I build responsive, full-stack web apps with React, Node.js, and Django.
        Focused on clean code, modern UI, and solving real problems.
      </p>

      <CTAButtons />
    </header>
  );
};

export default Intro;
