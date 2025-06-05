import { motion } from "framer-motion";
import Intro from "./Intro";
import CodeCard from "./CodeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-10 lg:px-8"
    >
      {/* Left (Intro) */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        className="w-full"
      >
        <Intro />
      </motion.div>

      {/* Right (CodeCard) */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        className="w-full"
      >
        <CodeCard />
      </motion.div>
    </section>
  );
};

export default Hero;
