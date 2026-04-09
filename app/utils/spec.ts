import type { ProductSpecInput } from "~/types/specs";

export const spec = (
  key: string,
  label: string,
  value?: string | number | null,
  unit?: string,
  show: boolean = true
): ProductSpecInput => ({
  key,
  label,
  value,
  unit,
  show
});
