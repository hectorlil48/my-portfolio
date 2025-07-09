const Footer = () => {
  return (
    <footer className="bg-background border-skill-border text-foreground border-t px-6 py-10 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hector Ramirez. All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary text-sm hover:underline"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
