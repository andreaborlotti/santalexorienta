
import { ReactElement } from 'react';

export interface Liceo {
  id: string;
  nome: string;
  profilo: string;
  cambridgeMaterie: string[];
}

export interface Confronto {
  righe: string[];
}

export interface Approfondimento {
  titolo: string;
  icon: ReactElement;
  contenuto: string[];
}

export type Approfondimenti = Record<string, Approfondimento>;

export interface Opzione {
  id: string;
  label: string;
  icon?: ReactElement;
}

interface BaseStep {
  id: string;
  titolo: string;
  sidebarLabel: string;
}

export interface IntroStep extends BaseStep {
  tipo: "intro";
  testo: string;
  azione: string;
}

export interface SceltaStep extends BaseStep {
  tipo: "scelta";
  sottotitolo: string;
  opzioni: Opzione[];
}

export interface OutputStep extends BaseStep {
  tipo: "output";
}

export type Step = IntroStep | SceltaStep | OutputStep;

export type Score = Record<string, number>;

export type Boosts = Record<string, Score>;

export type Labels = Record<string, string>;

export type Answers = Record<string, string>;
