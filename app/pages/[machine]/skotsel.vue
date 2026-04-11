<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <HomeMachineSwitcher />

      <BaseHero
        v-if="machine"
        label="Skötsel"
        :title="heroTitle"
        :description="heroDescription"
        :badge="heroBadge"
        gradient="from-emerald-50 to-white"
        textColor="text-emerald-600 dark:text-emerald-400"
        badgeColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" />

      <CareAccordion v-if="machine" class="mt-6" :skotsel="machine.skotsel" />

      <CareManualLink
        v-if="machine"
        class="mt-6"
        :manual-url="machine.manualUrl" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";
import HomeMachineSwitcher from "~/components/home/MachineSwitcher.vue";

const { machine } = useSelectedMachine();

const machineType = computed(() => machine.value?.type ?? "washer");

const heroTitle = computed(() =>
  machineType.value === "dryer"
    ? "Skötsel för din torktumlare"
    : "Skötsel för din tvättmaskin"
);

const heroDescription = computed(() =>
  machineType.value === "dryer"
    ? "Här ser du hur du rengör och underhåller din torktumlare för bästa resultat och längre livslängd."
    : "Här ser du hur du rengör och underhåller din tvättmaskin för bästa resultat och längre livslängd."
);

const heroBadge = computed(() =>
  machineType.value === "dryer" ? "Torktumlare" : "Tvättmaskin"
);

useHead({
  title: computed(
    () =>
      `${machineType.value === "dryer" ? "Skötsel torktumlare" : "Skötsel tvättmaskin"} | WashMate`
  ),
  meta: [
    {
      name: "description",
      content:
        "Så rengör och underhåller du din maskin för bästa resultat och längre livslängd."
    }
  ]
});
</script>
