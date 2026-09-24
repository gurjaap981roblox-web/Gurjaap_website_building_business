import React from 'react';

interface CrownLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubText?: boolean;
}

export const CrownLogo: React.FC<CrownLogoProps> = ({
  className = '',
  size = 'md',
  showSubText = true,
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Crown technological SVG emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-lg bg-[#0A1020] border border-[#00BFFF]/30 glow-cyan-sm group-hover:border-[#00BFFF]/70 transition-all`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6 text-[#00BFFF]"
        >
          {/* Crown peaks with futuristic geometric lines */}
          <path
            d="M3 17L5 7L9.5 12L12 5L14.5 12L19 7L21 17H3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#crownGradient)"
            fillOpacity="0.25"
          />
          <path
            d="M3 19.5H21"
            stroke="#38D9FF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Subtle node jewels */}
          <circle cx="5" cy="7" r="1" fill="#38D9FF" />
          <circle cx="12" cy="5" r="1.2" fill="#38D9FF" />
          <circle cx="19" cy="7" r="1" fill="#38D9FF" />
          <defs>
            <linearGradient id="crownGradient" x1="3" y1="5" x2="21" y2="19.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00BFFF" />
              <stop offset="1" stopColor="#008CFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-extrabold tracking-wider text-white ${titleSizes[size]} leading-none`}>
          GURJAAP
        </span>
        {showSubText && (
          <span className="text-[9px] font-semibold tracking-[0.22em] text-[#00BFFF] uppercase mt-0.5">
            BUSINESS SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
};
