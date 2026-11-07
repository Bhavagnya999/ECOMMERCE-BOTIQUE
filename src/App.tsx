import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

import { Home } from './pages/Home';
import { AllSarees } from './pages/AllSarees';
import { NewArrivals } from './pages/NewArrivals';
import { Bestsellers } from './pages/Bestsellers';
import { Collections } from './pages/Collections';
import { Offers } from './pages/Offers';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2C1810]">
              {/* Header matching dark maroon luxury bar from reference */}
              <Header />

              {/* Navigation Bar matching cream luxury bar from reference */}
              <Navbar />

              {/* Page Viewport */}
              <main className="flex-1">
                <Routes>
                  {/* Page 1: Home */}
                  <Route path="/" element={<Home />} />

                  {/* Page 2: All Sarees */}
                  <Route path="/all-sarees" element={<AllSarees />} />

                  {/* Page 3: New Arrivals */}
                  <Route path="/new-arrivals" element={<NewArrivals />} />

                  {/* Page 4: Bestsellers */}
                  <Route path="/bestsellers" element={<Bestsellers />} />

                  {/* Page 5: Collections */}
                  <Route path="/collections" element={<Collections />} />

                  {/* Page 6: Offers */}
                  <Route path="/offers" element={<Offers />} />

                  {/* Page 7: About Us */}
                  <Route path="/about" element={<About />} />

                  {/* Page 8: Contact Us */}
                  <Route path="/contact" element={<Contact />} />

                  {/* Page 9: Login / Register */}
                  <Route path="/login" element={<Login />} />

                  {/* Page 10: Wishlist */}
                  <Route path="/wishlist" element={<Wishlist />} />

                  {/* Page 11: Shopping Cart */}
                  <Route path="/cart" element={<Cart />} />

                  {/* Page 12: Product Details */}
                  <Route path="/product/:slug" element={<ProductDetails />} />

                  {/* Fallback */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>

              {/* Footer */}
              <Footer />

              {/* Floating notification feedback */}
              <Toast />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
