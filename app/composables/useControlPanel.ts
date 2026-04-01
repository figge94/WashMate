import type { Indikator, Knapp } from "~/types/control-panel";

export function useControlPanel() {
  const knappar: Knapp[] = [
    {
      id: 1,
      symbolKey: "programvred",
      namn: "Programvred",
      beskrivning: "Här väljer du vilket tvättprogram som ska köras.",
      nar: "Används först när du ska välja typ av tvätt, till exempel bomull, fintvätt eller snabbtvätt."
    },
    {
      id: 2,
      symbolKey: "centrifugering",
      namn: "Centrifugering",
      beskrivning: "Ändrar centrifugeringshastigheten.",
      nar: "Bra när du vill ha torrare tvätt eller köra skonsammare för känsliga plagg."
    },
    {
      id: 3,
      symbolKey: "temperatur",
      namn: "Temperatur",
      beskrivning: "Ändrar tvättemperaturen för valt program.",
      nar: "Används när du vill tvätta kallare eller varmare beroende på plagg och smutsighet."
    },
    {
      id: 4,
      symbolKey: "fortvatt",
      namn: "Förtvätt",
      beskrivning: "Lägger till en extra tvätt före huvudtvätten.",
      nar: "Bra för smutsiga arbetskläder, handdukar eller tvätt med mycket fläckar."
    },
    {
      id: 5,
      symbolKey: "fordrojdStart",
      namn: "Fördröjd start",
      beskrivning: "Gör att tvättprogrammet startar senare.",
      nar: "Bra om du vill att tvätten ska vara klar en viss tid eller gå senare på dagen. Med den här funktionen kan du fördröja starten av ett program med 9, 6 eller 3 timmar. Indikatorn för funktionen och inställt värde lyser."
    },
    {
      id: 6,
      symbolKey: "extraSkoljning",
      namn: "Extra sköljning",
      beskrivning: "Lägger till extra sköljning i programmet.",
      nar: "Denna funktion lägger till några sköljningar enligt valt tvättprogram. Använd den här funktionen om du har allergi mot tvättmedelsrester eller extra känslig hud. (Funktionen lägger till tid till programlängden.)"
    },
    {
      id: 7,
      symbolKey: "quick",
      namn: "Quick",
      beskrivning: "Kortar ner programtiden när det är möjligt.",
      nar: "Bra för lätt smutsad tvätt när du vill bli klar snabbare."
    },
    {
      id: 8,
      symbolKey: "startPaus",
      namn: "Start/Paus",
      beskrivning: "Startar eller pausar det valda programmet.",
      nar: "Tryck när du är klar med dina val och vill starta tvätten."
    }
  ];

  const indikatorer: Indikator[] = [
    {
      symbolKey: "lucklas",
      namn: "Lucklås",
      beskrivning: "Visar att luckan är låst under programmet."
    },
    {
      symbolKey: "programKlart",
      namn: "Program klart",
      beskrivning: "Visar att tvätten är färdig."
    },
    {
      symbolKey: "barnlas",
      namn: "Barnlås",
      beskrivning: "Visar att knapplåset är aktivt."
    }
  ];

  return {
    knappar,
    indikatorer
  };
}
