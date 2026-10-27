import { motion, useScroll } from "motion/react";
import Shape from "./Shape.jsx";
import { shapeSets } from "./shapeSets.js";
import styles from "./ShapeCluster.module.css";

export default function ShapeCluster({ set, colors, targetRef, active }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      className={styles.cluster}
      aria-hidden="true"
      animate={{ opacity: active ? 1 : 0.45, scale: active ? 1 : 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
    >
      {shapeSets[set].map((shape, index) => (
        <Shape
          key={`${shape.kind}-${index}`}
          shape={shape}
          color={colors[index % colors.length]}
          progress={scrollYProgress}
          active={active}
        />
      ))}
    </motion.div>
  );
}
