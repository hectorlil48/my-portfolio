// components/About.jsx
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const About = () => {
  const handleDownload = () => {
    toast.success("Downloading résumé...");
  };

  return (
    <section id="about" className="mx-auto min-h-[70vh] max-w-6xl px-6 py-20">
      <header className="mb-12 lg:mb-14">
        <div>
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            About Me
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center space-y-6 overflow-hidden lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="./profilePic.jpeg"
            alt="Portrait of Hector Ramirez"
            title="Hector Ramirez"
            className="border-primary h-64 w-64 rounded-full border-6 object-cover transition-all duration-300 sm:h-80 sm:w-80"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl flex-2"
        >
          <div className="mb-3 flex items-center gap-2">
            <FileText className="text-primary h-[22px] w-[22px] stroke-[2.2]" />
            <h3 className="text-heading text-xl font-semibold transition-colors duration-300">
              Bio
            </h3>
          </div>
          <p className="text-foreground mb-8">
            I’m a self-taught full-stack developer skilled in the MERN stack and
            Tailwind CSS, building clean, responsive web apps with real-world
            impact. Before tech, I worked long, demanding shifts as a forklift
            driver, which taught me discipline, problem-solving, and resilience.
            I balanced that with learning to code and building projects, pushing
            through burnout. Now, I’m excited to join a team where I can grow,
            contribute, and keep leveling up. Outside of coding, I love working
            out, gaming, hiking, and traveling — all things that keep me
            energized and inspired.
          </p>

          {/* Download Resume */}
          <div className="flex items-center justify-center transition-all duration-300 lg:justify-start">
            <a
              href="./Resume2.0.pdf"
              download
              onClick={handleDownload}
              aria-label="Download resume"
              className="group bg-primary text-main-btn inline-block rounded-xl p-4 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 stroke-[2.5] transition-transform group-hover:rotate-12" />
                <span className="leading-none">Download Resume</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
