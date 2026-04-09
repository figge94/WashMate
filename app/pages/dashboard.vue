<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />

      <HomeHero
        v-if="machine"
        :produkt="machine.produkt"
        :machine-id="machine.id" />
      <HomeQuickLinks v-if="machine" class="mt-6" :machine-id="machine.id" />
      <HomeCarePreview
        v-if="machine"
        class="mt-6"
        :skotsel="machine.skotsel"
        :machine-id="machine.id" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

useHead({
  title: "Dashboard | WashMate",
  meta: [
    {
      name: "description",
      content:
        "Smart tvättguide för att välja program, förstå knappar och få hjälp med skötsel och felsökning."
    }
  ]
});
</script>
