import { AnimatePresence, motion } from 'motion/react';
import { X, Flame, Star, Clock, Wine, Sparkles, MapPin, Check, Calendar, Utensils } from 'lucide-react';
import { MenuItem } from '../types';

interface DishQuickViewModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onReserveTableForDish?: (dishName: string) => void;
}

export default function DishQuickViewModal({ dish, onClose, onReserveTableForDish }: DishQuickViewModalProps) {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#141414] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#C1121F] hover:border-[#C1121F] transition-all backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Image Section */}
            <div className="md:col-span-5 relative h-72 md:h-auto min-h-[300px]">
              <img
                src={dish.image}
                alt={dish.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40 md:bg-gradient-to-r md:from-transparent md:to-[#141414]" />

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border backdrop-blur-md ${
                    dish.type === 'veg'
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                      : 'bg-rose-950/80 text-rose-400 border-rose-500/40'
                  }`}
                >
                  {dish.type}
                </span>

                {dish.isChefSpecial && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#C1121F] text-white flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Chef Signature
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/80 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] font-serif text-2xl font-bold">
                ${dish.price}
              </div>
            </div>

            {/* Right Details Section */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {dish.name}
                    </h2>
                    {dish.hindiName && (
                      <p className="text-sm text-[#D4AF37] font-cormorant italic tracking-widest mt-0.5">
                        {dish.hindiName}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-sm">
                    <Star className="w-4 h-4 fill-[#D4AF37]" />
                    <span>{dish.rating}</span>
                    <span className="text-xs font-normal text-white/50">({dish.reviewsCount})</span>
                  </div>
                </div>

                {dish.origin && (
                  <div className="flex items-center gap-1.5 text-xs text-white/60 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#C1121F]" />
                    <span>Origin: {dish.origin}</span>
                  </div>
                )}

                <p className="text-sm text-white/80 font-light leading-relaxed">
                  {dish.longDescription || dish.description}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs">
                    <span className="text-white/40 block mb-1">Prep Time</span>
                    <div className="flex items-center gap-1.5 text-white font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{dish.prepTime}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs">
                    <span className="text-white/40 block mb-1">Spice Level</span>
                    <div className="flex items-center gap-1">
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

                  {dish.calories && (
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs col-span-2 sm:col-span-1">
                      <span className="text-white/40 block mb-1">Calories</span>
                      <span className="text-white font-medium">{dish.calories} kcal</span>
                    </div>
                  )}
                </div>

                {/* Ingredients List */}
                {dish.ingredients && dish.ingredients.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-[#C1121F]" />
                      Key Royal Spices & Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sommelier Pairing Suggestion */}
                {dish.pairing && (
                  <div className="p-3.5 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/30 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-[#E63946] font-semibold">
                      <Wine className="w-4 h-4" />
                      <span>Sommelier Beverage Pairing:</span>
                    </div>
                    <p className="text-white/90 font-light italic">{dish.pairing}</p>
                  </div>
                )}
              </div>

              {/* Bottom CTAs */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    if (onReserveTableForDish) {
                      onReserveTableForDish(dish.name);
                    }
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#C1121F]/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Reserve Table For This Dish</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
