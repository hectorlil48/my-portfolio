import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen border-2 border-amber-400">
      <div>
        <h1 className="text-heading">
          Hi, I'm <span className="text-primary">Hector</span>
        </h1>

        <div className="mb-4 h-10 text-2xl font-medium sm:text-3xl">
          <TypewriterComponent
            options={{
              strings: [
                "Full-Stack Developer",
                "React & Django Enthusiast",
                "Builder of Modern Web Apps",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
