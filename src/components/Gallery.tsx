import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Camera, Maximize2, X, Crown, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Ambiance', 'Food', 'Kitchen', 'Desserts', 'Drinks'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C1121F]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-[#C1121F]" />
            <span>Visual Splendor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Inside <span className="text-gold-gradient italic font-normal">Royal Awadh</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
            A visual walkthrough of our palace dining hall, live charcoal hearths, and gold-plated creations
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white shadow-lg shadow-[#C1121F]/30'
                  : 'bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2.5 rounded-full bg-black/70 border border-[#D4AF37] text-[#D4AF37]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    {item.category}
                  </span>
                  <p className="font-serif text-white font-bold text-sm truncate">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#141414] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#C1121F] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[65vh]">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl">
                  <span className="px-3 py-1 rounded-full bg-[#C1121F] text-white text-[10px] font-bold uppercase tracking-widest inline-block mb-2">
                    {activeLightbox.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {activeLightbox.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    {activeLightbox.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
