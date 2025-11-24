
import React from 'react';
import { Beaker, BookOpen, Globe, Compass, Info, School, Sparkles, GraduationCap } from 'lucide-react';
import { Approfondimenti, Boosts, Confronto, Labels, Liceo, Score, Step } from './types';
import { IconScales } from './components/IconScales';
import { parseCambridge } from './utils';

// Theme
export const LOGO_SRC = "https://licei.osabg.it/wp-content/uploads/2016/10/Logo_Licei_Opera_San_Alessandro.svg";
export const CAMBRIDGE_LOGO_SRC = "https://i.postimg.cc/wxZH25YL/logo-cambridge.png";
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
      "Provvedere al pagamento di una retta. Ma il Sant'Alessandro mette a disposizione delle borse di studio per i meritevoli con difficoltà economiche.",
    ],
  },
  borse: {
    titolo: "Borse di studio: Borse di studio – Diamo futuro al talento",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(GraduationCap, { size: 24 }),
    contenuto: [
      "5 borse di studio per l'anno 26/27",
      "Destinate a studenti meritevoli (merito scolastico, comportamento e impegno sociale) e con limitata capacità economica",
      "Per chi si iscrive ad uno dei nostri indirizzi liceali",
    ],
  },
  benessere: {
    titolo: "Benessere a scuola: Come è impostata l'organizzazione della scuola per farti stare bene",
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(Sparkles, { size: 24 }),
    contenuto: [
      "Settimana corta", "Sessioni didattiche di 50 minuti", "Interrogazioni e verifiche programmate",
      "Approccio universitario nell'organizzazione dello studio e quindi clima sereno e disteso",
      "Bar e mensa interni", "Sportello psicologico settimanale", "Attività di orientamento fin dal primo anno",
      "Attività teatrale - Teatro all'Opera", "Tornei sportivi pomeridiani", "Collaborazione con Accademia Musicale Santa Cecilia",
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
  // Step 1
  s1_o1: "Cerco di capire i numeri e la logica che ci stanno dietro.",
  s1_o2: "Chiedo consiglio agli amici o guardo cosa fanno gli altri per capire perché giocano così.",
  s1_o3: "Leggo bene le regole. Cerco il modo migliore e più furbo per vincere.",
  s1_o4: "Mi interessa la 'storia' del gioco e da dove viene.",
  // Step 2
  s2_o1: "Faccio uno schema preciso, con i 'perché' e le 'conseguenze', punto per punto.",
  s2_o2: "Uso un sacco di esempi e provo a 'tradurre' l'idea con parole diverse.",
  s2_o3: "Prima di tutto cerco di capire lui: cosa non ha capito? Come si sente? Poi spiego.",
  s2_o4: "Vado dritto al sodo e gli spiego in modo chiaro perché questa cosa è utile.",
  // Step 3
  s3_o1: "Una gara di scienze o informatica: 24 ore per trovare una soluzione a un problema.",
  s3_o2: "Recitare in uno spettacolo teatrale antico o organizzare una mostra sulla storia.",
  s3_o3: "Un gioco di simulazione: devi creare un'azienda e battere la concorrenza.",
  s3_o4: "Un progetto di volontariato per aiutare gli altri, o un'indagine per capire come la pensa la gente.",
  // Step 4
  s4_o1: "Più ore in laboratorio di scienze, per fare esperimenti e 'sporcarsi le mani'.",
  s4_o2: "Un corso per imparare a tradurre film e serie TV, o per scrivere storie in un'altra lingua.",
  s4_o3: "Un corso per capire come funzionano i soldi, le aziende o le leggi.",
  s4_o4: "Un incontro per parlare di psicologia e capire meglio come 'funzionano' le persone.",
  // Step 5
  s5_o1: "Lavorare in un laboratorio, fare l'ingegnere o il medico.",
  s5_o2: "Lavorare nel mondo della cultura: scrivere libri, lavorare in un museo o fare il giornalista.",
  s5_o3: "Avere un'azienda tutta mia, lavorare in banca o nel marketing.",
  s5_o4: "Lavorare per aiutare gli altri: nel sociale, come psicologo o in giro per il mondo per aiutare chi ha bisogno.",
};

// Quiz Steps
export const baseSteps: Step[] = [
  { id: "benvenuto", tipo: "intro", titolo: "Ciao, sono Santalex", testo: "Sono la tua guida in questo viaggio virtuale per aiutarti ad individuare il liceo più adatto a te. Pronti a iniziare?", azione: "Andiamo!", sidebarLabel: "Benvenuto" },
  {
    id: "step1", tipo: "scelta", titolo: "Inizi un nuovo videogioco di strategia", sottotitolo: "Qual è la tua prima mossa?",
    opzioni: [
      { id: "s1_o1", label: labels.s1_o1 }, { id: "s1_o2", label: labels.s1_o2 },
      { id: "s1_o3", label: labels.s1_o3 }, { id: "s1_o4", label: labels.s1_o4 },
    ],
    sidebarLabel: "Step 1",
  },
  {
    id: "step2", tipo: "scelta", titolo: "Devi spiegare a un amico una cosa difficile che tu hai capito e lui no.", sottotitolo: "Cosa fai?",
    opzioni: [
      { id: "s2_o1", label: labels.s2_o1 }, { id: "s2_o2", label: labels.s2_o2 },
      { id: "s2_o3", label: labels.s2_o3 }, { id: "s2_o4", label: labels.s2_o4 },
    ],
    sidebarLabel: "Step 2",
  },
  {
    id: "step3", tipo: "scelta", titolo: "La scuola propone un progetto speciale.", sottotitolo: "Quale ti attira di più?",
    opzioni: [
      { id: "s3_o1", label: labels.s3_o1 }, { id: "s3_o2", label: labels.s3_o2 },
      { id: "s3_o3", label: labels.s3_o3 }, { id: "s3_o4", label: labels.s3_o4 },
    ],
    sidebarLabel: "Step 3",
  },
  {
    id: "step4", tipo: "scelta", titolo: "Puoi scegliere un'ora in più alla settimana.", sottotitolo: "Quale corso extra faresti?",
    opzioni: [
      { id: "s4_o1", label: labels.s4_o1 }, { id: "s4_o2", label: labels.s4_o2 },
      { id: "s4_o3", label: labels.s4_o3 }, { id: "s4_o4", label: labels.s4_o4 },
    ],
    sidebarLabel: "Step 4",
  },
  {
    id: "step5", tipo: "scelta", titolo: "Pensa a quando sarai grande.", sottotitolo: "Quale lavoro ti attira di più?",
    opzioni: [
      { id: "s5_o1", label: labels.s5_o1 }, { id: "s5_o2", label: labels.s5_o2 },
      { id: "s5_o3", label: labels.s5_o3 }, { id: "s5_o4", label: labels.s5_o4 },
    ],
    sidebarLabel: "Step 5",
  },
  { id: "risultato", tipo: "output", titolo: "Il percorso più adatto a te è:", sidebarLabel: "Risultato" },
];

// Scoring Logic
export const initialScore: Score = { "classico-int": 0, "scientifico-int": 0, "linguistico-moderno": 0, "linguistico-giuridico": 0, "scienze-umane-es": 0 };

export const boosts: Boosts = {
  // Step 1
  s1_o1: { "scientifico-int": 3, "linguistico-giuridico": 1 },
  s1_o2: { "classico-int": 1, "scientifico-int": 1, "scienze-umane-es": 3 },
  s1_o3: { "scientifico-int": 1, "linguistico-giuridico": 3 },
  s1_o4: { "classico-int": 3, "linguistico-moderno": 1, "scienze-umane-es": 1 },
  // Step 2
  s2_o1: { "classico-int": 3, "scientifico-int": 2 },
  s2_o2: { "classico-int": 1, "linguistico-moderno": 3, "linguistico-giuridico": 1, "scienze-umane-es": 1 },
  s2_o3: { "linguistico-moderno": 1, "scienze-umane-es": 3 },
  s2_o4: { "linguistico-moderno": 1, "linguistico-giuridico": 3 },
  // Step 3
  s3_o1: { "scientifico-int": 4 },
  s3_o2: { "classico-int": 4, "linguistico-moderno": 1 },
  s3_o3: { "linguistico-moderno": 1, "linguistico-giuridico": 4 },
  s3_o4: { "linguistico-moderno": 1, "scienze-umane-es": 4 },
  // Step 4
  s4_o1: { "classico-int": 1, "scientifico-int": 4 },
  s4_o2: { "linguistico-moderno": 4, "linguistico-giuridico": 1 },
  s4_o3: { "classico-int": 1, "linguistico-giuridico": 4 },
  s4_o4: { "scienze-umane-es": 4 },
  // Step 5
  s5_o1: { "scientifico-int": 4 },
  s5_o2: { "classico-int": 4, "linguistico-moderno": 1 },
  s5_o3: { "linguistico-moderno": 1, "linguistico-giuridico": 4 },
  s5_o4: { "linguistico-moderno": 1, "scienze-umane-es": 4 },
};
