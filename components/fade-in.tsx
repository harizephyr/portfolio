"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  threshold?: number;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  distance = 40,
  delay = 0,
  threshold = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  // Define transform based on direction
  let transform = "translate3d(0, 0, 0)";
  switch (direction) {
    case "up":
      transform = `translate3d(0, ${distance}px, 0)`;
      break;
    case "down":
      transform = `translate3d(0, -${distance}px, 0)`;
      break;
    case "left":
      transform = `translate3d(${distance}px, 0, 0)`;
      break;
    case "right":
      transform = `translate3d(-${distance}px, 0, 0)`;
      break;
    case "none":
      transform = "translate3d(0, 0, 0)";
      break;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible
          ? "opacity-100 transform-none"
          : `opacity-0 transform ${
              direction !== "none" ? "translate-y-8" : ""
            }`,
        className
      )}
      style={{
        transform: isVisible ? "translate3d(0, 0, 0)" : transform,
      }}
    >
      {children}
    </div>
  );
}