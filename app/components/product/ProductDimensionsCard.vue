<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">Mått</h2>

    <div class="mt-6 grid gap-4 sm:grid-cols-4">
      <div class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Bredd
        </p>
        <p class="mt-2 text-lg font-semibold">{{ dimensioner.breddCm }} cm</p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Höjd
        </p>
        <p class="mt-2 text-lg font-semibold">{{ dimensioner.hojdCm }} cm</p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Djup
        </p>
        <p class="mt-2 text-lg font-semibold">{{ dimensioner.djupCm }} cm</p>
      </div>

      <div
        v-if="dimensioner.totalDjupCm"
        class="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Totalt djup
        </p>
        <p class="mt-2 text-lg font-semibold">
          {{ dimensioner.totalDjupCm }} cm
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProduktDimensioner } from "~/types/machine";

defineProps<{
  dimensioner: ProduktDimensioner;
}>();
</script>
