import TypewriterComponent from "typewriter-effect";

const TypewriterTitle = () => {
  return (
    <div
      aria-live="polite"
      className="text-foreground text-2xl font-medium md:text-2xl"
    >
      <TypewriterComponent
        options={{
          strings: [
            "Full-Stack Developer",
            "React & Django Enthusiast",
            "Builder of Modern Web Apps",
            "Always Learning, Always Building",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterTitle;
