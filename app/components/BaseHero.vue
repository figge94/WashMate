<template>
  <div
    :class="[
      'rounded-3xl border border-slate-200 bg-gradient-to-br p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900 sm:p-8',
      gradient
    ]">
    <p
      :class="['text-sm font-semibold uppercase tracking-[0.18em]', textColor]">
      {{ label }}
    </p>

    <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
      {{ description }}
    </p>

    <div v-if="badge" class="mt-4">
      <span
        :class="[
          'inline-flex rounded-full px-3 py-1 text-xs font-medium',
          badgeColor
        ]">
        {{ badge }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  description?: string;
  badge?: string;
  gradient: string;
  textColor: string;
  badgeColor: string;
}>();
</script>
