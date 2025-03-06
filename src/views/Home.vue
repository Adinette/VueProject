<script setup lang="ts">
import Card from "@/components/Card.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
</script>

<template>
  <DashboardLayout>
    <div class=" pt-6">
      <div class="mb-6">
        <Card
          title="Kick start your project 🚀"
          description1="All the best for your new project."
          description2="Please make sure to read our Template Documentation to understand where to go from here and how to use our template."
        />
      </div>
      <div class="">
        <Card
          title="Want to integrate JWT? 🔒"
          description1="We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts."
          description2="Please read our JWT Documentation to get more out of JWT authentication."
        />
      </div>
    </div>
  </DashboardLayout>
</template>
