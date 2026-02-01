"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.08),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(99,102,241,0.08),transparent_50%)]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs uppercase mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Let’s build something <br className="hidden sm:block" /> meaningful together.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            I’m always open to discussing new opportunities, interesting projects,
            or collaborations. If you have an idea or just want to connect,
            feel free to reach out.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(56,189,248,0.15)]"
        >
          <p className="text-gray-300 mb-6">
            The best way to reach me is via email.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-block px-7 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/15 transition shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            Say Hello 👋
          </a>

          {/* Optional Social Links */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
