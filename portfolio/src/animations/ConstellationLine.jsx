import { motion } from "motion/react";
import styles from "./ConstellationLine.module.css";

// Zig-zag through the node centres; nodes alternate high/low in ExperienceSection.module.css.
function zigzag(count) {
  return Array.from({ length: count }, (_, index) => {
    const x = ((index + 0.5) / count) * 100;
    const y = index % 2 === 0 ? 35 : 65;
    return `${x.toFixed(1)},${y}`;
  }).join(" ");
}

export default function ConstellationLine({ count }) {
  return (
    <motion.div
      className={styles.wrapper}
      aria-hidden="true"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <svg className={styles.svg} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline points={zigzag(count)} className={styles.line} />
      </svg>
    </motion.div>
  );
}
