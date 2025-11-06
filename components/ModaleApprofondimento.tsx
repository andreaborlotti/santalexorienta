
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { approfondimenti, BLU, GIALLO, GRIGIO } from '../constants';

interface ModaleApprofondimentoProps {
  dettaglio: string;
  onClose: () => void;
}

export const ModaleApprofondimento: React.FC<ModaleApprofondimentoProps> = ({ dettaglio, onClose }) => {
  const item = approfondimenti[dettaglio];

  if (!item) return null;

  const partiTitolo = item.titolo.split(':');
  const titoloVisibile = partiTitolo.length > 1 ? partiTitolo.slice(1).join(':').trim() : item.titolo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-60"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl relative"
        style={{ background: "white", color: BLU, border: `4px solid ${GIALLO}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition-colors" style={{ color: BLU }}>
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-4 border-b pb-3" style={{ borderColor: GRIGIO }}>
          <span className="p-2 rounded-full" style={{ background: GIALLO, color: BLU }}>{item.icon}</span>
          <h3 className="text-xl md:text-2xl font-bold">{titoloVisibile}</h3>
        </div>

        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
          {item.contenuto.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button onClick={onClose} className="rounded-xl px-6 py-3 font-bold active:scale-[0.98] transition-transform duration-100" style={{ background: GIALLO, color: BLU }}>
            Chiudi
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
