import projectData from "/src/data/projectData.js";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
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
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-code-bg border-skill-border hover:border-primary/30 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="max-h-[270px] w-full shadow-md brightness-96"
              />
              <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity hover:opacity-100"></div>
            </div>

            <div className="flex flex-grow flex-col justify-between p-6">
              <div className="space-y-4">
                <h3 className="text-heading mb-[6px] text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-foreground text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-main-btn rounded-lg px-4 py-[9px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
