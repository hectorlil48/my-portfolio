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

      <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-code-bg border-skill-border hover:border-primary/30 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="relative overflow-hidden">
            <img
              src="./portfolio-desktop-sc.png"
              alt="Screenshot of Hector Ramirez's portfolio built with React"
              className="max-h-[270px] w-full shadow-md brightness-96"
            />
            <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity hover:opacity-100"></div>
          </div>

          {/* This block takes remaining space and keeps spacing clean */}
          <div className="flex flex-grow flex-col justify-between p-6">
            <div className="space-y-4">
              <h3 className="text-heading mb-[6px] text-xl font-bold">
                My Portfolio
              </h3>
              <p className="text-foreground text-sm">
                A responsive portfolio built with React and Tailwind CSS,
                featuring a dark/light theme, smooth animations, and a clean UI
                to showcase my skills and projects.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  React.js
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  Tailwindcss
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  HTML & JSX
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  Responsive Design
                </span>
              </div>
            </div>

            {/* Always pinned to bottom */}
            <div className="mt-6 flex items-center gap-3">
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

        <div className="bg-code-bg border-skill-border hover:border-primary/30 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="relative overflow-hidden">
            <img
              src="./frontend-quiz-app-sc.png"
              alt="Screenshot of Hector Ramirez's Frontend Quiz App built with React"
              className="max-h-[270px] w-full shadow-md brightness-96"
            />
            <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity hover:opacity-100"></div>
          </div>

          {/* This block takes remaining space and keeps spacing clean */}
          <div className="flex flex-grow flex-col justify-between p-6">
            <div className="space-y-4">
              <h3 className="text-heading mb-[6px] text-xl font-bold">
                Frontend Quiz App
              </h3>
              <p className="text-foreground text-sm">
                A quiz app that lets users test their knowledge on various
                topics with real-time feedback, dark mode, and keyboard
                navigation. Built with React.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  React.js
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  Dark Mode
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  HTML & JSX
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                  Responsive Design
                </span>
              </div>
            </div>

            {/* Always pinned to bottom */}
            <div className="mt-6 flex items-center gap-3">
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

        <div className="bg-code-bg border-skill-border hover:border-primary/30 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="relative overflow-hidden">
            <img
              src="./signup-form-sc.png"
              alt="Screenshot of Hector Ramirez's Intro signup form built with React"
              className="max-h-[270px] w-full shadow-md brightness-96"
            />
            <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity hover:opacity-100"></div>
          </div>
          <div className="flex flex-grow flex-col justify-between p-6">
            <div className="space-y-4">
              <h3 className="text-heading mb-[6px] text-xl font-bold">
                Intro Component With Sign Up Form
              </h3>
              <p className="text-foreground text-sm">
                A responsive sign-up form built with React and Tailwind CSS. It
                features clean layout, validation, and intuitive error handling
                using utility-first design.
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
                  Responsive Design
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://hectorlil48.github.io/intro-component-with-sign-up-form/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                aria-label="Live demo of My Portfolio project"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/hectorlil48/intro-component-with-sign-up-form"
                target="_blank"
                rel="noopener noreferrer"
                className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                aria-label="View My Portfolio code on GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="relative overflow-hidden">
            <img
              src="./meet-landing-page-sc.png"
              alt="Screenshot of Hector Ramirez's meet landing page built with React"
              className="max-h-[270px] w-full shadow-md brightness-96"
            />
            <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity hover:opacity-100"></div>
          </div>

          <div className="flex flex-grow flex-col justify-between p-6">
            <div className="space-y-4">
              <h3 className="text-heading mb-[6px] text-xl font-bold">
                Meet Landing Page
              </h3>
              <p className="text-foreground text-sm">
                A responsive portfolio built with React and Tailwind CSS,
                featuring a dark/light theme, smooth animations, and a clean UI
                to showcase my skills and projects.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                  React.js
                </span>

                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                  Javascript
                </span>

                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                  HTML & JSX
                </span>

                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs">
                  Responsive Design
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://hectorlil48.github.io/meet-landing-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                aria-label="Live demo of My Portfolio project"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/hectorlil48/meet-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                aria-label="View My Portfolio code on GitHub"
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
