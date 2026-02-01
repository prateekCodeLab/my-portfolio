"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend & UI",
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "CRUD Systems",
      "Authentication Basics",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Modern Project Structure",
    ],
  },
  {
    title: "Design & Practices",
    skills: [
      "UI/UX Thinking",
      "Component Reusability",
      "Performance Optimization",
      "Clean Code",
      "Scalable Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Tools & technologies <br className="hidden sm:block" /> I work with.
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
            >
              <h3 className="text-lg font-semibold text-white mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs border border-cyan-400/30 text-cyan-300 bg-cyan-400/5 backdrop-blur hover:bg-cyan-400/10 transition"
                  >
                    {skill}
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
