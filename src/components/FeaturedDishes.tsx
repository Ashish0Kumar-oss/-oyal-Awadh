import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Flame, Eye, Sparkles, Clock, Crown, Heart } from 'lucide-react';
import { INDIAN_MENU_ITEMS } from '../data/indianMenuData';
import { MenuItem } from '../types';

interface FeaturedDishesProps {
  onQuickView: (dish: MenuItem) => void;
  onOpenReservationModal?: () => void;
}

export default function FeaturedDishes({ onQuickView, onOpenReservationModal }: FeaturedDishesProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Get dishes marked popular or chef special
  const featuredDishes = INDIAN_MENU_ITEMS.filter(item => item.isPopular || item.isChefSpecial).slice(0, 6);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="featured" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              <Crown className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>Chef’s Royal Highlights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Signature Awadhi <br />
              <span className="text-gold-gradient italic font-normal">Masterpiece Delicacies</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#menu"
            className="px-6 py-3 rounded-full bg-black/80 text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group"
          >
            <span>View Full Menu ({INDIAN_MENU_ITEMS.length}+)</span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        {/* Featured Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-glass-card overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/50" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Veg / Non-Veg Indicator */}
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold backdrop-blur-md border ${
                        dish.type === 'veg'
                          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                          : 'bg-rose-950/80 text-rose-400 border-rose-500/40'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${dish.type === 'veg' ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                      {dish.type}
                    </span>

                    {dish.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold bg-[#C1121F] text-white border border-[#E63946] flex items-center gap-1 shadow-md">
                        <Crown className="w-3 h-3 text-[#D4AF37]" />
                        <span>Chef Special</span>
                      </span>
                    )}
                  </div>

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={(e) => toggleFavorite(e, dish.id)}
                    aria-label="Add to favorites"
                    className="p-2 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#C1121F] hover:border-[#C1121F] transition-colors backdrop-blur-md"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites[dish.id] ? 'fill-[#C1121F] text-[#C1121F]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Quick View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <button
                    onClick={() => onQuickView(dish)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick View Dish</span>
                  </button>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#D4AF37]/50 backdrop-blur-md text-[#D4AF37] font-serif text-lg font-bold">
                  ${dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  {dish.hindiName && (
                    <p className="text-xs text-[#D4AF37]/80 font-cormorant italic tracking-wide mb-2">
                      {dish.hindiName}
                    </p>
                  )}

                  <p className="text-xs text-white/70 line-clamp-2 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Spice Level & Prep Time Metadata */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] uppercase text-white/50 tracking-wider">Spice:</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Flame
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < dish.spiceLevel ? 'text-[#C1121F] fill-[#C1121F]' : 'text-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{dish.prepTime}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span className="font-bold">{dish.rating}</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onQuickView(dish)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Ingredients & Notes</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onOpenReservationModal) {
                        onOpenReservationModal();
                      } else {
                        document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#C1121F]/20 hover:bg-[#C1121F] text-[#E63946] hover:text-white border border-[#C1121F]/40 text-xs font-medium uppercase tracking-wider transition-all"
                  >
                    Order Table
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
