<template>
  <button
    type="button"
    @click="$emit('toggle')"
    class="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
    {{ isDark ? "Ljust" : "Mörkt" }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean;
}>();

defineEmits<{
  (e: "toggle"): void;
}>();
</script>
