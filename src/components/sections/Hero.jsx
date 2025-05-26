import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-4 py-24"
    >
      <div className="flex flex-col gap-5 text-center">
        <span className="text-primary text-sm font-medium transition-[font-size] duration-300 md:text-base">
          Hello, I'm
        </span>
        <h1 className="text-heading text-4xl font-bold transition-[font-size] duration-300 md:text-5xl lg:text-6xl">
          Hector <span className="text-primary">Ramirez</span>
        </h1>

        <div className="text-foreground text-2xl font-medium md:text-2xl">
          <TypewriterComponent
            options={{
              strings: [
                "Full-Stack Developer",
                "React & Django Enthusiast",
                "Builder of Modern Web Apps",
                "Always Learning, Always Building",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-foreground">
          I build responsive, full-stack web apps with React, Node.js, and
          Django. Focused on clean code, modern UI, and solving real problems.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="bg-primary text-main-btn rounded-lg px-4 py-2 text-base font-medium"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            aria-label="Go to projects section"
            className="rounded-lg border px-4 py-2"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="bg-primary h-[278px] rounded-2xl"></div>
    </section>
  );
};

export default Hero;
