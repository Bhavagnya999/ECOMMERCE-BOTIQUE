export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // silk, cotton, banarasi, kanchipuram, georgette, chiffon, designer, party-wear
  categoryLabel: string;
  occasions: string[]; // wedding, festive, traditional, office, party, bridal, daily, premium-silk
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  fabric: string;
  length: string;
  blouseDetails: string;
  careInstructions: string;
  colors: { name: string; hex: string }[];
  isBestseller?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
  silkMarkCertified?: boolean;
  handloomCertified?: boolean;
  sku: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface Review {
  id: string;
  userName: string;
  userCity: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minPurchase: number;
  description: string;
}
