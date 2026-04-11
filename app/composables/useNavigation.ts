import { computed } from "vue";
import { useRoute } from "vue-router";
import { machines } from "~/data/machines";

export const useNavigation = () => {
  const route = useRoute();

  const fallbackId = machines[0]?.id ?? "";

  const selectedId = computed(() => {
    const id = route.query.id;
    return typeof id === "string" ? id : fallbackId;
  });

  const links = computed(() => [
    {
      label: "Hem",
      to: { path: "/", query: { id: selectedId.value } }
    },
    {
      label: "Tvätthjälp",
      to: { path: "/tvatthjalp", query: { id: selectedId.value } }
    },
    {
      label: "Program",
      to: { path: "/program", query: { id: selectedId.value } }
    },
    {
      label: "Skötsel",
      to: { path: "/skotsel", query: { id: selectedId.value } }
    },
    {
      label: "Produktinfo",
      to: { path: "/produktinfo", query: { id: selectedId.value } }
    },
    {
      label: "Felsökning",
      to: { path: "/felsokning", query: { id: selectedId.value } }
    }
  ]);

  return { links };
};
