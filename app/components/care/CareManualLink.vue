<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <a
      :href="manualUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
      Öppna manualen (PDF)
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  manualUrl: string;
}>();
</script>
