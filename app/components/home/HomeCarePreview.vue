<template>
  <section
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Skötsel
        </p>

        <h2 class="mt-2 text-2xl font-semibold tracking-tight">
          {{ title }}
        </h2>

        <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {{ description }}
        </p>
      </div>

      <NuxtLink
        :to="{ path: '/skotsel', query: { id: machineId } }"
        class="hidden rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
        Se allt
      </NuxtLink>
    </div>

    <ul class="mt-6 grid gap-4 md:grid-cols-3">
      <li
        v-for="item in skotsel.slice(0, 3)"
        :key="item.titel"
        class="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p class="font-semibold text-slate-900 dark:text-slate-100">
          {{ item.titel }}
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li v-for="text in item.beskrivning?.slice(0, 3) || []" :key="text">
            • {{ text }}
          </li>
        </ul>
      </li>
    </ul>

    <div class="mt-6 sm:hidden">
      <NuxtLink
        :to="{ path: '/skotsel', query: { id: machineId } }"
        class="inline-flex rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
        Se allt
      </NuxtLink>
    </div>
  </section>
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

const description = computed(() =>
  isDryer.value
    ? "Några viktiga saker att göra regelbundet för bättre resultat och längre livslängd för din torktumlare."
    : "Några viktiga saker att göra regelbundet för bättre resultat och längre livslängd för din tvättmaskin."
);
</script>
