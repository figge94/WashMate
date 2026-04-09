import { computed, toValue, type MaybeRefOrGetter } from "vue";
import type { MachineType } from "~/types/machine";
import { washerChoices, dryerChoices } from "~/data/machineChoices";

export const useMachineChoices = (
  machineType: MaybeRefOrGetter<MachineType>
) => {
  const choices = computed(() =>
    toValue(machineType) === "dryer" ? dryerChoices : washerChoices
  );

  return {
    choices
  };
};
