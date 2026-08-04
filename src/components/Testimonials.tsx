import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Crown, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C1121F]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Crown className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Royal Guest Feedback</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Acclaim From <span className="text-gold-gradient italic font-normal">Critics & Royalty</span>
          </motion.h2>
        </div>

        {/* Testimonial Card Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 sm:p-12 rounded-3xl bg-glass-card border border-[#D4AF37]/30 shadow-2xl space-y-6 text-center"
            >
              {/* Quote Mark Icon */}
              <div className="w-12 h-12 rounded-full bg-[#C1121F]/20 text-[#D4AF37] flex items-center justify-center mx-auto border border-[#D4AF37]/30">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed font-light">
                "{current.review}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-white/10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-3 shadow-xl">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" title="Verified Diner" />
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase mt-0.5">
                  {current.role} • {current.country}
                </p>
                <span className="text-[11px] text-white/50 font-light mt-1">
                  Favorite Dish: <strong className="text-white font-serif">{current.favoriteDish}</strong>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3.5 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#C1121F] hover:text-white transition-all shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3.5 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#C1121F] hover:text-white transition-all shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
