import { motion } from "framer-motion";
import projectData from "/src/data/projectData.js";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 lg:mb-14"
      >
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
      </motion.header>

      <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-code-bg border-skill-border hover:border-primary/30 flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="max-h-[270px] w-full transform brightness-96 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
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
                  title="View Live Demo"
                  className="bg-primary text-main-btn rounded-lg px-4 py-[9px] text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View GitHub Repository"
                  className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border px-4 py-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
