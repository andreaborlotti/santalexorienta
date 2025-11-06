
import React from 'react';

interface IconScalesProps {
  size?: number;
  strokeWidth?: number;
}

export const IconScales: React.FC<IconScalesProps> = ({ size = 24, strokeWidth = 2 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v3" />
      <path d="M5 6h14" />
      <path d="M12 6l5 8" />
      <path d="M12 6L7 14" />
      <path d="M4 14c0 1.657 1.79 3 4 3s4-1.343 4-3H4z" />
      <path d="M12 14c0 1.657 1.79 3 4 3s4-1.343 4-3h-8z" />
      <path d="M12 21v-4" />
    </svg>
  );
}
