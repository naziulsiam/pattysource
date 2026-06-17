"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🔥",
    title: "Authentic Caribbean Flavour",
    description:
      "Made to traditional Jamaican recipes with hand-selected spices — the genuine taste your customers will keep coming back for.",
  },
  {
    icon: "🚚",
    title: "Reliable UK Delivery",
    description:
      "Consistent, on-time delivery across the UK so your stock never runs out when demand is high.",
  },
  {
    icon: "💷",
    title: "Competitive Wholesale Prices",
    description:
      "Trade-friendly pricing with transparent cost structures — no hidden fees, no surprises on your invoice.",
  },
  {
    icon: "🏪",
    title: "Perfect for Any Business",
    description:
      "Whether you're a busy pub, a corner shop, a café, or running a summer event — we have a package that fits.",
  },
  {
    icon: "⭐",
    title: "Consistent Quality",
    description:
      "Every batch is made to the same exacting standard, so your customers always get the same great patty.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "A real account manager, not a chatbot. We're here when you need to scale up, adjust your order, or have a question.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-[#1C1209] relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Subtle warm texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #D4930A 0%, transparent 50%), radial-gradient(circle at 75% 75%, #2D5016 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Why PattySource
            </span>
            <div className="h-px w-10 bg-[#D4930A]" />
          </div>
          <h2
            id="why-us-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Built for{" "}
            <span className="text-[#F5B731]">Business Owners Like You</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg">
            We understand what busy hospitality and retail businesses need.
            Here's why our stockists keep coming back.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 hover:border-[#D4930A]/40 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 border border-[#D4930A]/20 rounded-2xl p-8 text-center"
        >
          <p className="text-[#F5B731] font-display text-2xl font-bold mb-2">
            "This looks like a supplier I can trust."
          </p>
          <p className="text-white/50 text-sm">
            That's the first impression we aim to make — every single time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
