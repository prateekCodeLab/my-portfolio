"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* Soft cosmic background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.10),transparent_50%)]" />

      {/* Soft floating particles (SSR-safe) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDuration: `${3 + (i % 5)}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 text-xs tracking-[0.25em] mb-4 uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Building digital experiences with logic, emotion & intention.
          </h2>

          <p className="mt-6 text-white/75 leading-relaxed max-w-xl">
            I'm <span className="text-cyan-400 font-medium">Prateek Kumar</span> — 
            a full-stack developer who blends engineering discipline, creative thinking, 
            and user-focused design to craft meaningful digital products.
          </p>

          <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
            I don’t just write code — I build experiences that feel fast, intuitive, cinematic, 
            and refined. My mission is to transform ideas into products that feel alive, thoughtful, 
            and impactful in the real world.
          </p>

          <button className="mt-8 px-6 py-3 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-400/10 transition backdrop-blur-md">
            Let’s Work Together →
          </button>
        </motion.div>

        {/* RIGHT GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
        >
          <div className="w-full h-64 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-white/60">
            Your Photo / Avatar
          </div>

          <p className="mt-4 text-center text-white/60 tracking-wide">
            Calm. Curious. Focused.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
