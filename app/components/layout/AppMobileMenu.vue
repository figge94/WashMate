<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2">
    <div
      v-if="open"
      class="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95">
      <nav class="flex flex-col gap-2">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          active-class="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
          @click="$emit('close')">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="mt-4">
        <button
          type="button"
          @click="$emit('toggle-theme')"
          class="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
          Växla till {{ isDark ? "ljust läge" : "mörkt läge" }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean;
  isDark: boolean;
  links: readonly { to: string; label: string }[];
}>();

defineEmits<{
  (e: "close"): void;
  (e: "toggle-theme"): void;
}>();
</script>
