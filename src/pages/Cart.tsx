import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag, CheckCircle2, Truck } from 'lucide-react';

export const Cart: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    cartSubtotal,
    discountAmount,
    shippingAmount,
    cartTotal,
    cartCount,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ message: string; success: boolean } | null>(null);

  // Checkout modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState<{ orderId: string; date: string } | null>(null);
  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: 'Maharashtra',
    paymentMethod: 'cod', // cod, upi, card
  });

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutData.fullName || !checkoutData.phone || !checkoutData.address || !checkoutData.pincode) {
      alert('Please fill in your delivery details.');
      return;
    }

    const orderId = `RS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderPlaced({
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    });
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-8 mb-8 border border-[#5C1B27] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              Shopping Trousseau
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#E6C174] font-medium mt-1">
              Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </h1>
          </div>
          <Link to="/all-sarees" className="text-xs text-[#E6C174] hover:underline self-start sm:self-center">
            ← Continue Shopping
          </Link>
        </div>

        {cart.length === 0 && !orderPlaced ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E6D5BD] max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border border-[#E6D5BD] flex items-center justify-center mx-auto text-[#782333] mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-semibold mb-2">
              Your Cart is Currently Empty
            </h2>
            <p className="text-xs text-[#8C7A70] mb-6 leading-relaxed">
              Explore our handpicked collection of authentic Banarasi, Kanchipuram, and pure silk sarees.
            </p>
            <Link
              to="/all-sarees"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-full shadow-md transition-colors"
            >
              <span>Explore Saree Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : orderPlaced ? (
          /* Order Confirmation Screen */
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E6D5BD] max-w-2xl mx-auto shadow-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto border-2 border-[#A5D6A7]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32]">
                Order Confirmed
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#380C14] font-bold mt-1">
                Thank You For Choosing Renuka Sarees
              </h2>
              <p className="text-xs text-[#8C7A70] mt-1">
                Order Reference: <strong className="font-mono text-[#380C14]">{orderPlaced.orderId}</strong> · {orderPlaced.date}
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-5 rounded-xl border border-[#E6D5BD] text-left text-xs space-y-2">
              <p className="font-semibold text-[#380C14] border-b border-[#E6D5BD] pb-2">
                Delivery Summary
              </p>
              <p><strong>Recipient:</strong> {checkoutData.fullName}</p>
              <p><strong>Contact:</strong> {checkoutData.phone}</p>
              <p><strong>Address:</strong> {checkoutData.address}, {checkoutData.city} - {checkoutData.pincode}, {checkoutData.state}</p>
              <p><strong>Payment Mode:</strong> {checkoutData.paymentMethod.toUpperCase()} (Pay On Delivery / Confirmed)</p>
              <p className="text-[#2E7D32] font-semibold pt-1">
                Estimated Delivery: Express Insured Shipping (3-4 Business Days)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => setOrderPlaced(null)}
                className="px-6 py-2.5 bg-[#4A151E] text-[#E6C174] text-xs font-semibold rounded-full hover:bg-[#380C14] transition-colors"
              >
                Back to Boutique
              </button>
              <Link
                to="/all-sarees"
                className="px-6 py-2.5 border border-[#E6D5BD] text-[#380C14] text-xs font-semibold rounded-full hover:bg-[#FAF6F0] transition-colors"
              >
                Browse More Sarees
              </Link>
            </div>
          </div>
        ) : (
          /* Main Cart Content */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Items list */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#E6D5BD] shadow-xs divide-y divide-[#F2E7D5]">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Image & Title */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-lg border border-[#E6D5BD] shrink-0"
                      />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-[#B88B35] tracking-wider">
                          {item.product.categoryLabel}
                        </span>
                        <Link
                          to={`/product/${item.product.slug}`}
                          className="block font-serif text-sm font-semibold text-[#2C1810] hover:text-[#4A151E] line-clamp-1 mt-0.5"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-[#8C7A70] mt-0.5">
                          Color: <span className="font-medium text-[#2C1810]">{item.selectedColor}</span>
                        </p>
                        <p className="text-xs text-[#8C7A70]">
                          Fabric: {item.product.fabric}
                        </p>
                        <span className="font-semibold text-sm text-[#380C14] block mt-1 sm:hidden">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Stepper & Price & Remove */}
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#E6D5BD] rounded-lg bg-[#FAF6F0]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                          className="p-1.5 text-[#380C14] hover:bg-[#F2E7D5] rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold font-mono text-[#2C1810]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                          className="p-1.5 text-[#380C14] hover:bg-[#F2E7D5] rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for item */}
                      <div className="text-right hidden sm:block min-w-[90px]">
                        <span className="font-semibold text-sm text-[#380C14]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="block text-[10px] text-[#8C7A70]">
                          ₹{item.product.price.toLocaleString('en-IN')} each
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                        className="p-2 text-[#8C7A70] hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Shipping Alert Box */}
              <div className="p-4 bg-white rounded-xl border border-[#E6D5BD] flex items-center gap-3 text-xs text-[#2C1810]">
                <Truck className="w-5 h-5 text-[#B88B35] shrink-0" />
                {cartSubtotal >= 1999 ? (
                  <p>
                    <strong className="text-[#2E7D32]">Complimentary Insured Shipping Unlocked!</strong> You qualify for free express delivery anywhere in India.
                  </p>
                ) : (
                  <p>
                    Add items worth <strong>₹{(1999 - cartSubtotal).toLocaleString('en-IN')}</strong> more to enjoy Free Insured Shipping.
                  </p>
                )}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-[#E6D5BD] shadow-xs space-y-5">
                <h3 className="font-serif text-lg font-bold text-[#380C14] border-b border-[#F2E7D5] pb-3">
                  Order Summary
                </h3>

                {/* Coupon Input Form */}
                <div>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Try RENUKA10 or FESTIVE20"
                      className="flex-1 px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg uppercase tracking-wider text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>

                  {couponFeedback && (
                    <p className={`text-[11px] mt-1.5 ${couponFeedback.success ? 'text-emerald-700' : 'text-red-600'}`}>
                      {couponFeedback.message}
                    </p>
                  )}

                  {appliedCoupon && (
                    <div className="mt-2 p-2 bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-[#380C14]">
                        <Tag className="w-3.5 h-3.5 text-[#B88B35]" />
                        <span className="font-mono font-bold">{appliedCoupon.code}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-[11px] text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Calculation breakdown */}
                <div className="space-y-2.5 text-xs text-[#2C1810] border-t border-[#F2E7D5] pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#2E7D32]">
                      <span>Promo Discount</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping Charges</span>
                    <span>{shippingAmount === 0 ? <strong className="text-[#2E7D32]">FREE</strong> : `₹${shippingAmount}`}</span>
                  </div>

                  <div className="border-t border-[#F2E7D5] pt-3 flex justify-between text-sm sm:text-base font-bold text-[#380C14]">
                    <span>Total Amount</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-[10px] text-[#8C7A70]">Inclusive of all applicable GST taxes</p>
                </div>

                {/* Checkout Trigger */}
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3.5 bg-[#F4D086] hover:bg-[#E6C174] text-[#380C14] text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7A70] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>100% Secure Checkout · Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E6D5BD] shadow-2xl relative my-8">
              <div className="flex items-center justify-between border-b border-[#F2E7D5] pb-3 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#380C14]">
                    Complete Your Order
                  </h3>
                  <p className="text-xs text-[#8C7A70]">Payable: ₹{cartTotal.toLocaleString('en-IN')}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="p-1 text-[#8C7A70] hover:text-black"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={checkoutData.fullName}
                    onChange={(e) => setCheckoutData({ ...checkoutData, fullName: e.target.value })}
                    placeholder="Recipient's Name"
                    className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">Delivery Address *</label>
                  <textarea
                    rows={2}
                    required
                    value={checkoutData.address}
                    onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                    placeholder="Flat/House No., Street, Landmark"
                    className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={checkoutData.city}
                      onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                      placeholder="e.g. Mumbai"
                      className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">PIN Code *</label>
                    <input
                      type="text"
                      required
                      value={checkoutData.pincode}
                      onChange={(e) => setCheckoutData({ ...checkoutData, pincode: e.target.value })}
                      placeholder="e.g. 400001"
                      className="w-full px-3 py-2 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1.5">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    <label className={`p-2.5 rounded-lg border text-center cursor-pointer text-xs ${checkoutData.paymentMethod === 'cod' ? 'border-[#4A151E] bg-[#FAF6F0] font-semibold text-[#380C14]' : 'border-[#E6D5BD]'}`}>
                      <input
                        type="radio"
                        name="pay"
                        value="cod"
                        checked={checkoutData.paymentMethod === 'cod'}
                        onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'cod' })}
                        className="sr-only"
                      />
                      <span>Cash On Delivery</span>
                    </label>

                    <label className={`p-2.5 rounded-lg border text-center cursor-pointer text-xs ${checkoutData.paymentMethod === 'upi' ? 'border-[#4A151E] bg-[#FAF6F0] font-semibold text-[#380C14]' : 'border-[#E6D5BD]'}`}>
                      <input
                        type="radio"
                        name="pay"
                        value="upi"
                        checked={checkoutData.paymentMethod === 'upi'}
                        onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'upi' })}
                        className="sr-only"
                      />
                      <span>UPI / QR</span>
                    </label>

                    <label className={`p-2.5 rounded-lg border text-center cursor-pointer text-xs ${checkoutData.paymentMethod === 'card' ? 'border-[#4A151E] bg-[#FAF6F0] font-semibold text-[#380C14]' : 'border-[#E6D5BD]'}`}>
                      <input
                        type="radio"
                        name="pay"
                        value="card"
                        checked={checkoutData.paymentMethod === 'card'}
                        onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'card' })}
                        className="sr-only"
                      />
                      <span>Card / NetBanking</span>
                    </label>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2E7D5]">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Confirm & Place Order (₹{cartTotal.toLocaleString('en-IN')})
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
