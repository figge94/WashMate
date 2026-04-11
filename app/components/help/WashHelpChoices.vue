<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <BaseCard
      v-for="choice in choices"
      :key="choice.id"
      :clickable="true"
      :padded="false"
      @click="$emit('select', choice.id)"
      class="cursor-pointer"
      :class="
        selected === choice.id
          ? 'border-slate-900 bg-slate-900 text-black dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900'
          : ''
      ">
      <div
        v-if="selected === choice.id"
        class="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
        ✓
      </div>

      <div class="p-5">
        <p class="text-base font-semibold">
          {{ choice.title }}
        </p>

        <p class="mt-2 text-sm leading-6">
          {{ choice.text }}
        </p>
      </div>
    </BaseCard>
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
