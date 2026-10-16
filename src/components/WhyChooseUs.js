"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Aurelia"
      className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A5B38]/10 text-[#4A5B38] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Aurelia Standard</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
              An Elevated Approach to Everyday Gastronomy
            </h2>
          </div>
          <p className="max-w-md text-[#6E6B65] text-sm sm:text-base leading-relaxed">
            We reject the frantic pace of modern dining. Instead, we cultivate an
            environment where time slows down, courses flow naturally, and every
            plate tells a story of dedicated craftsmanship.
          </p>
        </div>

        {/* Distinctive Asymmetrical Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {restaurantData.whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                index === 0
                  ? "bg-[#24231F] text-white border-[#24231F] shadow-xl"
                  : index === 1
                  ? "bg-[#F5F1E8] text-[#24231F] border-[#E8E3D9]"
                  : "bg-white text-[#24231F] border-[#E8E3D9] hover:border-[#B85D36]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full ${
                      index === 0
                        ? "bg-white/15 text-[#EADEC9]"
                        : "bg-[#B85D36]/10 text-[#B85D36]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`font-serif text-2xl font-light ${
                      index === 0 ? "text-white/40" : "text-[#B85D36]/40"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal leading-snug mb-1">
                  {item.title}
                </h3>
                <span
                  className={`text-xs uppercase tracking-wider block mb-4 font-sans ${
                    index === 0 ? "text-[#E6A37A]" : "text-[#B85D36]"
                  }`}
                >
                  {item.subtitle}
                </span>

                <p
                  className={`text-sm leading-relaxed ${
                    index === 0 ? "text-[#D8D2C4]" : "text-[#6E6B65]"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div
                className={`mt-8 pt-4 border-t flex items-center gap-2 text-xs font-medium ${
                  index === 0
                    ? "border-white/10 text-[#FAF8F3]"
                    : "border-[#E8E3D9] text-[#24231F]"
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${
                    index === 0 ? "text-[#E6A37A]" : "text-[#4A5B38]"
                  }`}
                />
                <span>Guaranteed In Every Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
