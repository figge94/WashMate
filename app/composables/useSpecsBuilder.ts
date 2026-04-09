import { computed, toValue, type MaybeRefOrGetter } from "vue";
import type { ProductSpecInput, ProductSpecItem } from "~/types/specs";

export const useSpecsBuilder = (
  items: MaybeRefOrGetter<ProductSpecInput[]>
) => {
  const specItems = computed<ProductSpecItem[]>(() => {
    return toValue(items)
      .filter(
        (item) => (item.show ?? true) && item.value != null && item.value !== ""
      )
      .map((item) => ({
        key: item.key,
        label: item.label,
        value: item.unit ? `${item.value} ${item.unit}` : String(item.value)
      }));
  });

  return { specItems };
};
