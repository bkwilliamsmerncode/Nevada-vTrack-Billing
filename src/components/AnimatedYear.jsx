import { useEffect, useRef, useState } from "react";

function AnimatedYear({ className }) {
  const [startYear] = useState(() => new Date().getFullYear());
  const [displayYear, setDisplayYear] = useState(startYear);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrame;
    let startTime;
    let lastYear = startYear;
    let started = false;
    const endYear = 2006;
    const duration = 1800;

    const updateYear = (year) => {
      if (year !== lastYear) {
        lastYear = year;
        setDisplayYear(year);
      }
    };

    const animate = (timestamp) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      updateYear(Math.round(startYear - (startYear - endYear) * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          updateYear(endYear);
          return;
        }

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [startYear]);

  return (
    <strong ref={elementRef} className={className} aria-label="Since 2006">
      <span aria-hidden="true">{displayYear}</span>
    </strong>
  );
}

export default AnimatedYear;
