import { ref, onMounted, watch } from "vue";

const currentTheme = ref(localStorage.getItem("theme") || "dark");

const themeIcons = {
  system: "system",
  dark: "dark",
  light: "light",
};
const getThemeIcon = (theme: string) => `/svg/${themeIcons[theme as keyof typeof themeIcons]}.svg`;

const themeIcon = ref(getThemeIcon(currentTheme.value));

export const useTheme = () => {
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); 
    currentTheme.value = theme; 

    if (theme === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    document.documentElement.setAttribute("theme", theme);

    themeIcon.value = getThemeIcon(theme);
  };

  onMounted(() => applyTheme(currentTheme.value));

  watch(currentTheme, (newTheme) => {
    themeIcon.value = getThemeIcon(newTheme);
  });

  return {
    currentTheme: currentTheme,
    themeIcon: themeIcon,
    setTheme: applyTheme,
  };
};

export default useTheme;