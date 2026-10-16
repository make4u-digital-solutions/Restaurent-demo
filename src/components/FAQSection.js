"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function FAQSection({ onOpenReservation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-24 sm:py-32 bg-[#F5F1E8] border-t border-[#E8E3D9] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] leading-relaxed">
            Essential information to ensure your evening with us is effortless and memorable.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {restaurantData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#B85D36]/40 shadow-sm"
                    : "bg-[#FAF8F3] border-[#E8E3D9] hover:border-[#B85D36]/30"
                }`}
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#B85D36]/40 rounded-2xl cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#24231F] font-normal leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#B85D36] text-white"
                        : "bg-white border border-[#E8E3D9] text-[#24231F]"
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </motion.div>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-1 text-sm sm:text-base text-[#6E6B65] leading-relaxed border-t border-[#F5F1E8] font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Questions Note */}
        <div className="mt-14 text-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E3D9]">
          <p className="text-sm text-[#24231F] font-medium mb-2">
            Have a bespoke inquiry or special dietary requirement?
          </p>
          <p className="text-xs text-[#6E6B65] mb-4">
            Our maître d&apos; and sommelier team are delighted to assist with any accommodations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B85D36] text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#9C4B29] transition-colors"
            >
              Book With Special Requests
            </button>
            <a
              href={`mailto:${restaurantData.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F3] text-[#24231F] border border-[#E8E3D9] text-xs uppercase tracking-[0.15em] font-medium hover:border-[#B85D36] transition-colors"
            >
              Email Concierge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
