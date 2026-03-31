import type { ControlSymbolKey } from "~/types/control-symbol";
import { icons } from "~/utils/icons";

export function useControlSymbols() {
  const symbols: Record<ControlSymbolKey, string> = {
    programvred: "/icons/controls/programvred.png",
    centrifugering: "/icons/controls/centrifugering.png",
    temperatur: "/icons/controls/temperature.png",
    fordrojdStart: "/icons/controls/fordrojd-start.png",
    startPaus: "/icons/controls/start-paus.png",
    lucklas: "/icons/controls/locked.png",
    programKlart: "/icons/controls/program-done.png",
    barnlas: "/icons/controls/children-lock.png",
    skoljstopp: "/icons/controls/skoljstopp.png",
    ingenCentrifugering: "/icons/controls/ingen-centrifugering.png",
    fortvatt: icons.prewash,
    extraSkoljning: icons.extraRinse,
    quick: icons.quickWash
  };

  return {
    symbols
  };
}
