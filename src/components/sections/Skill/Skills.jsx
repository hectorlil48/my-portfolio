import SkillCard from "./SkillCard";

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
import { BiLogoPostgresql, BiLayer, BiCodeAlt } from "react-icons/bi";
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

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: SiCss3 },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "Python", Icon: SiPython },
      { label: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: BiLayer,
    skills: [
      { label: "React.js", Icon: SiReact },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "TailwindCSS", Icon: SiTailwindcss },
      { label: "Express.js", Icon: SiExpress },
      { label: "Flask", Icon: SiFlask },
      { label: "Bootstrap", Icon: SiBootstrap },
      { label: "SASS", Icon: SiSass },
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: [
      { label: "MongoDB", Icon: SiMongodb },
      { label: "MySQL", Icon: SiMysql },
      { label: "PostgreSQL", Icon: BiLogoPostgresql },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaToolbox,
    skills: [
      { label: "Git", Icon: FaGit },
      { label: "GitHub", Icon: FaGithub },
      { label: "Postman", Icon: SiPostman },
      { label: "AWS", Icon: FaAws },
      { label: "VS Code", Icon: VscVscode },
      { label: "MacOS", Icon: SiMacos },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: VscSymbolColor,
    skills: [
      { label: "Figma", Icon: SiFigma },
      { label: "Adobe Cloud", Icon: SiAdobe },
      { label: "Sketch", Icon: SiSketch },
    ],
  },
  {
    title: "Other Skills",
    icon: BiCodeAlt,
    skills: [
      { label: "REST APIs", Icon: FiLink },
      { label: "Agile / Scrum", Icon: GiProgression },
      { label: "Debugging", Icon: FaBug },
      { label: "Deployment", Icon: FaRocket },
      { label: "Problem Solving", Icon: FaRegLightbulb },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
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
      {skillCategories.map((category, index) => (
        <SkillCard key={index} {...category} />
      ))}
    </div>
  </section>
);

export default Skills;
