import React from 'react';
import { Liceo } from '../types';
import { confrontoById, BLU, GIALLO } from '../constants';

interface ConfrontoOSAStataleProps {
  liceo: Liceo;
  onApprofondisci: (key: string) => void;
  showApprofondimenti?: boolean;
  isCompact?: boolean;
  sectionMinHeights?: { profile: number; cambridge: number; confronto: number; };
}

export const ConfrontoOSAStatale: React.FC<ConfrontoOSAStataleProps> = ({ liceo, showApprofondimenti = true, isCompact = false, sectionMinHeights }) => {
  const dati = confrontoById[liceo.id];
  if (!dati) return null;

  return (
    <div
      className={`rounded-2xl flex flex-col h-full ${isCompact ? 'p-4 space-y-4' : 'p-6 md:p-8 space-y-6'}`}
      style={{ background: "white", color: BLU, border: `3px solid ${GIALLO}` }}
    >
      <div
        className={`profile-section border-b ${isCompact ? 'pb-3' : 'pb-4'}`}
        style={{ borderColor: GIALLO, minHeight: sectionMinHeights?.profile || 'auto' }}
      >
        <h3 className={`font-extrabold mb-2 text-center ${isCompact ? 'text-lg' : 'text-2xl md:text-3xl'}`}>{liceo.nome}</h3>
        <p className={`text-center font-medium ${isCompact ? 'text-sm' : 'text-base md:text-lg'}`}>{liceo.profilo}</p>
      </div>

      <div
        className={`cambridge-section border-b ${isCompact ? 'pb-3' : 'pb-4'}`}
        style={{ borderColor: GIALLO, minHeight: sectionMinHeights?.cambridge || 'auto' }}
      >
        <h4 className={`font-bold mb-3 ${isCompact ? 'text-base' : 'text-xl'}`}>Materie Cambridge</h4>
        <div className={`flex flex-wrap`}>
          {liceo.cambridgeMaterie && liceo.cambridgeMaterie.length > 0 ? (
            <p className={`font-bold ${isCompact ? 'text-sm' : 'text-base'}`} style={{ color: GIALLO }}>
              {liceo.cambridgeMaterie.join(' · ')}
            </p>
          ) : (
            <p className={`font-bold ${isCompact ? 'text-sm' : 'text-base'} text-transparent select-none`}>-</p>
          )}
        </div>
      </div>

      <div
        className={`confronto-section ${isCompact ? 'space-y-2' : 'space-y-4'}`}
        style={{ minHeight: sectionMinHeights?.confronto || 'auto' }}
      >
        <h4 className={`font-bold mb-3 ${isCompact ? 'text-base' : 'text-xl'}`}>Confronto con l’offerta statale:</h4>
        <ul className={`list-disc ${isCompact ? 'pl-5 text-sm space-y-1' : 'pl-6 space-y-2 text-base md:text-lg'}`}>
          {dati.righe.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};