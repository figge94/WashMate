<template>
  <div>
    <h3 class="text-base font-semibold">Standardprogram (energietikett)</h3>

    <p
      v-if="kommentar"
      class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
      {{ kommentar }}
    </p>

    <div v-if="standardprogram.length" class="mt-4 grid gap-3 sm:hidden">
      <div
        v-for="item in standardprogram"
        :key="`${item.namn}-${item.last}`"
        class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
        <p class="font-semibold text-slate-900 dark:text-slate-100">
          {{ item.namn }}
        </p>

        <div class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p v-if="item.last">
            <span class="font-medium text-slate-900 dark:text-slate-100"
              >Last:</span
            >
            {{ item.last }}
          </p>
          <p v-if="item.energiKwh != null">
            <span class="font-medium text-slate-900 dark:text-slate-100"
              >Energi:</span
            >
            {{ item.energiKwh }} kWh
          </p>
          <p v-if="item.tidMinuter != null">
            <span class="font-medium text-slate-900 dark:text-slate-100"
              >Tid:</span
            >
            {{ item.tidMinuter }} min
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="standardprogram.length"
      class="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 sm:block">
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th class="px-4 py-3 text-left">Program</th>
              <th class="px-4 py-3 text-left">Last</th>
              <th class="px-4 py-3 text-left">Energi</th>
              <th class="px-4 py-3 text-left">Tid</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="item in standardprogram"
              :key="`${item.namn}-${item.last}`"
              class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ item.namn }}</td>
              <td class="px-4 py-3">{{ item.last || "—" }}</td>
              <td class="px-4 py-3">
                {{ item.energiKwh != null ? `${item.energiKwh} kWh` : "—" }}
              </td>
              <td class="px-4 py-3">
                {{ item.tidMinuter != null ? `${item.tidMinuter} min` : "—" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StandardprogramEnergi } from "~/types/machine";

defineProps<{
  kommentar?: string;
  standardprogram: StandardprogramEnergi[];
}>();
</script>
