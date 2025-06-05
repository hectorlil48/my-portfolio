import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const TypewriterTitle = () => {
  return (
    <motion.div
      aria-live="polite"
      className="text-foreground text-2xl font-medium md:text-2xl"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <TypewriterComponent
        options={{
          strings: [
            "Full-Stack Developer",
            "React Enthusiast",
            "Builder of Modern Web Apps",
            "Learning Never Stops",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>
  );
};

export default TypewriterTitle;
