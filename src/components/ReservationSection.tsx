import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Crown, X } from 'lucide-react';
import { ReservationFormData } from '../types';

interface ReservationSectionProps {
  preSelectedDish?: string | null;
  isOpenAsModal?: boolean;
  onCloseModal?: () => void;
}

export default function ReservationSection({ preSelectedDish, isOpenAsModal, onCloseModal }: ReservationSectionProps) {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    seatingArea: 'Main Dining',
    specialRequest: preSelectedDish ? `Reserved for signature dish: ${preSelectedDish}` : '',
    dietaryPreference: 'None'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  useEffect(() => {
    if (preSelectedDish) {
      setFormData(prev => ({
        ...prev,
        specialRequest: `Reserved specifically for signature dish: ${preSelectedDish}`
      }));
    }
  }, [preSelectedDish]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email address required';
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = 'Valid contact phone required';
    if (!formData.date) newErrors.date = 'Reservation date required';
    if (!formData.time) newErrors.time = 'Preferred time slot required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'RA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingReference(randomRef);
      setShowSuccessModal(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C1121F', '#D4AF37', '#FFFFFF', '#E63946']
        });
      } catch {
        // Fallback if confetti fails
      }
    }, 1200);
  };

  const seatingOptions = [
    {
      id: 'Main Dining',
      title: 'Main Grand Hall',
      subtitle: 'Crystal chandeliers & sitar ragas',
      icon: Crown
    },
    {
      id: 'Royal Suite',
      title: 'Royal Private Suite',
      subtitle: 'Exclusive chamber & personal butler',
      icon: Sparkles
    },
    {
      id: 'Courtyard Garden',
      title: 'Courtyard Garden',
      subtitle: 'Candlelight fountain seating',
      icon: Calendar
    },
    {
      id: "Chef's Table",
      title: "Chef's Live Table",
      subtitle: 'Front row seats to claypot unsealing',
      icon: ShieldCheck
    }
  ] as const;

  const contentUI = (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium tracking-[0.2em] uppercase mb-4"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C1121F]" />
          <span>Table Booking Portal</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          Reserve Your <span className="text-gold-gradient italic font-normal">Royal Experience</span>
        </motion.h2>
        <p className="text-xs sm:text-sm text-white/70 font-light mt-3">
          Select your preferred seating area, party size, and culinary preferences for an unforgettable evening
        </p>
      </div>

      {/* Booking Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-10 rounded-3xl bg-glass-card border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Seating Area Selection Radio Grid */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block">
              1. Select Preferred Seating Area:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {seatingOptions.map((opt) => {
                const IconComp = opt.icon;
                const isSelected = formData.seatingArea === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        seatingArea: opt.id as any,
                      }))
                    }
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-32 ${
                      isSelected
                        ? 'bg-[#C1121F]/20 border-[#D4AF37] text-white shadow-lg shadow-[#C1121F]/20 ring-1 ring-[#D4AF37]'
                        : 'bg-black/40 border-white/10 text-white/70 hover:border-white/30 hover:bg-black/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <IconComp
                        className={`w-5 h-5 ${
                          isSelected ? 'text-[#D4AF37]' : 'text-white/40'
                        }`}
                      />
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      )}
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm text-white">{opt.title}</p>
                      <p className="text-[10px] text-white/60 font-light mt-0.5">{opt.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guest Count, Date & Time Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Guests Count */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <select
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      guests: parseInt(e.target.value),
                    }))
                  }
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-medium text-sm focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                    <option key={num} value={num} className="bg-[#141414] text-white">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Reservation Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-medium text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              {errors.date && <p className="text-[11px] text-[#E63946] mt-1">{errors.date}</p>}
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <select
                  value={formData.time}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, time: e.target.value }))
                  }
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-medium text-sm focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none"
                >
                  <optgroup label="Lunch Service" className="bg-[#141414] text-[#D4AF37]">
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="14:00">02:00 PM</option>
                  </optgroup>
                  <optgroup label="Royal Dinner Service" className="bg-[#141414] text-[#D4AF37]">
                    <option value="18:30">06:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="21:30">09:30 PM</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Guest Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="e.g. Lord Arthur"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              {errors.name && <p className="text-[11px] text-[#E63946] mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Email Confirmation *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <input
                  type="email"
                  placeholder="e.g. arthur@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              {errors.email && <p className="text-[11px] text-[#E63946] mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-1234"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              {errors.phone && <p className="text-[11px] text-[#E63946] mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Special Requests & Dietary */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/80 block mb-2">
                Special Requests or Anniversary / Birthday Celebration Notes
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-[#D4AF37]" />
                <textarea
                  rows={3}
                  placeholder="Mention high chair requirements, wine preferences, or specific dishes..."
                  value={formData.specialRequest}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specialRequest: e.target.value,
                    }))
                  }
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C1121F] via-[#E63946] to-[#C1121F] text-white font-semibold text-sm uppercase tracking-widest shadow-xl shadow-[#C1121F]/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin text-[#D4AF37]" />
                Processing Royal Reservation...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#D4AF37]" />
                Confirm Table Reservation
              </span>
            )}
          </button>
        </form>
      </motion.div>

      {/* Animated Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowSuccessModal(false);
                if (onCloseModal) onCloseModal();
              }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-lg w-full p-8 rounded-3xl bg-[#141414] border border-[#D4AF37]/50 shadow-2xl text-center space-y-6 z-10"
            >
              <div className="w-16 h-16 rounded-full bg-[#C1121F]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  Welcome to Royal Awadh
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2 text-xs text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">Booking Ref:</span>
                  <span className="font-mono text-[#D4AF37] font-bold">{bookingReference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Guest Name:</span>
                  <span className="text-white font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Date & Time:</span>
                  <span className="text-white font-medium">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Seating Area:</span>
                  <span className="text-white font-medium">{formData.seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Party Size:</span>
                  <span className="text-white font-medium">{formData.guests} Guests</span>
                </div>
              </div>

              <p className="text-xs text-white/60 font-light">
                A confirmation voucher and valet pass has been dispatched to <strong className="text-white">{formData.email}</strong>.
              </p>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  if (onCloseModal) onCloseModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#E63946] text-white font-semibold text-xs uppercase tracking-wider shadow-lg"
              >
                Close & Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  if (isOpenAsModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="fixed inset-0 bg-black/85 backdrop-blur-xl" onClick={onCloseModal} />
        <div className="relative w-full max-w-5xl bg-[#0F0F0F] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 my-8 z-10 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#C1121F] transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>
          {contentUI}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {contentUI}
      </div>
    </section>
  );
}
