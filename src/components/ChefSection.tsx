import { motion } from 'motion/react';
import { Award, Crown, Instagram, Twitter, Linkedin, Sparkles, Utensils } from 'lucide-react';
import { CHEFS } from '../data/restaurantData';

export default function ChefSection() {
  return (
    <section id="chef" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Crown className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Master Culinary Artists</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Meet Our <span className="text-gold-gradient italic font-normal">Michelin Masters</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
            Guiding 45+ years of royal Awadhi recipes with contemporary gastronomy & master sommelier pairings
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEFS.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-glass-card border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={chef.photo}
                    alt={chef.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                      {chef.experience}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4 -mt-6 relative z-10">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {chef.name}
                    </h3>
                    <p className="text-xs text-[#D4AF37] tracking-wider uppercase font-medium mt-1">
                      {chef.title}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {chef.bio}
                  </p>

                  {/* Signature Dish */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs space-y-1">
                    <span className="text-[#C1121F] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5" />
                      Signature Recipe:
                    </span>
                    <p className="text-white font-serif font-medium text-sm">{chef.signatureDish}</p>
                  </div>

                  {/* Awards List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#D4AF37]" />
                      Accolades & Distinctions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {chef.awards.map((award, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/80"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Follow Master Chef</span>
                <div className="flex items-center gap-3">
                  {chef.socials.instagram && (
                    <a
                      href={chef.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-full bg-white/5 hover:bg-[#C1121F] hover:text-white transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {chef.socials.twitter && (
                    <a
                      href={chef.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="p-2 rounded-full bg-white/5 hover:bg-[#C1121F] hover:text-white transition-colors"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {chef.socials.linkedin && (
                    <a
                      href={chef.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-full bg-white/5 hover:bg-[#C1121F] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
