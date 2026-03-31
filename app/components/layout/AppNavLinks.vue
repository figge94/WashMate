<template>
  <nav
    class="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-sm backdrop-blur md:flex dark:border-slate-800/80 dark:bg-slate-900/70">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
      active-class="bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: readonly { to: string; label: string }[];
}>();
</script>
