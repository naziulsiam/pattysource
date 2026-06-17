"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Hartley",
    role: "Landlord",
    business: "The Crown & Anchor, Bristol",
    avatar: "/images/testimonial-1.png",
    quote:
      "We started stocking PattySource patties as a bar snack six months ago and they've absolutely flown out the door. The beef patty is especially popular on match days. Delivery is always on time and the pricing works well for us.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Store Manager",
    business: "Sunrise Convenience, Leicester",
    avatar: "/images/testimonial-2.png",
    quote:
      "Our customers love the variety — we sell all five flavours and the cheese and beef are our top sellers. PattySource have been reliable from day one and the wholesale price point means good margins for us.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Thompson",
    role: "Event Director",
    business: "Vibez Events, London",
    avatar: "/images/testimonial-3.png",
    quote:
      "We used PattySource for a Caribbean food festival with 2,000 attendees. They handled the volume without a problem, quality was consistently great, and the jerk chicken patties were one of the most talked-about dishes of the event.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#F0E6D0] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#D4930A]" />
            <span className="text-[#D4930A] text-sm font-semibold uppercase tracking-widest">
              What Our Stockists Say
            </span>
            <div className="h-px w-10 bg-[#D4930A]" />
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1209]"
          >
            Trusted by Businesses{" "}
            <span className="text-[#D4930A]">Across the UK</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 sm:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <span key={i} className="text-[#D4930A] text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl sm:text-2xl text-[#1C1209] leading-relaxed mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#D4930A]/30 shrink-0">
                    <Image
                      src={testimonials[active].avatar}
                      alt={`${testimonials[active].name} — ${testimonials[active].role}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#1C1209]">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-[#5C3317]/60">
                      {testimonials[active].role} · {testimonials[active].business}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#D4930A] to-[#F5B731]" />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === active
                      ? "w-8 h-2.5 bg-[#D4930A]"
                      : "w-2.5 h-2.5 bg-[#D4930A]/30"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                id="testimonial-prev"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#D4930A]/30 hover:border-[#D4930A] hover:bg-[#D4930A] hover:text-white text-[#5C3317] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                ←
              </button>
              <button
                id="testimonial-next"
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#D4930A]/30 hover:border-[#D4930A] hover:bg-[#D4930A] hover:text-white text-[#5C3317] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
