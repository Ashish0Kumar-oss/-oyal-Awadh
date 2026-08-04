import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Mail, Sparkles, Crown, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#C1121F', '#FFFFFF']
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative py-20 bg-[#0A0A0A] overflow-hidden border-t border-b border-white/10">
      {/* Glow background */}
      <div className="absolute inset-0 bg-radial from-[#C1121F]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-glass-card border border-[#D4AF37]/30 shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mx-auto shadow-xl">
            <Crown className="w-7 h-7 text-[#C1121F]" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              The Royal Gazette & Dining Club
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Join The Royal Awadh Society
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light mt-2">
              Subscribe to receive private invitations to secret seasonal menu releases, wine tastings, and a complimentary <strong className="text-[#D4AF37]">$25 Welcome Dining Voucher</strong>.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="newsletter-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-3"
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                  <input
                    type="email"
                    placeholder="Enter your VIP email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-32 py-3.5 rounded-2xl bg-black/80 border border-white/20 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                  >
                    Subscribe
                  </button>
                </div>
                {error && <p className="text-xs text-[#E63946]">{error}</p>}
              </motion.form>
            ) : (
              <motion.div
                key="newsletter-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-black/60 border border-[#D4AF37]/50 max-w-md mx-auto space-y-2 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="font-serif text-lg text-white font-bold">Welcome to the Royal Club!</p>
                <p className="text-xs text-white/80 font-light">
                  Your $25 Welcome Dining Voucher code <strong className="text-[#D4AF37]">ROYALVIP2026</strong> has been activated.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
