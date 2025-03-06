import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SecondPage from "@/views/SecondPage.vue";
import useAuth from "@/hooks/useAuth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/second_page",
      name: "second_page",
      component: SecondPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Auth/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Auth/Register.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
