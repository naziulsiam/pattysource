"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

function SpiceIndicator({ level, label }: { level: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((pip) => (
          <div
            key={pip}
            className={`w-2 h-2 rounded-full transition-colors ${
              level === 0
                ? "bg-gray-200"
                : pip <= level
                ? "bg-[#D4930A]"
                : "bg-[#D4930A]/20"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-[#5C3317]/60 font-medium">{label}</span>
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const scrollToOrder = () =>
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });

  const isPremium = product.unitPrice >= 1.89;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F0E6D0]">
        <Image
          src={product.image}
          alt={`${product.name} — Jamaican patty cross-section showing filling`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1C1209]/80 text-[#F5B731] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Premium badge */}
        {isPremium && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D4930A] text-white shadow">
              Premium
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#1C1209] leading-tight">
            {product.name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-[#D4930A] font-bold text-base whitespace-nowrap">
              £{product.unitPrice.toFixed(2)}
            </span>
            <div className="text-[#5C3317]/50 text-[10px] font-medium">per unit</div>
          </div>
        </div>

        <SpiceIndicator level={product.spiceLevel} label={product.spiceLabel} />

        <p className="text-[#5C3317]/70 text-sm leading-relaxed mt-3 flex-1">
          {product.description}
        </p>

        <button
          id={`request-price-${product.id}`}
          onClick={scrollToOrder}
          className="mt-5 w-full bg-[#FAF5EB] hover:bg-[#D4930A] border border-[#D4930A]/30 hover:border-[#D4930A] text-[#D4930A] hover:text-white font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
        >
          Request Wholesale Price
        </button>
      </div>
    </motion.article>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 lg:py-28 bg-[#F0E6D0]"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#D4930A]" />
            <span className="text-[#D4930A] text-sm font-semibold uppercase tracking-widest">
              Our Range
            </span>
            <div className="h-px w-10 bg-[#D4930A]" />
          </div>
          <h2
            id="products-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1209]"
          >
            Premium Patties, Every Flavour
          </h2>
          <p className="text-[#5C3317]/70 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Consistently delicious across every variety — from our classic beef
            to our fiery jerk chicken.
          </p>

          {/* Pricing note */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white/80 border border-[#D4930A]/20 rounded-full px-5 py-2 text-sm text-[#5C3317]/80">
            <span className="text-[#D4930A] font-bold">Wholesale pricing:</span>
            <span>from <strong className="text-[#1C1209]">£1.79/unit</strong></span>
            <span className="text-[#D4930A]">·</span>
            <span>Premium from <strong className="text-[#1C1209]">£1.89/unit</strong></span>
          </div>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 lg:mt-12"
        >
          <p className="text-[#5C3317]/60 text-sm mb-4">
            All patties available in cases of 24, 48, or 96 units
          </p>
          <button
            onClick={() =>
              document.querySelector("#stockist")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-[#2D5016] hover:text-[#D4930A] font-semibold text-sm transition-colors cursor-pointer"
          >
            Enquire about custom quantities
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
