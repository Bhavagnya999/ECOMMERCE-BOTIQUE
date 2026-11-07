import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LotusLogo } from '../components/LotusLogo';
import { User, Lock, Mail, Phone, LogOut, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';

export const Login: React.FC = () => {
  const { user, isLoggedIn, login, register, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide your email and password');
      return;
    }
    setError('');
    login(email.trim());
    setSuccessMsg('Welcome back to Renuka Sarees!');
    setTimeout(() => {
      navigate('/all-sarees');
    }, 1000);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    register(name.trim(), email.trim(), phone.trim() || '+91 98765 43210');
    setSuccessMsg('Your Renuka Privileged Account has been created!');
    setTimeout(() => {
      navigate('/all-sarees');
    }, 1000);
  };

  if (isLoggedIn && user) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] py-12">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-[#E6D5BD] shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border-2 border-[#E6C174] mx-auto flex items-center justify-center text-[#4A151E]">
              <User className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B35]">
                Renuka Patron Member
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#380C14] mt-1">
                Namaste, {user.name}
              </h1>
              <p className="text-xs text-[#8C7A70] mt-1">{user.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left pt-2 border-t border-[#F2E7D5]">
              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E6D5BD]">
                <p className="text-[11px] text-[#8C7A70] uppercase font-semibold">Registered City</p>
                <p className="font-serif text-sm font-semibold text-[#2C1810] mt-0.5">{user.city || 'Mumbai'}</p>
              </div>
              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E6D5BD]">
                <p className="text-[11px] text-[#8C7A70] uppercase font-semibold">Membership Tier</p>
                <p className="font-serif text-sm font-semibold text-[#B88B35] mt-0.5">Royal Gold Patron</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to="/all-sarees"
                className="flex-1 py-2.5 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Saree Catalog</span>
              </Link>
              <button
                type="button"
                onClick={logout}
                className="py-2.5 px-6 border border-[#E6D5BD] hover:bg-[#FAF6F0] text-[#782333] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#E6D5BD] shadow-xl overflow-hidden">
        {/* Header Branding */}
        <div className="bg-[#380C14] text-[#FAF6F0] p-6 text-center border-b border-[#5C1B27]">
          <LotusLogo className="w-10 h-10 text-[#E6C174] mx-auto mb-2" />
          <h2 className="font-serif text-2xl font-semibold text-[#E6C174]">
            Renuka Sarees
          </h2>
          <p className="text-xs text-[#E6D5BD]/80 italic">
            Tradition Woven for Every Occasion
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E6D5BD] bg-[#FAF6F0]">
          <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              setError('');
            }}
            className={`flex-1 py-3 text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activeTab === 'login'
                ? 'bg-white text-[#380C14] border-b-2 border-[#4A151E]'
                : 'text-[#8C7A70] hover:text-[#380C14]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('register');
              setError('');
            }}
            className={`flex-1 py-3 text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'bg-white text-[#380C14] border-b-2 border-[#4A151E]'
                : 'text-[#8C7A70] hover:text-[#380C14]'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#2C1810] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-[#2C1810]">Password</label>
                  <button
                    type="button"
                    onClick={() => alert('A password reset link will be sent to your email address.')}
                    className="text-[11px] text-[#782333] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Sign In to Account
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#2C1810] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priyadarshini Rao"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C1810] mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C1810] mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C1810] mb-1">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF6F0] border border-[#E6D5BD] rounded-lg text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#E6C174]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Create My Account
              </button>
            </form>
          )}

          <div className="pt-3 text-center border-t border-[#F2E7D5]">
            <Link
              to="/all-sarees"
              className="text-xs text-[#8C7A70] hover:text-[#4A151E] transition-colors"
            >
              Continue shopping as guest →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
