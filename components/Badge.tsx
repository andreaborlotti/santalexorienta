
import React, { ReactNode } from 'react';
import { GIALLO, BLU } from '../constants';

interface BadgeProps {
  children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{ background: GIALLO, color: BLU }}>{children}</span>;
};
