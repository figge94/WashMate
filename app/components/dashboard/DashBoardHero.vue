<template>
  <div>
    <BaseHero
      :label="`${produkt.marke} ${produkt.modell}`"
      :title="produkt.namn"
      description="Guide för program, skötsel, felsökning och produktinformation."
      :badge="type === 'dryer' ? 'Torktumlare' : 'Tvättmaskin'"
      gradient="from-slate-50 to-white"
      textColor="text-slate-600 dark:text-slate-400"
      badgeColor="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" />

    <div class="mt-5 flex flex-wrap gap-3">
      <NuxtLink
        :to="{ path: helpPath, query: { id: machineId } }"
        class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
        {{ helpButtonText }}
      </NuxtLink>

      <NuxtLink
        :to="{ path: '/program', query: { id: machineId } }"
        class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
        Se program
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType, Produkt } from "~/types/machine";

const props = defineProps<{
  produkt: Pick<Produkt, "marke" | "modell" | "namn">;
  machineId: string;
  type: MachineType;
}>();

const isDryer = computed(() => props.type === "dryer");

const helpButtonText = computed(() =>
  isDryer.value ? "Öppna torkhjälp" : "Öppna tvätthjälp"
);

const helpPath = computed(() => (isDryer.value ? "/torkhjalp" : "/tvatthjalp"));
</script>
