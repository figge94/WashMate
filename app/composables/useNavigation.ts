import { computed } from "vue";
import { useRoute } from "vue-router";
import { machines } from "~/data/machines/machines";

export const useNavigation = () => {
  const route = useRoute();

  const fallbackId = machines[0]?.id ?? "";

  const selectedId = computed(() => {
    const id = route.params.machine;
    return typeof id === "string" ? id : fallbackId;
  });

  const links = computed(() => [
    {
      label: "Hem",
      to: "/"
    },
    {
      label: "Tvätthjälp",
      to: `/${selectedId.value}`
    },
    {
      label: "Program",
      to: `/${selectedId.value}/program`
    },
    {
      label: "Skötsel",
      to: `/${selectedId.value}/skotsel`
    },
    {
      label: "Produktinfo",
      to: `/${selectedId.value}/produktinfo`
    },
    {
      label: "Felsökning",
      to: `/${selectedId.value}/felsokning`
    }
  ]);

  return { links };
};
