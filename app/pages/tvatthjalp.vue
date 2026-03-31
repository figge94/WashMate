<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <WashHelpHero />

      <WashHelpChoices
        class="mt-6"
        :choices="choices"
        :selected="selected"
        @select="selected = $event" />

      <WashHelpRecommendation
        v-if="selectedChoice"
        class="mt-6"
        :selected-choice="selectedChoice"
        :selected-program="selectedProgram" />

      <WashHelpControlPanel
        class="mt-6"
        :knappar="knappar"
        :indikatorer="indikatorer"
        :symbols="symbols"
        @open="openItem" />
    </section>

    <WashHelpControlModal
      :selected-panel-item="selectedPanelItem"
      :symbols="symbols"
      @close="closeModal" />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useMachine } from "~/composables/useMachine";
import { useControlPanel } from "~/composables/useControlPanel";
import { useControlSymbols } from "~/composables/useControlSymbols";
import { useWashChoices } from "~/composables/useWashChoices";
import type { Knapp } from "~/types/control-panel";

const { machine } = useMachine();
const { choices } = useWashChoices();
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
  const programName = selectedChoice.value?.program;
  if (!programName) return null;

  return (
    machine.program.find((program) => program.namn === programName) ?? null
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
