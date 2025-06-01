import { GithubIcon, Linkedin, Mail } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

const Intro = () => {
  return (
    <header className="flex max-w-xl flex-col space-y-6 text-center lg:text-left">
      <span className="text-primary text-sm font-medium transition-[font-size] duration-300 md:text-base">
        Hello, I'm
      </span>
      <h1 className="text-heading text-4xl font-bold transition-[font-size] duration-300 md:text-5xl lg:text-6xl">
        Hector <span className="text-primary">Ramirez</span>
      </h1>

      <div
        aria-live="polite"
        className="text-foreground text-2xl font-medium md:text-2xl"
      >
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
        I build responsive, full-stack web apps with React, Node.js, and Django.
        Focused on clean code, modern UI, and solving real problems.
      </p>

      <div className="mt-4 flex flex-col items-center justify-center gap-6 md:flex-row lg:justify-start">
        <div className="flex flex-row gap-4">
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-base font-medium duration-300 hover:scale-105 hover:shadow-md"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            aria-label="Go to projects section"
            className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-base font-medium transition-colors duration-300 hover:scale-105 hover:shadow-md"
          >
            View Projects
          </a>
        </div>

        <div className="text-foreground flex h-10 flex-row items-center gap-7 md:ml-4">
          <a
            href="https://github.com/hectorlil48"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-ramirez-6a6509170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
          </a>
          <a href="mailto:hramir94@gmail.com" aria-label="Email">
            <Mail className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro;
