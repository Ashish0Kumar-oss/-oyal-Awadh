import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Crown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message content required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C1121F]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Concierge & Inquiries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Get In Touch <span className="text-gold-gradient italic font-normal">With Us</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
            Our royal butler concierge is available daily for private dining buyouts & media inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info Cards & Styled Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address & Hours */}
            <div className="p-6 sm:p-8 rounded-3xl bg-glass-card border border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#C1121F]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Palace Address</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed mt-1">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#C1121F]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Direct Concierge</h3>
                  <p className="text-xs text-[#D4AF37] font-medium mt-1">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <p className="text-[11px] text-white/50">{RESTAURANT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-[#C1121F]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Royal Service Hours</h3>
                  <div className="space-y-1 text-xs text-white/70 font-light mt-1">
                    {RESTAURANT_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between gap-4">
                        <span className="text-white/50">{h.days}:</span>
                        <span className="text-white">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Styled Map Mockup */}
            <div className="p-4 rounded-3xl bg-black/60 border border-white/10 overflow-hidden relative h-56 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Location"
                className="w-full h-full object-cover filter brightness-50 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#C1121F] border-2 border-[#D4AF37] text-white flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <Crown className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-black/80 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  Royal Awadh Mayfair
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-glass-card border border-[#D4AF37]/30 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Send Concierge Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maharani Gayatri"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                      {errors.name && <p className="text-[11px] text-[#E63946] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. gayatri@palace.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-[#E63946] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, subject: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="General Inquiry" className="bg-[#141414]">General Table Inquiry</option>
                      <option value="Private Dining" className="bg-[#141414]">Private Royal Suite Buyout</option>
                      <option value="Catering & Events" className="bg-[#141414]">Wedding & Royal Banquet Catering</option>
                      <option value="Press & Media" className="bg-[#141414]">Press & Culinary Media</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                      Message Content *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message or inquiry details..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                    {errors.message && <p className="text-[11px] text-[#E63946] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E63946] to-[#C1121F] text-white font-semibold text-xs uppercase tracking-widest shadow-xl shadow-[#C1121F]/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Send Message To Concierge</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto" />
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Message Received
                  </h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto font-light">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our royal concierge desk has received your message and will respond within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
