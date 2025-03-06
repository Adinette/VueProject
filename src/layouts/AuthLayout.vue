<script setup lang="ts">
import useTheme from "@/hooks/useTheme";

const theme = useTheme();
</script>

<template>
  <div class="block lg:flex bg-secondary lg:bg-transparent w-full h-dvh">
    <div class="hidden lg:flex flex-col w-3/5">
      <div class="p-6">
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
      </div>
      <div
        class="w-full h-full flex flex-col items-center justify-center relative"
      >
        <img
          :src="
            theme.currentTheme.value === 'light'
              ? '/images/auth-light.png'
              : '/images/auth-dark.png'
          "
          class="w-3/5"
          alt="Image"
        />
        <img
          src="/images/mask-light.png"
          class="absolute bottom-12 -z-10 bg-blend-color"
          alt="image"
        />
      </div>
    </div>
    <div
      class="w-full h-full lg:w-2/5 px-8 flex items-center justify-center bg-white dark:bg-secondary"
    >
      <slot />
    </div>
  </div>
</template>
