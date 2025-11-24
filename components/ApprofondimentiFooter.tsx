import React from 'react';
import { BLU, GIALLO, approfondimenti } from '../constants';

interface ApprofondimentiFooterProps {
  onApprofondisci: (key: string) => void;
}

export const ApprofondimentiFooter: React.FC<ApprofondimentiFooterProps> = ({ onApprofondisci }) => {
  return (
    <div className="mt-6 pt-4 border-t" style={{ borderColor: GIALLO }}>
      <h4 className="text-lg font-bold mb-3 text-center">Approfondisci i caratteri distintivi di tutti i Licei dell'Opera Sant'Alessandro</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {Object.entries(approfondimenti).map(([key, item]) => (
          <button
            key={key}
            onClick={() => onApprofondisci(key)}
            className="w-full rounded-xl px-4 py-3 text-sm md:text-base font-bold shadow-md active:scale-[0.98] transition-transform duration-100 flex items-center justify-center gap-2"
            style={{ background: BLU, color: GIALLO }}
          >
            {item.icon}
            {item.titolo.split(':')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};