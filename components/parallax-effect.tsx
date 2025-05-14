"use client";

import { useEffect, useRef } from "react";

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ParallaxEffect({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;
      let translateValue = 0;

      switch (direction) {
        case "up":
          translateValue = scrollY * speed * -1;
          ref.current.style.transform = `translateY(${translateValue}px)`;
          break;
        case "down":
          translateValue = scrollY * speed;
          ref.current.style.transform = `translateY(${translateValue}px)`;
          break;
        case "left":
          translateValue = scrollY * speed * -1;
          ref.current.style.transform = `translateX(${translateValue}px)`;
          break;
        case "right":
          translateValue = scrollY * speed;
          ref.current.style.transform = `translateX(${translateValue}px)`;
          break;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
