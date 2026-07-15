import { useEffect, useRef, useState } from "react";

// Animates a number up to `value` when scrolled into view, then appends `suffix`.
export default function StatCounter({ value, suffix = "", duration = 900 }) {
  const ref = useRef(null);
  const isInteger = Number.isInteger(value);
  const [display, setDisplay] = useState(isInteger ? "0" : (0).toFixed(1));

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = value * progress;
            setDisplay(isInteger ? Math.round(current) : current.toFixed(1));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, isInteger]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
