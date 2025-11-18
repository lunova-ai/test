"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, [delay]);

  return <div ref={ref} className="fade-in opacity-0 translate-y-6">{children}</div>;
}
