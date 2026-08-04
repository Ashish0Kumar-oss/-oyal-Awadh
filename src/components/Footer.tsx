import { motion } from 'motion/react';
import { UtensilsCrossed, Phone, Mail, MapPin, Instagram, Facebook, Award, ArrowUp, Crown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] text-white/80 pt-20 pb-12 overflow-hidden border-t border-[#D4AF37]/20">
      {/* Animated Gold Crest Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-black/60 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  ROYAL AWADH
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light -mt-1">
                  Luxury Fine Dining
                </span>
              </div>
            </a>

            <p className="text-xs text-white/70 font-light leading-relaxed">
              Resurrecting 19th-century royal Awadhi heritage recipes, charcoal claypot Dum Pukht slow-cooking, and michelin-grade tableside flambé banquets.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-black border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <Award className="w-3 h-3 text-[#C1121F]" />
                3 Michelin Stars
              </span>
              <span className="px-3 py-1 rounded-full bg-black border border-white/20 text-white/70 text-[10px] uppercase tracking-widest">
                Halal & Organic
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C1121F] pl-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">Royal Heritage</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#D4AF37] transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4AF37] transition-colors">Interactive Menu</a>
              </li>
              <li>
                <a href="#chef" className="hover:text-[#D4AF37] transition-colors">Master Chefs</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Palace Gallery</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#D4AF37] transition-colors">Seasonal Privileges</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C1121F] pl-2">
              Dining Hours
            </h4>
            <div className="space-y-2 text-xs font-light">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                  <p className="text-[#D4AF37] font-medium">{h.days}</p>
                  <p className="text-white/70">{h.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C1121F] pl-2">
              Concierge Contact
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>42 Imperial Blvd, Mayfair</span>
              </li>
              <li className="flex items-center gap-2 text-[#D4AF37]">
                <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>+1 (800) 987-AWADH</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>reservations@royalawadh.com</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#C1121F] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#C1121F] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {new Date().getFullYear()} ROYAL AWADH Fine Dining Brand. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Royal Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#C1121F] text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
