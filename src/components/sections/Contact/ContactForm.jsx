import { useState } from "react";

const ContactForm = () => {
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
    <form
      className="bg-code-bg border-skill-border space-y-6 rounded-lg border p-6 shadow-sm"
      method="POST"
      action="https://api.web3forms.com/submit"
      onSubmit={handleSubmit}
    >
      {/* Hidden input for Web3Forms API key */}
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

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
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            autoComplete="email"
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
  );
};

export default ContactForm;
