import { motion } from "motion/react";
import usePointerSpring from "./usePointerSpring.js";
import styles from "./TiltImage.module.css";

const range = { x: 16, y: -16 };
const spring = { stiffness: 200, damping: 18 };

export default function TiltImage({ src, alt }) {
  const { x, y, handlers } = usePointerSpring(range, spring);

  return (
    <div className={styles.perspective} {...handlers}>
      <motion.img
        className={styles.image}
        src={src}
        alt={alt}
        loading="lazy"
        style={{ rotateX: y, rotateY: x }}
        whileHover={{ scale: 1.04 }}
      />
    </div>
  );
}
