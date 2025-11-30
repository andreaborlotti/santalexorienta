import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Liceo } from '../types';
import { BLU, GIALLO, GRIGIO, approfondimenti } from '../constants';
import { ConfrontoOSAStatale } from './ConfrontoOSAStatale';

interface CatalogoOverlayProps {
  show: boolean;
  onClose: () => void;
  licei: Liceo[];
  onApprofondisci: (key: string) => void;
}

export const CatalogoOverlay: React.FC<CatalogoOverlayProps> = ({ show, onClose, licei, onApprofondisci }) => {
  const [sectionMinHeights, setSectionMinHeights] = useState({ profile: 0, cambridge: 0, confronto: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const MotionDiv = motion.div as any;

  useLayoutEffect(() => {
    if (show && licei.length > 0) {
      // Use a timeout to ensure the DOM has been painted and is ready for measurement.
      const timer = setTimeout(() => {
        const heights = {
          profile: 0,
          cambridge: 0,
          confronto: 0,
        };

        cardRefs.current.forEach(cardNode => {
          if (cardNode) {
            const profileEl = cardNode.querySelector('.profile-section');
            const cambridgeEl = cardNode.querySelector('.cambridge-section');
            const confrontoEl = cardNode.querySelector('.confronto-section');
            
            if (profileEl) heights.profile = Math.max(heights.profile, profileEl.clientHeight);
            if (cambridgeEl) heights.cambridge = Math.max(heights.cambridge, cambridgeEl.clientHeight);
            if (confrontoEl) heights.confronto = Math.max(heights.confronto, confrontoEl.clientHeight);
          }
        });
        
        // Only update state if the calculated heights are different.
        if (
          heights.profile > 0 &&
          (heights.profile !== sectionMinHeights.profile ||
          heights.cambridge !== sectionMinHeights.cambridge ||
          heights.confronto !== sectionMinHeights.confronto)
        ) {
          setSectionMinHeights(heights);
        }
      }, 100); // 100ms delay to allow for rendering and transitions.

      return () => clearTimeout(timer);
    }
  }, [show, licei, sectionMinHeights]);

  return (
    <AnimatePresence>
      {show && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 p-6 md:p-10 overflow-y-auto"
          style={{ background: GRIGIO }}
        >
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 mx-auto" style={{ maxWidth: '1300px' }}>
              <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: BLU }}>
                Tutti gli indirizzi liceali
              </h2>
              <button
                onClick={onClose}
                className="rounded-xl px-6 py-3 text-lg font-bold active:scale-[0.98] transition-transform duration-100 flex items-center gap-2 mt-4 md:mt-0"
                style={{ background: GIALLO, color: BLU }}
              >
                <ChevronLeft className="inline" /> Torna al tuo liceo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mx-auto" style={{ maxWidth: '1300px' }}>
              {licei.map((l, index) => (
                <div key={l.id} ref={el => { cardRefs.current[index] = el; }}>
                  <ConfrontoOSAStatale
                    liceo={l}
                    onApprofondisci={onApprofondisci}
                    showApprofondimenti={false}
                    isCompact={true}
                    sectionMinHeights={sectionMinHeights}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t mx-auto" style={{ borderColor: BLU + '40', maxWidth: '1300px' }}>
              <h4 className="text-xl font-bold mb-4 text-center" style={{ color: BLU }}>
                Approfondisci i caratteri distintivi di tutti i Licei dell'Opera Sant'Alessandro
              </h4>
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
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};