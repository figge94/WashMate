<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <MachineSwitcher />

      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Felsökning
        </p>

        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Vanliga problem
        </h1>

        <p
          class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Här hittar du lösningar på vanliga problem med maskinen.
        </p>
      </div>

      <div v-if="machine" class="mt-6">
        <TroubleshootingAccordion :felsokning="machine.felsokning" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import TroubleshootingAccordion from "~/components/troubleshooting/TroubleshootingAccordion.vue";
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

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
