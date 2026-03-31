<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
    <p
      class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      {{ produkt.marke }} {{ produkt.modell }}
    </p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
      Tvättguide
    </h1>

    <p
      class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
      Enkel guide för program, produktinformation, skötsel och felsökning för
      vår tvättmaskin.
    </p>

    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <NuxtLink
        to="/tvatthjalp"
        class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
        Öppna tvätthjälp
      </NuxtLink>

      <NuxtLink
        to="/program"
        class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
        Se program
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Produkt } from "~/types/machine";

defineProps<{
  produkt: Pick<Produkt, "marke" | "modell">;
}>();
</script>
