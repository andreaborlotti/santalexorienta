import React, { useEffect, useMemo, useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, RotateCcw, Sparkles, List, Maximize, Minimize } from "lucide-react";

import { StepCard } from "./components/StepCard";
import { TouchButton } from "./components/TouchButton";
import { ConfrontoOSAStatale } from "./components/ConfrontoOSAStatale";
import { ModaleApprofondimento } from "./components/ModaleApprofondimento";
import { CatalogoOverlay } from "./components/CatalogoOverlay";
import { ApprofondimentiFooter } from "./components/ApprofondimentiFooter";

import { baseSteps, initialScore, labels, catalogoLicei, BLU, GIALLO } from './constants';
import { Answers, IntroStep, Liceo, OutputStep, SceltaStep, Score, Step } from './types';
import { applyBoost, shuffleArray } from './utils';

export default function App() {
  const [indice, setIndice] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [score, setScore] = useState<Score>(initialScore);
  const [dettaglioModale, setDettaglioModale] = useState<string | null>(null);
  const [showCatalog, setShowCatalog] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  // State and Refs for dynamic height synchronization
  const [sectionHeights, setSectionHeights] = useState({ profile: 0, cambridge: 0, confronto: 0 });
  const liceoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.error(`Error attempting to enable full-screen mode: ${(err as Error).message} (${(err as Error).name})`);
      }
    } else {
      if (document.exitFullscreen) {
        try {
          await document.exitFullscreen();
        } catch (err) {
          console.error(`Error attempting to disable full-screen mode: ${(err as Error).message} (${(err as Error).name})`);
        }
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('mozfullscreenchange', onFullscreenChange);
    document.addEventListener('MSFullscreenChange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      document.removeEventListener('mozfullscreenchange', onFullscreenChange);
      document.removeEventListener('MSFullscreenChange', onFullscreenChange);
    };
  }, []);

  const steps: Step[] = useMemo(() => {
    return baseSteps.map((s) =>
      (s.tipo === "scelta" && Array.isArray(s.opzioni) && s.opzioni.length > 0)
        ? { ...s, opzioni: shuffleArray(s.opzioni) }
        : s
    );
  }, []);

  const step = steps[indice];

  const top: { topIds: string[]; licei: Liceo[] } = useMemo(() => {
    const entries = Object.entries(score);
    if (entries.length === 0) return { topIds: [], licei: [] };

    // FIX: Explicitly cast score values to numbers to prevent a TypeScript error during sorting.
    entries.sort((a, b) => (b[1] as number) - (a[1] as number));
    const maxVal = entries[0][1];
    
    if (maxVal === 0) return { topIds: [], licei: [] };

    const topIds = entries.filter(([, v]) => v === maxVal).map(([k]) => k);
    const licei = topIds.map((id) => catalogoLicei.find((l) => l.id === id)).filter((l): l is Liceo => l !== undefined);
    
    return { topIds, licei };
  }, [score]);

  useLayoutEffect(() => {
    if (top.licei.length === 2 && liceoRefs.current[0] && liceoRefs.current[1]) {
      const node1 = liceoRefs.current[0];
      const node2 = liceoRefs.current[1];
      
      const profile1 = node1.querySelector('.profile-section')?.clientHeight || 0;
      const profile2 = node2.querySelector('.profile-section')?.clientHeight || 0;

      const cambridge1 = node1.querySelector('.cambridge-section')?.clientHeight || 0;
      const cambridge2 = node2.querySelector('.cambridge-section')?.clientHeight || 0;

      const confronto1 = node1.querySelector('.confronto-section')?.clientHeight || 0;
      const confronto2 = node2.querySelector('.confronto-section')?.clientHeight || 0;

      setSectionHeights({
        profile: Math.max(profile1, profile2),
        cambridge: Math.max(cambridge1, cambridge2),
        confronto: Math.max(confronto1, confronto2),
      });

    } else {
      // Reset heights if not in 2-column view
      setSectionHeights({ profile: 0, cambridge: 0, confronto: 0 });
    }
  }, [top.licei]);

  function nextFromAnswer(answerId: string) {
    const s = steps[indice];
    if (!s) return;
    setAnswers((prev) => ({ ...prev, [s.id]: answerId }));
    setScore((prev) => applyBoost(prev, answerId));
    setIndice((i) => Math.min(i + 1, steps.length - 1));
  }

  function resetAll() {
    setIndice(0);
    setAnswers({});
    setScore(initialScore);
    setDettaglioModale(null);
    setShowCatalog(false);
  }

  function buildExplanation(): string | null {
    const keys = Object.keys(answers).filter((k) => k.startsWith("scenario"));
    const picked = keys.map((k) => labels[answers[k]]).filter(Boolean);
    if (!picked.length) return null;
    return `Le tue risposte: ${picked.join(" · ")}.`;
  }

  return (
    <div className="min-h-screen w-full" style={{ background: BLU }}>
      <div className="mx-auto py-6 md:py-10 px-4 md:px-8 max-w-4xl relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-6 right-4 md:top-10 md:right-8 rounded-full p-2 hover:opacity-80 transition-opacity z-10"
          style={{ background: GIALLO, color: BLU }}
          aria-label={isFullscreen ? 'Esci dalla modalità schermo intero' : 'Attiva la modalità schermo intero'}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
        <div className="md:grid md:grid-cols-1 md:gap-8">
          <div className="md:col-span-1">
            <AnimatePresence mode="wait">
              {step?.tipo === "intro" && (
                <StepCard key={step.id} title={(step as IntroStep).titolo} subtitle={(step as IntroStep).testo} showCambridgeLogo={indice <= 5}>
                  <div className="mt-6 flex items-center justify-center">
                    <button
                      onClick={() => setIndice(1)}
                      className="rounded-2xl px-8 py-6 text-2xl font-extrabold shadow-md active:scale-[0.98] transition-transform duration-100"
                      style={{ background: GIALLO, color: BLU, border: `3px solid ${GIALLO}` }}
                    >
                      <Sparkles className="inline mr-2" /> {(step as IntroStep).azione}
                    </button>
                  </div>
                </StepCard>
              )}

              {step?.tipo === "scelta" && (
                <StepCard key={step.id} title={(step as SceltaStep).titolo} subtitle={(step as SceltaStep).sottotitolo} showCambridgeLogo={indice <= 5}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(step as SceltaStep).opzioni.map((o) => (
                      <TouchButton key={o.id} label={o.label} onClick={() => nextFromAnswer(o.id)} icon={o.icon} />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <button onClick={() => setIndice((i) => Math.max(0, i - 1))} className="flex items-center gap-2 text-white underline hover:opacity-80 transition-opacity"><ChevronLeft /> Indietro</button>
                    <span className="text-sm opacity-80">Passo {indice} di {steps.length - 2}</span>
                  </div>
                </StepCard>
              )}

              {step?.tipo === "output" && (
                <StepCard key={step.id} title={(step as OutputStep).titolo} showCambridgeLogo={indice <= 5}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 text-left" style={{ color: BLU }}>
                    {top.licei.length > 0 ? (
                      <>
                        {top.licei.length !== 2 && (
                          <div className="space-y-8">
                            {top.licei.slice(0, 2).map((l) => (
                                <div key={l.id} className="flex flex-col">
                                    <ConfrontoOSAStatale
                                        liceo={l}
                                        onApprofondisci={setDettaglioModale}
                                        showApprofondimenti={false}
                                    />
                                    <ApprofondimentiFooter onApprofondisci={setDettaglioModale} />
                                </div>
                            ))}
                          </div>
                        )}

                        {top.licei.length === 2 && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {top.licei.map((l, index) => (
                                // FIX: The ref callback for a DOM element should not return a value. Changed from a concise body `() => value` to a block body `{}` to ensure it returns undefined.
                                <div key={l.id} ref={el => { liceoRefs.current[index] = el; }}>
                                  <ConfrontoOSAStatale
                                    liceo={l}
                                    onApprofondisci={setDettaglioModale}
                                    showApprofondimenti={false}
                                    sectionMinHeights={sectionHeights}
                                  />
                                </div>
                              ))}
                            </div>
                            <ApprofondimentiFooter onApprofondisci={setDettaglioModale} />
                          </>
                        )}

                        <div className="flex flex-wrap gap-4 justify-center mt-8">
                          <button
                            onClick={() => setShowCatalog(true)}
                            className="rounded-xl px-6 py-4 text-lg font-extrabold active:scale-[0.98] transition-transform duration-100 flex items-center gap-2"
                            style={{ background: BLU, color: GIALLO, border: `3px solid ${BLU}` }}
                          >
                            <List className="inline" />
                            Mostra gli altri indirizzi
                          </button>
                          <button
                            onClick={resetAll}
                            className="rounded-xl px-6 py-4 text-lg font-extrabold active:scale-[0.98] transition-transform duration-100 flex items-center gap-2"
                            style={{ background: GIALLO, color: BLU, border: `3px solid ${GIALLO}` }}
                          >
                            <RotateCcw className="inline" /> Ripeti il test
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="text-center">Completa le scelte per vedere il risultato.</p>
                    )}
                  </div>
                </StepCard>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {dettaglioModale && (
          <ModaleApprofondimento dettaglio={dettaglioModale} onClose={() => setDettaglioModale(null)} />
        )}
      </AnimatePresence>

      <CatalogoOverlay
        show={showCatalog}
        onClose={() => setShowCatalog(false)}
        licei={catalogoLicei}
        onApprofondisci={setDettaglioModale}
      />
    </div>
  );
}