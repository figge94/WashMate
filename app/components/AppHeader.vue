<template>
  <header
    class="sticky top-0 z-50 border-b mb-5 border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink
        to="/"
        class="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        @click="closeMobileMenu">
        WashMate
      </NuxtLink>

      <div class="flex items-center gap-3">
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

        <button
          type="button"
          @click="toggleDark"
          class="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
          {{ isDark ? "Ljust" : "Mörkt" }}
        </button>

        <button
          type="button"
          @click="toggleMobileMenu"
          class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Öppna meny">
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div
        v-if="isMobileMenuOpen"
        class="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95">
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            active-class="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
            @click="closeMobileMenu">
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="mt-4">
          <button
            type="button"
            @click="toggleDark"
            class="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            Växla till {{ isDark ? "ljust läge" : "mörkt läge" }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isDark = ref(false);
const isMobileMenuOpen = ref(false);

const links = [
  { to: "/", label: "Hem" },
  { to: "/tvatthjalp", label: "Tvätthjälp" },
  { to: "/program", label: "Program" },
  { to: "/skotsel", label: "Skötsel" },
  { to: "/produktinformation", label: "Produktinfo" },
  { to: "/felsokning", label: "Felsökning" }
];

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});

const toggleDark = () => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
