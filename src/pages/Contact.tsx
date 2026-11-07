import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bridal Saree Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number';
    } else if (formData.phone.trim().length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) errs.message = 'Please type your inquiry message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-10 mb-10 border border-[#5C1B27] relative overflow-hidden shadow-xl text-center">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              We Would Love To Assist You
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium mt-1 mb-2">
              Contact Renuka Sarees
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              Whether you need bridal trousseau consultations, custom blouse stitching queries, or corporate gift assistance, our saree connoisseurs are at your service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6D5BD] shadow-xs">
            <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-semibold mb-1">
              Send an Inquiry
            </h2>
            <p className="text-xs text-[#8C7A70] mb-6">
              Fill in your details and our senior styling concierge will get in touch within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#FAF6F0] border border-[#E6D5BD] rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#2E7D32] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#380C14]">Inquiry Received!</h3>
                <p className="text-xs text-[#2C1810] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our bridal stylist will reach out to you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Bridal Saree Consultation', message: '' });
                  }}
                  className="mt-4 px-6 py-2 bg-[#4A151E] text-[#E6C174] text-xs font-semibold rounded-full hover:bg-[#380C14] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF6F0] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6C174] text-[#2C1810] ${
                        errors.name ? 'border-red-400' : 'border-[#E6D5BD]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF6F0] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6C174] text-[#2C1810] ${
                        errors.phone ? 'border-red-400' : 'border-[#E6D5BD]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF6F0] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6C174] text-[#2C1810] ${
                      errors.email ? 'border-red-400' : 'border-[#E6D5BD]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6C174] text-[#2C1810]"
                  >
                    <option value="Bridal Saree Consultation">Bridal Saree Consultation</option>
                    <option value="Order Status & Tracking">Order Status & Tracking</option>
                    <option value="Custom Blouse Stitching">Custom Blouse Stitching & Fall-Pico</option>
                    <option value="Bulk / Wedding Favors Order">Bulk / Wedding Favors Order</option>
                    <option value="Silk Mark Authenticity Verification">Silk Mark Authenticity Verification</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#2C1810] mb-1">
                    Message / Special Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the occasion date, preferred silk variety, or colors you are looking for..."
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FAF6F0] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#E6C174] text-[#2C1810] ${
                      errors.message ? 'border-red-400' : 'border-[#E6D5BD]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs sm:text-sm font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Store Addresses & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E6D5BD] shadow-xs space-y-5">
              <h3 className="font-serif text-lg font-bold text-[#380C14] border-b border-[#F2E7D5] pb-3">
                Concierge Contact
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C1810]">Customer Helpline</p>
                  <p className="text-xs text-[#782333] font-medium">+91 98200 12345 / +91 (0542) 234-5678</p>
                  <p className="text-[11px] text-[#8C7A70]">Mon – Sat: 9:30 AM to 8:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C1810]">Email Concierge</p>
                  <p className="text-xs text-[#782333] font-medium">care@renukasarees.com</p>
                  <p className="text-[11px] text-[#8C7A70]">Response within 4 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C1810]">Boutique Visiting Hours</p>
                  <p className="text-xs text-[#2C1810]">10:00 AM – 8:30 PM (Open 7 Days a week)</p>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-3 border-t border-[#F2E7D5]">
                <p className="text-xs font-semibold text-[#B88B35] mb-2 uppercase tracking-wider">
                  Follow Our Journey
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#instagram"
                    onClick={(e) => e.preventDefault()}
                    className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#4A151E] text-[#4A151E] hover:text-[#E6C174] flex items-center justify-center transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#facebook"
                    onClick={(e) => e.preventDefault()}
                    className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#4A151E] text-[#4A151E] hover:text-[#E6C174] flex items-center justify-center transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#youtube"
                    onClick={(e) => e.preventDefault()}
                    className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#4A151E] text-[#4A151E] hover:text-[#E6C174] flex items-center justify-center transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E6D5BD] space-y-4">
              <h4 className="font-serif text-sm font-bold text-[#380C14]">
                Flagship Saree Emporium
              </h4>
              <div className="flex items-start gap-2.5 text-xs text-[#2C1810]">
                <MapPin className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Renuka Sarees Varanasi Flagship</p>
                  <p className="text-[#8C7A70]">Chowk Heritage Silk Corridor, Godowlia Crossing, Varanasi, Uttar Pradesh 221001</p>
                </div>
              </div>
              <p className="text-[11px] text-[#8C7A70] italic">
                * Private valet parking & bridal consultation suites available on prior booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
