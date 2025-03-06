<script setup lang="ts">
import useTheme from "@/hooks/useTheme";

const emit = defineEmits(["closeMenu"]);
const theme = useTheme();
const changeTheme = (value: string) => {
  theme.setTheme(value);
  emit("closeMenu");  
};
</script>

<template>
  <div
    class="my-4 text-base list-none bg-white divide-y w-40 divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
  >
  <ul class="py-1" role="none">
  <li>
    <button
      id="system"
      @click="changeTheme('system')"
      :class="['flex items-center w-full px-4 py-2 font-normal text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white', 
             { 'bg-gray-100 dark:bg-[#383c6a]': theme.currentTheme.value === 'system' }]"
      role="menuitem"
    >
      <img src="/svg/system.svg" alt="system" :class="['icon w-6 h-6', {'iconTheme' : theme.currentTheme.value === 'system'}]" />
      <span :class="['ml-2 text-base dark:text-outline-secondary', 
             { 'text-link dark:text-link': theme.currentTheme.value === 'system' }]">System</span>
    </button>
  </li>
  <li>
    <button
      id="light"
      @click="changeTheme('light')"
      :class="['flex items-center w-full px-4 py-2 font-normal text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white', 
             { 'bg-gray-100 dark:bg-[#383c6a]': theme.currentTheme.value === 'light' }]"
      role="menuitem"
    >
    <img src="/svg/light.svg" alt="light" :class="['w-6 h-6', {'iconTheme' : theme.currentTheme.value === 'light'}]" />
    <span 
            :class="['ml-2 text-base dark:text-outline-secondary', 
             { 'text-link dark:text-link': theme.currentTheme.value === 'light' }]"
      >Light</span>
    </button>
  </li>
  <li>
    <button
      id="dark"
      @click="changeTheme('dark')"
      :class="['flex items-center w-full px-4 py-2 font-normal text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white', 
             { 'bg-gray-100 dark:bg-[#383c6a]': theme.currentTheme.value === 'dark' }]"
      role="menuitem"
    >
      <img src="/svg/dark.svg" alt="dark" :class="['w-6 h-6', {'iconTheme' : theme.currentTheme.value === 'dark'}]" />
      <span :class="['ml-2 text-base', 
             { 'text-link dark:text-link': theme.currentTheme.value === 'dark' }]">Dark</span>
    </button>
  </li>
</ul>

  </div>
</template>
<style>
.iconTheme{
  filter: brightness(0) saturate(100%) invert(54%) sepia(58%) saturate(6957%) hue-rotate(224deg) brightness(102%) contrast(91%);
}
</style>
