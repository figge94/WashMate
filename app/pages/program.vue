<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Program
        </p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Tvättprogram
        </h1>
        <p
          class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Här ser du alla program, vad de används till och viktig information
          som temperatur, centrifugering, max mängd och valbara funktioner.
        </p>
      </div>

      <div class="mt-6 grid gap-4 lg:grid-cols-2">
        <article
          v-for="item in machine.program"
          :key="item.namn"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 class="text-xl font-semibold tracking-tight">
              {{ item.namn }}
            </h2>

            <p
              class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ item.beskrivning }}
            </p>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-if="item.temperatur && item.temperatur !== '-'"
              class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Temperatur: {{ item.temperatur }}
            </span>

            <span
              v-if="item.maxCentrifugering && item.maxCentrifugering !== '-'"
              class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Centrifugering: {{ item.maxCentrifugering }}
            </span>

            <span
              v-if="item.maxMangd && item.maxMangd !== '-'"
              class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Max mängd: {{ item.maxMangd }}
            </span>
          </div>

          <div v-if="item.funktioner?.length" class="mt-5">
            <p
              class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Valbara funktioner
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="funktion in item.funktioner"
                :key="funktion"
                class="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                {{ machine.programfunktioner[funktion].namn }}
              </span>
            </div>
          </div>

          <div v-if="item.symboler?.length" class="mt-5">
            <p
              class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Symboler
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="symbol in item.symboler"
                :key="symbol"
                class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {{ getSymbolLabel(symbol) }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useMachine } from "~/composables/useMachine";

const { machine } = useMachine();

function getSymbolLabel(symbol: string) {
  const labels: Record<string, string> = {
    handtvatt: "Handtvätt",
    ylle: "Ylle"
  };

  return labels[symbol] ?? symbol;
}

useHead({
  title: "Program | WashMate",
  meta: [
    {
      name: "description",
      content: "Se alla tvättprogram och vad de används till."
    }
  ]
});
</script>
