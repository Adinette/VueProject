<script setup lang="ts">
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import useAuth from "@/hooks/useAuth";

const isMenuOpen = ref(false);

const auth = useAuth();
</script>

<template>
  <div>
    <SideBar
      :isMenuOpen="isMenuOpen"
      @update:isMenuOpen="isMenuOpen = $event"
    />
    <div
      class="lg:pr-4 pb-4 transition-all duration-300 h-dvh"
      :class="isMenuOpen ? 'sm:ml-16' : 'sm:ml-64'"
    >
      <div class="h-full">
        <NavBar :isAuthenticated="auth.isAuthenticated" />
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>
