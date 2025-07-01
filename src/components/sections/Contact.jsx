import { Mail, Phone, MapPin, Github } from "lucide-react";

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
                  <a href="tel:7792790100">(779)-279-0100</a>
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
            <div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
