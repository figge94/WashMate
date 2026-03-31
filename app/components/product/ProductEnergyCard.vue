<template>
  <section
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">Energidata</h2>

    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
      {{ energidata.kommentar }}
    </p>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Årlig energiförbrukning
        </p>
        <p class="mt-1 font-semibold">
          {{ energidata.arligEnergiforbrukningKwh }} kWh
        </p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Årlig vattenförbrukning
        </p>
        <p class="mt-1 font-semibold">
          {{ energidata.arligVattenforbrukningLiter }} liter
        </p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="text-xs text-slate-500 dark:text-slate-400">Restfukthalt</p>
        <p class="mt-1 font-semibold">{{ energidata.restfukthaltProcent }} %</p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="text-xs text-slate-500 dark:text-slate-400">Ljud tvätt</p>
        <p class="mt-1 font-semibold">{{ energidata.ljudnivaTvattDb }} dB</p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Ljud centrifugering
        </p>
        <p class="mt-1 font-semibold">
          {{ energidata.ljudnivaCentrifugeringDb }} dB
        </p>
      </div>
    </div>

    <ProductEnergyPrograms
      class="mt-8"
      :kommentar="energidata.kommentar"
      :standardprogram="energidata.standardprogram" />
  </section>
</template>

<script setup lang="ts">
import type { Energidata } from "~/types/machine";

defineProps<{
  energidata: Energidata;
}>();
</script>
