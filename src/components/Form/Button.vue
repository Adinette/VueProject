<script setup lang="ts">
import { defineProps, computed } from "vue";

interface Props {
  type?: "button" | "submit" | "reset";
  class?: string;
  variant?: "primary" | "bg-secondary" | "danger" | "success";
  textColor?: "white" | "black";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  label: string;
}
const props = defineProps<Props>();

const buttonClasses = computed(() => {
  return [
    "px-8 py-3 font-semibold cursor-pointer flex items-center justify-center gap-2",
    props.class,
    props.variant ? `btn-${props.variant}` : "",
    props.textColor ? `text-${props.textColor}` : "",
    props.size ? `btn-${props.size}` : "",
    props.rounded ? "rounded-full" : "rounded",
  ].join(" ");
});
</script>

<template>
  <button :type="props.type" :class="buttonClasses">{{ props.label }}</button>
</template>

<style scoped>
.btn-primary {
  background-color: blue;
}
.btn-bg-secondary {
  background-color: gray;
}
.btn-danger {
  background-color: red;
}
.btn-success {
  background-color: green;
}
.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
}
.btn-md {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
}
.btn-lg {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
}
</style>
