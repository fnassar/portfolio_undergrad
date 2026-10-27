import { motion } from "motion/react";
import usePointerSpring from "./usePointerSpring.js";

const range = { x: 30, y: 30 };
const spring = { stiffness: 180, damping: 14 };

export default function Magnet({ children }) {
  const { x, y, handlers } = usePointerSpring(range, spring);

  return (
    <motion.div style={{ x, y }} {...handlers}>
      {children}
    </motion.div>
  );
}
