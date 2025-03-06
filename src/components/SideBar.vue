<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
  isMenuOpen: Boolean,
});
const emit = defineEmits(["update:isMenuOpen"]);

const isOpenMenu = ref(props.isMenuOpen);

// Déclaration du tableau de liens
const links = [
  { to: "/", icon: "/svg/home.svg", label: "Home" },
  { to: "/second_page", icon: "/svg/file.svg", label: "Second Page" },
];

const toggleIcon = computed(() =>
  isOpenMenu.value ? "/svg/right.svg" : "/svg/left.svg"
);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
  emit("update:isMenuOpen", isOpenMenu.value);
};

watch(
  () => props.isMenuOpen,
  (newVal) => {
    isOpenMenu.value = newVal;
  }
);
</script>

<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 lg:left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
    :class="isOpenMenu ? 'w-24' : 'w-64'"
  >
    <div class="h-full pb-4 overflow-y-auto">
      <div class="py-5 px-5 flex items-center justify-between">
        <router-link to="/" class="flex items-center">
          <img
            src="/svg/logo.svg"
            class="me-3 w-9 h-5"
            alt="materialize Logo"
          />
          <span
            v-if="!isOpenMenu"
            class="self-center font-semibold capitalize text-xl whitespace-nowrap"
            >Materialize</span
          >
        </router-link>
        <button @click="toggleMenu">
          <img :src="toggleIcon" alt="toggleIcon" class="icon w-8 h-8" />
        </button>
      </div>
      <ul class="px-3 font-medium">
        <li v-for="(link, index) in links" :key="index" class="mb-2">
          <router-link
            type="button"
            :to="link.to"
            :class="[!isMenuOpen, 'justify-center']"
            class="flex justify-start items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 hover:dark:bg-secondary group"
            active-class="bg-outline-tertiary hover:bg-outline-tertiary text-white"
          >
            <img :src="link.icon" class="icon h-6" :alt="link.label" />
            <span v-if="!isOpenMenu" class="flex-1 ms-3 text-base whitespace-nowrap">
              {{ link.label }}
            </span>
          </router-link>
        </li>
        <!-- <li class="mb-2">
          <router-link
            type="button"
            to="/"
            :class="[!isMenuOpen, 'justify-center']"
            class="flex justify-start items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 hover:dark:bg-secondary group"
            active-class="bg-outline-tertiary hover:bg-outline-tertiary text-white"
          >
            <img src="/svg/home.svg" class="icon h-6" alt="home" />
            <span v-if="!isOpenMenu" class="flex-1 ms-3 text-base whitespace-nowrap">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            type="button"
            :class="[!isMenuOpen, 'justify-center']"
            to="/second_page"
            class="flex justify-start items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 hover:dark:bg-secondary group"
            active-class="bg-outline-tertiary hover:bg-outline-tertiary text-white"
          >
            <img src="/svg/file.svg" class="icon h-6" alt="file" />
            <span
              v-if="!isOpenMenu"
              class="flex-1 ms-3 text-base whitespace-nowrap"
              >Second page</span
            >
          </router-link>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<style scoped>
</style>