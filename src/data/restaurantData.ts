import { Chef, FAQItem, GalleryItem, Offer, Testimonial } from '../types';

export const RESTAURANT_STATS = [
  { label: 'Years of Royal Heritage', value: 15, suffix: '+' },
  { label: 'Happy Royal Guests', value: 10000, suffix: '+' },
  { label: 'Signature Dishes', value: 100, suffix: '+' },
  { label: 'Michelin & World Awards', value: 12, suffix: '' },
];

export const TIMELINE_EVENTS = [
  {
    year: '1910',
    title: 'Royal Awadhi Lineage',
    description: 'Ancestral khansamas (royal chefs) cooked in the regal kitchens of Nawab Wajid Ali Shah of Awadh.'
  },
  {
    year: '1965',
    title: 'Heritage Secret Recipes Handover',
    description: 'Master recipes passed down through three generations on gold-embossed velvet manuscripts.'
  },
  {
    year: '2012',
    title: 'Michelin Star Distinction',
    description: 'Awarded first Michelin star for reviving authentic Dum Pukht slow-cooking claypot techniques.'
  },
  {
    year: '2025',
    title: 'Modern Ultra-Luxury Flagship',
    description: 'Reimagined with cinematic ambiance, custom crystal chandelier dining hall, and interactive chef tasting table.'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef-1',
    name: 'Ustad Imtiaz Qureshi Al-Haj',
    title: 'Grand Master Chef & Culinary Historian',
    experience: '45+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000',
    bio: 'Pioneer of Dum Pukht cuisine worldwide. Ustad Imtiaz has catered state banquets for royal families, world leaders, and international dignitaries across Europe and Asia.',
    signatureDish: 'Awadhi Galouti Kebab & Raan-e-Awadh',
    awards: ['Padma Shri Recipient', 'Michelin Culinary Legend', 'Asia 50 Best Lifetime Achievement'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'chef-2',
    name: 'Chef Ranveer Brar-Khanna',
    title: 'Executive Chef & Creative Director',
    experience: '22 Years Experience',
    photo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000',
    bio: 'Renowned TV host and modern gastronomy auteur. Chef Ranveer merges traditional charcoal clay-oven techniques with modern molecular plating aesthetics.',
    signatureDish: 'Smoked Makhani Rigatoni & Gold Phirni',
    awards: ['Global Chef of the Year 2024', 'Best Modern Indian Cuisine 2025'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'chef-3',
    name: 'Sommelier Ananya Deshmukh',
    title: 'Head Beverage Specialist & Botanical Mixologist',
    experience: '14 Years Experience',
    photo: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1000',
    bio: 'Master Sommelier specializing in pairing rare vintage Old World wines with complex Indian spice profiles and botanical infusions.',
    signatureDish: 'Smoked Anardana Old Fashioned',
    awards: ['World Best Sommelier Nominee 2024', 'Master of Wine (MW)'],
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Royal Grand Dining Hall',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    description: 'Custom crystal chandeliers and hand-carved teakwood lattice archways inspired by Awadhi palaces.'
  },
  {
    id: 'g-2',
    title: 'Royal Dum Pukht Claypot Unsealing',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
    description: 'Chef unsealing the flour dough ribbon on charcoal Dum Biryani at live finishing station.'
  },
  {
    id: 'g-3',
    title: 'Awadhi Galouti & Paratha Platter',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000',
    description: 'Pan-seared lamb kebabs served over hand-folded silver flake parathas.'
  },
  {
    id: 'g-4',
    title: 'Shahi Gold Leaf Dessert Matka',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1000',
    description: 'Slow-churned saffron Phirni garnished with 24k gold leaf and crushed pistachios.'
  },
  {
    id: 'g-5',
    title: 'Smoked Botanical Cocktail Lounge',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000',
    description: 'Handcrafted mocktails and cocktail infusions smoked over star anise and sandalwood embers.'
  },
  {
    id: 'g-6',
    title: 'Private Royal Suite Dining',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000',
    description: 'Exclusive private dining chamber for up to 12 guests with personal butler and live sitar acoustic.'
  },
  {
    id: 'g-7',
    title: 'Live Tandoor Charcoal Hearth',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=1000',
    description: 'Clay tandoor furnaces operating at 900°F with charcoal applewood embers.'
  },
  {
    id: 'g-8',
    title: 'Malabar Lobster Curry Claypot',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000',
    description: 'Poached rock lobster tail in coconut kokum gravy served with lace appams.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Lord Arthur Mountbatten',
    role: 'Food Critic & Author',
    country: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    date: 'July 2026',
    review: 'Unquestionably the most sublime Indian dining experience in the world. The Galouti Kebab literally disappears on the tongue with 160 distinct spice notes dancing in perfect harmony.',
    favoriteDish: 'Awadhi Galouti Kebab & Gold Phirni'
  },
  {
    id: 't-2',
    name: 'Priya & Vikram Malhotra',
    role: 'Connoisseurs of Fine Dining',
    country: 'New Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    date: 'June 2026',
    review: 'We hosted our 25th anniversary in the Royal Suite. From the live sitar acoustics to the 24-hour slow-cooked Dal Awadh and tableside flambé desserts, every moment felt like a royal coronation.',
    favoriteDish: 'Royal Dum Pukht Lamb Biryani'
  },
  {
    id: 't-3',
    name: 'Chef Marcus Vane',
    role: '3 Michelin-Starred Chef',
    country: 'Paris, France',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    date: 'May 2026',
    review: 'The precision of flavor layering in the Malabar Lobster Curry is staggering. Saffron, cardamom, and coconut milk executed with French technical mastery yet deeply Indian soul.',
    favoriteDish: 'Malabar Lobster Curry'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: "Chef's Royal Nawabi Tasting Menu",
    subtitle: '7-Course Culinary Journey through Awadh',
    discount: 'SAVE 25%',
    code: 'ROYAL7COURSE',
    description: 'An exclusive 7-course tasting menu paired with rare reserve wines or botanical artisanal mocktails. Includes live table flambé.',
    validUntil: '2026-08-31T23:59:59',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000',
    badge: 'CHEF RECOMMENDATION',
    includes: [
      'Amuse-Bouche saffron elixir',
      'Galouti Kebab with gold paratha',
      'Yakhni Shorba clear broth',
      'Malabar Lobster or Saffron Paneer Tikka',
      'Dum Pukht Lamb Biryani or Truffle Flatbread',
      'Gold Leaf Phirni & Gulab Jamun Flambé',
      'Kashmiri Kahwa Digestif'
    ]
  },
  {
    id: 'offer-2',
    title: 'Weekend Royal High Tea & Kebabs',
    subtitle: 'Saturdays & Sundays 3:00 PM - 6:00 PM',
    discount: 'SPECIAL $65/PERSON',
    code: 'HIGHTEA2026',
    description: 'An indulgent afternoon ceremony featuring 12 hand-picked savories, slider kebabs, saffron tea, and rose dessert towers.',
    validUntil: '2026-08-28T23:59:59',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=1000',
    badge: 'WEEKEND EXCLUSIVE',
    includes: [
      'Unlimited saffron & rose tea infusions',
      'Mini Shami burgers & Dahi Ke Sholay',
      'Artisanal pistachio scones with clotted rabri',
      'Live sitar performance'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Reservation',
    question: 'How far in advance should I make a reservation?',
    answer: 'We recommend booking 2 to 4 weeks in advance for weekend dinner service and 1 week in advance for weekday lunch. Walk-in seating is subject to limited lounge availability.'
  },
  {
    id: 'faq-2',
    category: 'Dietary',
    question: 'Do you offer strictly Vegetarian, Vegan, or Halal options?',
    answer: 'Yes! Over 50% of our menu is dedicated to gourmet Vegetarian and Vegan preparations. All meat served at Royal Awadh is 100% certified Halal.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'Is there a formal dress code?',
    answer: 'We request Elegant Smart Casual or Formal Indian Ethnic attire. Shorts, athletic wear, beach flip-flops, and sleeveless tops for gentlemen are strictly prohibited.'
  },
  {
    id: 'faq-4',
    category: 'Events',
    question: 'Can we book private dining or full hall buyout for celebrations?',
    answer: 'Yes, our Royal Suite accommodates up to 12 guests with dedicated butler service, while our Main Grand Hall accommodates up to 120 guests for full private events. Contact our events concierge at events@royalawadh.com.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'Is valet parking available?',
    answer: 'Complimentary executive valet parking is available at the main entrance portal for all dining guests.'
  }
];

export const RESTAURANT_INFO = {
  name: 'ROYAL AWADH',
  tagline: 'Michelin-Grade Luxury Indian Fine Dining',
  address: '42 Imperial Boulevard, Mayfair / Diplomatic Enclave, City Centre',
  phone: '+1 (800) 987-AWADH / +1 (800) 987-2923',
  email: 'reservations@royalawadh.com',
  hours: [
    { days: 'Monday - Thursday', hours: '12:00 PM – 3:30 PM, 6:30 PM – 11:30 PM' },
    { days: 'Friday - Sunday', hours: '12:00 PM – 4:00 PM, 6:00 PM – 12:00 AM' }
  ],
  socials: {
    instagram: 'https://instagram.com/royalawadh_finedining',
    facebook: 'https://facebook.com/royalawadh',
    tripadvisor: 'https://tripadvisor.com',
    michelin: 'https://michelin.com'
  }
};
