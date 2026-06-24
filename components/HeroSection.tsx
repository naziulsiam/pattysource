"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.85]);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Parallax background */}
      <motion.div
        className="hero-image-wrap"
        style={{ y: imageY }}
      >
        <Image
          src="/images/hero.png"
          alt="Golden Jamaican patties on a rustic wooden board"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay — solid, no AI gradient */}
      <motion.div
        className="absolute inset-0 bg-[#1C1209]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #1C1209)" }}
      />

      {/* Gold stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4930A]/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4930A]" />
            <span className="text-[#F5B731] text-xs sm:text-sm font-semibold uppercase tracking-widest">
              UK Jamaican Patty Wholesale
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5"
          >
            Fresh Caribbean Patties,{" "}
            <span className="text-[#F5B731]">Delivered To Your Business.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-white/80 text-base sm:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Premium Jamaican patties supplied to pubs, shops, cafés, and events
            across the UK. Six flavours. Honest wholesale pricing.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <button
              id="hero-cta-range"
              onClick={() => scrollTo("#products")}
              className="bg-[#D4930A] hover:bg-[#F5B731] text-white hover:text-[#1C1209] font-semibold px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center active:scale-95"
            >
              View Our Range
            </button>
            <button
              id="hero-cta-stockist"
              onClick={() => scrollTo("#stockist")}
              className="border-2 border-white/40 hover:border-[#F5B731] text-white hover:text-[#F5B731] font-semibold px-7 py-4 rounded-full transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer text-center active:scale-95"
            >
              Become a Stockist
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-x-5 gap-y-2 text-white/60 text-sm"
          >
            {["Freshly made", "Wholesale pricing", "Reliable delivery"].map(
              (badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="text-[#D4930A]">✓</span>
                  <span>{badge}</span>
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-[#D4930A]/40"
        />
      </motion.div>
    </section>
  );
}
