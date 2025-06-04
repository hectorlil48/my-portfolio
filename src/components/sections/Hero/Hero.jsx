import { motion } from "framer-motion";
import Intro from "./Intro";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-10 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Intro />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <CodeCard />
      </motion.div>
    </section>
  );
};

export default Hero;
