import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Copy, Check, Clock, Calendar, Gift, Flame, Crown } from 'lucide-react';
import { OFFERS } from '../data/restaurantData';
import { Offer } from '../types';

interface SpecialOffersProps {
  onClaimOffer?: (offerCode: string) => void;
}

export default function SpecialOffers({ onClaimOffer }: SpecialOffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 36,
    minutes: 42,
    seconds: 15
  });

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="offers" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1121F]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Gift className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Limited Privileges</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Seasonal <span className="text-gold-gradient italic font-normal">Royal Experiences</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
            Exclusive tasting menus & weekend high tea privileges for our royal club members
          </p>
        </div>

        {/* Live Countdown Timer Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-black/60 border border-[#D4AF37]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[#C1121F]/20 text-[#D4AF37]">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="font-serif text-white text-lg font-bold">Limited Seasonal Tasting Menu Window</p>
              <p className="text-xs text-white/60">Offers expire when the countdown reaches zero</p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <div className="p-3 rounded-xl bg-black border border-white/10 text-center min-w-[70px]">
              <span className="font-serif text-2xl font-bold text-gold-gradient">{timeLeft.hours}</span>
              <span className="text-[10px] text-white/50 block font-sans uppercase">Hours</span>
            </div>
            <span className="text-xl text-[#D4AF37] font-bold">:</span>
            <div className="p-3 rounded-xl bg-black border border-white/10 text-center min-w-[70px]">
              <span className="font-serif text-2xl font-bold text-gold-gradient">{timeLeft.minutes}</span>
              <span className="text-[10px] text-white/50 block font-sans uppercase">Mins</span>
            </div>
            <span className="text-xl text-[#D4AF37] font-bold">:</span>
            <div className="p-3 rounded-xl bg-black border border-white/10 text-center min-w-[70px]">
              <span className="font-serif text-2xl font-bold text-gold-gradient">{timeLeft.seconds}</span>
              <span className="text-[10px] text-white/50 block font-sans uppercase">Secs</span>
            </div>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-3xl bg-glass-card border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Column */}
              <div className="md:w-5/12 relative h-64 md:h-auto min-h-[250px]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/50" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C1121F] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  {offer.badge}
                </span>

                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#D4AF37] text-[#D4AF37] font-serif font-bold text-sm">
                  {offer.discount}
                </div>
              </div>

              {/* Details Column */}
              <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] tracking-wider font-medium mt-1">
                    {offer.subtitle}
                  </p>
                  <p className="text-xs text-white/70 font-light leading-relaxed mt-3">
                    {offer.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Includes:</span>
                    <ul className="space-y-1 text-xs text-white/80">
                      {offer.includes.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Promo Code & Claim CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-black/60 border border-dashed border-[#D4AF37]/50 text-xs">
                    <span className="font-mono text-[#D4AF37] font-bold px-1">{offer.code}</span>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      aria-label="Copy Promo Code"
                      className="p-1 text-white/60 hover:text-white"
                      title="Copy code"
                    >
                      {copiedCode === offer.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (onClaimOffer) onClaimOffer(offer.code);
                      else document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
