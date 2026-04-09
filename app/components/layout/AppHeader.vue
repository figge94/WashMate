<template>
  <header
    class="sticky top-0 z-50 mb-5 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink
        :to="{ path: '/', query: { id: machine?.id } }"
        class="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        @click="closeMobileMenu">
        WashMate
      </NuxtLink>

      <div class="flex items-center gap-3">
        <AppNavLinks :links="links" />

        <AppThemeToggle :is-dark="isDark" @toggle="toggleDark" />

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

    <AppMobileMenu
      :open="isMobileMenuOpen"
      :is-dark="isDark"
      :links="links"
      @close="closeMobileMenu"
      @toggle-theme="toggleDark" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNavigation } from "~/composables/useNavigation";
import { useTheme } from "~/composables/useTheme";
import { useSelectedMachine } from "~/composables/useSelectedMachine";

const { machine } = useSelectedMachine();

const { links } = useNavigation();
const { isDark, toggleDark } = useTheme();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
