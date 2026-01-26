"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
};

export default function CountUp({ end }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;

        let current = 0;
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / end), 20);

        const timer = setInterval(() => {
          current += 1;
          setCount(current);
          if (current >= end) clearInterval(timer);
        }, stepTime);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}
