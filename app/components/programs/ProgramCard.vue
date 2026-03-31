<template>
  <article
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div>
      <h2 class="text-xl font-semibold tracking-tight">
        {{ program.namn }}
      </h2>

      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ program.beskrivning }}
      </p>
    </div>

    <ProgramMetaChips :program="program" />

    <ProgramFunctionChips
      v-if="program.funktioner?.length"
      class="mt-5"
      :funktioner="program.funktioner"
      :programfunktioner="programfunktioner" />

    <ProgramSymbolChips
      v-if="program.symboler?.length"
      class="mt-5"
      :symboler="program.symboler" />
  </article>
</template>

<script setup lang="ts">
import type {
  Program,
  ProgramFunktion,
  ProgramFunktionKey
} from "~/types/machine";

defineProps<{
  program: Program;
  programfunktioner: Record<ProgramFunktionKey, ProgramFunktion>;
}>();
</script>
