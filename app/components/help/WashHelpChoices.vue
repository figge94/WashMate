<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <button
      v-for="choice in choices"
      :key="choice.id"
      type="button"
      :aria-pressed="selected === choice.id"
      @click="$emit('select', choice.id)"
      class="rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
      :class="
        selected === choice.id
          ? 'border-slate-900 bg-slate-900 text-white shadow-sm dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900'
          : 'border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100'
      ">
      <span
        class="block text-base font-semibold"
        :class="
          selected === choice.id
            ? 'text-white dark:text-slate-900'
            : 'text-slate-900 dark:text-slate-100'
        ">
        {{ choice.title }}
      </span>

      <span
        class="mt-2 block text-sm leading-6"
        :class="
          selected === choice.id
            ? 'text-slate-200 dark:text-slate-700'
            : 'text-slate-600 dark:text-slate-300'
        ">
        {{ choice.text }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { WashChoice } from "~/types/wash-choice";

defineProps<{
  choices: readonly WashChoice[];
  selected: string;
}>();

defineEmits<{
  (e: "select", id: string): void;
}>();
</script>
