<template>
  <BaseCard :padded="false">
    <div class="p-6 sm:p-8">
      <div v-if="items.length" class="space-y-3">
        <details
          v-for="item in items"
          :key="item.titel"
          class="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition dark:border-slate-700 dark:bg-slate-800/60">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 p-4">
            <div>
              <span class="font-semibold text-slate-900 dark:text-slate-100">
                {{ item.titel }}
              </span>

              <p
                v-if="item.beskrivning?.length"
                class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {{ item.beskrivning.length }} tips
                <span v-if="item.symboler?.length">
                  · {{ item.symboler.length }} symboler
                </span>
              </p>
            </div>

            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 transition group-open:rotate-180 dark:bg-slate-900 dark:text-slate-400">
              ▼
            </span>
          </summary>

          <div class="border-t border-slate-200 p-4 dark:border-slate-700">
            <ul
              v-if="item.beskrivning?.length"
              class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li
                v-for="text in item.beskrivning"
                :key="text"
                class="flex items-start gap-3 rounded-xl bg-white/70 px-3 py-2 dark:bg-slate-900/50">
                <span
                  class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                <span>{{ text }}</span>
              </li>
            </ul>

            <div v-if="item.symboler?.length" class="mt-4">
              <h4
                class="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Torksymboler
              </h4>

              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="symbol in item.symboler"
                  :key="symbol.beskrivning"
                  class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/60">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                    {{ symbolLabel(symbol.symbol) }}
                  </div>

                  <div>
                    <p
                      class="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {{ symbolTitle(symbol.symbol) }}
                    </p>
                    <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {{ symbol.beskrivning }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>

      <p v-else class="text-sm text-slate-600 dark:text-slate-300">
        Inga tips finns ännu.
      </p>
    </div>
  </BaseCard>
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

function symbolLabel(symbol: string) {
  switch (symbol) {
    case "torktumling":
      return "◯";
    case "torktumling-hog-varme":
    case "hög":
      return "◯◯";
    case "torktumling-lag-varme":
    case "låg":
      return "◯·";
    case "ej-torktumling":
    case "ej":
      return "✕";
    default:
      return "•";
  }
}

function symbolTitle(symbol: string) {
  switch (symbol) {
    case "torktumling":
      return "Torktumling";
    case "torktumling-hog-varme":
    case "hög":
      return "Hög temperatur";
    case "torktumling-lag-varme":
    case "låg":
      return "Låg temperatur";
    case "ej-torktumling":
    case "ej":
      return "Ej torktumling";
    default:
      return "Symbol";
  }
}
</script>
