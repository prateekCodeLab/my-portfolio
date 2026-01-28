"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Particles from "../ui/Particles";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mouse reactive glow effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      section.style.setProperty("--x", `${e.clientX}px`);
      section.style.setProperty("--y", `${e.clientY}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black/40 via-transparent to-black/60"
    >
      {/* Mouse Glow Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(34,211,238,0.12),transparent_40%)]" />

      {/* Floating Particles */}
      <Particles />

      {/* Glow Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/20 blur-[140px] rounded-full" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Intro */}
          <p className="text-cyan-400/80 text-xs tracking-[0.3em] uppercase">
            HI, MY NAME IS
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold gradient-text drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            Prateek Kumar.
          </h1>

          {/* Animated Role */}
          <h2 className="text-3xl md:text-5xl text-gray-300 font-semibold leading-tight">
            <TypeAnimation
              sequence={[
                "I build modern web experiences.",
                2000,
                "I craft high-performance websites.",
                2000,
                "I design scalable full-stack applications.",
                2000,
                "I turn ideas into powerful digital products.",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
              cursor={true}
              style={{ opacity: 0.8 }}
            />
          </h2>

          {/* Description */}
          <p className="max-w-xl text-gray-400/90 leading-relaxed text-[15px]">
            I specialize in building fast, scalable, and visually refined web
            products using JavaScript, WordPress, and modern full-stack
            technologies. Passionate about clean UI, performance optimization,
            and solving real-world problems through code.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 text-xs text-cyan-400">
            {["Next.js", "Tailwind CSS", "JavaScript", "Full-Stack"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-cyan-400/30 rounded-full 
                 bg-cyan-400/5 backdrop-blur-md
                 hover:bg-cyan-400/15 hover:shadow-[0_0_15px_rgba(34,211,238,0.45)]
                 transition-all duration-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <motion.div className="space-y-10" whileHover={{ scale: 1.05 }}>
            <Button>View My Work</Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <p className="mt-20 text-[10px] tracking-[0.35em] text-gray-500/70 animate-bounce">
          SCROLL TO EXPLORE ↓
        </p>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
}
