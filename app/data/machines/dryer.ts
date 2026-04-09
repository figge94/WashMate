import type {
  Machine,
  Program,
  ProgramFunktion,
  ProgramFunktionKey,
  TorkProgramData
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

const torkdata: TorkProgramData[] = [
  {
    program: "Bomull Eco",
    last: "8 kg",
    centrifugering: "1400 rpm / 50%",
    torktidMin: 147,
    energiKwh: 2.03
  },
  {
    program: "Bomull Eco",
    last: "8 kg",
    centrifugering: "1000 rpm / 60%",
    torktidMin: 179,
    energiKwh: 2.6
  },
  {
    program: "Bomull",
    last: "8 kg",
    centrifugering: "1400 rpm / 50%",
    torktidMin: 113,
    energiKwh: 1.47
  },
  {
    program: "Bomull",
    last: "8 kg",
    centrifugering: "1000 rpm / 60%",
    torktidMin: 135,
    energiKwh: 1.79
  },
  {
    program: "Bomull Eco",
    last: "4 kg",
    centrifugering: "1400 rpm / 50%",
    torktidMin: 86,
    energiKwh: 1.14
  },
  {
    program: "Bomull Eco",
    last: "4 kg",
    centrifugering: "1000 rpm / 60%",
    torktidMin: 102,
    energiKwh: 1.38
  },
  {
    program: "Syntet",
    last: "3.5 kg",
    centrifugering: "1200 rpm / 40%",
    torktidMin: 58,
    energiKwh: 0.71
  },
  {
    program: "Syntet",
    last: "3.5 kg",
    centrifugering: "800 rpm / 50%",
    torktidMin: 72,
    energiKwh: 0.9
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
    energiklass: "A+",
    dimensioner: {
      breddCm: 59.6,
      hojdCm: 85,
      djupCm: 63.8,
      totalDjupCm: 66.2
    },
    el: {
      spanningV: 230,
      effektW: 900,
      sakringA: 10,
      frekvensHz: 50
    },
    kapslingsklass: "IPX4"
  },
  energidata: {
    arligEnergiforbrukningKwh: 308.2,
    effektFranlageW: 0.5,
    effektVilolageW: 0.5,
    vilolagetsVaraktighetMinuter: 10,
    ljudnivaTvattDb: 67,
    inbyggdMaskin: false,
    standardprogram: [
      {
        namn: "Standardbomullsprogram",
        last: "Full maskin",
        energiKwh: 2.6,
        tidMinuter: 154
      },
      {
        namn: "Standardbomullsprogram",
        last: "Halv maskin",
        energiKwh: 1.38,
        tidMinuter: 92
      }
    ],
    kommentar:
      "Tillåten omgivningstemperatur är +5 °C till +35 °C. Kylmedium: R134a, 0,30 kg."
  },
  programfunktioner,
  program,
  torkdata,
  felsokning: [
    {
      problem: "Jag kan inte sätta på produkten",
      losningar: [
        "Se till att stickkontakten sitter ordentligt i eluttaget",
        "Kontrollera säkringen i säkringsskåpet (husets installation)"
      ]
    },
    {
      problem: "Programmet startar inte",
      losningar: [
        "Tryck på Start/Pause (Start/Paus)",
        "Se till att luckan är stängd"
      ]
    },
    {
      problem: "Luckan går inte att stänga",
      losningar: [
        "Kontrollera att filtret är korrekt installerat",
        "Kontrollera att ingen tvätt har fastnat mellan luckan och gummilisten"
      ]
    },
    {
      problem: "Produkten stannar under drift",
      losningar: [
        "Kontrollera att vattenbehållaren är tom",
        "Tryck på Start/Pause (Start/Paus) för att starta programmet på nytt",
        "Det är för lite tvätt i trumman. Öka mängden tvätt eller använd Time Drying (Tidsinställd torkning)"
      ]
    },
    {
      problem:
        "Programtiden är för lång eller torkningsresultatet är inte tillfredsställande",
      losningar: [
        "Kontrollera att tvättens vikt är lämplig för programmets varaktighet",
        "Kontrollera att filtret är rent",
        "Tvätten är för blöt. Centrifugera tvätten igen i tvättmaskinen",
        "Se till att rumstemperaturen är högre än +5 °C och lägre än +35 °C. Optimal rumstemperatur är 18 °C till 25 °C",
        "Välj programmet Time Drying (Tidsinställd torkning) eller Extra Dry (Extra Torrt)"
      ]
    },
    {
      problem: "Displayen visar Err",
      losningar: [
        "Om du vill välja ett nytt program, stäng av och sätt på produkten",
        "Kontrollera att tvätten är förenlig med programmet"
      ]
    },
    {
      problem: "Displayen visar felkod (t.ex. E51)",
      losningar: [
        "Stäng av och sätt på produkten",
        "Starta ett nytt program",
        "Kontakta service om problemet uppstår igen"
      ]
    },
    {
      problem: "Vid otillfredsställande torkresultat",
      losningar: [
        "Fel program har valts",
        "Filtret är igentäppt",
        "Kondensorn är igentäppt",
        "För mycket tvätt har lagts in i produkten",
        "Trumman är smutsig",
        "Felaktig inställning av värmeledningssensorn",
        "Luftflödeshålen är igentäppta",
        "Rumstemperaturen är för låg eller för hög (optimal rumstemperatur 19 °C till 24 °C)"
      ]
    }
  ],
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
      tips: [
        "Använd dammsugare vid behov",
        "Släng luddet i papperskorgen och inte i avloppet"
      ]
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
        "Rengör sensorn minst 3–4 gånger per år eller vid sämre torkning"
      ],
      steg: ["Öppna luckan", "Torka av metallsensorn noggrant flera gånger"],
      varningar: ["Använd inte slipmedel eller stålull"],
      tips: [
        "Använd en mjuk svamp eller trasa med lite vinäger eller diskmedel"
      ]
    },
    {
      titel: "Rengöring av trumman",
      beskrivning: [
        "Använd ett milt rengöringsmedel för att rengöra insidan av trumman",
        "Torka av ytorna med en mjuk duk"
      ],
      varningar: [
        "Koppla från maskinen innan rengöring",
        "Använd inte slipmedel eller stålull"
      ]
    },
    {
      titel: "Rengöring av kontrollpanelen och höljet",
      beskrivning: [
        "Använd ett vanligt rengöringsmedel för att rengöra kontrollpanelen och höljet",
        "Rengör med en fuktad duk och torka ytorna med en mjuk duk"
      ],
      varningar: [
        "Använd inte möbelrengöringsmedel eller starka rengöringsmedel som kan orsaka korrosion"
      ]
    },
    {
      titel: "Rengöring av luftflödeshål",
      beskrivning: [
        "Använd en dammsugare för att ta bort ludd från luftflödeshålen"
      ]
    }
  ],
  produktblad: {
    varumarke: "Electrolux",
    modell: "EWH2H328R2 / PNC 916098576",
    kapacitetKg: 8,
    typ: "Kondensor",
    energiklass: "A+",
    arligEnergiKwh: 308.2,
    energiFullKwh: 2.6,
    energiHalvKwh: 1.38,
    effektAvW: 0.5,
    effektVilolageW: 0.5,
    vilolageMin: 10,
    ljudnivaDb: 67,
    inbyggd: false
  }
};
