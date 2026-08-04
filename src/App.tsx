import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import InteractiveMenu from './components/InteractiveMenu';
import DishQuickViewModal from './components/DishQuickViewModal';
import ChefSection from './components/ChefSection';
import Gallery from './components/Gallery';
import ReservationSection from './components/ReservationSection';
import Testimonials from './components/Testimonials';
import SpecialOffers from './components/SpecialOffers';
import FAQSection from './components/FAQSection';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MenuItem } from './types';

export default function App() {
  const [quickViewDish, setQuickViewDish] = useState<MenuItem | null>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [preSelectedDishName, setPreSelectedDishName] = useState<string | null>(null);

  const handleOpenReservationModal = () => {
    setIsReservationModalOpen(true);
  };

  const handleCloseReservationModal = () => {
    setIsReservationModalOpen(false);
    setPreSelectedDishName(null);
  };

  const handleReserveTableForDish = (dishName: string) => {
    setPreSelectedDishName(dishName);
    setIsReservationModalOpen(true);
  };

  const handleClaimOffer = (offerCode: string) => {
    setPreSelectedDishName(`Claiming Offer Code: ${offerCode}`);
    setIsReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F8F9FA] relative selection:bg-[#C1121F] selection:text-white">
      {/* Custom Interactive Pointer & Scroll Progress */}
      <CustomCursor />
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar onOpenReservationModal={handleOpenReservationModal} />

      {/* Main Page Content */}
      <main>
        {/* 1. Fullscreen Hero Section */}
        <Hero onOpenReservationModal={handleOpenReservationModal} />

        {/* 2. Restaurant Heritage Story & Timeline */}
        <About />

        {/* 3. Featured Signature Royal Dishes */}
        <FeaturedDishes
          onQuickView={(dish) => setQuickViewDish(dish)}
          onOpenReservationModal={handleOpenReservationModal}
        />

        {/* 4. Interactive Full Menu Catalogue with Search & Category Filters */}
        <InteractiveMenu
          onQuickView={(dish) => setQuickViewDish(dish)}
          onOpenReservationModal={handleOpenReservationModal}
        />

        {/* 5. Michelin Master Chefs & Sommelier */}
        <ChefSection />

        {/* 6. Masonry Visual Gallery */}
        <Gallery />

        {/* 7. Special Promotional Offers & Countdown */}
        <SpecialOffers onClaimOffer={handleClaimOffer} />

        {/* 8. Table Reservation Section */}
        <ReservationSection
          preSelectedDish={preSelectedDishName}
        />

        {/* 9. Guest Testimonials & Reviews Slider */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Royal Club VIP Newsletter */}
        <Newsletter />

        {/* 12. Concierge & Location Contacts */}
        <ContactSection />
      </main>

      {/* Multi-column Footer */}
      <Footer />

      {/* Quick View Dish Modal */}
      <DishQuickViewModal
        dish={quickViewDish}
        onClose={() => setQuickViewDish(null)}
        onReserveTableForDish={handleReserveTableForDish}
      />

      {/* Reservation Trigger Overlay Modal */}
      {isReservationModalOpen && (
        <ReservationSection
          isOpenAsModal={true}
          preSelectedDish={preSelectedDishName}
          onCloseModal={handleCloseReservationModal}
        />
      )}
    </div>
  );
}
