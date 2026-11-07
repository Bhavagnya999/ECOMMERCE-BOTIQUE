import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Award, Star, Flame } from 'lucide-react';

export const Bestsellers: React.FC = () => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-10 mb-8 border border-[#5C1B27] relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6C174]/20 border border-[#E6C174]/40 text-[#E6C174] text-xs font-medium mb-3">
              <Flame className="w-3.5 h-3.5 text-[#E6C174]" />
              <span>Patron Favorites · Top Rated 4.8+ Stars</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium mb-2">
              Bestseller Sarees
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              The iconic sarees that define Renuka’s heritage. Treasured for their luxurious zari density, silky smooth drape, and timeless regal allure.
            </p>
          </div>
        </div>

        {/* Highlight strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-[#E6D5BD] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-semibold text-xs text-[#380C14]">Silk Mark Certified</p>
              <p className="text-[11px] text-[#8C7A70]">Tested pure gold & silver zari threads</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E6D5BD] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-[#C89D42] text-[#C89D42]" />
            </div>
            <div>
              <p className="font-serif font-semibold text-xs text-[#380C14]">4.9 / 5.0 Average Rating</p>
              <p className="text-[11px] text-[#8C7A70]">Across 2,400+ verified customer reviews</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E6D5BD] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
              <span className="font-serif font-bold text-sm text-[#782333]">₹</span>
            </div>
            <div>
              <p className="font-serif font-semibold text-xs text-[#380C14]">Direct Weaver Pricing</p>
              <p className="text-[11px] text-[#8C7A70]">Fair trade luxury with zero middlemen markups</p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} badge="Bestseller" />
          ))}
        </div>
      </div>
    </div>
  );
};
