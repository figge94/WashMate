<template>
  <div>
    <h3 class="text-base font-semibold">{{ title }}</h3>

    <p
      v-if="kommentar"
      class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
      {{ kommentar }}
    </p>

    <div v-if="rows.length" class="mt-4 grid gap-3 sm:hidden">
      <div
        v-for="item in rows"
        :key="item.key"
        class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
        <p class="font-semibold text-slate-900 dark:text-slate-100">
          {{ item.program }}
        </p>

        <div class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p v-if="item.last">
            <span class="font-medium text-slate-900 dark:text-slate-100">
              Last:
            </span>
            {{ item.last }}
          </p>

          <p v-if="item.centrifugering">
            <span class="font-medium text-slate-900 dark:text-slate-100">
              Centrifugering / restfukt:
            </span>
            {{ item.centrifugering }}
          </p>

          <p v-if="item.energiKwh != null">
            <span class="font-medium text-slate-900 dark:text-slate-100">
              Energi:
            </span>
            {{ item.energiKwh }} kWh
          </p>

          <p v-if="item.tidMinuter != null">
            <span class="font-medium text-slate-900 dark:text-slate-100">
              Tid:
            </span>
            {{ item.tidMinuter }} min
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="rows.length"
      class="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 sm:block">
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th class="px-4 py-3 text-left">Program</th>
              <th class="px-4 py-3 text-left">Last</th>
              <th v-if="hasCentrifugering" class="px-4 py-3 text-left">
                Centrifugering / restfukt
              </th>
              <th class="px-4 py-3 text-left">Energi</th>
              <th class="px-4 py-3 text-left">Tid</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="item in rows"
              :key="item.key"
              class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ item.program }}</td>
              <td class="px-4 py-3">{{ item.last || "—" }}</td>
              <td v-if="hasCentrifugering" class="px-4 py-3">
                {{ item.centrifugering || "—" }}
              </td>
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
import { computed } from "vue";
import type { StandardprogramEnergi, TorkProgramData } from "~/types/machine";

const props = defineProps<{
  title?: string;
  kommentar?: string;
  standardprogram?: StandardprogramEnergi[];
  torkdata?: TorkProgramData[];
}>();

const rows = computed(() => {
  if (props.torkdata?.length) {
    return props.torkdata.map((item) => ({
      key: `${item.program}-${item.last}-${item.centrifugering}`,
      program: item.program,
      last: item.last,
      centrifugering: item.centrifugering,
      energiKwh: item.energiKwh,
      tidMinuter: item.torktidMin
    }));
  }

  return (props.standardprogram ?? []).map((item) => ({
    key: `${item.namn}-${item.last}`,
    program: item.namn,
    last: item.last,
    centrifugering: undefined,
    energiKwh: item.energiKwh,
    tidMinuter: item.tidMinuter
  }));
});

const hasCentrifugering = computed(() =>
  rows.value.some((item) => !!item.centrifugering)
);

const title = computed(() => props.title ?? "Standardprogram");
</script>
