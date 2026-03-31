<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
    <p
      class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      Produktinformation
    </p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
      {{ produkt.marke }} {{ produkt.modell }}
    </h1>

    <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
      Här hittar du teknisk information och specifikationer för din tvättmaskin.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Produkt } from "~/types/machine";

defineProps<{
  produkt: Pick<Produkt, "marke" | "modell">;
}>();
</script>
