import { motion } from 'motion/react';
import { Award, ShieldCheck, Flame, Sparkles, Clock, Crown } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/restaurantData';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Decorative Glow Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#C1121F]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Crown className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Our Royal Heritage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            A Century of Culinary Grandeur <br />
            <span className="text-gold-gradient italic font-normal">& Awadhi Royalty</span>
          </motion.h2>
        </div>

        {/* Top Split Layout: Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-[#F8F9FA]/80 font-light text-base sm:text-lg leading-relaxed"
          >
            <p className="text-xl font-serif italic text-white/90 border-l-2 border-[#C1121F] pl-4">
              "We do not merely prepare food; we resurrect centuries-old royal manuscripts sealed with saffron, charcoal, and patience."
            </p>

            <p>
              Born in the opulent royal courts of 19th century Lucknow, <strong className="text-white font-medium">Royal Awadh</strong> carries the legacy of Nawab Wajid Ali Shah’s master khansamas. Our signature cooking technique—<span className="text-[#D4AF37] font-normal">Dum Pukht</span> (slow cooking in dough-sealed clay pots)—allows spices to seep deep into tender meats over a 12 to 24-hour woodfire simmer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-black/40 border border-[#D4AF37]/20 backdrop-blur-md">
                <div className="flex items-center gap-3 text-white font-serif text-lg font-semibold mb-2">
                  <Flame className="w-5 h-5 text-[#C1121F]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  To preserve and elevate authentic Awadhi royal gastronomy onto the global fine-dining stage with uncompromising technical perfection.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-[#D4AF37]/20 backdrop-blur-md">
                <div className="flex items-center gap-3 text-white font-serif text-lg font-semibold mb-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  Creating immersive, multi-sensory banquets where every guest dines like royalty surrounded by sitar ragas and gold-infused flavors.
                </p>
              </div>
            </div>

            {/* Badges / Accolades Row */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Certified Organic & Halal</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white">
                <Award className="w-4 h-4 text-[#C1121F]" />
                <span>World’s 50 Best Fine Dining 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Parallax Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame border */}
              <div className="absolute -inset-4 rounded-3xl border border-[#D4AF37]/30 transform rotate-2 pointer-events-none" />
              <div className="absolute -inset-4 rounded-3xl border border-[#C1121F]/30 transform -rotate-2 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                  alt="Awadhi Chef Claypot Dum Pukht"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Overlaid Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 border border-[#D4AF37]/30 backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <p className="font-serif text-white font-bold text-base">Claypot Dum Unsealing</p>
                    <p className="text-xs text-[#D4AF37] font-light">Authentic Charcoal Woodfire Method</p>
                  </div>
                  <div className="p-3 rounded-full bg-[#C1121F] text-white">
                    <Flame className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Timeline Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Royal Timeline
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1 font-light">
              From Royal Palaces to Modern Fine Dining
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-[#D4AF37]/40 backdrop-blur-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-gold-gradient">
                    {event.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {event.title}
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
