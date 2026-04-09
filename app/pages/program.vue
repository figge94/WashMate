<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />

      <ProgramsHero />

      <div v-if="machine" class="mt-6 grid gap-4 lg:grid-cols-2">
        <ProgramCard
          v-for="item in machine.program"
          :key="item.namn"
          :program="item"
          :programfunktioner="machine.programfunktioner" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

useHead({
  title: "Program | WashMate",
  meta: [
    {
      name: "description",
      content: "Se alla program och vad de används till för vald maskin."
    }
  ]
});
</script>
