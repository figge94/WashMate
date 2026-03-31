export type ProgramFunktionKey =
  | "centrifugering"
  | "flackborttagning"
  | "fortvatt"
  | "extraSkoljning"
  | "fordrojdStart"
  | "timeManager"
  | "softPlus";

export type ProgramFunktion = {
  namn: string;
  beskrivning: string;
};

export type Program = {
  namn: string;
  temperatur: string;
  maxCentrifugering: string;
  maxMangd: string;
  beskrivning: string;
  funktioner: ProgramFunktionKey[];
  symboler?: string[];
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

export type Produkt = {
  namn: string;
  modell: string;
  marke: string;
  pnc: string;
  kapacitetKg: number;
  maxCentrifugering: number;
  energiklass: string;
  dimensioner: ProduktDimensioner;
  el: ProduktEl;
  vatten: ProduktVatten;
  kapslingsklass: string;
};

export type StandardprogramEnergi = {
  namn: string;
  last: string;
  energiKwh: number;
  tidMinuter: number;
};

export type Energidata = {
  arligEnergiforbrukningKwh: number;
  arligVattenforbrukningLiter: number;
  centrifugeringseffektivitetsklass: string;
  restfukthaltProcent: number;
  effektFranlageW: number;
  effektVilolageW: number;
  vilolagetsVaraktighetMinuter: number;
  ljudnivaTvattDb: number;
  ljudnivaCentrifugeringDb: number;
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
  innehall: string[];
};

export type Machine = {
  manualUrl: string;
  produkt: Produkt;
  energidata: Energidata;
  programfunktioner: Record<ProgramFunktionKey, ProgramFunktion>;
  program: Program[];
  felsokning: FelsokningItem[];
  skotsel: SkotselItem[];
};
