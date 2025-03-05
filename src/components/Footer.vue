<script setup lang="ts"></script>

<template>
  <footer class="sticky bottom-0 mt-auto bg-transparent w-full">
    <div class="mx-auto p-4 md:py-8">
      <div class="flex items-center justify-between">
        <span
          class="flex items-center sm:text-center text-base"
          >© 2025, Made With <img src="/svg/heart.svg" alt="heart" class="w-4 h-4"> By Pixinvent</span
        >
        <ul
          class="hidden md:flex md:flex-wrap items-center text-link text-base font-medium"
        >
          <li>
            <router-link to="#" class="me-4 md:me-6">License</router-link>
          </li>
          <li>
            <router-link to="#" class="me-4 md:me-6">More Themes</router-link>
          </li>
          <li>
            <router-link to="#" class="me-4 md:me-6">Documentation</router-link>
          </li>
          <li>
            <router-link to="#" class="">Support</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
