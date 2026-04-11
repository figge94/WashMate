<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <HomeMachineSwitcher />

      <BaseHero
        v-if="machine"
        label="Produktinformation"
        :title="heroTitle"
        :description="heroDescription"
        :badge="heroBadge"
        gradient="from-violet-50 to-white"
        textColor="text-violet-600 dark:text-violet-400"
        badgeColor="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" />

      <div v-if="machine" class="mt-6 grid gap-4 sm:grid-cols-2">
        <ProductGeneralCard :produkt="machine.produkt" />
        <ProductPerformanceCard
          :produkt="machine.produkt"
          :energidata="machine.energidata"
          :type="machine.type" />
      </div>

      <ProductDimensionsCard
        v-if="machine"
        class="mt-4"
        :dimensioner="machine.produkt.dimensioner" />

      <div v-if="machine" class="mt-4 grid gap-4 sm:grid-cols-2">
        <ProductElectricalCard :el="machine.produkt.el" />
        <ProductInstallationCard
          :vatten="machine.produkt.vatten"
          :kapslingsklass="machine.produkt.kapslingsklass"
          :type="machine.type" />
      </div>

      <ProductEnergyCard
        v-if="machine"
        class="mt-4"
        :energidata="machine.energidata"
        :type="machine.type" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";
import HomeMachineSwitcher from "~/components/home/MachineSwitcher.vue";

const { machine } = useSelectedMachine();

const machineLabel = computed(() => {
  if (!machine.value) return "maskinen";
  return machine.value.type === "washer" ? "tvättmaskinen" : "torktumlaren";
});

const heroTitle = computed(() => {
  const produkt = machine.value?.produkt;
  if (!produkt) return "Produkt";

  const { marke, modell } = produkt;
  if (marke && modell) return `${marke} ${modell}`;
  if (marke) return marke;
  if (modell) return modell;
  return "Produkt";
});

const heroDescription = computed(() => {
  if (!machine.value)
    return "Här hittar du teknisk information och specifikationer.";

  return machine.value.type === "washer"
    ? "Här hittar du teknisk information och specifikationer för din tvättmaskin."
    : "Här hittar du teknisk information och specifikationer för din torktumlare.";
});

const heroBadge = computed(() =>
  machine.value?.type === "dryer" ? "Torktumlare" : "Tvättmaskin"
);

useHead({
  title: computed(() => "Produktinformation | WashMate"),
  meta: [
    {
      name: "description",
      content: computed(
        () =>
          `Mått, kapacitet och teknisk information om ${machineLabel.value}.`
      )
    }
  ]
});
</script>
