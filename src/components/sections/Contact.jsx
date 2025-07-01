const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12 lg:mb-14">
        <div className="mb-6">
          <h2 className="text-heading mb-[6px] text-4xl font-bold transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="bg-primary h-[5px] w-10 rounded"></div>
        </div>

        <p className="text-foreground max-w-2xl">
          A timeline of my education and hands-on work experience in web
          development.
        </p>
      </header>

      <div>
        <div>
          <div className="mb-8">
            <h3 className="text-heading mb-3 text-lg font-semibold">
              Contact Information
            </h3>
            <p className="text-foreground">
              Fill out the form and I will get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
