import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LotusLogo } from './LotusLogo';
import { ShieldCheck, Truck, RefreshCw, Award, Mail, Phone, MapPin, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { applyCoupon } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      applyCoupon('RENUKA10');
    }
  };

  return (
    <footer className="bg-[#26070E] text-[#FAF6F0] border-t border-[#4A151E] pt-14 pb-8">
      {/* 4 Trust Pillars strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#380C14]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#380C14] border border-[#E6C174]/40 flex items-center justify-center text-[#E6C174] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#E6C174]">Silk Mark Certified</h4>
              <p className="text-xs text-[#E6D5BD]/80">100% pure silk & authentic zari tests</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#380C14] border border-[#E6C174]/40 flex items-center justify-center text-[#E6C174] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#E6C174]">Free Shipping</h4>
              <p className="text-xs text-[#E6D5BD]/80">All India express insured delivery</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#380C14] border border-[#E6C174]/40 flex items-center justify-center text-[#E6C174] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#E6C174]">Cash on Delivery</h4>
              <p className="text-xs text-[#E6D5BD]/80">Pay safely upon saree delivery</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#380C14] border border-[#E6C174]/40 flex items-center justify-center text-[#E6C174] shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#E6C174]">7-Day Easy Exchange</h4>
              <p className="text-xs text-[#E6D5BD]/80">Hassle-free guarantee & support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand & Story */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <LotusLogo className="w-10 h-10 text-[#E6C174]" />
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-[#E6C174] block leading-tight">
                Renuka Sarees
              </span>
              <span className="text-xs text-[#DFB76C] italic font-light">
                Tradition Woven for Every Occasion
              </span>
            </div>
          </div>
          <p className="text-xs text-[#E6D5BD]/80 leading-relaxed pr-6">
            For generations, Renuka Sarees has celebrated the eternal elegance of Indian heritage.
            Each saree is handpicked from hereditary artisan weavers in Varanasi, Kanchipuram, Chanderi,
            and Bengal, bringing imperial luxury into the modern woman’s trousseau.
          </p>

          {/* Newsletter Box */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-[#E6C174] mb-2">
              Subscribe for Exclusive Festive Privileges (Get 10% Off)
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#380C14] border border-[#E6C174]/50 rounded-lg text-xs text-[#E6C174] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E6C174]" />
                <span>Thank you! Code <strong>RENUKA10</strong> is active in your cart!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-3 py-2 text-xs bg-white text-[#2C1810] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6C174]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E6C174] hover:bg-[#F4D086] text-[#380C14] text-xs font-semibold rounded-md transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C174] uppercase mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-[#E6D5BD]/80">
            <li><Link to="/" className="hover:text-[#E6C174] transition-colors">Home</Link></li>
            <li><Link to="/all-sarees" className="hover:text-[#E6C174] transition-colors">All Sarees</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-[#E6C174] transition-colors">New Arrivals</Link></li>
            <li><Link to="/bestsellers" className="hover:text-[#E6C174] transition-colors">Bestsellers</Link></li>
            <li><Link to="/collections" className="hover:text-[#E6C174] transition-colors">Occasion Collections</Link></li>
            <li><Link to="/offers" className="hover:text-[#E6C174] transition-colors">Festive Offers</Link></li>
            <li><Link to="/about" className="hover:text-[#E6C174] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#E6C174] transition-colors">Contact & Boutiques</Link></li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C174] uppercase mb-4">
            Saree Varieties
          </h4>
          <ul className="space-y-2 text-xs text-[#E6D5BD]/80">
            <li><Link to="/all-sarees?category=banarasi" className="hover:text-[#E6C174] transition-colors">Banarasi Katan Silk</Link></li>
            <li><Link to="/all-sarees?category=kanchipuram" className="hover:text-[#E6C174] transition-colors">Kanchipuram Temple Silk</Link></li>
            <li><Link to="/all-sarees?category=silk" className="hover:text-[#E6C174] transition-colors">Paithani & Mulberry Silk</Link></li>
            <li><Link to="/all-sarees?category=cotton" className="hover:text-[#E6C174] transition-colors">Chanderi & Jamdani Cotton</Link></li>
            <li><Link to="/all-sarees?category=georgette" className="hover:text-[#E6C174] transition-colors">Lucknowi Chikankari Georgette</Link></li>
            <li><Link to="/all-sarees?category=chiffon" className="hover:text-[#E6C174] transition-colors">Gota Patti Chiffon</Link></li>
            <li><Link to="/all-sarees?category=designer" className="hover:text-[#E6C174] transition-colors">Royal Velvet Designer Drapes</Link></li>
            <li><Link to="/all-sarees?category=party-wear" className="hover:text-[#E6C174] transition-colors">Midnight Evening Partywear</Link></li>
          </ul>
        </div>

        {/* Boutiques & Contact */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C174] uppercase mb-4">
            Store Locations
          </h4>
          <div className="space-y-3 text-xs text-[#E6D5BD]/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E6C174] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#FAF6F0]">Varanasi Heritage Flagship</p>
                <p className="text-[11px] text-[#E6D5BD]/60">Chowk Silk Corridor, Varanasi, UP 221001</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E6C174] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#FAF6F0]">Kanchipuram Studio</p>
                <p className="text-[11px] text-[#E6D5BD]/60">Gandhi Road, Kanchipuram, TN 631501</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[#E6C174]">
              <Phone className="w-4 h-4" />
              <span>+91 98200 12345</span>
            </div>

            <div className="flex items-center gap-2 text-[#E6C174]">
              <Mail className="w-4 h-4" />
              <span>concierge@renukasarees.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#380C14] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E6D5BD]/60 gap-4">
        <p>© {new Date().getFullYear()} Renuka Sarees. All Rights Reserved. Handwoven with pride in India.</p>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:underline">Privacy Policy</Link>
          <Link to="/about" className="hover:underline">Terms of Service</Link>
          <Link to="/contact" className="hover:underline">Track Your Saree</Link>
        </div>
      </div>
    </footer>
  );
};
