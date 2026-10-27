import { motion } from "motion/react";

export default function Float({ index, children }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
