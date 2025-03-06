<script setup lang="ts">
defineProps({
  name: String,
  type: String,
  label: String,
  modelValue: String,
  placeholder: String
});
</script>

<template>
  <div class="relative w-full">
    <input
      :id="name"
      :name="name"
      :type="type || 'text'"
      :placeholder="placeholder || ''"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="peer py-3 px-3 border focus:bg-tertiary border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <label
      :for="name"
      class="absolute left-3 top-3 text-gray-500 text-sm 
             peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
             peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:z-10 peer-focus:text-blue-500 
             transition-all duration-200 ease-in-out px-1 z-20 bg-white dark:bg-[#30334e]"
    >
      {{ label }}
    </label>
  </div>
</template>