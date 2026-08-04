import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Flame, Star, Eye, Utensils, Sparkles, Filter, RefreshCw, Crown } from 'lucide-react';
import { INDIAN_MENU_ITEMS, MENU_CATEGORIES } from '../data/indianMenuData';
import { MenuItem } from '../types';

interface InteractiveMenuProps {
  onQuickView: (dish: MenuItem) => void;
  onOpenReservationModal?: () => void;
}

export default function InteractiveMenu({ onQuickView, onOpenReservationModal }: InteractiveMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [spiceFilter, setSpiceFilter] = useState<number | null>(null);

  // Filter logic
  const filteredDishes = useMemo(() => {
    return INDIAN_MENU_ITEMS.filter((dish) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' || dish.category === selectedCategory;

      // Search query check
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dish.hindiName && dish.hindiName.includes(searchQuery)) ||
        dish.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

      // Dietary check
      const matchesDietary =
        dietaryFilter === 'all' || dish.type === dietaryFilter;

      // Spice level check
      const matchesSpice =
        spiceFilter === null || dish.spiceLevel === spiceFilter;

      return matchesCategory && matchesSearch && matchesDietary && matchesSpice;
    });
  }, [selectedCategory, searchQuery, dietaryFilter, spiceFilter]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setDietaryFilter('all');
    setSpiceFilter(null);
  };

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C1121F]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Utensils className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Grand Royal Catalogue</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Explore Our <span className="text-gold-gradient italic font-normal">Authentic Menu</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
            Hand-crafted Awadhi kebabs, claypot Dum Biryanis, saffron broths & fine dining fusion
          </p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl mb-10 shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
              <input
                type="text"
                placeholder="Search Biryani, Kebab, Truffle, Lobster, Saffron..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-white/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-white/50 uppercase tracking-wider hidden sm:inline flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#D4AF37]" />
                Diet:
              </span>

              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                All Items
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-white/5 text-emerald-400 hover:bg-emerald-950/40'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Vegetarian
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#C1121F] text-white shadow-lg shadow-[#C1121F]/30'
                    : 'bg-white/5 text-rose-400 hover:bg-rose-950/40'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Non-Vegetarian
              </button>

              {(searchQuery || dietaryFilter !== 'all' || spiceFilter !== null || selectedCategory !== 'All') && (
                <button
                  onClick={resetFilters}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#C1121F] text-xs flex items-center gap-1 transition-colors"
                  title="Reset all filters"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Spice Filter Selector */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-xs">
            <span className="text-white/50 uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#C1121F]" />
              Spice Level:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setSpiceFilter(null)}
                className={`px-2.5 py-1 rounded-lg text-[11px] ${
                  spiceFilter === null ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]' : 'text-white/60 hover:text-white'
                }`}
              >
                Any
              </button>
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => setSpiceFilter(spiceFilter === level ? null : level)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-1 transition-all ${
                    spiceFilter === level
                      ? 'bg-[#C1121F] text-white border border-[#E63946]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span>{level === 1 ? 'Mild' : level === 2 ? 'Medium' : level === 3 ? 'Spicy' : level === 4 ? 'Fiery' : 'Royal Fire'}</span>
                  <div className="flex gap-0.5">
                    {[...Array(level)].map((_, i) => (
                      <Flame key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tab Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-white/10">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#C1121F] to-[#E63946] rounded-full shadow-lg shadow-[#C1121F]/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Dish Items Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 bg-black/40 border border-white/10 rounded-2xl">
            <Utensils className="w-12 h-12 text-[#D4AF37]/40 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white font-bold mb-2">No Royal Delicacies Found</h3>
            <p className="text-xs text-white/60 max-w-md mx-auto mb-6">
              We couldn't find any dishes matching your exact filter criteria. Try resetting your search or exploring our other categories.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#C1121F] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#E63946] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredDishes.map((dish) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={dish.id}
                  className="group relative rounded-2xl bg-glass-card overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Dish Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000';
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/40" />

                    {/* Veg/Non-Veg & Popular Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold border ${
                          dish.type === 'veg'
                            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                            : 'bg-rose-950/80 text-rose-400 border-rose-500/40'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dish.type === 'veg' ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                        {dish.type}
                      </span>

                      {dish.isPopular && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-[#D4AF37] text-black font-semibold flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3 text-black" />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Quick View Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <button
                        onClick={() => onQuickView(dish)}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center gap-1.5 hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] font-serif font-bold text-base">
                      ${dish.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {dish.name}
                        </h3>
                      </div>

                      {dish.hindiName && (
                        <p className="text-xs text-[#D4AF37]/80 font-cormorant italic mb-1">
                          {dish.hindiName}
                        </p>
                      )}

                      <p className="text-xs text-white/70 line-clamp-2 font-light leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-white/40">SPICE:</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Flame
                              key={i}
                              className={`w-3 h-3 ${
                                i < dish.spiceLevel ? 'text-[#C1121F] fill-[#C1121F]' : 'text-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        <span className="font-bold">{dish.rating}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickView(dish)}
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#C1121F] text-white text-xs uppercase tracking-wider font-semibold border border-white/10 hover:border-[#C1121F] transition-colors"
                    >
                      View Recipe & Tasting Notes
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
