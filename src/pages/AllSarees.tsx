import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES, OCCASIONS } from '../data/categories';
import { Filter, SlidersHorizontal, X, RotateCcw, Search } from 'lucide-react';

export const AllSarees: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state sync
  const initialCategory = searchParams.get('category') || 'all';
  const initialOccasion = searchParams.get('occasion') || 'all';
  const initialSearch = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState<string>(initialOccasion);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [onlySilkMark, setOnlySilkMark] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('popularity'); // popularity, price-low, price-high, rating, newest
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const occ = searchParams.get('occasion');
    if (occ) setSelectedOccasion(occ);
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Unique fabrics
  const fabrics = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.fabric.includes('Katan Silk')) set.add('Katan Silk');
      else if (p.fabric.includes('Mulberry')) set.add('Pure Mulberry Silk');
      else if (p.fabric.includes('Organza')) set.add('Organza Silk');
      else if (p.fabric.includes('Cotton')) set.add('Handloom Cotton');
      else if (p.fabric.includes('Chiffon')) set.add('Pure Chiffon');
      else if (p.fabric.includes('Georgette')) set.add('Pure Georgette');
      else set.add('Satin & Brocade');
    });
    return Array.from(set);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'all' && !product.occasions.includes(selectedOccasion)) {
        return false;
      }
      // Max price
      if (product.price > maxPrice) {
        return false;
      }
      // Fabric filter
      if (selectedFabric !== 'all') {
        if (!product.fabric.toLowerCase().includes(selectedFabric.toLowerCase().split(' ')[0])) {
          return false;
        }
      }
      // Silk Mark
      if (onlySilkMark && !product.silkMarkCertified) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(query) ||
          product.categoryLabel.toLowerCase().includes(query) ||
          product.fabric.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      // default popularity
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedCategory, selectedOccasion, maxPrice, selectedFabric, onlySilkMark, searchQuery, sortBy]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedOccasion !== 'all' ? 1 : 0) +
    (maxPrice < 30000 ? 1 : 0) +
    (selectedFabric !== 'all' ? 1 : 0) +
    (onlySilkMark ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setMaxPrice(30000);
    setSelectedFabric('all');
    setOnlySilkMark(false);
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner Header */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-8 mb-8 border border-[#5C1B27] relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              The Grand Wardrobe
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#E6C174] font-medium mt-1 mb-2">
              All Saree Collections
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              Immerse yourself in authentic Indian heritage. From heavy bridal Katan silk and Kanchipuram temple brocades to featherweight organza and breezy Chanderi cottons.
            </p>
          </div>
        </div>

        {/* Toolbar: Results count, search feedback, Sort dropdown & Mobile filter button */}
        <div className="bg-white rounded-xl p-3.5 sm:p-4 mb-6 border border-[#E6D5BD] flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-xs font-medium text-[#380C14]"
            >
              <Filter className="w-4 h-4 text-[#782333]" />
              <span>Filters ({activeFilterCount})</span>
            </button>
            <span className="text-xs sm:text-sm text-[#2C1810] font-medium">
              Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'saree' : 'sarees'}
            </span>
            {searchQuery && (
              <span className="text-xs text-[#8C7A70] bg-[#FAF6F0] px-2 py-1 rounded">
                Matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs text-[#782333] hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <label htmlFor="sortSelect" className="text-xs text-[#8C7A70] whitespace-nowrap">
                Sort By:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg px-2.5 py-1.5 text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E6D5BD] shadow-xs sticky top-24 space-y-6">
              <div className="flex items-center justify-between border-b border-[#F2E7D5] pb-3">
                <div className="flex items-center gap-2 font-serif font-semibold text-base text-[#380C14]">
                  <SlidersHorizontal className="w-4 h-4 text-[#C89D42]" />
                  <span>Refine Collection</span>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[11px] text-[#782333] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88B35] mb-2.5">
                  Category
                </h4>
                <div className="space-y-1.5 text-xs text-[#2C1810]">
                  <label className="flex items-center justify-between cursor-pointer hover:text-[#4A151E]">
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === 'all'}
                        onChange={() => setSelectedCategory('all')}
                        className="text-[#4A151E] focus:ring-[#E6C174]"
                      />
                      <span>All Categories</span>
                    </span>
                    <span className="text-[#8C7A70] text-[10px]">{PRODUCTS.length}</span>
                  </label>
                  {CATEGORIES.map((c) => (
                    <label key={c.id} className="flex items-center justify-between cursor-pointer hover:text-[#4A151E]">
                      <span className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === c.id}
                          onChange={() => setSelectedCategory(c.id)}
                          className="text-[#4A151E] focus:ring-[#E6C174]"
                        />
                        <span>{c.name}</span>
                      </span>
                      <span className="text-[#8C7A70] text-[10px]">
                        {PRODUCTS.filter((p) => p.category === c.id).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div className="border-t border-[#F2E7D5] pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88B35]">
                    Price Range
                  </h4>
                  <span className="text-xs font-semibold text-[#380C14]">
                    Up to ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="30000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#4A151E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C7A70] mt-1">
                  <span>₹4,000</span>
                  <span>₹15,000</span>
                  <span>₹30,000</span>
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="border-t border-[#F2E7D5] pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88B35] mb-2.5">
                  Occasion
                </h4>
                <div className="space-y-1.5 text-xs text-[#2C1810]">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[#4A151E]">
                    <input
                      type="radio"
                      name="occasion"
                      checked={selectedOccasion === 'all'}
                      onChange={() => setSelectedOccasion('all')}
                      className="text-[#4A151E] focus:ring-[#E6C174]"
                    />
                    <span>All Occasions</span>
                  </label>
                  {OCCASIONS.filter((o) => o.id !== 'all').map((occ) => (
                    <label key={occ.id} className="flex items-center gap-2 cursor-pointer hover:text-[#4A151E]">
                      <input
                        type="radio"
                        name="occasion"
                        checked={selectedOccasion === occ.id}
                        onChange={() => setSelectedOccasion(occ.id)}
                        className="text-[#4A151E] focus:ring-[#E6C174]"
                      />
                      <span>{occ.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fabric Filter */}
              <div className="border-t border-[#F2E7D5] pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B88B35] mb-2.5">
                  Fabric Type
                </h4>
                <select
                  value={selectedFabric}
                  onChange={(e) => setSelectedFabric(e.target.value)}
                  className="w-full text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-md p-2 text-[#2C1810] focus:ring-1 focus:ring-[#E6C174]"
                >
                  <option value="all">All Fabrics</option>
                  {fabrics.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Silk Mark Certified Only */}
              <div className="border-t border-[#F2E7D5] pt-4">
                <label className="flex items-center gap-2 text-xs font-medium text-[#2C1810] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlySilkMark}
                    onChange={(e) => setOnlySilkMark(e.target.checked)}
                    className="rounded text-[#4A151E] focus:ring-[#E6C174]"
                  />
                  <span>Silk Mark Certified Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center border border-[#E6D5BD]">
                <p className="font-serif text-lg text-[#380C14] font-medium mb-2">
                  No sarees found matching your criteria.
                </p>
                <p className="text-xs text-[#8C7A70] max-w-sm mx-auto mb-4">
                  Try adjusting your filters, expanding your budget, or clearing your search term.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2 bg-[#4A151E] text-[#E6C174] text-xs font-semibold rounded-full hover:bg-[#380C14] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-over modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs lg:hidden">
          <div className="w-4/5 max-w-xs bg-white h-full p-5 overflow-y-auto ml-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#F2E7D5] pb-3">
                <span className="font-serif font-semibold text-sm text-[#380C14]">Filter Sarees</span>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-[#8C7A70] hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Category */}
              <div>
                <p className="text-xs font-semibold text-[#B88B35] uppercase mb-2">Category</p>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="m-cat"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                    />
                    <span>All</span>
                  </label>
                  {CATEGORIES.map((c) => (
                    <label key={c.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="m-cat"
                        checked={selectedCategory === c.id}
                        onChange={() => setSelectedCategory(c.id)}
                      />
                      <span>{c.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div>
                <p className="text-xs font-semibold text-[#B88B35] uppercase mb-1">
                  Max Price: ₹{maxPrice.toLocaleString('en-IN')}
                </p>
                <input
                  type="range"
                  min="4000"
                  max="30000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#4A151E]"
                />
              </div>

              {/* Mobile Silk Mark */}
              <div>
                <label className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={onlySilkMark}
                    onChange={(e) => setOnlySilkMark(e.target.checked)}
                  />
                  <span>Silk Mark Certified Only</span>
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F2E7D5] flex gap-2">
              <button
                type="button"
                onClick={resetFilters}
                className="flex-1 py-2 text-xs font-medium border border-[#E6D5BD] rounded-lg text-[#380C14]"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2 text-xs font-semibold bg-[#4A151E] text-[#E6C174] rounded-lg"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
