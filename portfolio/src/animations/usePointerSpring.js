import { useRef } from "react";
import { useSpring } from "motion/react";

// Springs x/y toward the pointer's offset from the element centre (-0.5..0.5) times `range`.
// The box is measured once on enter so moving elements don't force layout on every pointermove.
export default function usePointerSpring(range, spring) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const box = useRef(null);

  const handlers = {
    onPointerEnter: (event) => {
      box.current = event.currentTarget.getBoundingClientRect();
    },
    onPointerMove: (event) => {
      const { left, top, width, height } = box.current;
      x.set(((event.clientX - left) / width - 0.5) * range.x);
      y.set(((event.clientY - top) / height - 0.5) * range.y);
    },
    onPointerLeave: () => {
      x.set(0);
      y.set(0);
    },
  };

  return { x, y, handlers };
}
