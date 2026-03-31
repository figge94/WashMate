import { onMounted, ref } from "vue";

export const useTheme = () => {
  const isDark = ref(false);

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

  return {
    isDark,
    toggleDark
  };
};
