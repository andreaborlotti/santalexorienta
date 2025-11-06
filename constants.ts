import React from 'react';
import { Beaker, BookOpen, Globe, Compass, Info, School, Sparkles } from 'lucide-react';
import { Approfondimenti, Boosts, Confronto, Labels, Liceo, Score, Step } from './types';
import { IconScales } from './components/IconScales';
import { parseCambridge } from './utils';

// Theme
export const LOGO_SRC = "https://licei.osabg.it/wp-content/uploads/2016/10/Logo_Licei_Opera_San_Alessandro.svg";
export const BLU = "#053f93";
export const GIALLO = "#fbc200";
export const GRIGIO = "#e0e7ff";

// Modal Content Data
export const approfondimenti: Approfondimenti = {
  cambridge: {
    titolo: "Cambridge: Cosa vuol dire essere Cambridge International school",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(Globe, { size: 24 }),
    contenuto: [
      "Frequentare alcune discipline scolastiche in lingua inglese.",
      "Utilizzare materiale didattico pubblicato dalla Cambridge University.",
      "Avvalersi della competenza di docenti formati e certificati dalla Cambridge University.",
      "Poter sostenere gli esami IGCSE, gli stessi che i tuoi coetanei britannici superano a 16 anni.",
    ],
  },
  cattolica: {
    titolo: "Scuola cattolica: Cosa comporta iscriversi ad una scuola cattolica",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(School, { size: 24 }),
    contenuto: [
      "I nostri valori si ispirano all'umanesimo cristiano.",
      "Ci proponiamo di coltivare tutte le tue dimensioni, non solo quelle culturali ma anche quelle emotive, sociali e spirituali.",
      "Ci impegniamo per aiutarti a diventare una persona libera, responsabile, capace di contribuire alla costruzione di un futuro più giusto e fraterno per tutti.",
      "Siamo aperti a famiglie di ogni religione anche a non credenti.",
    ],
  },
  paritaria: {
    titolo: "Scuola paritaria: Cosa significa la parità scolastica",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(Info, { size: 24 }),
    contenuto: [
      "Ottenere il medesimo titolo di studio della scuola statale.",
      "Avere a disposizione insegnanti accuratamente selezionati e formati dalla scuola.",
      "Provvedere al pagamento di una retta. Ma il Sant’Alessandro mette a disposizione delle borse di studio per i meritevoli con difficoltà economiche.",
    ],
  },
  benessere: {
    titolo: "Benessere a scuola: Come è impostata l’organizzazione della scuola per farti stare bene",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(Sparkles, { size: 24 }),
    contenuto: [
      "Settimana corta", "Sessioni didattiche di 50 minuti", "Interrogazioni e verifiche programmate",
      "Approccio universitario nell'organizzazione dello studio e quindi clima sereno e disteso",
      "Bar e mensa interni", "Sportello psicologico settimanale", "Attività di orientamento fin dal primo anno",
      "Attività teatrale - Teatro all’Opera", "Tornei sportivi pomeridiani", "Collaborazione con Accademia Musicale Santa Cecilia",
    ],
  },
  mondo: {
    titolo: "Mondo: Quali opportunità per aprirsi al mondo",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(Compass, { size: 24 }),
    contenuto: [
      "Didattica con madrelingua", "Certificazioni linguistiche internazionali", "Stage di lavoro in italia e all'estero",
      "Scambi interculturali e vacanze studio all'estero.",
    ],
  },
};

