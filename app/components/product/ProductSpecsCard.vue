<template>
  <section
    v-if="items.length || $slots.default"
    class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-lg font-semibold tracking-tight">
      {{ title }}
    </h2>

    <div v-if="items.length" :class="gridClass" class="mt-6 grid gap-4">
      <div
        v-for="item in items"
        :key="item.key"
        class="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        <p
          class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {{ item.label }}
        </p>

        <p class="mt-2 font-semibold text-slate-900 dark:text-slate-100">
          {{ item.value }}
        </p>
      </div>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProductSpecItem } from "~/types/specs";

const props = withDefaults(
  defineProps<{
    title: string;
    items: ProductSpecItem[];
    columns?: 2 | 3 | 4;
  }>(),
  {
    columns: 2
  }
);

const gridClass = computed(() => {
  if (props.columns === 4) return "sm:grid-cols-2 lg:grid-cols-4";
  if (props.columns === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2";
});
</script>
