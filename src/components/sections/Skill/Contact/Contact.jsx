import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <ContactHeader />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-1">
          <ContactInfo />
          <ContactLinks />
        </div>

        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
