<script setup lang="ts">
import useTheme from "@/hooks/useTheme";

const theme = useTheme();
const changeTheme = (value: string) => {
  theme.setTheme(value);
};
</script>

<template>
  <div
    class="my-4 text-base list-none bg-white divide-y w-40 divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul class="py-1" role="none">
      <li>
        <button
          @click="changeTheme('systeme')"
          class="flex items-center w-full px-4 py-2 text-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/laptop.svg" alt="laptop" class="w-8 h-8" />
          <span class="ml-2">System</span>
        </button>
      </li>
      <li>
        <button
          @click="changeTheme('light')"
          class="flex items-center w-full px-4 py-2 text-xl font-medium dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/light.svg" alt="light" class="w-8 h-8" />
          <span class="ml-2">Light</span>
        </button>
      </li>
      <li>
        <button
          @click="changeTheme('dark')"
          class="flex items-center w-full px-4 py-2 text-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/dark.svg" alt="dark" class="w-8 h-8" />
          <span class="ml-2">Dark</span>
        </button>
      </li>
    </ul>
  </div>
</template>
