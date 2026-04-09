export type MachineType = "washer" | "dryer";

export type Machine = {
  id: string;
  type: MachineType;
  manualUrl: string;
  produkt: Produkt;
  energidata: Energidata;
  programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>>;
  program: Program[];
  felsokning: FelsokningItem[];
  skotsel: SkotselItem[];
};

export type Program = {
  namn: string;
  temperatur?: string;
  maxCentrifugering?: string;
  maxMangd: string;
  beskrivning: string;
  funktioner: ProgramFunktionKey[];
  symboler?: string[];
};

export type ProgramFunktion = {
  namn: string;
  beskrivning: string;
};

export type ProgramFunktionKey =
  | "centrifugering"
  | "flackborttagning"
  | "fortvatt"
  | "extraSkoljning"
  | "fordrojdStart"
  | "timeManager"
  | "softPlus"
  | "torrhetsgrad"
  | "tidtorkning"
  | "skrynkelskydd"
  | "signal";

export type Produkt = {
  namn: string;
  modell: string;
  marke: string;
  pnc: string;
  kapacitetKg: number;
  maxCentrifugering?: number;
  energiklass: string;
  dimensioner: ProduktDimensioner;
  el: ProduktEl;
  vatten?: ProduktVatten;
  kapslingsklass: string;
};

export type ProduktDimensioner = {
  breddCm: number;
  hojdCm: number;
  djupCm: number;
  totalDjupCm?: number;
};

export type ProduktEl = {
  spanningV: number;
  effektW: number;
  sakringA: number;
  frekvensHz: number;
};

export type ProduktVatten = {
  minTryckBar: number;
  maxTryckBar: number;
  inlopp: string;
};

export type StandardprogramEnergi = {
  namn: string;
  last: string;
  energiKwh: number;
  tidMinuter: number;
};

export type Energidata = {
  arligEnergiforbrukningKwh: number;
  arligVattenforbrukningLiter?: number;
  centrifugeringseffektivitetsklass?: string;
  restfukthaltProcent?: number;
  effektFranlageW: number;
  effektVilolageW: number;
  vilolagetsVaraktighetMinuter: number;
  ljudnivaTvattDb?: number;
  ljudnivaCentrifugeringDb?: number;
  inbyggdMaskin: boolean;
  standardprogram: StandardprogramEnergi[];
  kommentar: string;
};

export type FelsokningItem = {
  problem: string;
  losningar: string[];
};

export type SkotselItem = {
  titel: string;
  beskrivning: string[];
  steg?: string[];
  varningar?: string[];
  tips?: string[];
};
