<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
    <p
      class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      Produktinformation
    </p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
      {{ title }}
    </h1>

    <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
      Här hittar du teknisk information och specifikationer för din
      {{ productTypeText }}.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType, Produkt } from "~/types/machine";

const props = defineProps<{
  produkt: Partial<Pick<Produkt, "marke" | "modell">>;
  type: MachineType;
  machineId: string;
}>();

const title = computed(() => {
  const { marke, modell } = props.produkt;

  if (marke && modell) return `${marke} ${modell}`;
  if (marke) return marke;
  if (modell) return modell;
  return "Produkt";
});

const productTypeText = computed(() => {
  return props.type === "washer" ? "tvättmaskin" : "torktumlare";
});
</script>
