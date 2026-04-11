<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <BaseHero
        label="Guide"
        title="Tvättsymboler"
        description="Här ser du vad symbolerna på tvättlappen betyder, till exempel 30, 40, 60 grader, om plagget får strykas, torktumlas eller kemtvättas."
        badge="Tvättråd"
        gradient="from-rose-50 to-white"
        textColor="text-rose-600 dark:text-rose-400"
        badgeColor="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" />

      <div class="mt-6 flex flex-wrap gap-3">
        <button
          v-for="kategori in kategorier"
          :key="kategori.key"
          type="button"
          class="rounded-full border px-4 py-2 text-sm font-medium transition"
          :class="
            activeKategori === kategori.key
              ? 'border-rose-600 bg-rose-600 text-white dark:border-rose-400 dark:bg-rose-400 dark:text-slate-950'
              : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500'
          "
          @click="activeKategori = kategori.key">
          {{ kategori.label }}
        </button>
      </div>

      <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in filteredSymbols"
          :key="item.id"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 dark:bg-slate-800">
            <img
              :src="item.icon"
              :alt="item.namn"
              class="h-10 w-10 object-contain" />
          </div>

          <p
            class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-rose-600 dark:text-rose-400">
            {{ kategoriLabel(item.kategori) }}
          </p>

          <h2 class="mt-2 text-xl font-semibold tracking-tight">
            {{ item.namn }}
          </h2>

          <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">
            {{ item.beskrivning }}
          </p>

          <p class="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {{ item.rad }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  tvattSymboler,
  tvattSymbolKategoriLabel,
  type TvattSymbolKategori
} from "~/data/tvattsymboler";

type FilterKey = "alla" | TvattSymbolKategori;

const activeKategori = ref<FilterKey>("alla");

const kategorier = [
  { key: "alla" as const, label: "Alla" },
  { key: "tvatt" as const, label: "Tvätt" },
  { key: "blekning" as const, label: "Blekning" },
  { key: "torkning" as const, label: "Torkning" },
  { key: "strykning" as const, label: "Strykning" },
  { key: "kemtvatt" as const, label: "Kemtvätt" }
];

const filteredSymbols = computed(() => {
  if (activeKategori.value === "alla") {
    return tvattSymboler;
  }

  return tvattSymboler.filter((item) => item.kategori === activeKategori.value);
});

function kategoriLabel(kategori: TvattSymbolKategori) {
  return tvattSymbolKategoriLabel[kategori];
}

useSeoMeta({
  title: "Tvättsymboler | WashMate",
  description:
    "Förstå tvättsymboler för tvätt, torkning, strykning, blekning och kemtvätt."
});
</script>
