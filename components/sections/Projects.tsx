"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Cinematic Personal Portfolio",
    description:
      "A premium, cinematic developer portfolio focused on performance, design consistency, and storytelling.",
    points: [
      "Designed and built a modular Next.js portfolio with a cinematic UI system",
      "Implemented glassmorphism, soft particles, and smooth animations",
      "Focused on production-quality structure, scalability, and performance",
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
  },
  {
    title: "Library Management System",
    description:
      "A complete web-based system to manage library operations efficiently.",
    points: [
      "Designed frontend UI using HTML, CSS, and JavaScript",
      "Built backend logic using PHP and MySQL with full CRUD functionality",
      "Structured database schema and real-world application flow",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "WordPress Client Websites",
    description:
      "Client-facing WordPress websites developed during internship work.",
    points: [
      "Worked on real production WordPress websites",
      "Improved UI consistency, responsiveness, and layout structure",
      "Designed sections including testimonials, shop pages, and About pages",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "Elementor"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.08),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(99,102,241,0.08),transparent_50%)]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs uppercase mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Things I’ve built <br className="hidden sm:block" /> and learned from.
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(56,189,248,0.12)] hover:shadow-[0_0_60px_rgba(56,189,248,0.18)] transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 max-w-2xl">
                {project.description}
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-6">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs border border-cyan-400/30 text-cyan-300 bg-cyan-400/5 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
