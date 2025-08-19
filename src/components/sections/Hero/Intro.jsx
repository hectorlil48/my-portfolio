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

      <p className="text-foreground mx-auto mt-2 mb-8 max-w-md lg:mx-0">
        I specialize in HTML5, CSS3, and JavaScript to build fast, responsive
        websites with modern UI and seamless user experiences.
      </p>

      <CTAButtons />
    </header>
  );
};

export default Intro;
