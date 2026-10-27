import { motion, useScroll, useSpring, useTransform } from "motion/react";
import styles from "./ScrollRects.module.css";

const colorTransition = { duration: 0.6, ease: "easeInOut" };

export default function ScrollRects({ targetRef, colors, label }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const rotateA = useTransform(progress, [0, 1], [0, 360]);
  const rotateB = useTransform(progress, [0, 1], [0, -360]);

  return (
    <div className={styles.stage} aria-hidden="true">
      <motion.div
        className={`${styles.rect} ${styles.rectA}`}
        style={{ rotate: rotateA }}
        animate={{ borderColor: colors.a, boxShadow: `0 0 40px ${colors.a}40` }}
        transition={colorTransition}
      />
      <motion.div
        className={`${styles.rect} ${styles.rectB}`}
        style={{ rotate: rotateB }}
        animate={{ borderColor: colors.b, backgroundColor: `${colors.b}14` }}
        transition={colorTransition}
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
