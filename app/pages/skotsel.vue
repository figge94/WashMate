<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />
      <CareHero v-if="machine" :machine-type="machine.type" />
      <CareAccordion v-if="machine" class="mt-6" :skotsel="machine.skotsel" />
      <CareManualLink
        v-if="machine"
        class="mt-6"
        :manual-url="machine.manualUrl" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

useHead({
  title: "Skötsel | WashMate",
  meta: [
    {
      name: "description",
      content:
        "Så rengör och underhåller du din maskin för bästa resultat och längre livslängd."
    }
  ]
});
</script>
