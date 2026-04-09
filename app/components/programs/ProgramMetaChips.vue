<template>
  <div class="mt-5 flex flex-wrap gap-2">
    <span
      v-if="program.temperatur && program.temperatur !== '-'"
      class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      Temperatur: {{ program.temperatur }}
    </span>

    <span
      v-if="
        machineType === 'washer' &&
        program.maxCentrifugering &&
        program.maxCentrifugering !== '-'
      "
      class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      Centrifugering: {{ program.maxCentrifugering }}
    </span>

    <span
      v-if="program.maxMangd && program.maxMangd !== '-'"
      class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      Max mängd: {{ program.maxMangd }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { MachineType, Program } from "~/types/machine";

defineProps<{
  program: Program;
  machineType: MachineType;
}>();
</script>
