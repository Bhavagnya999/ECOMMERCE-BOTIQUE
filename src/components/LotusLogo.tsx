import React from 'react';

interface LotusLogoProps {
  className?: string;
  size?: number;
}

export const LotusLogo: React.FC<LotusLogoProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="currentColor"
      className={className}
      style={size ? { width: size, height: size * 0.8 } : undefined}
      aria-label="Renuka Sarees Lotus Emblem"
    >
      {/* Central petal */}
      <path
        d="M50 8 C46 22 44 42 50 64 C56 42 54 22 50 8 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Inner left petal */}
      <path
        d="M50 18 C38 28 32 46 42 63 C46 50 48 35 50 18 Z"
        fill="currentColor"
        opacity="0.88"
      />
      {/* Inner right petal */}
      <path
        d="M50 18 C62 28 68 46 58 63 C54 50 52 35 50 18 Z"
        fill="currentColor"
        opacity="0.88"
      />
      {/* Middle left petal */}
      <path
        d="M44 26 C28 36 20 54 34 65 C38 53 41 40 44 26 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Middle right petal */}
      <path
        d="M56 26 C72 36 80 54 66 65 C62 53 59 40 56 26 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Outer left flared petal */}
      <path
        d="M36 38 C18 48 10 62 22 70 C28 64 33 52 36 38 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Outer right flared petal */}
      <path
        d="M64 38 C82 48 90 62 78 70 C72 64 67 52 64 38 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Lotus base petal bowl */}
      <path
        d="M20 68 C35 77 65 77 80 68 C68 74 32 74 20 68 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Ornamental base stem curve */}
      <path
        d="M38 72 C46 76 54 76 62 72 C58 75 42 75 38 72 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SareeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Stylized folded saree drape outline */}
      <path d="M4 6 C4 4.5 5.5 3.5 7 4 L17 4 C18.5 3.5 20 4.5 20 6 L19 19 C19 20 18 21 17 21 L7 21 C6 21 5 20 5 19 Z" />
      <path d="M4 6 L12 11 L20 6" />
      <path d="M7 11 L17 11" strokeDasharray="1 1" />
      <path d="M5 16 C8 15 16 15 19 16" />
      <path d="M8 21 L8 14" opacity="0.6" />
      <path d="M12 21 L12 11" opacity="0.6" />
      <path d="M16 21 L16 14" opacity="0.6" />
    </svg>
  );
};
