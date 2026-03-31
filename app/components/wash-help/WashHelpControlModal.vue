<template>
  <transition name="fade">
    <div
      v-if="selectedPanelItem"
      class="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-4 sm:items-center"
      @click.self="$emit('close')">
      <div
        class="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <div
              class="grid h-12 w-12 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
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
            @click="$emit('close')"
            class="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Stäng">
            ✕
          </button>
        </div>

        <p class="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
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
            @click="$emit('close')"
            class="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300">
            Stäng
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { Knapp } from "~/composables/useControlPanel";
import type { ControlSymbolKey } from "~/composables/useControlSymbols";

defineProps<{
  selectedPanelItem: Knapp | null;
  symbols: Record<ControlSymbolKey, string>;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
