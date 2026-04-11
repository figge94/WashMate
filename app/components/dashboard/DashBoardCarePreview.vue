<template>
  <BaseCard :padded="false">
    <div class="p-6 sm:p-8">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Skötsel
          </p>

          <h2 class="mt-2 text-2xl font-semibold tracking-tight">
            {{ title }}
          </h2>

          <p
            class="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ description }}
          </p>
        </div>

        <NuxtLink
          :to="{ path: '/skotsel', query: { id: machineId } }"
          class="hidden shrink-0 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          Se allt
        </NuxtLink>
      </div>

      <ul class="mt-5 grid gap-4 md:grid-cols-3">
        <li
          v-for="item in skotsel.slice(0, 3)"
          :key="item.titel"
          class="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
          <p class="text-base font-semibold text-slate-900 dark:text-slate-100">
            {{ item.titel }}
          </p>

          <ul
            class="mt-2 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
            <li v-for="text in previewItems(item)" :key="text">• {{ text }}</li>
          </ul>
        </li>
      </ul>

      <div class="mt-5 sm:hidden">
        <NuxtLink
          :to="{ path: '/skotsel', query: { id: machineId } }"
          class="inline-flex rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          Se allt
        </NuxtLink>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType, SkotselItem } from "~/types/machine";

const props = defineProps<{
  skotsel: SkotselItem[];
  machineId: string;
  type: MachineType;
}>();

const isDryer = computed(() => props.type === "dryer");

const title = computed(() =>
  isDryer.value
    ? "Håll torktumlaren ren och fräsch"
    : "Håll tvättmaskinen ren och fräsch"
);

const description =
  "Viktiga saker att göra regelbundet för bättre resultat och längre livslängd.";

function previewItems(item: SkotselItem) {
  return (
    item.beskrivning?.slice(0, 2) ||
    item.steg?.slice(0, 2) ||
    item.tips?.slice(0, 2) ||
    []
  );
}
</script>
