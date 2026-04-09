<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div v-if="felsokning.length" class="space-y-3">
      <details
        v-for="item in felsokning"
        :key="item.problem"
        class="group rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4">
          <span class="font-semibold text-slate-900 dark:text-slate-100">
            {{ item.problem }}
          </span>

          <span
            class="text-slate-500 transition group-open:rotate-180 dark:text-slate-400">
            ▼
          </span>
        </summary>

        <ul class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li
            v-for="solution in item.losningar"
            :key="solution"
            class="flex items-start gap-2">
            <span class="mt-1 text-slate-400">⚙️</span>
            <span>{{ solution }}</span>
          </li>
        </ul>
      </details>
    </div>

    <p v-else class="text-sm text-slate-600 dark:text-slate-300">
      Ingen felsökningsinformation finns ännu för den här maskinen.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { FelsokningItem } from "~/types/machine";

defineProps<{
  felsokning: FelsokningItem[];
}>();
</script>
