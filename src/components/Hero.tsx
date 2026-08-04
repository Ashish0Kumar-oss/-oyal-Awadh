import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Utensils, ChevronDown, Award, Sparkles, Flame, Star } from 'lucide-react';
import { RESTAURANT_STATS } from '../data/restaurantData';

interface HeroProps {
  onOpenReservationModal?: () => void;
}

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2000',
    title: 'Royal Dum Pukht Lamb Biryani',
    caption: 'Aged Basmati Rice cooked in Claypot Dum'
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000',
    title: 'Raan-e-Awadh Tandoori Lamb',
    caption: 'Applewood Charcoal Seared French Chops'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000',
    title: 'The Regal Grand Hall',
    caption: 'Awadhi Palace Ambiance & Live Sitar'
  }
];

export default function Hero({ onOpenReservationModal }: HeroProps) {
  const [currentBg, setCurrentBg] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0F0F0F]"
    >
      {/* Background Image Slideshow with Parallax */}
      {HERO_IMAGES.map((img, idx) => (
        <motion.div
          key={img.url}
          initial={{ opacity: 0 }}
          animate={{
            opacity: idx === currentBg ? 1 : 0,
            scale: idx === currentBg ? 1.05 : 1,
            x: mousePos.x * 0.5,
            y: mousePos.y * 0.5,
          }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
          />
        </motion.div>
      ))}

      {/* Gradient & Vignette Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-black/80" />
      <div className="absolute inset-0 z-10 bg-radial from-transparent via-[#0F0F0F]/40 to-[#0F0F0F] opacity-90" />

      {/* Smoke / Steam Floating Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-t from-[#C1121F]/30 to-transparent blur-3xl animate-smoke" />
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 rounded-full bg-gradient-to-t from-[#D4AF37]/20 to-transparent blur-3xl animate-smoke" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating Spice Ingredients (Cardamom, Saffron, Star Anise particles) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] p-2.5 rounded-full bg-black/40 border border-[#D4AF37]/30 backdrop-blur-md hidden lg:flex items-center gap-2 text-[10px] text-[#D4AF37] tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C1121F]" />
          <span>Kashmiri Saffron</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-[8%] p-2.5 rounded-full bg-black/40 border border-[#D4AF37]/30 backdrop-blur-md hidden lg:flex items-center gap-2 text-[10px] text-[#D4AF37] tracking-widest uppercase"
        >
          <Flame className="w-3.5 h-3.5 text-[#E63946]" />
          <span>Charcoal Dum Pukht</span>
        </motion.div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Michelin / Award Pill & Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-semibold">
              The Ultimate Indian Fine Dining
            </span>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] text-xs font-medium tracking-widest uppercase shadow-xl">
            <Award className="w-4 h-4 text-[#C1121F]" />
            <span>3 Michelin Stars • Awadhi Royal Gastronomy</span>
            <div className="flex gap-0.5 text-[#D4AF37]">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] max-w-5xl mb-6"
        >
          Spices of the <br className="hidden sm:inline" />
          <span className="italic text-gold-gradient">Royal Courts.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-lg text-[#F8F9FA]/80 max-w-2xl font-light leading-relaxed"
        >
          Embark on a culinary journey through the heart of Awadh. Our Michelin-star recipes blend ancestral charcoal Dum Pukht traditions with contemporary luxury.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              if (onOpenReservationModal) {
                onOpenReservationModal();
              } else {
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto bg-restaurant-red hover:bg-[#E63946] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl group"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            <span>Book A Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37] group-hover:text-black group-hover:translate-x-1 transition-transform" />
            <span>Explore Menu</span>
          </a>
        </motion.div>

        {/* Stats Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl p-6 sm:p-8 rounded-2xl bg-black/50 border border-[#D4AF37]/20 backdrop-blur-xl shadow-2xl"
        >
          {RESTAURANT_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2 border-r last:border-0 border-white/10">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-light mt-1 tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-widest opacity-80 hover:opacity-100"
      >
        <span>Discover Story</span>
        <ChevronDown className="w-4 h-4 text-[#C1121F]" />
      </motion.a>
    </section>
  );
}
