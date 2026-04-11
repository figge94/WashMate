<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <HomeMachineSwitcher />

      <BaseHero
        v-if="machine"
        label="Felsökning"
        :title="heroTitle"
        :description="heroDescription"
        :badge="heroBadge"
        gradient="from-amber-50 to-white"
        textColor="text-amber-600 dark:text-amber-400"
        badgeColor="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" />

      <div v-if="machine" class="mt-6">
        <TroubleshootingAccordion :felsokning="machine.felsokning" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TroubleshootingAccordion from "~/components/troubleshooting/TroubleshootingAccordion.vue";
import HomeMachineSwitcher from "~/components/home/MachineSwitcher.vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

const machineType = computed(() => machine.value?.type ?? "washer");

const heroTitle = computed(() =>
  machineType.value === "dryer"
    ? "Problem med torktumlaren"
    : "Problem med tvättmaskinen"
);

const heroDescription = computed(() =>
  machineType.value === "dryer"
    ? "Här hittar du lösningar på vanliga problem med din torktumlare."
    : "Här hittar du lösningar på vanliga problem med din tvättmaskin."
);

const heroBadge = computed(() =>
  machineType.value === "dryer" ? "Torktumlare" : "Tvättmaskin"
);

useHead({
  title: "Felsökning | WashMate",
  meta: [
    {
      name: "description",
      content: "Hjälp med vanliga problem och lösningar för maskinen."
    }
  ]
});
</script>
