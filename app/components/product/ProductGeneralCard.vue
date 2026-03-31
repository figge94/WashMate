<template>
  <div
    class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">Allmänt</h2>

    <div class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Märke:
        </span>
        {{ produkt.marke }}
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Modell:
        </span>
        {{ produkt.modell }}
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          PNC:
        </span>
        {{ produkt.pnc }}
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Kapacitet:
        </span>
        {{ produkt.kapacitetKg }} kg
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Produkt } from "~/types/machine";

defineProps<{
  produkt: Pick<Produkt, "marke" | "modell" | "pnc" | "kapacitetKg">;
}>();
</script>
