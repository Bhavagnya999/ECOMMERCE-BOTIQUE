import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#380C14] text-[#FAF6F0] border border-[#E6C174] px-4 py-3 rounded-xl shadow-2xl animate-bounce-short">
      <CheckCircle2 className="w-5 h-5 text-[#E6C174] shrink-0" />
      <span className="text-xs sm:text-sm font-medium tracking-wide">{toastMessage}</span>
      <button
        type="button"
        onClick={clearToast}
        className="p-1 text-[#E6D5BD]/70 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
