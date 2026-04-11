<template>
  <article
    :class="[
      'rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900',
      padded ? 'p-6 sm:p-8' : '',
      clickable ? 'transition hover:-translate-y-0.5 hover:shadow-md' : ''
    ]">
    <!-- Header -->
    <div v-if="title || description || $slots.header">
      <slot name="header">
        <h2 v-if="title" class="text-xl font-semibold tracking-tight">
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {{ description }}
        </p>
      </slot>
    </div>

    <!-- Content -->
    <div :class="title || description || $slots.header ? 'mt-5' : ''">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    padded?: boolean;
    clickable?: boolean;
  }>(),
  {
    padded: true,
    clickable: false
  }
);
</script>
