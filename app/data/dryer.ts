import type {
  Machine,
  Program,
  ProgramFunktion,
  ProgramFunktionKey
} from "~/types/machine";

const programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>> =
  {
    torrhetsgrad: {
      namn: "Torrhetsgrad",
      beskrivning: "Väljer hur torr tvätten ska bli."
    },
    tidtorkning: {
      namn: "Tidtorkning",
      beskrivning: "Ställer in en fast torktid."
    },
    fordrojdStart: {
      namn: "Fördröjd start",
      beskrivning: "Startar programmet senare."
    },
    skrynkelskydd: {
      namn: "Skrynkelskydd",
      beskrivning: "Minskar skrynklor efter avslutat program."
    },
    signal: {
      namn: "Ljudsignal",
      beskrivning: "Ger signal när programmet är klart."
    }
  };

const program: Program[] = [
  {
    namn: "Bomull",
    maxMangd: "8 kg",
    beskrivning: "Program för bomullstextilier.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"]
  },
  {
    namn: "Syntet",
    maxMangd: "3,5 kg",
    beskrivning: "Program för syntetiska plagg.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"]
  },
  {
    namn: "Mix",
    maxMangd: "3 kg",
    beskrivning: "Program för blandade material.",
    funktioner: ["torrhetsgrad", "fordrojdStart"]
  },
  {
    namn: "Sängkläder",
    maxMangd: "3 kg",
    beskrivning: "För sänglinne och större textilier.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"]
  },
  {
    namn: "Silke",
    maxMangd: "1 kg",
    beskrivning: "Skonsam torkning för siden.",
    funktioner: ["fordrojdStart"]
  },
  {
    namn: "Ylle",
    maxMangd: "1 kg",
    beskrivning: "Skonsam torkning för ull.",
    funktioner: ["fordrojdStart"]
  },
  {
    namn: "Outdoor",
    maxMangd: "2 kg",
    beskrivning: "För funktionsplagg och utomhuskläder.",
    funktioner: ["fordrojdStart"]
  },
  {
    namn: "Snabb 30 min",
    maxMangd: "1 kg",
    beskrivning: "Kort program för mindre mängd tvätt.",
    funktioner: ["tidtorkning", "fordrojdStart"]
  },
  {
    namn: "Tidtorkning",
    maxMangd: "4 kg",
    beskrivning: "Torkning under vald tid.",
    funktioner: ["tidtorkning", "fordrojdStart", "signal"]
  }
];

export const dryer: Machine = {
  id: "dryer-electrolux-916098576",
  type: "dryer",
  manualUrl:
    "https://static.elongroup.se/Document/Article/226773/manual-torktumlare-electrolux-916098576.pdf",
  produkt: {
    namn: "Torktumlare",
    modell: "EW2H328R2",
    marke: "Electrolux",
    pnc: "916098576",
    kapacitetKg: 8,
    energiklass: "A++",
    dimensioner: {
      breddCm: 59.6,
      hojdCm: 85,
      djupCm: 63.8
    },
    el: {
      spanningV: 230,
      effektW: 900,
      sakringA: 10,
      frekvensHz: 50
    },
    kapslingsklass: ""
  },
  energidata: {
    arligEnergiforbrukningKwh: 235,
    effektFranlageW: 0,
    effektVilolageW: 0,
    vilolagetsVaraktighetMinuter: 10,
    inbyggdMaskin: false,
    standardprogram: [],
    kommentar: "",
    ljudnivaTvattDb: 66
  },
  programfunktioner,
  program,
  felsokning: [],
  skotsel: [
    {
      titel: "Rengöring av filtret",
      beskrivning: [
        "Rengör filtret efter varje torkning",
        "Igensatt filter ökar energiförbrukning"
      ],
      steg: [
        "Öppna luckan",
        "Dra upp filtret",
        "Ta bort luddet",
        "Sätt tillbaka filtret"
      ],
      varningar: ["Använd inte vatten vid rengöring av filtret"],
      tips: ["Använd dammsugare vid behov"]
    },
    {
      titel: "Tömning av vattenbehållaren",
      beskrivning: ["Töm efter varje torkning"],
      steg: ["Dra ut behållaren", "Töm vattnet", "Sätt tillbaka"],
      tips: ["Vattnet kan användas till ångstrykning (filtrera först)"]
    },
    {
      titel: "Rengöring av kondensorn",
      beskrivning: ["Rengör regelbundet för bästa prestanda"],
      steg: ["Öppna luckan", "Ta ut kondensorn", "Rengör", "Sätt tillbaka"],
      varningar: [
        "Rör inte metallfiltret – risk för skärskador",
        "Var försiktig så att metallflänsarna inte skadas"
      ]
    },
    {
      titel: "Rengöring av fuktighetssensor",
      beskrivning: [
        "Sensorn sitter på insidan av luckan och mäter fukt",
        "Smuts på sensorn försämrar torkresultatet",
        "Rengör sensorn minst 3–4 gånger per år eller vid sämre torkning",
        "Använd inte slipmedel eller stålull",
        "Använd en mjuk svamp eller trasa med lite vinäger eller diskmedel"
      ],
      steg: ["Öppna luckan", "Torka av metallsensorn noggrant flera gånger"]
    },
    {
      titel: "Rengöring av kontrollpanelen och höljet",
      beskrivning: [
        "Använd ett vanligt rengöringsmedel för att rengöra kontrollpanelen och höljet",
        "Rengör med en fuktad duk och torka ytorna med en mjuk duk",
        "Använd inte möbelrengöringsmedel eller starka rengöringsmedel som kan orsaka korrosion"
      ]
    },
    {
      titel: "Rengöring av luftflödeshål",
      beskrivning: [
        "Använd en dammsugare för att ta bort ludd från luftflödeshålen"
      ]
    }
  ]
};
