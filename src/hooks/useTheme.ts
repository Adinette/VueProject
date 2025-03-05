import { ref, onMounted } from "vue";

const currentTheme = ref(localStorage.getItem("theme") || "light");

export const useTheme = () => {
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  onMounted(() => applyTheme(currentTheme.value));

  return {
    currentTheme: currentTheme.value,
    setTheme: (theme: string) => {
      console.log(theme, "theme");

      applyTheme(theme);
      localStorage.setItem("theme", theme);
      currentTheme.value = theme;
    },
  };
};
export default useTheme;
