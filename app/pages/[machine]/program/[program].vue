<template>
  <main
    class="min-h-screen bg-slate-50 p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-4xl">
      <button
        class="mb-4 text-sm text-blue-600 dark:text-blue-400"
        @click="$router.back()">
        ← Tillbaka
      </button>

      <div v-if="machine && program">
        <p class="text-sm text-slate-500 dark:text-slate-400">
          {{ machine.produkt.namn }} / {{ program.namn }}
        </p>

        <div
          class="mt-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 class="text-3xl font-semibold tracking-tight">
            {{ program.namn }}
          </h1>

          <p class="mt-3 text-slate-600 dark:text-slate-300">
            {{ program.beskrivning }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2 text-sm">
            <span
              v-if="program.temperatur"
              class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
              Temperatur: {{ program.temperatur }}
            </span>

            <span
              v-if="program.maxCentrifugering"
              class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
              Centrifugering: {{ program.maxCentrifugering }}
            </span>

            <span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
              Max mängd: {{ program.maxMangd }}
            </span>
          </div>

          <div v-if="program.funktioner?.length" class="mt-6">
            <h2 class="text-lg font-semibold">Funktioner</h2>

            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="funktion in program.funktioner"
                :key="funktion"
                class="rounded-full border border-slate-200 px-3 py-1 text-sm dark:border-slate-700">
                {{ funktion }}
              </span>
            </div>
          </div>

          <div v-if="program.symboler?.length" class="mt-6">
            <h2 class="text-lg font-semibold">Symboler</h2>

            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="symbol in program.symboler"
                :key="symbol"
                class="rounded-full border border-slate-200 px-3 py-1 text-sm dark:border-slate-700">
                {{ symbol }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 class="text-xl font-semibold">Program hittades inte</h1>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Kontrollera länken eller gå tillbaka till programsidan.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { machines } from "~/data/machines/machines";

definePageMeta({
  name: "machine-program-detail"
});

const route = useRoute();

const machineId = computed(() => {
  const value = route.params.machine;
  return typeof value === "string" ? value : "";
});

const programId = computed(() => {
  const value = route.params.program;
  return typeof value === "string" ? value : "";
});

const machine = computed(() => {
  return machines.find((m) => m.id === machineId.value) ?? null;
});

const program = computed(() => {
  return machine.value?.program.find((p) => p.id === programId.value) ?? null;
});
</script>
