<template>
  <div
    class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">El</h2>

    <div class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Spänning:
        </span>
        {{ el.spanningV }} V
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Effekt:
        </span>
        {{ el.effektW }} W
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Säkring:
        </span>
        {{ el.sakringA }} A
      </p>
      <p>
        <span class="font-medium text-slate-900 dark:text-slate-100">
          Frekvens:
        </span>
        {{ el.frekvensHz }} Hz
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProduktEl } from "~/types/machine";

defineProps<{
  el: ProduktEl;
}>();
</script>
