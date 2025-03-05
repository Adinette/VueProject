<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
  isMenuOpen: Boolean,
});
const emit = defineEmits(["update:isMenuOpen"]);

const isOpenMenu = ref(props.isMenuOpen);

const toggleIcon = computed(() =>
  isOpenMenu.value ? "/svg/right.svg" : "/svg/left.svg"
);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
  emit("update:isMenuOpen", isOpenMenu.value);
};

// Watch for changes in props.isMenuOpen to update isOpenMenu
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
          <img :src="toggleIcon" alt="toggleIcon" class="w-8 h-8" />
        </button>
      </div>
      <ul class="px-3 font-medium">
        <li>
          <router-link
            type="button"
            to="/"
            class="flex items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 group"
            active-class="bg-outline-tertiary text-white"
          >
            <img src="/svg/home.svg" class="h-8" alt="materialize Logo" />
            <span v-if="!isOpenMenu" class="ms-3 text-xl">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            type="button"
            to="/second_page"
            class="flex items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 group"
            active-class="bg-outline-tertiary text-white"
          >
            <img src="/svg/file.svg" class="h-8" alt="materialize Logo" />
            <span
              v-if="!isOpenMenu"
              class="flex-1 ms-3 text-xl whitespace-nowrap"
              >Second page</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
