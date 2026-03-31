<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Tvätthjälp
        </p>

        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Vad vill du tvätta?
        </h1>

        <p
          class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Välj det som passar bäst så får du ett enkelt förslag.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            v-for="choice in choices"
            :key="choice.id"
            type="button"
            @click="selected = choice.id"
            class="rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
            :class="
              selected === choice.id
                ? 'border-slate-900 bg-slate-900 text-white shadow-sm dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900'
                : 'border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100'
            ">
            <span
              class="block text-base font-semibold"
              :class="
                selected === choice.id
                  ? 'text-white dark:text-slate-900'
                  : 'text-slate-900 dark:text-slate-100'
              ">
              {{ choice.title }}
            </span>

            <span
              class="mt-2 block text-sm leading-6"
              :class="
                selected === choice.id
                  ? 'text-slate-200 dark:text-slate-700'
                  : 'text-slate-600 dark:text-slate-300'
              ">
              {{ choice.text }}
            </span>
          </button>
        </div>
      </div>

      <div
        v-if="selectedChoice"
        class="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Rekommendation
        </p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {{ selectedChoice.program }}
        </h2>

        <p
          class="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ selectedChoice.reason }}
        </p>

        <div v-if="selectedProgram" class="mt-5 flex flex-wrap gap-2">
          <span
            v-if="
              selectedProgram.temperatur && selectedProgram.temperatur !== '-'
            "
            class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Temperatur: {{ selectedProgram.temperatur }}
          </span>

          <span
            v-if="
              selectedProgram.maxCentrifugering &&
              selectedProgram.maxCentrifugering !== '-'
            "
            class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Centrifugering: {{ selectedProgram.maxCentrifugering }}
          </span>

          <span
            v-if="selectedProgram.maxMangd && selectedProgram.maxMangd !== '-'"
            class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Max mängd: {{ selectedProgram.maxMangd }}
          </span>
        </div>

        <div class="mt-6">
          <h3
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Tips
          </h3>

          <ul class="mt-4 space-y-3">
            <li
              v-for="tip in selectedChoice.tips"
              :key="tip"
              class="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              <span>{{ tip }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Kontrollpanel -->
      <div
        id="kontrollpanel"
        class="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div class="mb-6">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Kontrollpanel
          </p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight">
            Knappar och symboler
          </h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Tryck på en knapp för att se vad den gör och när den används.
          </p>
        </div>

        <!-- Knappar -->
        <div>
          <div class="mb-4">
            <h3 class="text-lg font-semibold tracking-tight">Knappar</h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Vanliga val och funktioner på panelen.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button
              v-for="item in knappar"
              :key="item.id"
              type="button"
              @click="openItem(item)"
              class="group relative flex min-h-6 flex-col items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <span
                class="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
                {{ item.id }}
              </span>

              <div
                class="grid h-10 w-10 place-items-center rounded-xl bg-white border border-slate-200 shadow-md dark:bg-slate-800">
                <img
                  :src="symbols[item.symbolKey]"
                  :alt="item.namn"
                  class="h-5 w-5 object-contain" />
              </div>

              <div>
                <p class="text-sm font-semibold">{{ item.namn }}</p>
                <p
                  class="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                  {{ item.beskrivning }}
                </p>
              </div>
            </button>
          </div>
        </div>

        <!-- Statuslampor -->
        <div
          class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
          <h3 class="text-lg font-semibold tracking-tight">Statuslampor</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Symboler som visar maskinens status.
          </p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="item in indikatorer"
              :key="item.namn"
              class="flex items-start gap-4 rounded-2xl bg-white p-4 dark:bg-slate-900">
              <div
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white border border-slate-200 shadow-md dark:bg-slate-800">
                <img
                  :src="symbols[item.symbolKey]"
                  :alt="item.namn"
                  class="h-5 w-5 object-contain" />
              </div>

              <div>
                <p class="font-semibold">{{ item.namn }}</p>
                <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {{ item.beskrivning }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div
        v-if="selectedPanelItem"
        class="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-4 sm:items-center"
        @click.self="closeModal">
        <div
          class="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div
                class="grid h-12 w-12 place-items-center rounded-xl bg-white border border-slate-200 shadow-md dark:bg-slate-800">
                <img
                  :src="symbols[selectedPanelItem.symbolKey]"
                  :alt="selectedPanelItem.namn"
                  class="h-6 w-6 object-contain" />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Knapp
                </p>
                <h2 class="mt-1 text-xl font-semibold tracking-tight">
                  {{ selectedPanelItem.namn }}
                </h2>
              </div>
            </div>

            <button
              type="button"
              @click="closeModal"
              class="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="Stäng">
              ✕
            </button>
          </div>

          <p
            class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ selectedPanelItem.beskrivning }}
          </p>

          <div
            v-if="selectedPanelItem.nar"
            class="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
            <p class="mb-1 font-semibold">När används den?</p>
            <p>{{ selectedPanelItem.nar }}</p>
          </div>

          <div class="mt-6 flex justify-end">
            <button
              type="button"
              @click="closeModal"
              class="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300">
              Stäng
            </button>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useMachine } from "~/composables/useMachine";
import { useControlPanel } from "~/composables/useControlPanel";
import type { Knapp } from "~/composables/useControlPanel";
import { useWashChoices } from "~/composables/useWashChoices";
import { useControlSymbols } from "~/composables/useControlSymbols";

const { choices } = useWashChoices();

const { machine } = useMachine();
const { knappar, indikatorer } = useControlPanel();
const { symbols } = useControlSymbols();

const selected = ref("vardag");
const selectedPanelItem = ref<Knapp | null>(null);

function openItem(item: Knapp) {
  selectedPanelItem.value = item;
}

function closeModal() {
  selectedPanelItem.value = null;
}

const selectedChoice = computed(
  () => choices.find((choice) => choice.id === selected.value) ?? null
);

const selectedProgram = computed(() => {
  if (!selectedChoice.value) return null;
  return (
    machine.program.find(
      (program) => program.namn === selectedChoice.value?.program
    ) ?? null
  );
});

useHead({
  title: "Tvätthjälp | WashMate",
  meta: [
    {
      name: "description",
      content:
        "Få hjälp att välja rätt tvättprogram baserat på dina kläder och behov."
    }
  ]
});
</script>
