export type VegType = 'veg' | 'non-veg' | 'vegan';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  description: string;
  longDescription?: string;
  price: number;
  rating: number;
  reviewsCount: number;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  type: VegType;
  spiceLevel: 1 | 2 | 3 | 4 | 5; // 1: Mild, 5: Royal Fire
  image: string;
  prepTime: string;
  calories?: number;
  ingredients: string[];
  pairing?: string;
  origin?: string;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  experience: string;
  photo: string;
  bio: string;
  signatureDish: string;
  awards: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Food' | 'Ambiance' | 'Kitchen' | 'Desserts' | 'Drinks';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  favoriteDish: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  code: string;
  description: string;
  validUntil: string; // ISO date string or formatted date
  image: string;
  badge: string;
  includes: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Reservation' | 'Dietary' | 'Events';
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'Main Dining' | 'Royal Suite' | 'Courtyard Garden' | "Chef's Table";
  specialRequest?: string;
  dietaryPreference?: string;
}
