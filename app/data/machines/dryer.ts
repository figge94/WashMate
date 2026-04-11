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
    id: "cotton-eco",
    namn: "Cotton Eco",
    maxMangd: "8 kg",
    beskrivning: "Bomull. Energieffektiv torkning till skåptorrt.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull"],
    egenskaper: ["energieffektiv", "skåptorrt"]
  },
  {
    id: "cotton-extra-dry",
    namn: "Cotton Extra Dry",
    maxMangd: "8 kg",
    beskrivning: "Bomull. Extra torrt resultat.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull"],
    egenskaper: ["extra torr"]
  },
  {
    id: "cotton-cupboard-dry",
    namn: "Cotton Cupboard Dry",
    maxMangd: "8 kg",
    beskrivning: "Bomull. Torrt för direkt förvaring i skåp.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull"],
    egenskaper: ["skåptorrt"]
  },
  {
    id: "cotton-iron-dry",
    namn: "Cotton Iron Dry",
    maxMangd: "8 kg",
    beskrivning: "Bomull. Lämpligt för strykning.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull"],
    egenskaper: ["stryktorrt"]
  },
  {
    id: "synthetic-extra-dry",
    namn: "Synthetic Extra Dry",
    maxMangd: "3,5 kg",
    beskrivning: "Syntetiska plagg. Extra torrt.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["syntet"],
    egenskaper: ["extra torr"]
  },
  {
    id: "synthetic-cupboard-dry",
    namn: "Synthetic Cupboard Dry",
    maxMangd: "3,5 kg",
    beskrivning: "Syntetiska plagg. Skåptorrt.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["syntet"],
    egenskaper: ["skåptorrt"]
  },
  {
    id: "easy-iron",
    namn: "Easy Iron",
    maxMangd: "1 kg (5 skjortor)",
    beskrivning: "Bomull och syntet. Minskar skrynklor, lätt att stryka.",
    funktioner: ["fordrojdStart", "skrynkelskydd"],
    material: ["bomull", "syntet"],
    egenskaper: ["mindre skrynklor"]
  },
  {
    id: "time-drying",
    namn: "Time Drying",
    maxMangd: "5 kg",
    beskrivning: "Alla material. Torkning med valbar tid.",
    funktioner: ["tidtorkning", "fordrojdStart", "signal"],
    material: ["alla"],
    egenskaper: ["valbar tid"]
  },
  {
    id: "jeans",
    namn: "Jeans",
    maxMangd: "8 kg",
    beskrivning: "Jeans och fritidskläder i tjockare material.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["denim", "bomull"],
    egenskaper: ["tjocka plagg"]
  },
  {
    id: "sports",
    namn: "Sports",
    maxMangd: "2 kg",
    beskrivning: "Sportkläder i syntet, mikrofiber och polyester.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["syntet", "polyester", "mikrofiber"],
    egenskaper: ["lätta plagg"]
  },
  {
    id: "bedlinen",
    namn: "Bedlinen",
    maxMangd: "3 kg",
    beskrivning: "Sängkläder som lakan och påslakan.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull"],
    egenskaper: ["stora plagg"]
  },
  {
    id: "silk",
    namn: "Silk",
    maxMangd: "1 kg",
    beskrivning: "Skonsam torkning av siden.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["siden"],
    egenskaper: ["skonsam"]
  },
  {
    id: "wool",
    namn: "Wool",
    maxMangd: "1 kg",
    beskrivning: "Skonsam torkning av ull.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["ull"],
    egenskaper: ["skonsam"]
  },
  {
    id: "mixed",
    namn: "Mixed",
    maxMangd: "3 kg",
    beskrivning: "Bomulls- och syntetplagg. Låg temperatur, skonsam torkning.",
    funktioner: ["torrhetsgrad", "fordrojdStart", "skrynkelskydd"],
    material: ["bomull", "syntet"],
    egenskaper: ["låg temperatur", "skonprogram"]
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
  id: "torktumlare",
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
  },
  radOchTips: [
    {
      titel: "Förbereda tvätten",
      beskrivning: [
        "Ställ alltid in det program som passar för typen av tvätt",
        "Tvätta inte ljusa och mörka färger ihop",
        "Använd ett lämpligt program för vit-, kulörtvätt, jersey och stickat för att förhindra att plaggen krymper",
        "Överskrid inte maximal tvättmängd som finns i programkapitlet eller visas på displayen",
        "Torktumlaren klarar av att torktumlas. Se instruktionerna på plaggens klädvårdsetiketter",
        "Torka inte stora och små plagg tillsammans. Små plagg kan fastna i större plagg och därmed inte torkas",
        "Skaka större textilier innan de stoppas in i torktumlaren. Det är för att undvika att fukt ligger kvar inuti plagget efter torkprogrammet",
        "Stäng dragkedjorna",
        "Knäpp knapparna på påslakan",
        "Låt inte lösa band trassla sig före torkningen. Knyt ihop dem innan du startar programmet",
        "Töm alla fickor på föremål",
        "Om plagget har ett innerfoder av bomull ska plagget vändas ut och in. Bomullssidan ska alltid vara vänd utåt"
      ],
      symboler: [
        {
          symbol: "torktumling",
          beskrivning: "Tvätten är lämplig för torktumling"
        },
        {
          symbol: "torktumling-hog-varme",
          beskrivning:
            "Tvätten är lämplig för torktumling vid högre temperaturer"
        },
        {
          symbol: "torktumling-lag-varme",
          beskrivning:
            "Tvätten är lämplig för torktumling endast vid låga temperaturer"
        },
        {
          symbol: "ej-torktumling",
          beskrivning: "Plagget är inte lämpligt för torktumling"
        }
      ]
    }
  ]
};
