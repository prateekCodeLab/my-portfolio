"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend / Full-Stack Developer",
    company: "Self-Driven Projects",
    duration: "2023 — Present",
    points: [
      "Designed and developed a cinematic personal portfolio using modern frontend tools",
      "Built reusable UI components with strong focus on clean design, performance, and scalability",
      "Implemented glassmorphism UI, smooth animations, and responsive layouts",
      "Worked with real Git workflows and modern frontend architecture",
      "Focused on production-quality UI, not demo-level projects",
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "Git",
    ],
  },
  {
    role: "WordPress Developer Intern",
    company: "Scyara Company",
    duration: "May 2025 — July 2025",
    points: [
      "Worked on real client-facing WordPress websites in a professional team environment",
      "Designed and fixed headers, footers, testimonial sections, shop pages, and About pages",
      "Improved layout alignment, responsiveness, and overall UI consistency",
      "Created banners and visual assets for testimonial sections",
      "Replaced duplicate assets and optimized page structure",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "Elementor"],
  },
  {
    role: "Web Developer (Internship / Project Work)",
    company: "RaghuvarTech",
    duration: "2024",
    points: [
      "Developed a complete Library Management System from scratch",
      "Implemented frontend using HTML, CSS, and JavaScript",
      "Built backend using PHP and MySQL with full CRUD functionality",
      "Designed database structure and application flow",
      "Learned how real-world projects move from requirements to delivery",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.08),transparent_50%)]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Where I’ve built, learned <br className="hidden sm:block" /> and grown.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10 space-y-16">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[11px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

              {/* Glass Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(56,189,248,0.12)]">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-cyan-400 text-sm mb-5">
                  {exp.company}
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs border border-cyan-400/30 text-cyan-300 bg-cyan-400/5 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
