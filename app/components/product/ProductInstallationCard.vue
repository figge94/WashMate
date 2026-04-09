<template>
  <div
    class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">Installation</h2>

    <div class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <template v-if="vatten">
        <p>
          <span class="font-medium text-slate-900 dark:text-slate-100">
            Vatten:
          </span>
          {{ vatten.inlopp }}
        </p>
        <p>
          <span class="font-medium text-slate-900 dark:text-slate-100">
            Min tryck:
          </span>
          {{ vatten.minTryckBar }} bar
        </p>
        <p>
          <span class="font-medium text-slate-900 dark:text-slate-100">
            Max tryck:
          </span>
          {{ vatten.maxTryckBar }} bar
        </p>
      </template>

      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          IP-klass:
        </span>
        {{ kapslingsklass }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProduktVatten } from "~/types/machine";

defineProps<{
  vatten?: ProduktVatten;
  kapslingsklass: string;
}>();
</script>
