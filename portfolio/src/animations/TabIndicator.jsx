import { motion } from "motion/react";
import styles from "./TabIndicator.module.css";

export default function TabIndicator() {
  return (
    <motion.span
      layoutId="tab-indicator"
      className={styles.indicator}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
    />
  );
}
