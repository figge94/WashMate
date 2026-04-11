<template>
  <NuxtLink
    :to="to"
    class="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: any;
}>();
</script>
