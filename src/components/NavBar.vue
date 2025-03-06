<script setup lang="ts">
import useTheme from "@/hooks/useTheme";
import Profile from "./Profile.vue";
import Theme from "./Theme.vue";
import { ref, onUnmounted, onMounted } from "vue";

const props = defineProps({
  isAuthenticated: Boolean,
});

const isProfileMenuOpen = ref(false);
const isThemeMenuOpen = ref(false);
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const { currentTheme, themeIcon, setTheme } = useTheme();

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

const toggleThemeMenu = () => {
  isThemeMenuOpen.value = !isThemeMenuOpen.value;
  setTheme(currentTheme.value);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { to: "/", icon: "/svg/home.svg", label: "Home" },
  { to: "/second_page", icon: "/svg/file.svg", label: "Second Page" },
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300',
      { 'dark:bg-secondary bg-white': isScrolled },
    ]"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
      <!-- Bouton menu responsive -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        v-if="isMenuOpen"
        id="logo-sidebar"
        class="fixed inset-0 left-64 dark:bg-tertiary bg-outline-secondary top-0 w-64 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
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
                class="self-center font-semibold capitalize text-xl whitespace-nowrap"
                >Materialize</span
              >
            </router-link>
            <button @click="toggleMenu">
              <img src="/svg/close.svg" alt="close" class="icon w-8 h-8" />
            </button>
          </div>
          <ul class="px-3 font-medium">
            <li v-for="(link, index) in links" :key="index" class="mb-2">
              <router-link
                type="button"
                @click="toggleMenu"
                :to="link.to"
                :class="[!isMenuOpen, 'justify-center']"
                class="flex items-center px-3 py-2 mb-1 rounded-lg hover:bg-gray-200 hover:dark:bg-secondary group"
                active-class="bg-outline-tertiary hover:bg-outline-tertiary text-white"
              >
                <img :src="link.icon" class="icon h-6" :alt="link.label" />
                <span class="flex-1 ms-3 text-base whitespace-nowrap">
                  {{ link.label }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black opacity-50 z-30"
        @click="toggleMenu"
      ></div>

      <!-- Conteneur des boutons Profil & Thème -->
      <div
        v-if="props.isAuthenticated"
        class="flex items-center justify-between gap-4 w-full"
      >
        <!-- Thème -->
        <div class="relative">
          <button
            @click="toggleThemeMenu"
            class="p-2 bg-transparent dark:bg-tertiary rounded-full hover:bg-gray-100 dark:hover:bg-[#383c6a]"
          >
            <img class="icon w-5 h-5" :src="themeIcon" alt="theme-icon" />
          </button>
          <Theme
            v-if="isThemeMenuOpen"
            class="absolute left-0 mt-2"
            @closeMenu="isThemeMenuOpen = false"
          />
        </div>
        <!-- Profile -->
        <div class="relative">
          <button
            @click="toggleProfileMenu"
            class="p-2 bg-transparent dark:bg-tertiary rounded-full hover:bg-gray-100 dark:hover:bg-[#383c6a]"
          >
            <img
              class="w-9 h-9 rounded-full relative"
              src="/images/avatar-1.png"
              alt="user photo"
            />
            <span
              class="bottom-1 left-8 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-[#30334e] rounded-full"
            ></span>
          </button>
          <Profile v-if="isProfileMenuOpen" class="absolute right-0 mt-2" />
        </div>
      </div>
    </div>
  </nav>
</template>
