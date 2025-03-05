<script setup lang="ts">
interface Props {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  modelValue?: string | number;
  required?: boolean;
  error?: string;
  inputClass?: string;
  icon?: string;
  iconAction?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <input
        :id="name"
        :name="name"
        :type="type || 'text'"
        :placeholder="placeholder || label"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :class="[
          'py-3 pl-3 pr-20 border-1 border-gray-300 hover:border-gray-400 rounded-md w-full focus:outline-outline-tertiary',
          icon ? 'rounded-r-none' : '',
          inputClass,
        ]"
      />
    </div>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>
