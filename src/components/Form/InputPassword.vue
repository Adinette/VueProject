<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  modelValue?: string;
  required?: boolean;
  error?: string;
  inputClass?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue ?? "");
const isPasswordVisible = ref(false);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <input
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="inputValue"
        @input="onInput"
        :class="[
          ' peer py-3 pl-3 pr-20 border-1 border-gray-300 hover:border-gray-400 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-blue-500',
          ,
          inputClass,
        ]"
      />
      <label
        :for="name"
        class="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:z-10 peer-focus:text-blue-500 transition-all duration-200 ease-in-out px-1 z-20 bg-white dark:bg-[#30334e]"
      >
        {{ label }}
      </label>
      <button
        @click="isPasswordVisible = !isPasswordVisible"
        type="button"
        class="absolute top-1 right-4 p-2 text-sm font-medium cursor-pointer"
      >
        <img
          :src="isPasswordVisible ? '/images/view.png' : '/images/hide.png'"
          alt="eye"
          class="icon w-6"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
  .icon{
    filter: brightness(0) saturate(100%) invert(23%) sepia(7%) saturate(2051%)
    hue-rotate(191deg) brightness(89%) contrast(86%);
  }
  [data-theme="dark"] .icon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(163deg) brightness(106%) contrast(90%);}
</style>
