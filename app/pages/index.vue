<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {{ machine.produkt.marke }} {{ machine.produkt.modell }}
        </p>

        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Tvättguide
        </h1>

        <p
          class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Enkel guide för program, produktinformation, skötsel och felsökning
          för vår tvättmaskin.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/tvatthjalp"
            class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
            Tvätthjälp
          </NuxtLink>

          <NuxtLink
            to="/program"
            class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
            Program
          </NuxtLink>

          <NuxtLink
            to="/felsokning"
            class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
            Felsökning
          </NuxtLink>
        </div>
      </div>

      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <NuxtLink
          to="/program"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p class="text-lg font-semibold">Program</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Se temperatur, max mängd och centrifugering för alla program.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/kontrollpanel"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p class="text-lg font-semibold">Knappar</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Förstå vad varje knapp och statuslampa betyder.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/produktinformation"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
          <p class="text-lg font-semibold">Produktinformation</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Se modell, kapacitet och annan viktig information.
          </p>
        </NuxtLink>
      </div>

      <section
        class="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Skötsel
            </p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight">
              Håll maskinen ren och fräsch
            </h2>
          </div>

          <NuxtLink
            to="/skotsel"
            class="hidden rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            Se allt
          </NuxtLink>
        </div>

        <ul class="mt-6 grid gap-4">
          <li
            v-for="item in machine.skotsel"
            :key="item.titel"
            class="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <p class="font-semibold text-slate-900 dark:text-slate-100">
              {{ item.titel }}
            </p>

            <ul
              class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li v-for="text in item.innehall" :key="text">• {{ text }}</li>
            </ul>
          </li>
        </ul>
      </section>
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
