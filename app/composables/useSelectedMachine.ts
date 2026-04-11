import { computed } from "vue";
import { useRoute } from "vue-router";
import { machines } from "~/data/machines/machines";

export const useSelectedMachine = () => {
  const route = useRoute();

  const fallbackMachine = machines[0] ?? null;

  const selectedId = computed(() => {
    const id = route.params.machine;
    return typeof id === "string" ? id : (fallbackMachine?.id ?? "");
  });

  const machine = computed(() => {
    return (
      machines.find((machine) => machine.id === selectedId.value) ??
      fallbackMachine
    );
  });

  return {
    selectedId,
    machine
  };
};
