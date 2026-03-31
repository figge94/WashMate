import type { ControlSymbolKey } from "~/types/control-symbol";

export type Knapp = {
  id: number;
  symbolKey: ControlSymbolKey;
  namn: string;
  beskrivning: string;
  nar: string;
};

export type Indikator = {
  symbolKey: ControlSymbolKey;
  namn: string;
  beskrivning: string;
};