// Licei Data
export const catalogoLicei: Liceo[] = [
  { id: "classico-int", nome: "Liceo Classico Internazionale", profilo: "Per chi ama le materie umanistiche, la cultura e le lingue classiche", cambridgeMaterie: parseCambridge("geography, biology e english as a 2nd language") },
  { id: "scientifico-int", nome: "Liceo Scientifico Internazionale", profilo: "Per chi ha attitudine ad un approccio logico-matematico, sperimentale tipico dell'indagine scientifica.", cambridgeMaterie: parseCambridge("geography, biology, business studies, Maths, Physics, Art & Design, english as a 2nd language") },
  { id: "linguistico-moderno", nome: "Liceo Linguistico Moderno", profilo: "Per chi ama le lingue straniere, la storia dell'arte e le materie umanistiche", cambridgeMaterie: parseCambridge("geography, travel and tourism e english as a 2nd language") },
  { id: "linguistico-giuridico", nome: "Liceo Linguistico Giuridico Economico", profilo: "Per chi vuole unire all'approccio linguistico quello economico aziendale", cambridgeMaterie: parseCambridge("geography, travel and tourism e english as a 2nd language") },
  { id: "scienze-umane-es", nome: "Liceo delle Scienze Umane opzione economico-sociale", profilo: "Per chi vuole indagare la realtà sociale sia con le categorie della psicologia, sociologia e pedagogia, sia con le scienze economico giuridiche", cambridgeMaterie: parseCambridge("geography") },
];

// Comparison Data
export const confrontoById: Record<string, Confronto> = {
  "classico-int": { righe: ["+ 2 ore a settimana al biennio e 1 al triennio di business studies", "+ 1 ora a settimana al biennio di laboratorio fisica/chimica", "Metodo didattico Cambridge basato su team work e problem solving", "Attività di traduzione in classe con insegnante tutor"] },
  "scientifico-int": { righe: ["+ 2 ore a settimana al biennio e 1 al triennio di business studies", "+ 1 ora a settimana laboratorio fisica/chimica", "Metodo didattico Cambridge basato su team work e problem solving"] },
  "linguistico-moderno": { righe: ["+ 230 ore/anno di inglese", "Storia dell'arte sia al biennio che al triennio"] },
  "linguistico-giuridico": { righe: ["+ 165 ore/anno di inglese", "latino per 5 anni invece che al biennio", "2 lingue straniere (inglese + 1 lingua comunitaria a scelta) invece di 3", "+ 4/5 ore settimanali di materie in ambito giuridico economico", "+ 1 ora settimanale di matematica"] },
  "scienze-umane-es": { righe: ["+ 627 ore/anno di lingua straniera", "+ 1 ora a settimana di inglese al biennio", "+ 2 ore a settimana di psicologia al biennio", "Approccio laboratoriale, ogni anno un laboratorio con tema differente"] },
};

// Labels for UI
export const labels: Labels = {
  lab_scienze: "Esperimento di scienze", lettura_classici: "Lettura di classici e discussione", roleplay_lingue: "Gioco di ruolo in lingua", caso_impresa: "Caso di impresa (costi/ricavi)",
  report_fisica: "Report di fisica con grafici", tema_storico: "Tema storico e idee", presentazione_lingue: "Presentazione in lingua su una città", analisi_diritto: "Analisi di attualità: diritto/economia",
  museo_scienza: "Museo della scienza con laboratori", scavi_archeo: "Scavi archeologici e iscrizioni", tour_multilingue: "Tour multilingue con guida", visita_tribunale: "Visita in Tribunale",
  problem_solver: "Problem solver (calcoli/verifiche)", ricercatore_fonti: "Ricercatore fonti e timeline", mediatore_lingue: "Mediatore/traduttore in lingue", coordinatore_impresa: "Coordinatore (budget/regole)",
  lab_ricerca: "Laboratorio/Ospedale", biblioteca: "Scuola/editoria", relazioni_internaz: "Relazioni Internazionali", impresa_pubblica: "Impresa/Pubblica Amministrazione",
};

