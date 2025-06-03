import SocialLinks from "./SocialLinks";

const CTAButtons = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-6 md:flex-row lg:justify-start">
      <div className="flex flex-row gap-4">
        <a
          href="#contact"
          aria-label="Go to contact section"
          className="bg-primary text-main-btn rounded-lg px-4 py-[10px] text-base font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          aria-label="Go to projects section"
          className="border-outline text-heading hover:bg-primary hover:text-main-btn hover:border-primary rounded-lg border-2 px-4 py-2 text-base font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
        >
          View Projects
        </a>
      </div>

      <SocialLinks />
    </div>
  );
};

export default CTAButtons;
