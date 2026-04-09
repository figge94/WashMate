import type { Machine } from "~/types/machine";

export const dryer: Machine = {
  id: "dryer-electrolux-916098576",
  type: "dryer",
  manualUrl:
    "https://static.elongroup.se/Document/Article/226773/manual-torktumlare-electrolux-916098576.pdf",
  produkt: {
    namn: "Torktumlare",
    modell: "",
    marke: "Electrolux",
    pnc: "",
    kapacitetKg: 0,
    energiklass: "",
    dimensioner: {
      breddCm: 0,
      hojdCm: 0,
      djupCm: 0
    },
    el: {
      spanningV: 230,
      effektW: 0,
      sakringA: 10,
      frekvensHz: 50
    },
    kapslingsklass: ""
  },
  energidata: {
    arligEnergiforbrukningKwh: 0,
    effektFranlageW: 0,
    effektVilolageW: 0,
    vilolagetsVaraktighetMinuter: 0,
    inbyggdMaskin: false,
    standardprogram: [],
    kommentar: ""
  },
  programfunktioner: {},
  program: [],
  felsokning: [],
  skotsel: []
};
