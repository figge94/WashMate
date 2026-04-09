<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />

      <ProductHero
        v-if="machine"
        :produkt="machine.produkt"
        :type="machine.type"
        :machine-id="machine.id" />

      <div v-if="machine" class="mt-6 grid gap-4 sm:grid-cols-2">
        <ProductGeneralCard :produkt="machine.produkt" />
        <ProductPerformanceCard
          :produkt="machine.produkt"
          :energidata="machine.energidata" />
      </div>

      <ProductDimensionsCard
        v-if="machine"
        class="mt-4"
        :dimensioner="machine.produkt.dimensioner" />

      <div v-if="machine" class="mt-4 grid gap-4 sm:grid-cols-2">
        <ProductElectricalCard :el="machine.produkt.el" />
        <ProductInstallationCard
          :vatten="machine.produkt.vatten"
          :kapslingsklass="machine.produkt.kapslingsklass" />
      </div>

      <ProductEnergyCard
        v-if="machine"
        class="mt-4"
        :energidata="machine.energidata" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

const machineLabel = computed(() => {
  if (!machine.value) return "maskinen";
  return machine.value.type === "washer" ? "tvättmaskinen" : "torktumlaren";
});

useHead({
  title: "Produktinformation | WashMate",
  meta: [
    {
      name: "description",
      content: `Mått, kapacitet och teknisk information om ${machineLabel.value}.`
    }
  ]
});
</script>
