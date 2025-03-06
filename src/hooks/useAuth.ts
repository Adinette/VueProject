import { computed, watch } from "vue";
import { useRouter } from "vue-router";

export const useAuth = () => {
  const router = useRouter();

  const isAuthenticated = computed(() => {
    const token = localStorage.getItem("authToken");
    return !!token;
  });

  watch(isAuthenticated, (newValue) => {
    if (!newValue) {
      router.push("/login");
    }
  });

  return { isAuthenticated: isAuthenticated.value };
};

export default useAuth;
