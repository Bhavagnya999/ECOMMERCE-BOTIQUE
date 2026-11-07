import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewArrivals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newProducts = PRODUCTS.filter((p) => p.isNewArrival);
  const displayed = selectedCategory === 'all'
    ? newProducts
    : newProducts.filter((p) => p.category === selectedCategory);

  const categories = Array.from(new Set(newProducts.map((p) => p.categoryLabel)));

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#380C14] via-[#4A151E] to-[#26070E] text-[#FAF6F0] rounded-2xl p-6 sm:p-10 mb-8 border border-[#5C1B27] relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6C174]/20 border border-[#E6C174]/40 text-[#E6C174] text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autumn/Festive 2026 Edition</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium mb-2">
              New Arrivals
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              The latest creations from our master handlooms. Featuring ethereal organza pastels, intricate Mukaish georgette, and radiant pure Kanjeevaram wedding silks.
            </p>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#4A151E] text-[#E6C174] shadow-sm'
                : 'bg-white text-[#2C1810] border border-[#E6D5BD] hover:border-[#C89D42]'
            }`}
          >
            All New Arrivals ({newProducts.length})
          </button>
          {categories.map((catLabel) => {
            const matchingCat = newProducts.find((p) => p.categoryLabel === catLabel)?.category || '';
            return (
              <button
                key={catLabel}
                type="button"
                onClick={() => setSelectedCategory(matchingCat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === matchingCat
                    ? 'bg-[#4A151E] text-[#E6C174] shadow-sm'
                    : 'bg-white text-[#2C1810] border border-[#E6D5BD] hover:border-[#C89D42]'
                }`}
              >
                {catLabel}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayed.map((product) => (
            <ProductCard key={product.id} product={product} badge="New Arrival" />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-white border border-[#E6D5BD] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-lg sm:text-xl text-[#380C14] font-semibold">
              Looking for our timeless classics?
            </h3>
            <p className="text-xs text-[#8C7A70] mt-0.5">
              Explore our bestsellers that have adorned celebrations across generations.
            </p>
          </div>
          <Link
            to="/bestsellers"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-full shadow-md transition-colors"
          >
            <span>View Bestsellers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
