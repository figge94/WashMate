<template>
  <div>
    <p
      class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      Valbara funktioner
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="funktion in funktioner.filter((f) => programfunktioner[f])"
        :key="funktion"
        class="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
        {{ programfunktioner[funktion]?.namn }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgramFunktion, ProgramFunktionKey } from "~/types/machine";

defineProps<{
  funktioner: ProgramFunktionKey[];
  programfunktioner: Partial<Record<ProgramFunktionKey, ProgramFunktion>>;
}>();
</script>