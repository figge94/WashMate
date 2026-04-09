import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMachine } from "~/composables/useMachine";

export function useSelectedMachine() {
  const route = useRoute();
  const { getMachine } = useMachine();

  const selectedId = computed(() => {
    const id = route.query.id;
    return typeof id === "string" ? id : "washer-electrolux-ew2f2027r1";
  });

  const machine = computed(() => getMachine(selectedId.value));

  return {
    selectedId,
    machine
  };
}