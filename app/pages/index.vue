<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <HomeHero :produkt="machine.produkt" />
      <HomeQuickLinks class="mt-6" />
      <HomeCarePreview class="mt-6" :skotsel="machine.skotsel" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useMachine } from "~/composables/useMachine";

const { machine } = useMachine();

useHead({
  title: "WashMate",
  meta: [
    {
      name: "description",
      content:
        "Smart tvättguide för att välja program, förstå knappar och få hjälp med skötsel och felsökning."
    }
  ]
});
</script>
