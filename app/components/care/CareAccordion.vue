<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div v-if="skotsel.length" class="space-y-3">
      <details
        v-for="item in skotsel"
        :key="item.titel"
        class="group rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4">
          <span class="font-semibold text-slate-900 dark:text-slate-100">
            {{ item.titel }}
          </span>

          <span
            class="text-slate-500 transition group-open:rotate-180 dark:text-slate-400">
            ▼
          </span>
        </summary>

        <ul
          v-if="item.beskrivning?.length"
          class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li
            v-for="text in item.beskrivning"
            :key="text"
            class="flex items-start gap-2">
            <span
              class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"></span>
            <span>{{ text }}</span>
          </li>
        </ul>

        <ol
          v-if="item.steg?.length"
          class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li
            v-for="(step, index) in item.steg"
            :key="step"
            class="flex items-start gap-3">
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              {{ index + 1 }}
            </span>
            <span>{{ step }}</span>
          </li>
        </ol>

        <div
          v-if="item.varningar?.length"
          class="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm dark:border-amber-900/40 dark:bg-amber-900/20">
          <div class="mb-2 font-semibold text-amber-800 dark:text-amber-300">
            Varningar
          </div>

          <ul class="space-y-2 text-amber-800 dark:text-amber-300">
            <li
              v-for="warning in item.varningar"
              :key="warning"
              class="flex items-start gap-2">
              <span class="shrink-0 text-base leading-5">⚠️</span>
              <span>{{ warning }}</span>
            </li>
          </ul>
        </div>

        <div
          v-if="item.tips?.length"
          class="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm dark:border-sky-900/40 dark:bg-sky-900/20">
          <div class="mb-2 font-semibold text-sky-800 dark:text-sky-300">
            Tips
          </div>

          <ul class="space-y-2 text-sky-800 dark:text-sky-300">
            <li
              v-for="tip in item.tips"
              :key="tip"
              class="flex items-start gap-2">
              <span class="shrink-0 text-base leading-5">💡</span>
              <span>{{ tip }}</span>
            </li>
          </ul>
        </div>
      </details>
    </div>

    <p v-else class="text-sm text-slate-600 dark:text-slate-300">
      Ingen skötselinformation finns ännu för den här maskinen.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { SkotselItem } from "~/types/machine";

defineProps<{
  skotsel: SkotselItem[];
}>();
</script>