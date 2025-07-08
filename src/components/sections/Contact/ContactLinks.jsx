import { Github, Linkedin, Mail } from "lucide-react";

const ContactLinks = () => {
  return (
    <div>
      <h3 className="text-heading mb-3 text-lg font-semibold">
        Connect with me
      </h3>
      <div className="text-foreground flex space-x-6">
        <a
          href="https://github.com/hectorlil48"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="focus-visible:ring-primary rounded focus:outline-none focus-visible:ring-2"
        >
          <Github className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/hector-ramirez-6a6509170/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="focus-visible:ring-primary rounded focus:outline-none focus-visible:ring-2"
        >
          <Linkedin className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
        </a>
        <a
          href="mailto:hramir94@gmail.com"
          aria-label="Email"
          className="focus-visible:ring-primary rounded focus:outline-none focus-visible:ring-2"
        >
          <Mail className="hover:text-primary h-6 w-6 transition-all duration-300 motion-safe:hover:scale-120 motion-safe:hover:rotate-6 lg:h-7 lg:w-7" />
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
