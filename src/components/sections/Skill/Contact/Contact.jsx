import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <ContactHeader />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-1">
          <div className="mb-8">
            <h3 className="text-heading mb-3 text-lg font-semibold">
              Contact Information
            </h3>
            <p className="text-foreground">
              Have a question or want to work together? Send me a message and
              I’ll get back to you as soon as I can.
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
                  <a href="tel:+17792790100">(779) 279-0100</a>
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
        </div>

        <div className="md:col-span-2">
          <form
            className="bg-code-bg border-skill-border space-y-6 rounded-lg border p-6 shadow-sm"
            method="POST"
            action="https://api.web3forms.com/submit"
            onSubmit={handleSubmit}
          >
            {/* Hidden input for Web3Forms API key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name */}
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
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="bg-input border-outline text-foreground placeholder-muted focus:ring-primary mt-2 h-10 w-full rounded-md border px-4 py-2 text-base outline-none focus:ring-2"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-foreground text-sm font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="bg-input border-outline text-foreground placeholder-muted focus:ring-primary mt-2 h-10 w-full rounded-md border px-4 py-2 text-base outline-none focus:ring-2"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-foreground text-sm font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Write your message here..."
                className="bg-input border-outline text-foreground placeholder-muted focus:ring-primary mt-2 w-full rounded-md border px-4 py-2 text-base outline-none focus:ring-2"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-main-btn hover:bg-primary/90 focus:ring-primary w-full rounded-md px-6 py-3 text-center text-sm font-semibold transition-all duration-300 focus:ring-2 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
