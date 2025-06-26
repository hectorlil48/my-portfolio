import { GraduationCap, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  GraduationCap,
  Code,
  Briefcase,
};

const JourneyItem = ({ item, index }) => {
  const IconComponent = icons[item.icon];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative mb-8"
    >
      <div className="bg-primary text-main-btn absolute top-0 -left-[22px] z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md">
        {IconComponent && <IconComponent size={18} />}
      </div>
      <div className="ml-8 space-y-1">
        <h3 className="text-heading text-lg font-semibold">{item.title}</h3>
        <p className="text-muted text-sm">{item.org}</p>
        <p className="text-soft text-xs italic">{item.date}</p>
        <p className="text-foreground text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default JourneyItem;
