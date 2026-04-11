export type TvattSymbolKategori =
  | "tvatt"
  | "blekning"
  | "torkning"
  | "strykning"
  | "kemtvatt";

export type TvattSymbol = {
  id: string;
  namn: string;
  kategori: TvattSymbolKategori;
  beskrivning: string;
  rad: string;
  icon: string;
};

export const tvattSymbolKategoriLabel: Record<TvattSymbolKategori, string> = {
  tvatt: "Tvätt",
  blekning: "Blekning",
  torkning: "Torkning",
  strykning: "Strykning",
  kemtvatt: "Kemtvätt"
};

export const tvattSymboler: TvattSymbol[] = [
  {
    id: "wash-30",
    namn: "30°C",
    kategori: "tvatt",
    beskrivning: "Tvättas i max 30°C.",
    rad: "Passar känsligare plagg och minskar risken för krympning.",
    icon: "/icons/laundry-care/wash-30.png"
  },
  {
    id: "wash-40",
    namn: "40°C",
    kategori: "tvatt",
    beskrivning: "Tvättas i max 40°C.",
    rad: "Vanlig temperatur för vardagskläder.",
    icon: "/icons/laundry-care/wash-40.png"
  },
  {
    id: "wash-60",
    namn: "60°C",
    kategori: "tvatt",
    beskrivning: "Tvättas i max 60°C.",
    rad: "Vanligt för handdukar och sängkläder.",
    icon: "/icons/laundry-care/wash-60.png"
  },
  {
    id: "wash-hand",
    namn: "Handtvätt",
    kategori: "tvatt",
    beskrivning: "Tvättas för hand eller skonsamt program.",
    rad: "Undvik hög temperatur och centrifugering.",
    icon: "/icons/laundry-care/wash-hand.png"
  },
  {
    id: "bleach-yes",
    namn: "Blekning tillåten",
    kategori: "blekning",
    beskrivning: "Plagget får blekas.",
    rad: "Använd med försiktighet beroende på material.",
    icon: "/icons/laundry-care/bleach-yes.png"
  },
  {
    id: "bleach-no",
    namn: "Ej blekning",
    kategori: "blekning",
    beskrivning: "Blekmedel får inte användas.",
    rad: "Använd vanligt tvättmedel.",
    icon: "/icons/laundry-care/bleach-no.png"
  },
  {
    id: "tumble-dryer-low",
    namn: "Torktumling låg värme",
    kategori: "torkning",
    beskrivning: "Torktumla på låg temperatur.",
    rad: "Passar känsliga material.",
    icon: "/icons/laundry-care/tumble-dryer-low.png"
  },
  {
    id: "tumble-dryer-medium",
    namn: "Torktumling medelvärme",
    kategori: "torkning",
    beskrivning: "Torktumla på medelvärme.",
    rad: "Vanlig inställning.",
    icon: "/icons/laundry-care/tumble-dryer-medium.png"
  },
  {
    id: "tumble-dryer-high",
    namn: "Torktumling hög värme",
    kategori: "torkning",
    beskrivning: "Torktumla på hög temperatur.",
    rad: "Endast för tåliga plagg.",
    icon: "/icons/laundry-care/tumble-dryer-high.png"
  },
  {
    id: "iron-low",
    namn: "Strykning låg värme",
    kategori: "strykning",
    beskrivning: "Stryk på låg temperatur.",
    rad: "För syntetiska material.",
    icon: "/icons/laundry-care/iron-low.png"
  },
  {
    id: "iron-medium",
    namn: "Strykning medel",
    kategori: "strykning",
    beskrivning: "Stryk på medelhög temperatur.",
    rad: "Vanlig inställning.",
    icon: "/icons/laundry-care/iron-medium.png"
  },
  {
    id: "iron-high",
    namn: "Strykning hög värme",
    kategori: "strykning",
    beskrivning: "Stryk på hög temperatur.",
    rad: "För bomull och linne.",
    icon: "/icons/laundry-care/iron-high.png"
  },
  {
    id: "iron-no",
    namn: "Ej strykning",
    kategori: "strykning",
    beskrivning: "Får inte strykas.",
    rad: "Kan skadas av värme.",
    icon: "/icons/laundry-care/iron-no.png"
  },
  {
    id: "dry-clean",
    namn: "Kemtvätt",
    kategori: "kemtvatt",
    beskrivning: "Professionell kemtvätt möjlig.",
    rad: "Följ instruktioner från kemtvätt.",
    icon: "/icons/laundry-care/dry-clean.png"
  },
  {
    id: "dryclean-no",
    namn: "Ej kemtvätt",
    kategori: "kemtvatt",
    beskrivning: "Får inte kemtvättas.",
    rad: "Välj annan rengöring.",
    icon: "/icons/laundry-care/dryclean-no.png"
  }
];