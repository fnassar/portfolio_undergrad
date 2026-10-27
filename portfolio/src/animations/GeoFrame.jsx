import { motion } from "motion/react";
import styles from "./GeoFrame.module.css";

export default function GeoFrame({ color, children }) {
  return (
    <motion.div
      className={styles.frame}
      style={{ "--frame-color": color }}
      initial={{ opacity: 0, scale: 0.92, rotate: -1.5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      <motion.span
        className={`${styles.corner} ${styles.topRight}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 135 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.span
        className={`${styles.corner} ${styles.bottomLeft}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: -135 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <div className={styles.inner}>{children}</div>
    </motion.div>
  );
}
