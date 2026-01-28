"use client";

import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<
    { top: string; left: string; duration: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 5}s`,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
