import { Code } from "lucide-react";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiMacos,
  SiFigma,
  SiAdobe,
  SiSketch,
} from "react-icons/si";

import {
  BiLogoPostgresql,
  BiLayer,
  BiCodeAlt,
  BiMessageRoundedDetail,
} from "react-icons/bi";

import {
  FaDatabase,
  FaToolbox,
  FaGit,
  FaGithub,
  FaAws,
  FaBug,
  FaRocket,
  FaRegLightbulb,
} from "react-icons/fa6";

import { FiLink } from "react-icons/fi";

import { VscVscode, VscSymbolColor } from "react-icons/vsc";

import { GiProgression } from "react-icons/gi";

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

      <div className="text-heading grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Programming Languages</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiHtml5 className="h-4 w-4" />
              HTML
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiCss3 className="h-4 w-4" />
              CSS
            </span>

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

        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <BiLayer className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiReact className="h-4 w-4" />
              React.js
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiNodedotjs className="h-4 w-4" />
              Node.js
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiTailwindcss className="h-4 w-4" />
              TailwindCSS
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiExpress className="h-4 w-4" />
              Express.js
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiFlask className="h-4 w-4" />
              Flask
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiBootstrap className="h-4 w-4" />
              Bootstrap
            </span>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <FaDatabase className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Databases</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiMongodb className="h-4 w-4" />
              MongoDB
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiMysql className="h-4 w-4" />
              MySQL
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <BiLogoPostgresql className="h-4 w-4" />
              PostgreSQL
            </span>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <FaToolbox className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Tools & Platforms</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaGit className="h-4 w-4" />
              Git
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaGithub className="h-4 w-4" />
              GitHub
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiPostman className="h-4 w-4" />
              Postman
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaAws className="h-4 w-4" />
              AWS
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <VscVscode className="h-4 w-4" />
              VS Code
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiMacos className="h-4 w-4" />
              MacOS
            </span>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <VscSymbolColor className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Design & UI/UX</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiFigma className="h-4 w-4" />
              Figma
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiAdobe className="h-4 w-4" />
              Adobe Cloud
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiSketch className="h-4 w-4" />
              Sketch
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <SiSass className="h-4 w-4" />
              SASS
            </span>
          </div>
        </div>

        <div className="bg-code-bg border-skill-border hover:border-primary/30 rounded-lg border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <BiCodeAlt className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Other Skills</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FiLink className="h-4 w-4" />
              REST APIs
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <GiProgression className="h-4 w-4" />
              Agile / Scrum
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaBug className="h-4 w-4" />
              Debugging
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaRocket className="h-4 w-4" />
              Deployment
            </span>

            <span className="border-outline bg-main-btn inline-flex items-center gap-2 rounded-md border px-2 py-1">
              <FaRegLightbulb className="h-4 w-4" />
              Problem Solving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
