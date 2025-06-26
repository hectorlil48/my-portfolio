import { GraduationCap, Code, Briefcase } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      org: "Colorado Technical University",
      date: "Expected Dec 2027",
      icon: <GraduationCap size={18} />,
      description:
        "Pursuing a Bachelor's in Computer Science with coursework in algorithms, data structures, and full-stack development.",
    },
    {
      title: "Full-Stack Software Development Bootcamp",
      org: "Coding Dojo",
      date: "Nov 2023 – May 2024",
      icon: <Code size={18} />,
      description:
        "Completed hands-on training in MERN and Python stacks. Built full-stack apps, REST APIs, and responsive UIs.",
    },
    {
      title: "Associate of Applied Science in Web Design and Social Media",
      org: "Joliet Junior College",
      date: "Completed 2020",
      icon: <GraduationCap size={18} />,
      description:
        "Completed a 2-year associate degree, building foundational skills in general education and critical thinking.",
    },
  ];

  const workData = [
    {
      title: "Freelance & Projects",
      org: "Self-taught",
      date: "2020 – Present",
      icon: <Code size={18} />,
      description:
        "Built frontend and full-stack apps with React, Node.js, and Python. Focused on accessibility, responsive design, and real-world problem solving.",
    },
    {
      title: "Web Developer Intern",
      org: "RW Digital Market Media (Remote)",
      date: "Jul 2021 – Dec 2021",
      icon: <Code size={18} />,
      description:
        "Built responsive websites using HTML, CSS, and Bootstrap. Contributed to improving UX and team collaboration on client-facing projects.",
    },
    {
      title: "Web Developer Intern",
      org: "ooLango E-Learning (Remote)",
      date: "Aug 2019 – Dec 2019",
      icon: <Code size={18} />,
      description:
        "Developed static pages using HTML and CSS. Worked closely with other interns in an agile team environment to meet project goals.",
    },
    {
      title: "General Warehouse Worker",
      org: "Best Buy",
      date: "2016 – Present",
      icon: <Briefcase size={18} />,
      description:
        "Work 8–10 hour shifts requiring focus, consistency, and physical endurance. Developed discipline while learning to code outside of work.",
    },
  ];

  const data = activeTab === "education" ? educationData : workData;

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-12">
        <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
          My Journey
        </h2>
        <div className="bg-primary h-[5px] w-10 rounded"></div>
      </header>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap gap-4">
        <button
          onClick={() => setActiveTab("education")}
          aria-selected={activeTab === "education"}
          className={`rounded-lg px-4 py-[10px] text-base font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
            activeTab === "education"
              ? "bg-primary text-main-btn"
              : "border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary border-2"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("work")}
          aria-selected={activeTab === "work"}
          className={`rounded-lg px-4 py-[10px] text-base font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
            activeTab === "work"
              ? "bg-primary text-main-btn"
              : "border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary border-2"
          }`}
        >
          Work
        </button>
      </div>

      <div className="relative ml-4">
        {/* Animated vertical line */}
        <motion.div
          className="bg-primary/30 absolute top-0 left-[-2px] h-full w-1"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
        />

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative mb-8 cursor-pointer"
          >
            {/* Timeline Icon */}
            <div className="bg-primary text-main-btn absolute top-0 -left-[22px] z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md">
              {item.icon}
            </div>

            {/* Content */}
            <div className="ml-8 space-y-1">
              <h3 className="text-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted text-sm">{item.org}</p>
              <p className="text-soft text-xs italic">{item.date}</p>
              <p className="text-foreground text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
