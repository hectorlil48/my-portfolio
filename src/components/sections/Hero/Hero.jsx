import { motion } from "framer-motion";
import Intro from "./Intro";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-20 px-6 lg:flex-row lg:gap-10 lg:px-8"
    >
      <Intro />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:flex-1"
      >
        <CodeCard />
      </motion.div>
    </section>
  );
};

export default Hero;
