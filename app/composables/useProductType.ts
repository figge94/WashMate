import { computed } from "vue";

export const useProductType = () => {
  const route = useRoute();

  const productType = computed<"washer" | "dryer">(() => {
    const path = route.path.toLowerCase();

    if (path.includes("tork")) return "dryer";
    return "washer";
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
    productTypeText,
  };
};