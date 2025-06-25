import { GraduationCap, Code } from "lucide-react";

const Experience = () => {
  const experienceData = [
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
    // {
    //   title: "Forklift Operator",
    //   org: "Best Buy",
    //   date: "2018 – Present",
    //   icon: <Briefcase size={18} />,
    //   description:
    //     "Work 8–10 hour shifts requiring focus, consistency, and physical endurance. Developed discipline while learning to code outside of work.",
    // },
    // {
    //   title: "Freelance & Projects",
    //   org: "Self-taught",
    //   date: "2023 – Present",
    //   icon: <Code size={18} />,
    //   description:
    //     "Built frontend and full-stack apps with React, Node.js, and Python. Focused on accessibility, responsive design, and real-world problem solving.",
    // },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-12 lg:mb-14">
        <div>
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            Experience
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>
      </header>

      <div className="border-primary/30 relative border-l-2">
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-12">
            {/* Timeline Icon */}
            <div className="bg-primary text-main-btn absolute top-[-2px] -left-[22px] z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md">
              {item.icon}
            </div>

            {/* Content */}
            <div className="ml-8 space-y-1">
              <h3 className="text-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.org}</p>
              <p className="text-muted-foreground text-xs">{item.date}</p>
              <p className="text-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
