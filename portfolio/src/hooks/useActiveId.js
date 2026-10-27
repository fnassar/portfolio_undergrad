import { useEffect } from "react";

// Reports the `data-id` of whichever child crosses the middle band of the viewport.
export default function useActiveId(containerRef, onChange) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) onChange(visible.target.dataset.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    containerRef.current
      .querySelectorAll("[data-id]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [containerRef, onChange]);
}
