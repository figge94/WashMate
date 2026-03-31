<template>
  <div
    id="kontrollpanel"
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
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
          @click="$emit('open', item)"
          class="group relative flex min-h-6 flex-col items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <span
            class="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
            {{ item.id }}
          </span>

          <div
            class="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
            <div
              class="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
              <img
                v-if="symbols[item.symbolKey].startsWith('/')"
                :src="symbols[item.symbolKey]"
                :alt="item.namn"
                class="h-5 w-5 object-contain" />

              <div
                v-else
                class="h-6 w-6 text-slate-900 dark:text-slate-100"
                v-html="symbols[item.symbolKey]" />
            </div>
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
            class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
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
</template>

<script setup lang="ts">
import type { Indikator, Knapp } from "~/types/control-panel";
import type { ControlSymbolKey } from "~/types/control-symbol";

defineProps<{
  knappar: Knapp[];
  indikatorer: Indikator[];
  symbols: Record<ControlSymbolKey, string>;
}>();

defineEmits<{
  (e: "open", item: Knapp): void;
}>();
</script>
