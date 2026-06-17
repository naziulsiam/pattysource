"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";

type BasketItem = { quantity: number };
type Basket = Record<string, BasketItem>;

export default function DemoBasket() {
  const [basket, setBasket] = useState<Basket>({});
  const [showBasket, setShowBasket] = useState(false);

  const updateQty = useCallback((id: string, delta: number) => {
    setBasket((prev) => {
      const current = prev[id]?.quantity ?? 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { quantity: next } };
    });
  }, []);

  const basketItems = products
    .filter((p) => basket[p.id]?.quantity)
    .map((p) => ({ ...p, quantity: basket[p.id].quantity }));

  const subtotal = basketItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const totalUnits = basketItems.reduce((sum, item) => sum + item.quantity, 0);

  const whatsappMessage = encodeURIComponent(
    `Hi PattySource! I'd like a wholesale quote for:\n${basketItems
      .map((i) => `- ${i.name} x${i.quantity}`)
      .join("\n")}\nTotal units: ${totalUnits}\nPlease get in touch.`
  );

  return (
    <section
      id="order"
      className="py-20 lg:py-28 bg-[#FAF5EB]"
      aria-labelledby="order-heading"
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
              Build Your Order
            </span>
            <div className="h-px w-10 bg-[#D4930A]" />
          </div>
          <h2
            id="order-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1209]"
          >
            Try Our Demo Ordering System
          </h2>
          <p className="text-[#5C3317]/70 mt-4 max-w-xl mx-auto">
            Select your quantities below and send your request directly via
            WhatsApp or email. Online payment is coming soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Product selector */}
          <div className="lg:col-span-3 space-y-4">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#E8D5B0] rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#F0E6D0] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1C1209] text-sm truncate">
                    {product.name}
                  </div>
                  <div className="text-[#5C3317]/50 text-xs">
                    £{product.unitPrice.toFixed(2)} per unit
                  </div>
                </div>
                {/* Qty control */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    id={`decrease-${product.id}`}
                    onClick={() => updateQty(product.id, -1)}
                    className="w-8 h-8 rounded-full border border-[#E8D5B0] hover:border-[#D4930A] text-[#5C3317] hover:text-[#D4930A] flex items-center justify-center text-lg font-medium transition-colors cursor-pointer"
                    aria-label={`Decrease ${product.name}`}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-[#1C1209] text-sm">
                    {basket[product.id]?.quantity ?? 0}
                  </span>
                  <button
                    id={`increase-${product.id}`}
                    onClick={() => updateQty(product.id, 1)}
                    className="w-8 h-8 rounded-full bg-[#D4930A] hover:bg-[#F5B731] text-white flex items-center justify-center text-lg font-medium transition-colors cursor-pointer"
                    aria-label={`Increase ${product.name}`}
                  >
                    +
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Basket summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white border border-[#E8D5B0] rounded-2xl p-6 shadow-md sticky top-24"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl font-bold text-[#1C1209]">
                Your Basket
              </h3>
              {totalUnits > 0 && (
                <span className="bg-[#D4930A] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {totalUnits} units
                </span>
              )}
            </div>

            {/* Items */}
            <div className="min-h-[120px]">
              <AnimatePresence>
                {basketItems.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#5C3317]/40 text-sm text-center py-8"
                  >
                    Your basket is empty. Add products to get started.
                  </motion.p>
                ) : (
                  <div className="space-y-3">
                    {basketItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-[#5C3317]">
                          {item.name}{" "}
                          <span className="text-[#5C3317]/50">
                            ×{item.quantity}
                          </span>
                        </span>
                        <span className="font-semibold text-[#1C1209]">
                          £{(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Subtotal */}
            {basketItems.length > 0 && (
              <div className="border-t border-[#E8D5B0] mt-4 pt-4">
                <div className="flex justify-between font-bold text-[#1C1209]">
                  <span>Estimated Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[#5C3317]/50 text-xs mt-1">
                  Final quote provided after enquiry
                </p>
              </div>
            )}

            <div className="space-y-3 mt-6">
              {/* Disabled Pay Now */}
              <div className="relative">
                <button
                  id="pay-now-button"
                  disabled
                  className="w-full bg-[#5C3317]/20 text-[#5C3317]/40 font-semibold py-3 rounded-xl cursor-not-allowed text-sm"
                  aria-disabled="true"
                >
                  Pay Now
                </button>
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#2D5016] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  Online payment coming soon
                </span>
              </div>

              {/* WhatsApp */}
              <a
                id="whatsapp-cta"
                href={
                  basketItems.length
                    ? `https://wa.me/447700000000?text=${whatsappMessage}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-xl text-sm transition-all duration-200 ${
                  basketItems.length
                    ? "bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-md hover:shadow-lg cursor-pointer"
                    : "bg-[#25D366]/30 text-white/40 cursor-not-allowed"
                }`}
                onClick={(e) => !basketItems.length && e.preventDefault()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                </svg>
                Request Quote via WhatsApp
              </a>

              {/* Contact Sales */}
              <button
                id="contact-sales-button"
                onClick={() =>
                  document.querySelector("#stockist")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full border border-[#D4930A]/40 hover:border-[#D4930A] text-[#D4930A] font-semibold py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer"
              >
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
