"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, Phone, MessageSquare } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState("form"); // "form" | "confirmed"
  const [formData, setFormData] = useState({
    guests: "2",
    date: "",
    time: "19:00",
    seating: "Main Dining Room",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl bg-[#FAF8F3] rounded-3xl shadow-2xl border border-[#E8E3D9] overflow-hidden my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-modal-title"
          >
            {/* Header */}
            <div className="bg-[#24231F] text-white p-6 sm:p-8 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E6A37A] font-medium flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3" /> Dining Reservation
                </span>
                <h3
                  id="reservation-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF8F3]"
                >
                  Reserve Your Table
                </h3>
                <p className="text-xs text-[#D8D2C4] mt-1 font-sans">
                  Join us at Aurelia · {restaurantData.contact.shortAddress}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/20 text-[#FAF8F3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E6A37A]"
                aria-label="Close reservation modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {step === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Party Size & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1.5">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({ ...formData, guests: e.target.value })
                          }
                          className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                          required
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests (Standard Table)</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests (Booth / Table)</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7-8 Guests (Celebration Table)</option>
                          <option value="large">9+ Guests (Private Dining Inquiry)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                        required
                      />
                    </div>
                  </div>

                  {/* Preferred Time & Seating Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1.5">
                        Preferred Seating Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                        required
                      >
                        <option value="17:00">5:00 PM (Early Dinner)</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM (Prime Evening)</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM (Late Seating)</option>
                        <option value="21:30">9:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1.5">
                        Seating Ambience
                      </label>
                      <select
                        value={formData.seating}
                        onChange={(e) =>
                          setFormData({ ...formData, seating: e.target.value })
                        }
                        className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                      >
                        <option value="Main Dining Room">Main Dining Room (Candlelit)</option>
                        <option value="Woodfire Counter">Woodfire Hearth Counter</option>
                        <option value="Courtyard Veranda">Courtyard Veranda (Covered)</option>
                        <option value="Private Cellar">Subterranean Wine Cellar</option>
                      </select>
                    </div>
                  </div>

                  {/* Guest Contact Details */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="eleanor@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2.5 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1">
                        Dietary Notes or Occasion
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Allergies, anniversaries, special seating requests..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full bg-white border border-[#E8E3D9] rounded-xl px-4 py-2 text-sm text-[#24231F] focus:outline-none focus:ring-2 focus:ring-[#B85D36] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-4 border-t border-[#E8E3D9]">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#B85D36] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#9C4B29] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#B85D36]/60 cursor-pointer"
                    >
                      Request Table Reservation
                    </button>
                    <p className="text-[11px] text-center text-[#6E6B65] mt-2.5">
                      Our Maître d&apos; reviews all table requests. You will receive an immediate SMS/Email confirmation.
                    </p>
                  </div>
                </form>
              ) : (
                /* Confirmed State */
                <div className="text-center py-6 sm:py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#4A5B38]/15 text-[#4A5B38] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D36]">
                      Request Received
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#24231F] mt-1">
                      We Look Forward to Welcoming You
                    </h4>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-white p-5 rounded-2xl border border-[#E8E3D9] text-left max-w-md mx-auto space-y-2 text-xs text-[#24231F]">
                    <div className="flex justify-between py-1 border-b border-[#F5F1E8]">
                      <span className="text-[#6E6B65]">Guest Name:</span>
                      <span className="font-semibold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#F5F1E8]">
                      <span className="text-[#6E6B65]">Party Size:</span>
                      <span className="font-semibold">{formData.guests} Guests</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#F5F1E8]">
                      <span className="text-[#6E6B65]">Date & Time:</span>
                      <span className="font-semibold">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#6E6B65]">Seating Area:</span>
                      <span className="font-semibold">{formData.seating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6E6B65] max-w-sm mx-auto leading-relaxed">
                    A confirmation has been sent to <strong>{formData.email}</strong>.
                    For same-day inquiries or urgent changes, please contact concierge at{" "}
                    <strong>{restaurantData.contact.phone}</strong>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full bg-[#24231F] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#B85D36] transition-colors"
                  >
                    Return to Experience
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
