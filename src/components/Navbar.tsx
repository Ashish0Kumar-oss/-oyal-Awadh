import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, UtensilsCrossed, Calendar, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenReservationModal?: () => void;
}

export default function Navbar({ onOpenReservationModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Featured', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chef', href: '#chef' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offers', href: '#offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if scrolled to bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Track active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group z-10"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] bg-black/80 flex items-center justify-center group-hover:border-[#C1121F] transition-colors duration-300 shadow-md">
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-[#E63946] transition-colors" />
              <div className="absolute -inset-0.5 rounded-full bg-[#D4AF37]/20 blur-sm group-hover:bg-[#C1121F]/40 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                ROYAL AWADH
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                Luxury Fine Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Visible on lg and up */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[11px] xl:text-xs tracking-wider uppercase font-semibold transition-colors py-1 px-1.5 ${
                    isActive ? 'text-[#D4AF37]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C1121F] via-[#D4AF37] to-[#C1121F] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 z-10">
            <a
              href="tel:+18009872923"
              className="hidden xl:flex items-center gap-2 text-xs tracking-wider text-[#D4AF37] hover:text-white transition-colors py-2 px-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 bg-black/40"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>+1 (800) 987-AWADH</span>
            </a>

            <button
              onClick={() => {
                if (onOpenReservationModal) {
                  onOpenReservationModal();
                } else {
                  const el = document.getElementById('reservation');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs uppercase tracking-widest focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C1121F] via-[#D4AF37] to-[#C1121F] rounded-full animate-pulse" />
              <span className="relative block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0F0F0F] text-[#F8F9FA] group-hover:bg-gradient-to-r group-hover:from-[#C1121F] group-hover:to-[#E63946] group-hover:text-white transition-all duration-300 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white" />
                <span>Reserve Table</span>
              </span>
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2.5 z-10">
            <button
              onClick={() => {
                if (onOpenReservationModal) {
                  onOpenReservationModal();
                } else {
                  const el = document.getElementById('reservation');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#C1121F] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
            >
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 sm:p-2.5 rounded-xl bg-black/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:text-white hover:border-[#C1121F] transition-all focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Dropdown Mobile & Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#0F0F0F]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 shadow-2xl z-50 max-h-[85vh] overflow-y-auto px-4 py-6 sm:px-8"
            >
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
                    <Sparkles className="w-4 h-4 text-[#C1121F]" />
                    <span>Royal Awadh Navigation</span>
                  </div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest">Select Section</span>
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-serif tracking-wider transition-all ${
                          isActive
                            ? 'bg-[#C1121F]/20 text-[#D4AF37] border border-[#D4AF37]/50 font-bold'
                            : 'text-white/90 hover:bg-white/5 hover:text-[#D4AF37]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-[#D4AF37]/70 font-sans font-mono">0{idx + 1}</span>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenReservationModal) {
                        onOpenReservationModal();
                      } else {
                        const el = document.getElementById('reservation');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E63946] to-[#C1121F] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#C1121F]/30"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Reserve A Royal Table</span>
                  </button>

                  <div className="text-center text-xs text-white/60 space-y-1 font-light pt-1">
                    <p>42 Imperial Boulevard, Mayfair</p>
                    <p className="text-[#D4AF37] font-semibold">+1 (800) 987-AWADH</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

