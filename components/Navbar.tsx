"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Order", href: "#order" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1C1209]/96 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[104px] lg:h-32">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group cursor-pointer shrink-0"
              aria-label="PattySource home"
            >
              <div className="relative w-60 h-20 lg:w-80 lg:h-26">
                <Image
                  src="/images/pattysource-logo.png"
                  alt="PattySource — Your Wholesale Patty Partner"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="320px"
                />
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/80 hover:text-[#F5B731] text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#stockist")}
                className="bg-[#D4930A] hover:bg-[#F5B731] text-white hover:text-[#1C1209] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                Become a Stockist
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden text-white p-2 cursor-pointer"
            >
              <div className="w-6 space-y-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-current rounded"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[104px] left-0 right-0 z-40 bg-[#1C1209]/98 backdrop-blur-md border-t border-[#D4930A]/20 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-white/80 hover:text-[#F5B731] font-medium py-3 px-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                onClick={() => scrollTo("#stockist")}
                className="block w-full text-center bg-[#D4930A] text-white font-semibold py-3 rounded-full mt-4 cursor-pointer"
              >
                Become a Stockist
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
