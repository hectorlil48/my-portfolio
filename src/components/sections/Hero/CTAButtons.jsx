import { GithubIcon, Linkedin, Mail } from "lucide-react";

const CTAButtons = () => {
  return (
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
  );
};

export default CTAButtons;
