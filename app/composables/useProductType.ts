import { computed } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";

export const useProductType = () => {
  const { machine } = useSelectedMachine();

  const productType = computed<"washer" | "dryer">(() => {
    return machine.value?.type === "dryer" ? "dryer" : "washer";
  });

  const isWasher = computed(() => productType.value === "washer");
  const isDryer = computed(() => productType.value === "dryer");

  const productTypeText = computed(() =>
    isDryer.value ? "torktumlare" : "tvättmaskin"
  );

  return {
    productType,
    isWasher,
    isDryer,
    productTypeText
  };
};
