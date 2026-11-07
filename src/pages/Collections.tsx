import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { OCCASIONS } from '../data/categories';
import { Crown, Sparkles, Heart } from 'lucide-react';

export const Collections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialOccasion = searchParams.get('occasion') || 'all';
  const [activeOccasion, setActiveOccasion] = useState<string>(initialOccasion);

  useEffect(() => {
    const occ = searchParams.get('occasion');
    if (occ) setActiveOccasion(occ);
  }, [searchParams]);

  const handleOccasionChange = (occId: string) => {
    setActiveOccasion(occId);
    if (occId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ occasion: occId });
    }
  };

  const filteredProducts = activeOccasion === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.occasions.includes(activeOccasion));

  const currentOccasionObj = OCCASIONS.find((o) => o.id === activeOccasion) || OCCASIONS[0];

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-10 mb-8 border border-[#5C1B27] relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              Occasions & Milestones
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium mt-1 mb-2">
              Curated Saree Collections
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              Each chapter of an Indian celebration demands its own signature weave. Discover hand-selected edits for grand weddings, vibrant sangeets, festive rituals, and refined daily drapes.
            </p>
          </div>
        </div>

        {/* 8 Occasion Navigation Tabs matching prompt requirements */}
        <div className="bg-white rounded-2xl p-3 border border-[#E6D5BD] mb-8 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {OCCASIONS.map((occ) => (
              <button
                key={occ.id}
                type="button"
                onClick={() => handleOccasionChange(occ.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeOccasion === occ.id
                    ? 'bg-[#4A151E] text-[#E6C174] shadow-md scale-[1.02]'
                    : 'bg-[#FAF6F0] text-[#380C14] hover:bg-[#F2E7D5]'
                }`}
              >
                {occ.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Collection Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6D5BD] pb-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#380C14]">
              {currentOccasionObj.name}
            </h2>
            <p className="text-xs text-[#8C7A70] mt-0.5">
              {currentOccasionObj.description} · ({filteredProducts.length} curated {filteredProducts.length === 1 ? 'saree' : 'sarees'})
            </p>
          </div>
        </div>

        {/* Sarees Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
