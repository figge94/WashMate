import type {
  Machine,
  Program,
  ProgramFunktion,
  ProgramFunktionKey
} from "~/types/machine";

const programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>> =
  {
    centrifugering: {
      namn: "Centrifugering",
      beskrivning: "Ändrar centrifugeringshastigheten."
    },
    flackborttagning: {
      namn: "Fläckborttagning",
      beskrivning: "Extra behandling för fläckig tvätt."
    },
    fortvatt: {
      namn: "Förtvätt",
      beskrivning: "Lägger till en extra tvättfas före huvudtvätten."
    },
    extraSkoljning: {
      namn: "Extra sköljning",
      beskrivning: "Lägger till extra sköljning."
    },
    fordrojdStart: {
      namn: "Fördröjd start",
      beskrivning: "Startar programmet senare."
    },
    timeManager: {
      namn: "Time Manager",
      beskrivning: "Kortar ner programtiden."
    },
    softPlus: {
      namn: "Soft Plus",
      beskrivning: "Hjälper sköljmedel att fördelas bättre i tvätten."
    }
  };

const program: Program[] = [
  {
    namn: "Cotton",
    temperatur: "90 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "7 kg",
    beskrivning: "Vit och färgad bomull. Normalt, mycket eller lätt smutsad.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "extraSkoljning",
      "fordrojdStart",
      "timeManager",
      "softPlus"
    ]
  },
  {
    namn: "Eco 40–60",
    temperatur: "40–60 °C",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "7 kg",
    beskrivning:
      "Vit bomull och färgäkta bomull. Normalt smutsad tvätt. Energiförbrukningen minskar och programmets tvättfas förlängs, vilket ger goda tvättresultat.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "extraSkoljning",
      "fordrojdStart",
      "timeManager",
      "softPlus"
    ]
  },
  {
    namn: "Synthetics",
    temperatur: "60 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "3 kg",
    beskrivning:
      "Ömtåliga material som akryl, viskos och blandade material måste fintvättas. Normalt smutsad tvätt.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "extraSkoljning",
      "fordrojdStart",
      "timeManager",
      "softPlus"
    ]
  },
  {
    namn: "Delicates",
    temperatur: "40 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "2 kg",
    beskrivning: "Ömtåliga material som akryl och viskos.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "fordrojdStart",
      "timeManager",
      "softPlus"
    ]
  },
  {
    namn: "Express Care",
    temperatur: "60 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "3 kg",
    beskrivning:
      "Bomulls- och syntetplagg. Ett kortprogram för plagg du använt under dagen. Normalt eller lätt smutsad.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "extraSkoljning",
      "fordrojdStart",
      "timeManager",
      "softPlus"
    ]
  },
  {
    namn: "Rapid 30 min",
    temperatur: "40 °C",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "3 kg",
    beskrivning: "Syntet och blandade material. Lättsmutsad tvätt.",
    funktioner: ["centrifugering", "fordrojdStart"]
  },
  {
    namn: "Rapid 14 min",
    temperatur: "30 °C",
    maxCentrifugering: "800 varv/min",
    maxMangd: "1,5 kg",
    beskrivning:
      "Syntet och blandade material. Lättsmutsad tvätt och plagg som ska fräschas upp.",
    funktioner: ["centrifugering", "fortvatt", "fordrojdStart"]
  },
  {
    namn: "Spin",
    temperatur: "-",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "7 kg",
    beskrivning:
      "Alla material, förutom ylle och ömtåliga tyger. För att centrifugera och tömma ut vattnet i trumman.",
    funktioner: ["centrifugering", "fordrojdStart"]
  },
  {
    namn: "Drain",
    temperatur: "-",
    maxCentrifugering: "-",
    maxMangd: "7 kg",
    beskrivning: "För att tömma ut vattnet i trumman. Alla material.",
    funktioner: ["fordrojdStart"]
  },
  {
    namn: "Rinse",
    temperatur: "-",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "7 kg",
    beskrivning:
      "För att skölja och centrifugera tvätten. Alla material, förutom ylle och mycket ömtåliga material.",
    funktioner: ["centrifugering", "fortvatt", "fordrojdStart", "softPlus"]
  },
  {
    namn: "Anti-allergy",
    temperatur: "60 °C",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "7 kg",
    beskrivning:
      "Vita bomullsplagg. Detta program hjälper till att ta bort bakterier, mikroorganismer och allergiframkallande ämnen.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "extraSkoljning",
      "fordrojdStart"
    ]
  },
  {
    namn: "Duvet",
    temperatur: "60 °C – kall",
    maxCentrifugering: "800 varv/min",
    maxMangd: "3 kg",
    beskrivning: "Specialprogram för syntetfilt, täcke, sängöverkast etc.",
    funktioner: ["centrifugering", "fordrojdStart"]
  },
  {
    namn: "Sports",
    temperatur: "40 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "3 kg",
    beskrivning:
      "Plagg i syntetmaterial och ömtåliga plagg. Lätt smutsad tvätt eller plagg som ska fräschas upp.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "fordrojdStart",
      "softPlus"
    ]
  },
  {
    namn: "Wool/Silk",
    temperatur: "40 °C – kall",
    maxCentrifugering: "1200 varv/min",
    maxMangd: "1,5 kg",
    beskrivning:
      "Ylle som går att tvätta i maskinen, handtvättbar ylle och andra material med symbolen handtvätt.",
    funktioner: [
      "centrifugering",
      "flackborttagning",
      "fortvatt",
      "fordrojdStart"
    ],
    symboler: ["handtvatt", "ylle"]
  }
];

