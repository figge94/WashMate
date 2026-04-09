<template>
  <NuxtLink
    :to="href"
    class="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {{ typeLabel }}
        </p>

        <h2 class="mt-2 text-2xl font-semibold tracking-tight">
          {{ machine.produkt.namn }}
        </h2>

        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {{ machine.produkt.marke }} ·
          {{ machine.produkt.modell || "Okänd modell" }}
        </p>
      </div>

      <span
        v-if="machine.produkt.kapacitetKg != null"
        class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
        {{ machine.produkt.kapacitetKg }} kg
      </span>
    </div>

    <div class="mt-6 grid gap-3 sm:grid-cols-2">
      <div class="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Energiklass
        </p>
        <p class="mt-1 text-sm font-medium">
          {{ machine.produkt.energiklass || "—" }}
        </p>
      </div>

      <div class="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Märke
        </p>
        <p class="mt-1 text-sm font-medium">
          {{ machine.produkt.marke }}
        </p>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between">
      <span class="text-sm text-slate-600 dark:text-slate-300">
        Öppna översikt
      </span>

      <span
        class="text-sm font-medium text-slate-900 transition group-hover:translate-x-0.5 dark:text-slate-100">
        →
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Machine } from "~/types/machine";

const props = defineProps<{
  machine: Machine;
}>();

const typeLabel = computed(() =>
  props.machine.type === "washer" ? "Tvättmaskin" : "Torktumlare"
);

const href = computed(() => ({
  path: "/dashboard",
  query: { id: props.machine.id }
}));
</script>
