import { motion } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <ContactHeader />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 md:col-span-1"
        >
          <ContactInfo />
          <ContactLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
