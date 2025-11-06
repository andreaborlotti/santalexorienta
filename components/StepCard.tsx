
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { BLU, GIALLO, LOGO_SRC } from '../constants';

interface StepCardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ children, title, subtitle }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
      <div className="rounded-2xl shadow-xl p-6 md:p-10" style={{ background: BLU, color: "white", border: `2px solid ${GIALLO}` }}>
        <div className="flex items-center gap-3 mb-4">
          <img src={LOGO_SRC} alt="Logo Licei OSA" className="w-10 h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h1>
          <Star className="ml-auto" />
        </div>
        {subtitle && <p className="opacity-90 mb-4 text-base md:text-lg">{subtitle}</p>}
        {children}
      </div>
    </motion.div>
  );
};
