<template>
  <div class="mb-6 flex flex-wrap gap-2">
    <button
      v-for="machine in machines"
      :key="machine.id"
      @click="setId(machine.id)"
      class="relative rounded-full border px-4 py-2 text-sm font-medium transition"
      :class="
        selectedId === machine.id
          ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500'
      ">
      {{ getLabel(machine) }}

      <!-- vald indikator -->
      <span
        v-if="selectedId === machine.id"
        class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
        ✓
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { machines } from "~/data/machines/machines";
import type { Machine } from "~/types/machine";

const route = useRoute();
const router = useRouter();

const fallbackId = machines[0]?.id ?? "";

const selectedId = computed(() => {
  const id = route.params.machine;
  return typeof id === "string" ? id : fallbackId;
});

const setId = (id: string) => {
  const segments = route.path.split("/").filter(Boolean);

  if (segments.length === 0) {
    router.push(`/${id}`);
    return;
  }

  segments[0] = id;
  router.push("/" + segments.join("/"));
};

const getLabel = (machine: Machine) =>
  `${machine.type === "washer" ? "Tvättmaskin" : "Torktumlare"} · ${machine.produkt.modell}`;
</script>
