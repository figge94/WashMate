<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <BaseCardLink :to="{ path: helpPath, query: { id: machineId } }">
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
    </BaseCardLink>

    <BaseCardLink :to="{ path: '/program', query: { id: machineId } }">
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
    </BaseCardLink>

    <BaseCardLink :to="{ path: '/produktinfo', query: { id: machineId } }">
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
    </BaseCardLink>

    <BaseCardLink :to="{ path: '/felsokning', query: { id: machineId } }">
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
    </BaseCardLink>
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

const helpDescription = "Hjälp att välja rätt program.";
const programDescription = "Se program och viktiga inställningar.";
const productInfoDescription = "Modell, kapacitet, mått och annan info.";
const troubleshootingDescription = "Vanliga problem och enkla lösningar.";
</script>
