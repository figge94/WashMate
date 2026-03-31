<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <!-- Header -->
      <div
        class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Skötsel
        </p>

        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Skötsel och rengöring
        </h1>

        <p
          class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Här är de viktigaste råden för att hålla tvättmaskinen fräsch och
          fungerande.
        </p>
      </div>

      <!-- Lista -->
      <div
        class="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="space-y-3">
          <details
            v-for="item in machine.skotsel"
            :key="item.titel"
            class="group rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4">
              <span class="font-semibold text-slate-900 dark:text-slate-100">
                {{ item.titel }}
              </span>

              <span
                class="text-slate-500 transition group-open:rotate-180 dark:text-slate-400">
                ▼
              </span>
            </summary>

            <ul
              class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li
                v-for="text in item.innehall"
                :key="text"
                class="flex items-start gap-2">
                <span
                  class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                <span>{{ text }}</span>
              </li>
            </ul>
          </details>
        </div>

        <!-- CTA -->
        <div class="mt-6">
          <a
            :href="machine.manualUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
            Öppna manualen
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useMachine } from "~/composables/useMachine";

const { machine } = useMachine();

useHead({
  title: "Skötsel | WashMate",
  meta: [
    {
      name: "description",
      content:
        "Så rengör och underhåller du din tvättmaskin för bästa resultat och längre livslängd."
    }
  ]
});
</script>
