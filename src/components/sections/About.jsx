import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4">
      <header className="mb-12">
        <div>
          <h2 className="text-heading text-4xl font-bold">About Me</h2>
          <div className="bg-primary h-[5px] w-14 rounded"></div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-8">
        {/* Image */}
        <div className="flex-1">
          <img
            src="public/IMG_2725-min.jpeg"
            alt="profile picture"
            className="h-48 w-48 rounded-full object-cover sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl flex-2 space-y-6">
          <p className="text-foreground">
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

          <a
            href=""
            className="bg-primary text-main-btn inline-block rounded-xl px-6 py-4 text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <Download className="h-5 w-5 -translate-y-[1px] stroke-[2.5] align-middle" />
              <span className="leading-none">
                Download R&eacute;sum&eacute;
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
