export type ProductSpecItem = {
  key: string;
  label: string;
  value: string;
};

export type ProductSpecInput = {
  key: string;
  label: string;
  value?: string | number | null;
  unit?: string;
  show?: boolean;
};
