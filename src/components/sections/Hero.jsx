import { GithubIcon, Linkedin, Mail } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between gap-10 px-8 py-24 lg:flex-row"
    >
      <div className="flex max-w-xl flex-col space-y-6 text-center lg:text-left">
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
          I build responsive, full-stack web apps with React, Node.js, and
          Django. Focused on clean code, modern UI, and solving real problems.
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
      </div>
      <div
        role="presentation"
        className="bg-code-bg w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-colors duration-300"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          <div className="text-sm text-gray-500">developer.js</div>
        </div>
        <div className="space-y-2 font-mono text-sm">
          <p className="text-gray-500">// Full-Stack Developer</p>
          <p>
            <span className="text-pink-500">const </span>
            <span className="text-blue-400">developer </span>
            <span className="text-gray-500">= </span>
            <span className="text-orange-600">&#123;</span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">name</span>
            <span className="text-gray-500">: </span>
            <span className="text-green-600">'Hector Ramirez'</span>
            <span className="text-gray-500">,</span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">skills</span>
            <span className="text-gray-500">: </span>
            <span className="text-orange-600">&#91;</span>
            <span className="text-green-600">'React'</span>
            <span className="text-gray-500">, </span>
            <span className="text-green-600">'Node.js'</span>
            <span className="text-gray-500">, </span>
            <span className="text-green-600">'MongoDB'</span>
            <span className="text-orange-600">&#93;</span>
            <span className="text-gray-500">, </span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">focuses</span>
            <span className="text-gray-500">: </span>
            <span className="text-orange-600">&#91;</span>
            <span className="text-green-600">'Full-Stack'</span>
            <span className="text-gray-500">, </span>
            <span className="text-green-600">'Frontend'</span>
            <span className="text-orange-600">&#93;</span>
            <span className="text-gray-500">, </span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">learning</span>
            <span className="text-gray-500">: </span>
            <span className="text-green-600">'Always'</span>
            <span className="text-gray-500">, </span>
          </p>
          <p>
            <span className="text-orange-600">&#125;</span>
            <span className="text-gray-500">;</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
