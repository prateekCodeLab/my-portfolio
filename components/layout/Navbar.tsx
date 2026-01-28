"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 h-14 shadow-lg"
          : "bg-transparent h-16"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-full">

            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-wide gradient-text hover:opacity-90 transition"
            >
              PK
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-10 text-sm text-gray-300">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="relative hover:text-cyan-400 transition group"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 text-sm border border-cyan-400/40 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              Hire Me
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-cyan-400 text-2xl"
            >
              <FiMenu />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-black p-8 flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-cyan-400 text-2xl mb-10"
              >
                <FiX />
              </button>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-6 text-lg text-gray-200">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-cyan-400 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-10 px-5 py-3 text-center border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
