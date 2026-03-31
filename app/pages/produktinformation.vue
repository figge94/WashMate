<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <ProductHero :produkt="machine.produkt" />

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <ProductGeneralCard :produkt="machine.produkt" />
        <ProductPerformanceCard
          :produkt="machine.produkt"
          :energidata="machine.energidata" />
      </div>

      <ProductDimensionsCard
        class="mt-4"
        :dimensioner="machine.produkt.dimensioner" />

      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <ProductElectricalCard :el="machine.produkt.el" />
        <ProductInstallationCard
          :vatten="machine.produkt.vatten"
          :kapslingsklass="machine.produkt.kapslingsklass" />
      </div>

      <ProductEnergyCard class="mt-4" :energidata="machine.energidata" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useMachine } from "~/composables/useMachine";

const { machine } = useMachine();

useHead({
  title: "Produktinformation | WashMate",
  meta: [
    {
      name: "description",
      content: "Mått, kapacitet och teknisk information om tvättmaskinen."
    }
  ]
});
</script>
