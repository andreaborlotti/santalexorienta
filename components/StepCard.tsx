import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BLU, GIALLO, LOGO_SRC, CAMBRIDGE_LOGO_SRC } from '../constants';

interface StepCardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showCambridgeLogo?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ children, title, subtitle, showCambridgeLogo }) => {
  const MotionDiv = motion.div as any;

  return (
    <MotionDiv initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
      <div className="rounded-2xl shadow-xl p-6 md:p-10 flex flex-col" style={{ background: BLU, color: "white", border: `2px solid ${GIALLO}` }}>
        <div>
          <div className="flex justify-between items-center gap-3 mb-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="Logo Licei OSA" className="w-10 h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h1>
            </div>
            {showCambridgeLogo && (
              <img 
                src={CAMBRIDGE_LOGO_SRC} 
                alt="Cambridge International School" 
                className="h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
          </div>
          {subtitle && <p className="opacity-90 mb-4 text-base md:text-lg">{subtitle}</p>}
          {children}
        </div>
      </div>
    </MotionDiv>
  );
};