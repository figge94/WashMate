import { computed } from "vue";
import { useRoute } from "vue-router";
import { machines } from "~/data/machines";

export const useSelectedMachine = () => {
  const route = useRoute();

  const fallbackMachine = machines[0];

  const selectedId = computed(() => {
    const id = route.query.id;
    return typeof id === "string" ? id : fallbackMachine?.id;
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
