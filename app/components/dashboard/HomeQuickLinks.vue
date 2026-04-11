<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <NuxtLink
      :to="{ path: helpPath, query: { id: machineId } }"
      class="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div class="flex h-full items-start justify-between gap-3">
        <div>
          <p class="text-lg font-semibold">{{ helpTitle }}</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ helpDescription }}
          </p>
        </div>
        <span class="text-slate-400 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/program', query: { id: machineId } }"
      class="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div class="flex h-full items-start justify-between gap-3">
        <div>
          <p class="text-lg font-semibold">Program</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ programDescription }}
          </p>
        </div>
        <span class="text-slate-400 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/produktinformation', query: { id: machineId } }"
      class="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div class="flex h-full items-start justify-between gap-3">
        <div>
          <p class="text-lg font-semibold">Produktinfo</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ productInfoDescription }}
          </p>
        </div>
        <span class="text-slate-400 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/felsokning', query: { id: machineId } }"
      class="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div class="flex h-full items-start justify-between gap-3">
        <div>
          <p class="text-lg font-semibold">Felsökning</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ troubleshootingDescription }}
          </p>
        </div>
        <span class="text-slate-400 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
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
    ? "Hjälp att välja rätt program."
    : "Hjälp att välja rätt program."
);

const programDescription = computed(
  () => "Se program och viktiga inställningar."
);

const productInfoDescription = computed(
  () => "Modell, kapacitet, mått och annan info."
);

const troubleshootingDescription = computed(
  () => "Vanliga problem och enkla lösningar."
);
</script>
