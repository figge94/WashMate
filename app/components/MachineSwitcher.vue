<template>
  <div class="mb-6 flex flex-wrap gap-2">
    <button
      v-for="machine in machines"
      :key="machine.id"
      class="rounded-lg border px-4 py-2"
      :class="
        selectedId === machine.id
          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
          : 'bg-white dark:bg-slate-900'
      "
      @click="setId(machine.id)">
      {{ getLabel(machine) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { machines } from "~/data/machines";
import type { Machine } from "~/types/machine";

const route = useRoute();
const router = useRouter();

const fallbackId = machines[0]?.id ?? "";

const selectedId = computed(() => {
  const id = route.query.id;
  return typeof id === "string" ? id : fallbackId;
});

const setId = (id: string) => {
  router.push({
    query: {
      ...route.query,
      id
    }
  });
};

const getLabel = (machine: Machine) =>
  `${machine.type === "washer" ? "Tvättmaskin" : "Torktumlare"} · ${machine.produkt.modell}`;
</script>
