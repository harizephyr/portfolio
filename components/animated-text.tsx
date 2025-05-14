"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animated?: boolean;
  onComplete?: () => void;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function AnimatedText({
  text,
  className,
  animated = true,
  onComplete,
  delay = 0,
  tag: Tag = "h1",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);
  const animationCompleted = useRef(false);

  useEffect(() => {
    if (!animated || animationCompleted.current) return;

    // Ensure DOM is available
    if (!textRef.current) return;

    const element = textRef.current;
    element.style.opacity = "0";
    element.textContent = "";

    // Delay start if needed
    const timer = setTimeout(() => {
      // Make element visible again
      element.style.opacity = "1";

      // Type the text
      let index = 0;
      const interval = setInterval(() => {
        element.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
          clearInterval(interval);
          animationCompleted.current = true;
          if (onComplete) onComplete();
        }
      }, 60); // Speed of typing

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, animated, onComplete, delay]);

  return (
    <Tag
      ref={textRef as React.Ref<any>}
      className={cn("transition-all", className)}
    >
      {animated ? "" : text}
    </Tag>
  );
}