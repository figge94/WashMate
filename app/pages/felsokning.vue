<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
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
          Här hittar du lösningar på vanliga problem med tvättmaskinen.
        </p>
      </div>

      <div v-if="machine" class="mt-6 space-y-4">
        <article
          v-for="item in machine.felsokning"
          :key="item.problem"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-lg font-semibold tracking-tight">
            {{ item.problem }}
          </h2>

          <ul class="mt-4 space-y-2">
            <li
              v-for="losning in item.losningar"
              :key="losning"
              class="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              <span>{{ losning }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

useHead({
  title: "Felsökning | WashMate",
  meta: [
    {
      name: "description",
      content: "Hjälp med vanliga problem och lösningar för tvättmaskinen."
    }
  ]
});
</script>
