<script setup lang="ts">
interface Props {
  linkTo?: string;
  descriptionLinkTo?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="my-5 flex items-center justify-center">
      <p class="text-lg font-medium">{{ props.descriptionLinkTo }}</p>
      <router-link
        to="/register"
        class="ml-2 text-lg font-medium text-outline-tertiary"
      >
        {{ props.linkTo }}
      </router-link>
    </div>
    <div>
      <div class="flex items-center">
        <hr class="h-2 w-44" />
        <span class="mb-3 mx-2.5">or</span>
        <hr class="h-2 w-44" />
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/" class="hover:bg-[#9eb9f0] hover:dark:bg-[#32395a] rounded-full p-2 me-4">
          <img src="/svg/facebook.svg" alt="" class="w-5 h-5" />
        </router-link>
        <router-link to="/" class="hover:bg-blue-200 hover:dark:bg-[#2e3c5b] rounded-full p-2 me-4">
          <img src="/svg/twitter.svg" alt="" class="w-5 h-5" />
        </router-link>
        <router-link to="/" class="hover:bg-[#c7c7c7] hover:dark:bg-[#40435c] rounded-full p-2 me-4">
          <img src="/svg/github.svg" alt="" class="w-5 h-5" />
        </router-link>
        <router-link to="/" class="hover:bg-[#ba9895] hover:dark:bg-[#3e344c] rounded-full p-2 me-4">
          <img src="/svg/google.svg" alt="" class="w-5 h-5" />
        </router-link>
      </div>
    </div>
  </div>
</template>
