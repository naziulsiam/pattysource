"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businessTypes = [
  "Pub / Bar",
  "Restaurant / Café",
  "Convenience Store / Off-Licence",
  "Supermarket / Deli",
  "Food Truck / Market Stall",
  "Events / Catering",
  "Other",
];

const orderQuantities = [
  "Under 48 units/month",
  "48–96 units/month",
  "96–200 units/month",
  "200–500 units/month",
  "500+ units/month",
];

type FormState = {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  monthlyQty: string;
};

export default function StockistForm() {
  const [form, setForm] = useState<FormState>({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    monthlyQty: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="stockist"
      className="py-20 lg:py-28 bg-[#2D5016] relative overflow-hidden"
      aria-labelledby="stockist-heading"
    >
      {/* Subtle warm pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #F5B731 0, #F5B731 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#F5B731]" />
            <span className="text-[#F5B731] text-sm font-semibold uppercase tracking-widest">
              Partner With Us
            </span>
            <div className="h-px w-10 bg-[#F5B731]" />
          </div>
          <h2
            id="stockist-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Become a PattySource Stockist
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg">
            Fill in the form below and our sales team will be in touch within
            one business day.
          </p>
        </motion.div>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="font-display text-3xl font-bold text-white mb-3">
                  Application Received!
                </h3>
                <p className="text-white/70 text-lg max-w-md mx-auto">
                  Thank you, {form.contactPerson}. Our team will contact you at{" "}
                  <span className="text-[#F5B731]">{form.email}</span> within
                  one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#F5B731] text-sm hover:underline cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
              >
                {/* Business Name */}
                <div className="sm:col-span-2 sm:grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-white/80 text-sm font-medium mb-2"
                    >
                      Business Name <span className="text-[#F5B731]">*</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="e.g. The Crown & Anchor"
                      className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block text-white/80 text-sm font-medium mb-2"
                    >
                      Contact Person <span className="text-[#F5B731]">*</span>
                    </label>
                    <input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      required
                      value={form.contactPerson}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Email Address <span className="text-[#F5B731]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@yourbusiness.co.uk"
                    className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Phone Number <span className="text-[#F5B731]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 000000"
                    className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Business Type <span className="text-[#F5B731]">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="bg-[#2D5016]">
                      Select your business type
                    </option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#2D5016]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Monthly Qty */}
                <div>
                  <label
                    htmlFor="monthlyQty"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Est. Monthly Order Quantity{" "}
                    <span className="text-[#F5B731]">*</span>
                  </label>
                  <select
                    id="monthlyQty"
                    name="monthlyQty"
                    required
                    value={form.monthlyQty}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 focus:border-[#F5B731] text-white rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="bg-[#2D5016]">
                      Select a range
                    </option>
                    {orderQuantities.map((q) => (
                      <option key={q} value={q} className="bg-[#2D5016]">
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 mt-2">
                  <motion.button
                    id="stockist-submit"
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full bg-[#D4930A] hover:bg-[#F5B731] disabled:opacity-60 text-white hover:text-[#1C1209] font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      "Start Your Partnership →"
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
