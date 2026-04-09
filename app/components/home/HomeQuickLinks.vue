<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <NuxtLink
      :to="{ path: '/tvatthjalp', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Tvätthjälp</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Få hjälp att välja rätt program för vald maskin.
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/program', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Program</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Se program och viktiga inställningar för vald maskin.
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/produktinformation', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Produktinformation</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Se modell, kapacitet, mått och annan viktig information.
      </p>
    </NuxtLink>

    <NuxtLink
      :to="{ path: '/felsokning', query: { id: machineId } }"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p class="text-lg font-semibold">Felsökning</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Vanliga problem och enkla lösningar för vald maskin.
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  machineId: string;
}>();
</script>
