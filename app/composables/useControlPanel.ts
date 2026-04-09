import { computed, toValue, type MaybeRefOrGetter } from "vue";
import type { MachineType } from "~/types/machine";
import { dryerControlPanel, washerControlPanel } from "~/data/controlPanel";

export function useControlPanel(machineType: MaybeRefOrGetter<MachineType>) {
  const knappar = computed(() =>
    toValue(machineType) === "dryer"
      ? dryerControlPanel.knappar
      : washerControlPanel.knappar
  );

  const indikatorer = computed(() =>
    toValue(machineType) === "dryer"
      ? dryerControlPanel.indikatorer
      : washerControlPanel.indikatorer
  );

  return {
    knappar,
    indikatorer
  };
}
