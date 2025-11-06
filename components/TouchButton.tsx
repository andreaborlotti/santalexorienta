
import React, { ReactElement } from 'react';
import { ChevronRight } from 'lucide-react';
import { BLU, GIALLO } from '../constants';

interface TouchButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactElement;
}

export const TouchButton: React.FC<TouchButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button onClick={onClick} className="w-full text-left rounded-2xl p-5 md:p-7 text-lg md:text-2xl font-semibold shadow-md active:scale-[0.99] transition-transform duration-100" style={{ background: "white", color: BLU, border: `3px solid ${GIALLO}` }}>
      <div className="flex items-center gap-4">
        {icon && React.isValidElement(icon) && icon}
        <span>{label}</span>
        <ChevronRight className="ml-auto" />
      </div>
    </button>
  );
};
