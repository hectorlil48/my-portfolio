const Footer = () => {
  return (
    <footer className="bg-background border-skill-border text-foreground border-t px-6 py-10 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hector Ramirez. All rights reserved.
        </p>

        <p className="text-muted text-sm">
          Built with{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
