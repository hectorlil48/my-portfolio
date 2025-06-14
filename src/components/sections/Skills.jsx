import { Code } from "lucide-react";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-12 lg:mb-14">
        <div className="mb-6">
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            Skills
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>

        <p className="text-foreground max-w-2xl">
          My toolkit covers both frontend and backend technologies — everything
          needed to build real-world web apps.
        </p>
      </header>

      <div className="text-heading">
        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Programming Languages</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiJavascript className="h-4 w-4" />
              JavaScript
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiPython className="h-4 w-4" />
              Python
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiTypescript className="h-4 w-4" />
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
