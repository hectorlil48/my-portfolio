const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-12 lg:mb-14">
        <div className="mb-6">
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            Projects
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>
        <p className="text-foreground max-w-2xl">
          Projects that demonstrate my experience in building full-stack
          applications, user interfaces, and solving real-world problems.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-code-bg border-skill-border hover:border-primary/30 overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="overflow-hidden">
            <img
              src="./portfolio-desktop-sc.png"
              alt="Screenshot of my portfolio project"
              className="w-full"
            />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="text-heading mb-[2px] text-xl font-bold">
              My Portfolio
            </h3>
            <p className="text-foreground text-sm">
              A responsive portfolio built with React and Tailwind CSS,
              featuring a dark/light theme, smooth animations, and a clean UI to
              showcase my skills and projects.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                React.js
              </span>

              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                Tailwindcss
              </span>

              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                HTML & JSX
              </span>

              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://hectorlil48.github.io/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/hectorlil48/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="overflow-hidden">
            <img
              src="./portfolio-desktop-sc.png"
              alt="Screenshot of my portfolio project"
              className="w-full"
            />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="text-heading mb-[2px] text-xl font-bold">
              Frontend Quiz App
            </h3>
            <p className="text-foreground text-sm">
              A responsive portfolio built with React and Tailwind CSS,
              featuring a dark/light theme, smooth animations, and a clean UI to
              showcase my skills and projects.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                React.js
              </span>

              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                HTML & JSX
              </span>

              <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://hectorlil48.github.io/hectors-frontend-quiz-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/hectorlil48/hectors-frontend-quiz-app"
                target="_blank"
                rel="noopener noreferrer"
                className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
