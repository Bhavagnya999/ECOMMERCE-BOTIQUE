import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { CATEGORIES, OCCASIONS } from '../data/categories';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sareesDropdownOpen, setSareesDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const location = useLocation();

  const closeAll = () => {
    setMobileMenuOpen(false);
    setSareesDropdownOpen(false);
    setCollectionsDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-3 px-3.5 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
      isActive
        ? 'text-[#380C14] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2.5px] after:bg-[#4A151E]'
        : 'text-[#4A151E]/90 hover:text-[#380C14]'
    }`;

  return (
    <nav className="relative bg-[#F8F2E8] border-b border-[#E6D5BD] shadow-xs z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-11">
          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden w-full justify-between py-1">
            <span className="text-xs font-serif italic text-[#4A151E]">Tradition Woven for Every Occasion</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#380C14] hover:text-[#782333] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Navigation Links matching reference */}
          <div className="hidden md:flex items-center gap-1 lg:gap-5">
            {/* 1. Home */}
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* 2. All Sarees (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setSareesDropdownOpen(true)}
              onMouseLeave={() => setSareesDropdownOpen(false)}
            >
              <NavLink
                to="/all-sarees"
                className={({ isActive }) =>
                  `flex items-center gap-1 py-3 px-3.5 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#380C14] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2.5px] after:bg-[#4A151E]'
                      : 'text-[#4A151E]/90 hover:text-[#380C14]'
                  }`
                }
              >
                All Sarees
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </NavLink>

              {/* Sarees categories mega-dropdown */}
              {sareesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-xl border border-[#E6D5BD] p-3 grid gap-1.5 z-50">
                  <NavLink
                    to="/all-sarees"
                    onClick={closeAll}
                    className="px-3 py-1.5 text-xs font-semibold text-[#4A151E] hover:bg-[#F8F2E8] rounded-md transition-colors flex items-center justify-between"
                  >
                    <span>View All Collections</span>
                    <span className="text-[10px] text-[#B88B35]">Explore →</span>
                  </NavLink>
                  <hr className="border-[#F2E7D5]" />
                  {CATEGORIES.map((cat) => (
                    <NavLink
                      key={cat.id}
                      to={`/all-sarees?category=${cat.id}`}
                      onClick={closeAll}
                      className="px-3 py-1.5 text-xs text-[#2C1810] hover:bg-[#FAF6F0] hover:text-[#4A151E] rounded-md transition-colors flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-[#8C7A70] font-mono">{cat.itemCount}+</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* 3. New Arrivals */}
            <NavLink to="/new-arrivals" className={navLinkClass}>
              <span className="inline-flex items-center gap-1">
                New Arrivals
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B35]" />
              </span>
            </NavLink>

            {/* 4. Bestsellers */}
            <NavLink to="/bestsellers" className={navLinkClass}>
              Bestsellers
            </NavLink>

            {/* 5. Collections (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionsDropdownOpen(true)}
              onMouseLeave={() => setCollectionsDropdownOpen(false)}
            >
              <NavLink
                to="/collections"
                className={({ isActive }) =>
                  `flex items-center gap-1 py-3 px-3.5 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#380C14] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2.5px] after:bg-[#4A151E]'
                      : 'text-[#4A151E]/90 hover:text-[#380C14]'
                  }`
                }
              >
                Collections
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </NavLink>

              {collectionsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-b-xl shadow-xl border border-[#E6D5BD] p-3 grid gap-1.5 z-50">
                  <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#B88B35]">
                    Occasion & Wardrobe
                  </div>
                  {OCCASIONS.filter((occ) => occ.id !== 'all').map((occ) => (
                    <NavLink
                      key={occ.id}
                      to={`/collections?occasion=${occ.id}`}
                      onClick={closeAll}
                      className="px-3 py-1.5 text-xs text-[#2C1810] hover:bg-[#FAF6F0] hover:text-[#4A151E] rounded-md transition-colors"
                    >
                      <div className="font-medium">{occ.name}</div>
                      <div className="text-[10px] text-[#8C7A70] line-clamp-1">{occ.description}</div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Offers */}
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                `relative py-3 px-3.5 text-sm font-medium tracking-wide transition-colors whitespace-nowrap flex items-center gap-1 text-[#782333] hover:text-[#380C14] ${
                  isActive ? 'font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2.5px] after:bg-[#4A151E]' : ''
                }`
              }
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88B35]" />
              Offers
            </NavLink>

            {/* 7. About Us */}
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* 8. Contact */}
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E6D5BD] px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <NavLink
            to="/"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-sarees"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            All Sarees
          </NavLink>
          <div className="pl-4 grid grid-cols-2 gap-1 text-xs">
            {CATEGORIES.slice(0, 6).map((c) => (
              <NavLink
                key={c.id}
                to={`/all-sarees?category=${c.id}`}
                onClick={closeAll}
                className="py-1 text-[#5C1B27] hover:underline"
              >
                • {c.name}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/new-arrivals"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/bestsellers"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            Bestsellers
          </NavLink>
          <NavLink
            to="/collections"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            Collections
          </NavLink>
          <NavLink
            to="/offers"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#782333] font-semibold rounded-lg hover:bg-[#F2E7D5]"
          >
            Special Offers & Coupons
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeAll}
            className="block px-3 py-2 text-sm font-medium text-[#380C14] rounded-lg hover:bg-[#F2E7D5]"
          >
            Contact
          </NavLink>
          <div className="pt-2 border-t border-[#E6D5BD] flex items-center justify-between text-xs text-[#8C7A70] px-2">
            <NavLink to="/wishlist" onClick={closeAll} className="hover:text-[#4A151E]">Wishlist</NavLink>
            <NavLink to="/cart" onClick={closeAll} className="hover:text-[#4A151E]">Shopping Cart</NavLink>
            <NavLink to="/login" onClick={closeAll} className="hover:text-[#4A151E]">My Account</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
