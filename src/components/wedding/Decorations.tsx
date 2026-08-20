import { useMemo } from "react";
import { motion } from "framer-motion";

const isIOS = typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);
const prefersReducedMotion =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reduceDecorations = isIOS || prefersReducedMotion;

// Floating petals/sparkles overlay — purely decorative
export const FloatingPetals = ({ count = 14 }: { count?: number }) => {
  const petals = useMemo(
    () => Array.from({ length: reduceDecorations ? Math.min(count, 4) : count }, (_, index) => ({
      left: (index * 37 + 11) % 100,
      duration: reduceDecorations ? 18 + (index % 4) * 2 : 12 + (index % 7) * 2,
      delay: reduceDecorations ? (index % 4) : (index % 10),
      size: reduceDecorations ? 8 + (index % 4) * 2 : 8 + (index % 6) * 2,
    })),
    [count],
  );

  if (reduceDecorations && count <= 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden>
      {petals.map((petal, i) => {
        return (
          <span
            key={i}
            className={`absolute top-0 ${reduceDecorations ? "" : "animate-float-petal"}`}
            style={{
              left: `${petal.left}%`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              width: petal.size,
              height: petal.size,
              opacity: reduceDecorations ? 0.45 : undefined,
            }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full opacity-60">
              <path
                d="M10 2 C 6 6, 6 14, 10 18 C 14 14, 14 6, 10 2 Z"
                fill="hsl(var(--primary-glow))"
                opacity="0.7"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

export const Sparkles = ({ count = 6 }: { count?: number }) => {
  const sparkleCount = reduceDecorations ? Math.min(count, 6) : count;
  const sparklePositions = useMemo(
    () => Array.from({ length: sparkleCount }, (_, index) => ({
      left: (index * 43 + 17) % 100,
      top: (index * 61 + 23) % 100,
      duration: reduceDecorations ? 0 : 2 + (index % 3),
      delay: reduceDecorations ? 0 : (index % 3),
    })),
    [sparkleCount],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparklePositions.map((sparkle, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{ left: `${sparkle.left}%`, top: `${sparkle.top}%` }}
          animate={reduceDecorations ? undefined : { opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
          transition={reduceDecorations ? undefined : { duration: sparkle.duration, repeat: Infinity, delay: sparkle.delay }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7 0 L8 6 L14 7 L8 8 L7 14 L6 8 L0 7 L6 6 Z" fill="hsl(var(--primary))" />
          </svg>
        </motion.span>
      ))}
    </div>
  );
};

export const Ornament = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 30" className={className} aria-hidden>
    <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="80" cy="15" r="2" fill="currentColor" />
    <path
      d="M100 5 C 90 10, 90 20, 100 25 C 110 20, 110 10, 100 5 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <circle cx="120" cy="15" r="2" fill="currentColor" />
    <line x1="130" y1="15" x2="200" y2="15" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);
