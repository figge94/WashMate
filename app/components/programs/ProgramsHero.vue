<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
    <p
      class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      Program
    </p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
      {{ title }}
    </h1>

    <p
      class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType } from "~/types/machine";

const props = defineProps<{
  machineType: MachineType;
}>();

const title = computed(() =>
  props.machineType === "dryer" ? "Torkprogram" : "Tvättprogram"
);

const description = computed(() =>
  props.machineType === "dryer"
    ? "Här ser du alla program, vad de används till och viktig information för vald torktumlare."
    : "Här ser du alla program, vad de används till och viktig information som temperatur, centrifugering, max mängd och valbara funktioner."
);
</script>
