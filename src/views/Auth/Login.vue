<script setup lang="ts">
import LoginForm from "@/components/Auth/LoginForm.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>

<template>
  <AuthLayout>
    <div class="max-w-lg">
      <LoginForm />
    </div>
  </AuthLayout>
</template>

<style scoped></style>
