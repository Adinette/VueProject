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

const hasError = computed(() => props.error && props.error.length > 0);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <input
        :id="name"
        :name="name"
        :placeholder="placeholder || label"
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="inputValue"
        @input="onInput"
        :class="[
          'py-3 pl-3 pr-20 border-1 border-gray-300 hover:border-gray-400 rounded-md w-full focus:outline-outline-tertiary',
          ,
          hasError ? 'border-danger' : '',
          inputClass,
        ]"
      />
      <button
        @click="isPasswordVisible = !isPasswordVisible"
        type="button"
        class="absolute top-1 right-4 p-2 text-sm font-medium cursor-pointer"
      >
        <img
          :src="isPasswordVisible ? '/images/view.png' : '/images/hide.png'"
          alt="eye"
          class="w-6"
        />
      </button>
    </div>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>
