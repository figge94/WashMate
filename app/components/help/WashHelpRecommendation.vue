<template>
  <BaseCard :padded="false">
    <div class="p-6 sm:p-8">
      <p
        class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        Rekommendation
      </p>

      <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {{ selectedChoice.program }}
      </h2>

      <p
        class="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
        {{ selectedChoice.reason }}
      </p>

      <div v-if="selectedProgram" class="mt-5 flex flex-wrap gap-2">
        <span
          v-if="
            selectedProgram.temperatur && selectedProgram.temperatur !== '-'
          "
          class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          Temperatur: {{ selectedProgram.temperatur }}
        </span>

        <span
          v-if="
            machineType === 'washer' &&
            selectedProgram.maxCentrifugering &&
            selectedProgram.maxCentrifugering !== '-'
          "
          class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          Centrifugering: {{ selectedProgram.maxCentrifugering }}
        </span>

        <span
          v-if="selectedProgram.maxMangd && selectedProgram.maxMangd !== '-'"
          class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          Max mängd: {{ selectedProgram.maxMangd }}
        </span>
      </div>

      <div class="mt-6">
        <h3
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Tips
        </h3>

        <ul class="mt-4 space-y-3">
          <li
            v-for="tip in selectedChoice.tips"
            :key="tip"
            class="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
            <span
              class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
            <span>{{ tip }}</span>
          </li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import type { MachineType, Program } from "~/types/machine";
import type { WashChoice } from "~/types/wash-choice";

defineProps<{
  machineType: MachineType;
  selectedChoice: WashChoice;
  selectedProgram: Program | null;
}>();
</script>
