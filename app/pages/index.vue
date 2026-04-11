<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <div
        class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Översikt
        </p>

        <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tvätt & maskinguide
        </h1>

        <p
          class="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
          Här hittar du dina maskiner samt guider för tvätt och skötsel.
        </p>
      </div>

      <div class="mt-8">
        <div class="mb-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Maskiner
          </p>
          <h2 class="mt-1 text-2xl font-semibold tracking-tight">
            Mina maskiner
          </h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <MachineCard
            v-for="machine in machines"
            :key="machine.type"
            :machine="machine" />
        </div>
      </div>

      <div class="mt-8">
        <div class="mb-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Guider
          </p>
          <h2 class="mt-1 text-2xl font-semibold tracking-tight">Tvätthjälp</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            to="/tvattsymboler"
            class="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <p
              class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Guide
            </p>

            <h3 class="mt-3 text-xl font-semibold tracking-tight">
              Tvättsymboler
            </h3>

            <p
              class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Se vad symbolerna på tvättlappen betyder, till exempel 30°, 40°,
              60°, strykning, torktumling och kemtvätt.
            </p>

            <p class="mt-4 text-sm font-medium text-slate-900 dark:text-white">
              Öppna guide →
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { machines } from "~/data/machines";

useHead({
  title: "WashMate",
  meta: [
    {
      name: "description",
      content: "Översikt över maskiner i hemmet och hjälp med tvättsymboler."
    }
  ]
});
</script>
