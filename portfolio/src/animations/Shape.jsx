import { motion, useSpring, useTransform } from "motion/react";
import styles from "./ShapeCluster.module.css";

const outlines = {
  rect: <rect x="1" y="1" width="98" height="98" />,
  triangle: <polygon points="50,2 98,97 2,97" />,
  circle: <circle cx="50" cy="50" r="48" />,
};

const settle = { stiffness: 120, damping: 30 };

export default function Shape({ shape, color, progress, active }) {
  const angle = useTransform(progress, (value) =>
    active ? value * 360 * shape.spin : 0,
  );
  const rotate = useSpring(angle, settle);

  return (
    <motion.div
      className={styles.shape}
      style={{ width: `${shape.w}%`, height: `${shape.h}%`, rotate }}
      animate={{ color }}
      transition={{ duration: 0.6 }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {outlines[shape.kind]}
      </svg>
    </motion.div>
  );
}