export const washer: Machine = {
  id: "washer-electrolux-ew2f2027r1",
  type: "washer",
  manualUrl:
    "https://api.electrolux-medialibrary.com/asset/08d47a73-e6f4-42da-a89b-4c6747445aad/E4RM3Q/0605c4e2-eab3-4022-a52a-73da6f646764/PDF/0605c4e2-eab3-4022-a52a-73da6f646764.pdf",
  produkt: {
    namn: "Tvättmaskin",
    modell: "EW2F2027R1",
    marke: "Electrolux",
    pnc: "914912470",

    kapacitetKg: 7,
    maxCentrifugering: 1151,
    energiklass: "A+++",

    dimensioner: {
      breddCm: 60.0,
      hojdCm: 85.0,
      djupCm: 55.9,
      totalDjupCm: 57.8
    },

    el: {
      spanningV: 230,
      effektW: 2200,
      sakringA: 10,
      frekvensHz: 50
    },

    vatten: {
      minTryckBar: 0.5,
      maxTryckBar: 8,
      inlopp: "Kallt vatten"
    },

    kapslingsklass: "IPX4"
  },
  energidata: {
    arligEnergiforbrukningKwh: 171,
    arligVattenforbrukningLiter: 9499,
    centrifugeringseffektivitetsklass: "B",
    restfukthaltProcent: 53,
    effektFranlageW: 0.48,
    effektVilolageW: 0.48,
    vilolagetsVaraktighetMinuter: 5,
    ljudnivaTvattDb: 58,
    ljudnivaCentrifugeringDb: 79,
    inbyggdMaskin: false,
    standardprogram: [
      {
        namn: "Bomull 60 °C",
        last: "Full maskin",
        energiKwh: 0.92,
        tidMinuter: 250
      },
      {
        namn: "Bomull 60 °C",
        last: "Halv maskin",
        energiKwh: 0.68,
        tidMinuter: 204
      },
      {
        namn: "Bomull 40 °C",
        last: "Halv maskin",
        energiKwh: 0.59,
        tidMinuter: 189
      }
    ],
    kommentar:
      "Standardprogrammen bomull 60 °C och bomull 40 °C är de program som energimärkningens information hänför sig till."
  },
  programfunktioner,
  program,
  felsokning: [
    {
      problem: "Maskinen tömmer inte vatten",
      losningar: [
        "Rengör vattenlåset",
        "Kontrollera att tömningsslangen inte är böjd eller klämd",
        "Kontrollera att tömningsslangen är korrekt monterad",
        "Välj ett program med tömning",
        "Rengör tömningsfiltret"
      ]
    },
    {
      problem: "Centrifugering fungerar inte eller programmet tar lång tid",
      losningar: [
        "Välj centrifugeringsfunktion",
        "Kontrollera att programmet inte avslutas med vatten i trumman",
        "Rengör tömningsfiltret",
        "Fördela tvätten jämnt i trumman"
      ]
    },
    {
      problem: "Vatten läcker ut på golvet",
      losningar: [
        "Kontrollera att slangkopplingarna är täta",
        "Kontrollera att tillopps- och tömningsslangar inte är skadade",
        "Använd rätt mängd tvättmedel"
      ]
    },
    {
      problem: "Luckan går inte att öppna",
      losningar: [
        "Vänta tills programmet är klart",
        "Kör tömning eller centrifugering om det finns vatten kvar",
        "Kontrollera att maskinen har ström",
        "Kontakta service om problemet kvarstår"
      ]
    },
    {
      problem: "Maskinen låter konstigt",
      losningar: [
        "Kontrollera att maskinen står plant",
        "Se till att transportbultar är borttagna",
        "Fyll på mer tvätt om mängden är för liten"
      ]
    },
    {
      problem: "Tvätten blir inte ren",
      losningar: [
        "Öka mängden tvättmedel",
        "Använd fläckborttagning före tvätt",
        "Kontrollera att rätt temperatur är vald",
        "Minska tvättmängden"
      ]
    },
    {
      problem: "Det går inte att välja funktion",
      losningar: [
        "Tryck endast på knappar som är tillgängliga för valt program"
      ]
    }
  ],

  skotsel: [
    {
      titel: "Utvändig rengöring",
      beskrivning: [
        "Rengör med milt rengöringsmedel och varmt vatten",
        "Torka alla ytor noggrant",
        "Använd inte lösningsmedel eller kemikalier",
        "Undvik klorin på metallytor"
      ]
    },
    {
      titel: "Avkalkning",
      beskrivning: [
        "Använd avkalkningsmedel vid medelhårt eller hårt vatten",
        "Kontrollera trumman regelbundet för kalk",
        "Kör tom maskin med avkalkningsmedel vid behov",
        "Följ instruktioner på produkten"
      ]
    },
    {
      titel: "Underhållstvätt",
      beskrivning: [
        "Kör minst en gång i månaden",
        "Motverkar lukt, bakterier och avlagringar",
        "Använd hög temperatur"
      ]
    },
    {
      titel: "Rengöring av trumma",
      beskrivning: [
        "Kontrollera trumman regelbundet",
        "Använd rengöringsmedel för rostfritt stål",
        "Kör bomullsprogram på hög temperatur utan tvätt",
        "Undvik klor, stålull och sura medel"
      ]
    },
    {
      titel: "Lucktätning",
      beskrivning: [
        "Kontrollera regelbundet",
        "Ta bort föremål som mynt och knappar"
      ]
    },
    {
      titel: "Tvättmedelsfack",
      beskrivning: ["Rengör regelbundet"]
    },
    {
      titel: "Tilloppsslang och filter",
      beskrivning: ["Rengör vid behov"]
    },
    {
      titel: "Frysrisk",
      beskrivning: [
        "Töm slangar och pump vid temperatur under 0°C",
        "Koppla bort ström och stäng vatten",
        "Se till att temperaturen är över 0°C innan användning"
      ]
    }
  ],
  radOchTips: [
    {
      titel: "Fylla på tvätt",
      beskrivning: [
        "Dela in tvätten i vit, kulörtvätt, syntetmaterial, ömtåliga material och ylle",
        "Följ tvättanvisningarna som finns på tvättmärkningen",
        "Tvätta inte vita och färgade plagg tillsammans",
        "Vissa färgade plagg kan missfärga första tvätten. Tvätta dem separat de första gångerna",
        "Knäpp knapparna på örngott och tryckknappar och stäng dragkedjor och hakar. Knyt skärp",
        "Vänd ut och in på flerfärgade plagg, ylle och plagg med tryck",
        "Ta bort svåra fläckar med ett specialmedel",
        "Tvätta och förbehandla svåra fläckar innan plagget läggs i trumman",
        "Var försiktig med gardiner. Ta bort krokar och lägg gardinerna i en tvättpåse eller ett örngott",
        "Tvätta inte plagg utan fåll eller med hål. Tvätta små plagg i tvättpåse",
        "En mycket liten tvättmängd kan orsaka balansproblem vid centrifugering",
        "Undvik att tvätta kläder som är fulla av långt djurhår eller plagg av dålig kvalitet som släpper ut mycket ludd",
        "Töm alla veck på plaggen"
      ]
    },
    {
      titel: "Svåra fläckar",
      beskrivning: [
        "Det räcker inte alltid med vatten och tvättmedel för vissa fläckar",
        "Vi rekommenderar att du förbehandlar dessa fläckar innan du lägger in plaggen i maskinen",
        "Det finns särskilda fläckborttagningsmedel. Använd ett medel som lämpar sig för typen av fläck och material"
      ]
    },
    {
      titel: "Tvättmedel och tillsatser",
      beskrivning: [
        "Använd endast tvättmedel och tillsatser som är avsedda för tvättmaskiner",
        "Pulver för alla typer av material, bomull och syntet, samt vittvätt",
        "Flytande tvättmedel helst för lågtemperaturprogram med max 60 °C",
        "Flytande tvättmedel för fintvättprogram med låg temperatur",
        "Specialtvättmedel för endast ylle, specialtvättmedel för ömtåliga material eller specialtvättmedel för siden",
        "Blanda inte olika sorters tvättmedel",
        "Använd inte flytande tvättmedel med förtvätt",
        "Överdosera inte tvättmedel",
        "Följ alltid doseringsanvisningarna på förpackningen"
      ]
    },
    {
      titel: "Miljötips",
      beskrivning: [
        "Ställ in ett program utan förtvätt om tvätten är normalt smutsig",
        "Starta alltid ett tvättprogram med full maskin",
        "Använd vid behov fläckborttagningsmedel när du ställer in ett program med låg temperatur"
      ]
    },
    {
      titel: "Vattenhårdhet",
      beskrivning: [
        "Kontrollera vattenhårdheten i hemmet så att du använder rätt mängd tvättmedel",
        "Vid hög vattenhårdhet behövs mer tvättmedel",
        "I områden med mjukt vatten behövs mindre tvättmedel",
        "Kontakta lokala vattenmyndigheter om du behöver veta vattenhårdheten där du bor"
      ]
    }
  ]
};
