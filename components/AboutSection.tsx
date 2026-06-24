"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years supplying UK businesses" },
  { value: "UK-Wide", label: "Delivery coverage" },
  { value: "20+", label: "Patty varieties available" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 lg:py-28 bg-[#FAF5EB]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Baker placing freshly baked Jamaican patties on a tray in an artisan kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#D4930A] text-white rounded-xl p-4 shadow-xl max-w-[180px]"
            >
              <div className="font-display text-3xl font-bold">100%</div>
              <div className="text-sm text-white/90 mt-1">Authentic Jamaican recipe</div>
            </motion.div>
            {/* Decorative corner frame */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#2D5016]/30 rounded-tl-lg" />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4930A]" />
              <span className="text-[#D4930A] text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1209] leading-tight mb-6"
            >
              The Caribbean Flavour{" "}
              <span className="text-[#D4930A]">Your Business Deserves</span>
            </h2>

            <p className="text-[#5C3317]/80 text-lg leading-relaxed mb-6">
              PattySource connects businesses with authentic Caribbean flavours.
              We supply high-quality Jamaican patties with consistent taste,
              competitive wholesale pricing, and dependable service.
            </p>
            <p className="text-[#5C3317]/70 leading-relaxed mb-10">
              Born from a passion for genuine Caribbean street food, we work
              directly with experienced patty makers to bring the real taste of
              Jamaica to pubs, cafés, shops, and events across the United
              Kingdom.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-[#D4930A]/20 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#D4930A]">
                    {stat.value}
                  </div>
                  <div className="text-[#5C3317]/70 text-xs sm:text-sm mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
