import { GithubIcon, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="text-foreground flex h-10 flex-row items-center gap-7 md:ml-4">
      <a
        href="https://github.com/hectorlil48"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GithubIcon className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/hector-ramirez-6a6509170/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
      </a>
      <a href="mailto:hramir94@gmail.com" aria-label="Email">
        <Mail className="hover:text-primary h-6 w-6 transition-all duration-300 motion-safe:hover:scale-120 motion-safe:hover:rotate-6 lg:h-7 lg:w-7" />
      </a>
    </div>
  );
};

export default SocialLinks;
