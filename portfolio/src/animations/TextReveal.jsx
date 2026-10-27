import { motion } from "motion/react";
import styles from "./TextReveal.module.css";

// Splits by word (not letter) so Arabic letters keep their joined forms.
export default function TextReveal({ text, delay = 0, className }) {
  return (
    <span className={`${styles.line} ${className ?? ""}`} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={styles.word}
          aria-hidden="true"
          initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * 0.08,
            duration: 0.7,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
