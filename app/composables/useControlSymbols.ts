export type ControlSymbolKey =
  | "programvred"
  | "centrifugering"
  | "temperatur"
  | "fortvatt"
  | "fordrojdStart"
  | "extraSkoljning"
  | "quick"
  | "startPaus"
  | "lucklas"
  | "programKlart"
  | "barnlas"
  | "skoljstopp"
  | "ingenCentrifugering";

export function useControlSymbols() {
  const symbols: Record<ControlSymbolKey, string> = {
    programvred: "/icons/controls/programvred.png",
    centrifugering: "/icons/controls/centrifugering.png",
    temperatur: "/icons/controls/temperature.png",
    fortvatt: "/icons/controls/fortvatt.png",
    fordrojdStart: "/icons/controls/fordrojd-start.png",
    extraSkoljning: "/icons/controls/extra-skoljning.png",
    quick: "/icons/controls/quick.png",
    startPaus: "/icons/controls/start-paus.png",
    lucklas: "/icons/controls/locked.png",
    programKlart: "/icons/controls/program-done.png",
    barnlas: "/icons/controls/children-lock.png",
    skoljstopp: "/icons/controls/skoljstopp.png",
    ingenCentrifugering: "/icons/controls/ingen-centrifugering.png"
  };

  return {
    symbols
  };
}
