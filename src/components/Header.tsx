import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, X } from 'lucide-react';
import { LotusLogo } from './LotusLogo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isLoggedIn } = useAuth();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/all-sarees?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const filteredSuggestions = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="relative bg-[#380C14] text-[#FAF6F0] border-b border-[#5C1B27] select-none z-40">
      {/* Decorative corner Indian floral filigree (matching reference) */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 pointer-events-none opacity-20 overflow-hidden">
        <svg viewBox="0 0 140 80" fill="#E6C174" className="w-full h-full object-cover">
          <circle cx="120" cy="20" r="14" fillOpacity="0.4" />
          <circle cx="100" cy="40" r="10" fillOpacity="0.3" />
          <path d="M120 20 Q135 50 110 70 Q90 55 120 20 Z" fillOpacity="0.5" />
          <path d="M90 10 Q110 30 95 60 Q80 40 90 10 Z" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 md:gap-8">
        {/* Left: Brand Identity matching reference image */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <LotusLogo className="w-10 h-10 md:w-12 md:h-12 text-[#E6C174] transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-[#E6C174] leading-tight">
              Renuka Sarees
            </span>
            <span className="text-[11px] md:text-xs tracking-wider text-[#DFB76C]/90 font-light italic">
              Tradition Woven for Every Occasion
            </span>
          </div>
        </Link>

        {/* Center: Search Bar matching reference image */}
        <div className="relative flex-1 max-w-xl mx-2 hidden sm:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search for sarees, collections..."
              className="w-full py-2 pl-4 pr-11 bg-white text-[#2C1810] placeholder-[#8C7A70] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#E6C174] shadow-inner transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#380C14] hover:text-[#B88B35] transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Autocomplete suggestions dropdown */}
          {showSuggestions && searchQuery.trim().length > 1 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white text-[#2C1810] rounded-xl shadow-2xl border border-[#E6D5BD] overflow-hidden z-50">
              <div className="flex items-center justify-between px-3 py-2 bg-[#FAF6F0] border-b border-[#F2E7D5] text-xs font-medium text-[#782333]">
                <span>Matching Sarees ({filteredSuggestions.length})</span>
                <button
                  type="button"
                  onClick={() => setShowSuggestions(false)}
                  className="hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {filteredSuggestions.length > 0 ? (
                <div className="divide-y divide-[#F2E7D5]">
                  {filteredSuggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        navigate(`/product/${item.slug}`);
                        setShowSuggestions(false);
                        setSearchQuery('');
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-[#FAF6F0] flex items-center justify-between gap-3 text-sm transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-8 h-8 rounded object-cover border border-[#E6D5BD]"
                        />
                        <div>
                          <p className="font-medium text-[#2C1810] line-clamp-1">{item.name}</p>
                          <p className="text-xs text-[#8C7A70]">{item.categoryLabel} · {item.fabric}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-[#4A151E] whitespace-nowrap">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-full py-2 bg-[#FAF6F0] text-center text-xs font-semibold text-[#4A151E] hover:bg-[#F2E7D5]"
                  >
                    View all results for &ldquo;{searchQuery}&rdquo; →
                  </button>
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-[#8C7A70]">
                  No matching sarees found. Try searching &ldquo;Banarasi&rdquo;, &ldquo;Silk&rdquo;, or &ldquo;Kanchipuram&rdquo;.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Actions matching reference (Wishlist, Cart, Login) */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex flex-col items-center group text-[#FAF6F0] hover:text-[#E6C174] transition-colors relative"
            title="Wishlist"
          >
            <div className="relative">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#E6C174] text-[#380C14] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-normal tracking-wide mt-0.5 hidden sm:inline">
              Wishlist
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex flex-col items-center group text-[#FAF6F0] hover:text-[#E6C174] transition-colors relative"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#E6C174] text-[#380C14] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-normal tracking-wide mt-0.5 whitespace-nowrap">
              Cart ({cartCount})
            </span>
          </Link>

          {/* Login / Profile */}
          <Link
            to="/login"
            className="flex flex-col items-center group text-[#FAF6F0] hover:text-[#E6C174] transition-colors"
            title={isLoggedIn ? `Logged in as ${user?.name}` : 'Login / Register'}
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-normal tracking-wide mt-0.5 truncate max-w-[70px]">
              {isLoggedIn ? user?.name?.split(' ')[0] : 'Login'}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for sarees, collections..."
            className="w-full py-1.5 pl-3.5 pr-10 bg-white text-[#2C1810] placeholder-[#8C7A70] rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#E6C174]"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#380C14]"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </header>
  );
};
