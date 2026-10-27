import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import styles from "./Cursor.module.css";

const ringSpring = { stiffness: 300, damping: 28, mass: 0.6 };

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);
  const ringScale = useSpring(1, ringSpring);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    function follow(event) {
      x.set(event.clientX);
      y.set(event.clientY);
    }
    function hover(event) {
      ringScale.set(event.target.closest("a, button") ? 1.8 : 1);
    }
    window.addEventListener("pointermove", follow, { passive: true });
    window.addEventListener("pointerover", hover, { passive: true });
    return () => {
      window.removeEventListener("pointermove", follow);
      window.removeEventListener("pointerover", hover);
    };
  }, [x, y, ringScale]);

  return (
    <div className={styles.cursor} aria-hidden="true">
      <motion.span className={styles.dot} style={{ x, y }} />
      <motion.span
        className={styles.ring}
        style={{ x: ringX, y: ringY, scale: ringScale }}
      />
    </div>
  );
}
