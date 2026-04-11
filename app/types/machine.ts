export type MachineType = "washer" | "dryer";

export type Machine = {
  id: string;
  type: MachineType;
  manualUrl: string;
  produkt: Produkt;
  energidata: Energidata;
  programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>>;
  program: Program[];
  torkdata?: TorkProgramData[];
  felsokning: FelsokningItem[];
  skotsel: SkotselItem[];
  produktblad?: Produktblad;
  radOchTips?: RadTipsItem[];
};

export type MaterialKey =
  | "bomull"
  | "syntet"
  | "denim"
  | "polyester"
  | "mikrofiber"
  | "siden"
  | "ull"
  | "alla";

export const materialLabels: Record<MaterialKey, string> = {
  bomull: "Bomull",
  syntet: "Syntet",
  denim: "Denim",
  polyester: "Polyester",
  mikrofiber: "Mikrofiber",
  siden: "Siden",
  ull: "Ull",
  alla: "Alla material"
};

export type Program = {
  namn: string;
  temperatur?: string;
  maxCentrifugering?: string;
  maxMangd: string;
  beskrivning: string;
  funktioner: ProgramFunktionKey[];
  symboler?: string[];
  material: MaterialKey[];
  egenskaper?: string[];
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

export type TorkProgramData = {
  program: string;
  last: string;
  centrifugering: string;
  torktidMin: number;
  energiKwh: number;
};

export type Produktblad = {
  varumarke: string;
  modell: string;
  kapacitetKg: number;
  typ: string;
  energiklass: string;
  arligEnergiKwh: number;
  energiFullKwh: number;
  energiHalvKwh: number;
  effektAvW: number;
  effektVilolageW: number;
  vilolageMin: number;
  ljudnivaDb: number;
  inbyggd: boolean;
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
  beskrivning?: string[];
  steg?: string[];
  varningar?: string[];
  tips?: string[];
};

export type TipsSymbol = {
  symbol: string;
  beskrivning: string;
};

export type RadTipsItem = {
  titel: string;
  beskrivning?: string[];
  symboler?: {
    symbol: string;
    beskrivning: string;
  }[];
};
