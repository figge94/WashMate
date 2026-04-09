<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <NuxtLink
      :to="{ path: helpPath, query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">{{ helpTitle }}</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ helpDescription }}
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/program', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Program</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ programDescription }}
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/produktinformation', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Produktinformation</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ productInfoDescription }}
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/felsokning', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Felsökning</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ troubleshootingDescription }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MachineType } from "~/types/machine";

const props = defineProps<{
  machineId: string;
  type: MachineType;
}>();

const isDryer = computed(() => props.type === "dryer");

const helpTitle = computed(() => (isDryer.value ? "Torkhjälp" : "Tvätthjälp"));

const helpPath = computed(() => (isDryer.value ? "/torkhjalp" : "/tvatthjalp"));

const helpDescription = computed(() =>
  isDryer.value
    ? "Få hjälp att välja rätt program för vald torktumlare."
    : "Få hjälp att välja rätt program för vald tvättmaskin."
);

const programDescription = computed(() =>
  isDryer.value
    ? "Se program och viktiga inställningar för vald torktumlare."
    : "Se program och viktiga inställningar för vald tvättmaskin."
);

const productInfoDescription = computed(() =>
  isDryer.value
    ? "Se modell, kapacitet, mått och annan viktig information för din torktumlare."
    : "Se modell, kapacitet, mått och annan viktig information för din tvättmaskin."
);

const troubleshootingDescription = computed(() =>
  isDryer.value
    ? "Vanliga problem och enkla lösningar för vald torktumlare."
    : "Vanliga problem och enkla lösningar för vald tvättmaskin."
);
</script>