// Quiz Steps
export const baseSteps: Step[] = [
  { id: "benvenuto", tipo: "intro", titolo: "Ciao, sono Santalex", testo: "Sono la tua guida in questo viaggio virtuale per aiutarti ad individuare il liceo più adatto a te. Sei pronto?", azione: "Andiamo!", sidebarLabel: "Benvenuto" },
  {
    id: "scenario1", tipo: "scelta", titolo: "In classe", sottotitolo: "La prof propone un’attività: quale preferisci?",
    opzioni: [
      // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
      { id: "lab_scienze", label: labels.lab_scienze, icon: React.createElement(Beaker, { size: 24 }) }, { id: "lettura_classici", label: labels.lettura_classici, icon: React.createElement(BookOpen, { size: 24 }) },
      { id: "roleplay_lingue", label: labels.roleplay_lingue, icon: React.createElement(Globe, { size: 24 }) }, { id: "caso_impresa", label: labels.caso_impresa, icon: React.createElement(IconScales, { size: 24 }) },
    ],
    sidebarLabel: "Attività in classe",
  },
  {
    id: "scenario2", tipo: "scelta", titolo: "Compito a casa", sottotitolo: "Devi preparare un elaborato, quale traccia scegli?",
    opzioni: [{ id: "report_fisica", label: labels.report_fisica }, { id: "tema_storico", label: labels.tema_storico }, { id: "presentazione_lingue", label: labels.presentazione_lingue }, { id: "analisi_diritto", label: labels.analisi_diritto }],
    sidebarLabel: "Compito a casa",
  },
  {
    id: "scenario3", tipo: "scelta", titolo: "Gita scolastica", sottotitolo: "Scegli l’attività principale che ti interessa di più",
    opzioni: [{ id: "museo_scienza", label: labels.museo_scienza }, { id: "scavi_archeo", label: labels.scavi_archeo }, { id: "tour_multilingue", label: labels.tour_multilingue }, { id: "visita_tribunale", label: labels.visita_tribunale }],
    sidebarLabel: "Gita scolastica",
  },
  {
    id: "scenario4", tipo: "scelta", titolo: "Progetto di gruppo", sottotitolo: "Che ruolo scegli?",
    opzioni: [{ id: "problem_solver", label: labels.problem_solver }, { id: "ricercatore_fonti", label: labels.ricercatore_fonti }, { id: "mediatore_lingue", label: labels.mediatore_lingue }, { id: "coordinatore_impresa", label: labels.coordinatore_impresa }],
    sidebarLabel: "Progetto di gruppo",
  },
  {
    id: "scenario5", tipo: "scelta", titolo: "Futuro", sottotitolo: "Dove ti immagini da grande",
    opzioni: [{ id: "lab_ricerca", label: labels.lab_ricerca }, { id: "biblioteca", label: labels.biblioteca }, { id: "relazioni_internaz", label: labels.relazioni_internaz }, { id: "impresa_pubblica", label: labels.impresa_pubblica }],
    sidebarLabel: "Visione futura",
  },
  { id: "risultato", tipo: "output", titolo: "Il percorso più adatto a te è:", sidebarLabel: "Risultato" },
];

// Scoring Logic
export const initialScore: Score = { "classico-int": 0, "scientifico-int": 0, "linguistico-moderno": 0, "linguistico-giuridico": 0, "scienze-umane-es": 0 };

export const boosts: Boosts = {
  lab_scienze: { "scientifico-int": 3 }, lettura_classici: { "classico-int": 3 }, roleplay_lingue: { "linguistico-moderno": 3 }, caso_impresa: { "linguistico-giuridico": 2, "scienze-umane-es": 2 },
  report_fisica: { "scientifico-int": 3 }, tema_storico: { "classico-int": 3 }, presentazione_lingue: { "linguistico-moderno": 3, "linguistico-giuridico": 1 }, analisi_diritto: { "linguistico-giuridico": 3, "scienze-umane-es": 2 },
  museo_scienza: { "scientifico-int": 2 }, scavi_archeo: { "classico-int": 2 }, tour_multilingue: { "linguistico-moderno": 2 }, visita_tribunale: { "linguistico-giuridico": 2, "scienze-umane-es": 2 },
  problem_solver: { "scientifico-int": 2 }, ricercatore_fonti: { "classico-int": 2 }, mediatore_lingue: { "linguistico-moderno": 2 }, coordinatore_impresa: { "linguistico-giuridico": 2, "scienze-umane-es": 1 },
  lab_ricerca: { "scientifico-int": 3 }, biblioteca: { "classico-int": 3 }, relazioni_internaz: { "linguistico-moderno": 3 }, impresa_pubblica: { "linguistico-giuridico": 2, "scienze-umane-es": 2 },
};