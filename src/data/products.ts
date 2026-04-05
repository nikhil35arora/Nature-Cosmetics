import botanicalSerum from '@/assets/products/botanical-serum.jpg';
import hydratingCream from '@/assets/products/hydrating-cream.jpg';
import clayCleanser from '@/assets/products/clay-cleanser.jpg';
import lipTint from '@/assets/products/lip-tint.jpg';
import bronzerPalette from '@/assets/products/bronzer-palette.jpg';
import bambooMascara from '@/assets/products/bamboo-mascara.jpg';
import linenDress from '@/assets/products/linen-dress.jpg';
import cottonTee from '@/assets/products/cotton-tee.jpg';
import cashmereCardigan from '@/assets/products/cashmere-cardigan.jpg';
import leafNecklace from '@/assets/products/leaf-necklace.jpg';
import pearlEarrings from '@/assets/products/pearl-earrings.jpg';
import stackingRings from '@/assets/products/stacking-rings.jpg';

export type Product = {
  id: string;
  name: string;
  category: 'skincare' | 'beauty' | 'clothing' | 'jewelry';
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  image: string;
  skinType?: string[];
  ingredients?: string[];
  usage?: string;
  isBestseller?: boolean;
  mood?: string[];
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Botanical Face Serum',
    category: 'skincare',
    price: 48,
    rating: 4.8,
    reviewCount: 124,
    description: 'A luxurious blend of rosehip, jojoba, and vitamin E oils that deeply nourishes and revitalizes your skin. This lightweight serum absorbs quickly, leaving your face with a natural, healthy glow.',
    shortDescription: 'Nourishing rosehip & jojoba oil blend',
    image: botanicalSerum,
    skinType: ['dry', 'normal', 'combination'],
    ingredients: ['Rosehip Oil', 'Jojoba Oil', 'Vitamin E', 'Lavender Extract'],
    usage: 'Apply 3-4 drops to clean face morning and evening. Gently press into skin.',
    isBestseller: true,
    mood: ['glow', 'self-care'],
  },
  {
    id: '2',
    name: 'Hydrating Cream Moisturizer',
    category: 'skincare',
    price: 36,
    rating: 4.6,
    reviewCount: 89,
    description: 'Rich, creamy moisturizer infused with shea butter and aloe vera. Perfect for all-day hydration that keeps your skin soft and supple without feeling heavy.',
    shortDescription: 'Shea butter & aloe vera hydration',
    image: hydratingCream,
    skinType: ['dry', 'sensitive'],
    ingredients: ['Shea Butter', 'Aloe Vera', 'Hyaluronic Acid', 'Green Tea Extract'],
    usage: 'Apply generously after serum. Use morning and night.',
    isBestseller: true,
    mood: ['self-care'],
  },
  {
    id: '3',
    name: 'Gentle Clay Cleanser',
    category: 'skincare',
    price: 28,
    rating: 4.7,
    reviewCount: 67,
    description: 'Purifying kaolin clay cleanser that gently removes impurities while maintaining your skin\'s natural moisture barrier. Ideal for daily use.',
    shortDescription: 'Purifying kaolin clay formula',
    image: clayCleanser,
    skinType: ['oily', 'combination'],
    ingredients: ['Kaolin Clay', 'Chamomile', 'Tea Tree Oil', 'Coconut Oil'],
    usage: 'Massage onto damp skin, rinse with warm water.',
    mood: ['minimal'],
  },
  {
    id: '4',
    name: 'Rose Petal Lip Tint',
    category: 'beauty',
    price: 22,
    rating: 4.5,
    reviewCount: 156,
    description: 'A natural, buildable lip tint made with real rose petal extract. Gives a beautiful flush of color while keeping lips moisturized all day.',
    shortDescription: 'Natural rose petal color',
    image: lipTint,
    isBestseller: true,
    mood: ['glow', 'minimal'],
  },
  {
    id: '5',
    name: 'Mineral Bronzer Palette',
    category: 'beauty',
    price: 34,
    rating: 4.4,
    reviewCount: 78,
    description: 'Four warm-toned mineral bronzer shades for a sun-kissed glow. Finely milled for a seamless, natural finish.',
    shortDescription: 'Four warm mineral shades',
    image: bronzerPalette,
    mood: ['glow'],
  },
  {
    id: '6',
    name: 'Bamboo Mascara',
    category: 'beauty',
    price: 26,
    rating: 4.3,
    reviewCount: 92,
    description: 'Volumizing mascara with bamboo fiber for dramatic, clump-free lashes. Gentle formula suitable for sensitive eyes.',
    shortDescription: 'Volumizing bamboo fiber formula',
    image: bambooMascara,
    mood: ['glow'],
  },
  {
    id: '7',
    name: 'Linen Wrap Dress',
    category: 'clothing',
    price: 89,
    rating: 4.7,
    reviewCount: 45,
    description: 'Effortlessly elegant wrap dress in breathable linen. Perfect for warm days, with an adjustable tie waist for a flattering silhouette.',
    shortDescription: 'Breathable linen, adjustable fit',
    image: linenDress,
    isBestseller: true,
    mood: ['minimal'],
  },
  {
    id: '8',
    name: 'Organic Cotton Tee',
    category: 'clothing',
    price: 38,
    rating: 4.5,
    reviewCount: 112,
    description: 'Ultra-soft organic cotton tee in a relaxed fit. Sustainably made, incredibly comfortable, and endlessly versatile.',
    shortDescription: 'Soft organic cotton, relaxed fit',
    image: cottonTee,
    mood: ['minimal', 'self-care'],
  },
  {
    id: '9',
    name: 'Cashmere Blend Cardigan',
    category: 'clothing',
    price: 125,
    rating: 4.8,
    reviewCount: 34,
    description: 'Luxuriously soft cashmere blend cardigan with delicate button details. An elevated essential for layering.',
    shortDescription: 'Luxe cashmere blend layers',
    image: cashmereCardigan,
    mood: ['self-care'],
  },
  {
    id: '10',
    name: 'Dainty Gold Leaf Necklace',
    category: 'jewelry',
    price: 52,
    rating: 4.9,
    reviewCount: 87,
    description: 'Delicate 18k gold-plated necklace featuring a hand-crafted leaf pendant. Adjustable chain length for versatile styling.',
    shortDescription: '18k gold-plated leaf pendant',
    image: leafNecklace,
    isBestseller: true,
    mood: ['glow', 'minimal'],
  },
  {
    id: '11',
    name: 'Pearl Drop Earrings',
    category: 'jewelry',
    price: 44,
    rating: 4.6,
    reviewCount: 56,
    description: 'Freshwater pearl drop earrings with sterling silver hooks. Timeless elegance for everyday wear or special occasions.',
    shortDescription: 'Freshwater pearl, sterling silver',
    image: pearlEarrings,
    mood: ['glow'],
  },
  {
    id: '12',
    name: 'Stacking Ring Set',
    category: 'jewelry',
    price: 38,
    rating: 4.7,
    reviewCount: 98,
    description: 'Set of three delicate stacking rings in mixed metals — gold, silver, and rose gold. Mix and match for your signature look.',
    shortDescription: 'Three mixed-metal bands',
    image: stackingRings,
    mood: ['minimal'],
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'The skincare products are incredible! My skin has never felt so soft and nourished. The staff helped me pick the perfect serum for my skin type.',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Jessica L.',
    rating: 5,
    text: 'Love the jewelry collection — bought the leaf necklace and stacking rings. Beautiful quality at a great price. Will definitely be coming back!',
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Amira K.',
    rating: 4,
    text: 'Great selection of clothing and accessories. The linen dress is my new favorite. The store has a calm, welcoming atmosphere.',
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'Taylor R.',
    rating: 5,
    text: 'I came in looking for a gift and left with things for myself too! The lip tint is gorgeous and the moisturizer is heavenly.',
    date: '1 week ago',
  },
];
