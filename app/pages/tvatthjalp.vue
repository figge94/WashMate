<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />
      <WashHelpHero v-if="machine" :machine-type="machine.type" />

      <WashHelpChoices
        class="mt-6"
        :choices="choices"
        :selected="selected"
        @select="selected = $event" />

      <WashHelpRecommendation
        v-if="selectedChoice && machine"
        class="mt-6"
        :machine-type="machine.type"
        :selected-choice="selectedChoice"
        :selected-program="selectedProgram" />

      <WashHelpControlPanel
        class="mt-6"
        :knappar="knappar"
        :indikatorer="indikatorer"
        :symbols="symbols"
        @open="openItem" />

      <!-- 👇 NY -->
      <div class="mt-6">
        <TipsAccordion :items="tipsData" />
      </div>
    </section>

    <WashHelpControlModal
      :selected-panel-item="selectedPanelItem"
      :symbols="symbols"
      @close="closeModal" />
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";
import { useControlPanel } from "~/composables/useControlPanel";
import { useControlSymbols } from "~/composables/useControlSymbols";
import { useMachineChoices } from "~/composables/useMachineChoices";
import type { Knapp } from "~/types/control-panel";

const { machine } = useSelectedMachine();

const machineType = computed(() => machine.value?.type ?? "washer");
const { choices } = useMachineChoices(machineType);

const { knappar, indikatorer } = useControlPanel(machineType);
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
  () => choices.value.find((choice) => choice.id === selected.value) ?? null
);

const selectedProgram = computed(() => {
  const programName = selectedChoice.value?.program;
  if (!programName || !machine.value) return null;

  return (
    machine.value.program.find((program) => program.namn === programName) ??
    null
  );
});

const tipsData = [
  {
    titel: "Förbereda tvätten",
    beskrivning: [
      "Ställ alltid in det program som passar för typen av tvätt",
      "Tvätta inte ljusa och mörka färger ihop",
      "Använd rätt program för material",
      "Överskrid inte maximal tvättmängd",
      "Torktumlaren klarar av att torktumlas – kontrollera etiketten",
      "Torka inte stora och små plagg tillsammans",
      "Skaka större textilier innan torkning",
      "Stäng dragkedjor",
      "Knäpp knappar",
      "Töm fickor",
      "Vänd plagg med bomullsfoder ut och in"
    ],
    symboler: [
      {
        symbol: "torktumling",
        beskrivning: "Tvätten är lämplig för torktumling"
      },
      {
        symbol: "hög",
        beskrivning: "Torktumling vid hög temperatur"
      },
      {
        symbol: "låg",
        beskrivning: "Torktumling vid låg temperatur"
      },
      {
        symbol: "ej",
        beskrivning: "Ej lämplig för torktumling"
      }
    ]
  }
];

watch(
  choices,
  (newChoices) => {
    if (!newChoices.find((choice) => choice.id === selected.value)) {
      selected.value = newChoices[0]?.id ?? "";
    }
  },
  { immediate: true }
);

useHead({
  title: "Maskinhjälp | WashMate",
  meta: [
    {
      name: "description",
      content:
        "Få hjälp att välja rätt program och förstå funktioner för vald maskin."
    }
  ]
});
</script>
