import { Product } from '../types/saree';

export const PRODUCTS: Product[] = [
  {
    id: 'saree-1',
    name: 'Imperial Crimson Katan Silk Banarasi Saree',
    slug: 'imperial-crimson-katan-silk-banarasi-saree',
    category: 'banarasi',
    categoryLabel: 'Banarasi Sarees',
    occasions: ['wedding', 'bridal', 'traditional'],
    price: 18999,
    originalPrice: 24999,
    discountPercent: 24,
    rating: 4.9,
    reviewCount: 128,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An ode to Varanasi royalty. Hand-spun Katan pure silk saree draped in antique gold zari jaal featuring delicate floral motifs across the body and an ornate Shikargah pallu.',
    fabric: '100% Pure Katan Silk',
    length: '5.5 meters',
    blouseDetails: '0.8 meters unstitched matching pure silk blouse with heavy gold zari border',
    careInstructions: 'Strictly Dry Clean Only. Store wrapped in pure muslin cloth.',
    colors: [
      { name: 'Royal Crimson', hex: '#8B0000' },
      { name: 'Deep Wine', hex: '#58111A' },
      { name: 'Rani Pink', hex: '#C2185B' }
    ],
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    silkMarkCertified: true,
    handloomCertified: true,
    sku: 'RS-BAN-001'
  },
  {
    id: 'saree-2',
    name: 'Royal Peacock Emerald Kanchipuram Silk Saree',
    slug: 'royal-peacock-emerald-kanchipuram-silk-saree',
    category: 'kanchipuram',
    categoryLabel: 'Kanchipuram Sarees',
    occasions: ['wedding', 'traditional', 'premium-silk'],
    price: 22499,
    originalPrice: 28999,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 94,
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Handwoven in the sacred city of Kanchipuram using triple warp silk threads. Features traditional Mayil (peacock) and Rudraksha motifs on an opulent contrasting ruby border.',
    fabric: 'Pure Mulberry Silk with Genuine Zari',
    length: '5.5 meters',
    blouseDetails: '0.8 meters contrasting ruby red silk blouse piece with gold zari temple borders',
    careInstructions: 'Dry clean only. Roll fold occasionally to preserve zari luster.',
    colors: [
      { name: 'Peacock Emerald', hex: '#0B4F3A' },
      { name: 'Deep Bottle Green', hex: '#063B2B' },
      { name: 'Teal Gold', hex: '#005F60' }
    ],
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: true,
    handloomCertified: true,
    sku: 'RS-KAN-002'
  },
  {
    id: 'saree-3',
    name: 'Aura of Lilac Organza Silk Saree with Zari Booti',
    slug: 'aura-of-lilac-organza-silk-saree',
    category: 'silk',
    categoryLabel: 'Silk Sarees',
    occasions: ['festive', 'party', 'premium-silk'],
    price: 11499,
    originalPrice: 15999,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1610030469668-935a8df2dbe0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A diaphanous pastel marvel. Sheer organza silk shimmering with champagne gold micro-bootis, finished with delicate hand-cut scalloped zari edges.',
    fabric: 'Pure Silk Organza',
    length: '5.5 meters',
    blouseDetails: '0.8 meters raw silk lilac blouse with embroidered sleeve cuffs',
    careInstructions: 'Dry clean only. Do not bleach or machine wash.',
    colors: [
      { name: 'Soft Lilac', hex: '#B399D4' },
      { name: 'Powder Blue', hex: '#A4C3D2' },
      { name: 'Dusty Rose', hex: '#DCAE96' }
    ],
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: true,
    handloomCertified: false,
    sku: 'RS-SLK-003'
  },
  {
    id: 'saree-4',
    name: 'Vintage Chanderi Handblock Printed Cotton Saree',
    slug: 'vintage-chanderi-handblock-printed-cotton-saree',
    category: 'cotton',
    categoryLabel: 'Cotton Sarees',
    occasions: ['office', 'daily', 'traditional'],
    price: 4499,
    originalPrice: 6200,
    discountPercent: 27,
    rating: 4.7,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Bespoke handblock printed floral booti on breezy Chanderi cotton-silk. Finished with a subtle zari border for everyday executive elegance.',
    fabric: 'Cotton Silk Blend (70% Organic Cotton, 30% Silk)',
    length: '5.5 meters',
    blouseDetails: '0.8 meters running handblock printed blouse piece',
    careInstructions: 'Gentle hand wash in cold water with mild detergent or dry clean.',
    colors: [
      { name: 'Warm Cream & Indigo', hex: '#EBE2D4' },
      { name: 'Sage Green', hex: '#9BB0A5' },
      { name: 'Terracotta', hex: '#C86D51' }
    ],
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: true,
    sku: 'RS-COT-004'
  },
  {
    id: 'saree-5',
    name: 'Blush Pink Chiffon Saree with Gota Patti Motifs',
    slug: 'blush-pink-chiffon-saree-with-gota-patti',
    category: 'chiffon',
    categoryLabel: 'Chiffon Sarees',
    occasions: ['festive', 'party', 'wedding'],
    price: 8999,
    originalPrice: 12499,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469668-935a8df2dbe0?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Feather-light pure French chiffon saree adorned with authentic Rajasthani hand-stitched Gota Patti flowers and fine sitara sequin sparkle.',
    fabric: '100% Pure Viscose Chiffon',
    length: '5.5 meters',
    blouseDetails: '0.8 meters heavy embroidered crepe silk blouse in blush pink',
    careInstructions: 'Dry clean only. Steam iron only on lowest setting.',
    colors: [
      { name: 'Blush Pink', hex: '#F4C2C2' },
      { name: 'Peach Coral', hex: '#F7A38B' },
      { name: 'Ivory Gold', hex: '#FAF3E0' }
    ],
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: true,
    sku: 'RS-CHF-005'
  },
  {
    id: 'saree-6',
    name: 'Midnight Noir Sequin Velvet Border Designer Saree',
    slug: 'midnight-noir-sequin-velvet-border-designer-saree',
    category: 'designer',
    categoryLabel: 'Designer Sarees',
    occasions: ['party', 'wedding'],
    price: 15499,
    originalPrice: 19999,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 65,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A captivating red-carpet sensation. Pure silk georgette drape accented with micro-shimmer sequins and an opulent hand-embroidered royal velvet border.',
    fabric: 'Silk Georgette with Velvet Border',
    length: '5.5 meters',
    blouseDetails: '1.0 meter heavy sequin encrusted black designer blouse piece',
    careInstructions: 'Dry clean only. Do not iron directly on sequins.',
    colors: [
      { name: 'Midnight Black', hex: '#1C1B20' },
      { name: 'Royal Navy', hex: '#0B1D3A' },
      { name: 'Wine Plum', hex: '#4A0E2E' }
    ],
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: false,
    sku: 'RS-DSG-006'
  },
  {
    id: 'saree-7',
    name: 'Sunlit Turmeric Gold Pure Kanjeevaram Saree',
    slug: 'sunlit-turmeric-gold-pure-kanjeevaram-saree',
    category: 'kanchipuram',
    categoryLabel: 'Kanchipuram Sarees',
    occasions: ['wedding', 'traditional', 'bridal'],
    price: 24999,
    originalPrice: 32000,
    discountPercent: 21,
    rating: 5.0,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The golden hour woven into fabric. Woven with 24k gold tested zari featuring temple gopuram motifs, auspicious mango bootis and heavy contrasting magenta border.',
    fabric: 'Pure Mulberry Silk (Silk Mark Certified)',
    length: '5.5 meters',
    blouseDetails: '0.8 meters magenta silk blouse with traditional zari sleeves',
    careInstructions: 'Professional dry cleaning only. Wrap in cotton/muslin.',
    colors: [
      { name: 'Haldi Turmeric', hex: '#E5A93B' },
      { name: 'Mustard Gold', hex: '#D18700' }
    ],
    isBestseller: true,
    isNewArrival: false,
    inStock: true,
    silkMarkCertified: true,
    handloomCertified: true,
    sku: 'RS-KAN-007'
  },
  {
    id: 'saree-8',
    name: 'Lavender Chikankari Mukaish Pure Georgette Saree',
    slug: 'lavender-chikankari-mukaish-pure-georgette-saree',
    category: 'georgette',
    categoryLabel: 'Georgette Sarees',
    occasions: ['festive', 'traditional', 'party'],
    price: 13999,
    originalPrice: 18500,
    discountPercent: 24,
    rating: 4.8,
    reviewCount: 53,
    images: [
      'https://images.unsplash.com/photo-1610030469668-935a8df2dbe0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Authentic Lucknowi hand embroidery by master craftswomen. Hand-worked Bakhiya, Phanda and Keel Kangan stitches sprinkled with pure silver Mukaish dots.',
    fabric: 'Pure Viscose Georgette',
    length: '5.5 meters',
    blouseDetails: '0.8 meters embroidered pure georgette blouse piece',
    careInstructions: 'Dry clean only.',
    colors: [
      { name: 'Lavender Mist', hex: '#967BB6' },
      { name: 'Pistachio Mint', hex: '#C5E1A5' },
      { name: 'Sky Cerulean', hex: '#87CEEB' }
    ],
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: true,
    sku: 'RS-GEO-008'
  },
  {
    id: 'saree-9',
    name: 'Midnight Gold Zari Brocade Party Saree',
    slug: 'midnight-gold-zari-brocade-party-saree',
    category: 'party-wear',
    categoryLabel: 'Party Wear Sarees',
    occasions: ['party', 'festive'],
    price: 9999,
    originalPrice: 13999,
    discountPercent: 28,
    rating: 4.7,
    reviewCount: 41,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Dramatic black and copper gold brocade saree engineered for gala dinners and sangeet nights. Drapes with fluid elegance and zero bulk.',
    fabric: 'Satin Silk with Metallic Zari',
    length: '5.5 meters',
    blouseDetails: '0.8 meters designer brocade blouse',
    careInstructions: 'Dry clean only.',
    colors: [
      { name: 'Obsidian Gold', hex: '#1C1C1E' },
      { name: 'Champagne Bronze', hex: '#5E4B3C' }
    ],
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: false,
    sku: 'RS-PTY-009'
  },
  {
    id: 'saree-10',
    name: 'Bengal Handloom Jamdani Cotton Muslin Saree',
    slug: 'bengal-handloom-jamdani-cotton-muslin-saree',
    category: 'cotton',
    categoryLabel: 'Cotton Sarees',
    occasions: ['office', 'daily', 'festive'],
    price: 6499,
    originalPrice: 8999,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 82,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469668-935a8df2dbe0?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The ancient wonder of Bengal weavers. Floating floral motifs woven shuttle-by-shuttle on featherweight handspun cotton muslin.',
    fabric: '100% Handloom Cotton Muslin',
    length: '5.5 meters',
    blouseDetails: '0.8 meters unstitched Jamdani border blouse',
    careInstructions: 'Gentle hand wash in cold water or dry clean.',
    colors: [
      { name: 'Off-White & Red', hex: '#F8F6F0' },
      { name: 'Beige & Gold', hex: '#EED9B3' }
    ],
    isBestseller: false,
    isNewArrival: false,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: true,
    sku: 'RS-COT-010'
  },
  {
    id: 'saree-11',
    name: 'Heirloom Paithani Pure Silk Saree with Asawali Border',
    slug: 'heirloom-paithani-pure-silk-saree',
    category: 'silk',
    categoryLabel: 'Silk Sarees',
    occasions: ['wedding', 'traditional', 'bridal', 'premium-silk'],
    price: 27999,
    originalPrice: 36000,
    discountPercent: 22,
    rating: 5.0,
    reviewCount: 67,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Maharashtra’s prized royal weave. Handwoven tapestry technique with kaleidoscopic Mor (peacock) motifs and pure gold zari pallu.',
    fabric: '100% Pure Mulberry Silk',
    length: '5.5 meters',
    blouseDetails: '0.8 meters pure silk blouse with matching Paithani border',
    careInstructions: 'Dry clean only. Preserve in cotton muslin bag.',
    colors: [
      { name: 'Royal Purple', hex: '#4A1238' },
      { name: 'Sindoor Red', hex: '#9E1B24' },
      { name: 'Emerald', hex: '#0B4F3A' }
    ],
    isBestseller: true,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: true,
    handloomCertified: true,
    sku: 'RS-SLK-011'
  },
  {
    id: 'saree-12',
    name: 'Sky Blue Floral Digital Printed Pure Organza Saree',
    slug: 'sky-blue-floral-printed-organza-saree',
    category: 'chiffon',
    categoryLabel: 'Chiffon Sarees',
    occasions: ['party', 'office', 'festive'],
    price: 7499,
    originalPrice: 10500,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 39,
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469668-935a8df2dbe0?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Watercolor blossoms printed on crisp, lightweight organza silk. Finished with a delicate silver thread pico border.',
    fabric: 'Pure Organza Silk',
    length: '5.5 meters',
    blouseDetails: '0.8 meters plain raw silk blouse piece in sky blue',
    careInstructions: 'Dry clean only.',
    colors: [
      { name: 'Serene Blue', hex: '#77A8D8' },
      { name: 'Peach Bloom', hex: '#F9B799' }
    ],
    isBestseller: false,
    isNewArrival: true,
    inStock: true,
    silkMarkCertified: false,
    handloomCertified: false,
    sku: 'RS-CHF-012'
  }
];

export const COUPONS = [
  {
    code: 'RENUKA10',
    discountType: 'percentage' as const,
    discountValue: 10,
    minPurchase: 3000,
    description: '10% off on all sarees for new visitors (Min. order ₹3,000)'
  },
  {
    code: 'FESTIVE20',
    discountType: 'percentage' as const,
    discountValue: 20,
    minPurchase: 15000,
    description: '20% off on festive & bridal luxury orders above ₹15,000'
  },
  {
    code: 'ROYAL2000',
    discountType: 'fixed' as const,
    discountValue: 2000,
    minPurchase: 18000,
    description: 'Flat ₹2,000 instant discount on Kanchipuram & Banarasi silk'
  }
];

export const SAMPLE_REVIEWS = [
  {
    id: 'rev-1',
    userName: 'Ananya Sharma',
    userCity: 'Bengaluru, Karnataka',
    rating: 5,
    date: '18 October 2026',
    comment: 'The Banarasi Katan silk saree is breathtaking in real life! The zari weave has a rich, antique gold sheen and does not feel itchy at all. Wore it for my sister’s sangeet and received endless compliments.',
    verified: true
  },
  {
    id: 'rev-2',
    userName: 'Meenakshi Sundaram',
    userCity: 'Chennai, Tamil Nadu',
    rating: 5,
    date: '02 November 2026',
    comment: 'Being from Tamil Nadu, my standard for Kanchipuram silk is very high. Renuka Sarees delivered authentic heavy silk with real zari weight and genuine Silk Mark verification. Excellent packaging in a reusable cloth box.',
    verified: true
  },
  {
    id: 'rev-3',
    userName: 'Pooja Agarwal',
    userCity: 'Varanasi, UP',
    rating: 5,
    date: '24 September 2026',
    comment: 'Delicate fall and wonderful drape. The saree looked exactly like the photos. The matching blouse piece had plenty of length for a designer cut.',
    verified: true
  }
];
