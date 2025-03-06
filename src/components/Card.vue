<script setup lang="ts">
interface Props {
  title?: string;
  description1?: string;
  description2?: string;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="w-full p-6 rounded-lg shadow-xl bg-white dark:bg-secondary">
    <h5 class="mb-2 text-lg font-medium tracking-tight">
      {{ props.title }}
    </h5>
    <p class="font-normal text-base my-5">
      {{ props.description1 }}
    </p>
    <p class="font-normal text-base">
      {{ props.description2 }}
    </p>
  </div>
</template>
