<template>
  <div
    class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">Prestanda</h2>

    <div class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Max centrifugering:
        </span>
        {{ produkt.maxCentrifugering }} varv/min
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Energiklass:
        </span>
        {{ produkt.energiklass }}
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Ljudnivå:
        </span>
        {{ energidata.ljudnivaCentrifugeringDb }} dB
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Energidata, Produkt } from "~/types/machine";

defineProps<{
  produkt: Pick<Produkt, "maxCentrifugering" | "energiklass">;
  energidata: Pick<Energidata, "ljudnivaCentrifugeringDb">;
}>();
</script>
