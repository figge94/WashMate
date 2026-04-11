<template>
  <BaseCard>
    <p
      class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      Manual
    </p>

    <h2 class="mt-2 text-lg font-semibold tracking-tight">Bruksanvisning</h2>

    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
      Öppna manualen för mer detaljerad information om funktioner, program och
      underhåll.
    </p>

    <a
      :href="manualUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-5 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
      Öppna manual (PDF)
    </a>
  </BaseCard>
</template>

<script setup lang="ts">
defineProps<{
  manualUrl: string;
}>();
</script>
