<template>
  <div
    class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div v-if="items.length" class="space-y-3">
      <details
        v-for="item in items"
        :key="item.titel"
        class="group rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4">
          <span class="font-semibold text-slate-900 dark:text-slate-100">
            {{ item.titel }}
          </span>

          <span
            class="text-slate-500 transition group-open:rotate-180 dark:text-slate-400">
            ▼
          </span>
        </summary>

        <!-- BESKRIVNING -->
        <ul
          v-if="item.beskrivning?.length"
          class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li
            v-for="text in item.beskrivning"
            :key="text"
            class="flex items-start gap-2">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
            <span>{{ text }}</span>
          </li>
        </ul>

        <!-- SYMBOLER -->
        <div v-if="item.symboler?.length" class="mt-4">
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="px-4 py-2 text-left">Symbol</th>
                  <th class="px-4 py-2 text-left">Beskrivning</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="symbol in item.symboler"
                  :key="symbol.beskrivning"
                  class="border-t border-slate-200 dark:border-slate-700">
                  <td class="px-4 py-2">
                    <!-- placeholder för ikon -->
                    <span class="text-slate-500">■</span>
                  </td>
                  <td class="px-4 py-2">
                    {{ symbol.beskrivning }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </div>

    <p v-else class="text-sm text-slate-600 dark:text-slate-300">
      Inga tips finns ännu.
    </p>
  </div>
</template>

<script setup lang="ts">
type TipsItem = {
  titel: string;
  beskrivning?: string[];
  symboler?: {
    symbol: string;
    beskrivning: string;
  }[];
};

defineProps<{
  items: TipsItem[];
}>();
</script>
