<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <HomeMachineSwitcher />

      <BaseHero
        v-if="machine"
        label="Program"
        :title="heroTitle"
        :description="heroDescription"
        :badge="heroBadge"
        gradient="from-blue-50 to-white"
        textColor="text-blue-600 dark:text-blue-400"
        badgeColor="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" />

      <div v-if="machine" class="mt-6 grid gap-4 lg:grid-cols-2">
        <ProgramCard
          v-for="item in machine.program"
          :key="item.id"
          :program="item"
          :machine-id="machine.id"
          :machine-type="machine.type"
          :programfunktioner="machine.programfunktioner" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";
import HomeMachineSwitcher from "~/components/home/MachineSwitcher.vue";

definePageMeta({
  name: "machine-program-list"
});

const { machine } = useSelectedMachine();

const machineType = computed(() => machine.value?.type ?? "washer");

const heroTitle = computed(() =>
  machineType.value === "dryer" ? "Alla torkprogram" : "Alla tvättprogram"
);

const heroDescription = computed(() =>
  machineType.value === "dryer"
    ? "Här ser du alla torkprogram och vad de används till."
    : "Här ser du alla tvättprogram och vad de används till."
);

const heroBadge = computed(() =>
  machineType.value === "dryer" ? "Torktumlare" : "Tvättmaskin"
);

useHead({
  title: computed(
    () =>
      `${machineType.value === "dryer" ? "Torkprogram" : "Tvättprogram"} | WashMate`
  ),
  meta: [
    {
      name: "description",
      content: "Se alla program och vad de används till för vald maskin."
    }
  ]
});
</script>
