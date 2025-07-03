import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-1">
          <div className="mb-8">
            <h3 className="text-heading mb-3 text-lg font-semibold">
              Contact Information
            </h3>
            <p className="text-foreground">
              Fill out the form and I will get back to you as soon as possible.
            </p>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex gap-3">
              <Mail className="text-primary mt-1 h-5 w-5" />
              <div>
                <h4 className="text-foreground font-medium">Email</h4>
                <p className="text-muted text-sm">
                  <a href="mailto:hramir94@gmail.com">hramir94@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="text-primary mt-1 h-5 w-5" />
              <div>
                <h4 className="text-foreground font-medium">Phone</h4>
                <p className="text-muted text-sm">
                  <a href="tel:7792790100">(779) 279-0100</a>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-primary mt-1 h-5 w-5" />
              <div>
                <h4 className="text-foreground font-medium">Location</h4>
                <p className="text-muted text-sm">Chicago, IL</p>
              </div>
            </div>
          </div>

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
              >
                <Github className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/hector-ramirez-6a6509170/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="hover:text-primary h-6 w-6 transition-all duration-300 hover:scale-120 hover:rotate-6 lg:h-7 lg:w-7" />
              </a>
              <a href="mailto:hramir94@gmail.com" aria-label="Email">
                <Mail className="hover:text-primary h-6 w-6 transition-all duration-300 motion-safe:hover:scale-120 motion-safe:hover:rotate-6 lg:h-7 lg:w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <form className="bg-code-bg border-skill-border space-y-6 rounded-lg border p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-foreground text-sm font-semibold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  className="border-outline text-foreground bg-input placeholder-muted focus:ring-primary mt-2 h-10 w-full rounded-md border px-4 py-2 text-base outline-none focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-foreground text-sm font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  required
                  className="border-outline text-foreground bg-input placeholder-muted focus:ring-primary mt-2 h-10 w-full rounded-md border px-4 py-2 text-base outline-none focus:ring-2"
                />
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
