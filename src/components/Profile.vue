<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const links = [
  { icon: "/svg/profile.svg", label: "Profile" },
  { icon: "/svg/setting.svg", label: "Setting" },
  { icon: "/svg/file.svg", label: "Billing plan", badge: "4" },
];
const link = [
  { icon: "/svg/pricing.svg", label: "Pricing" },
  { icon: "/svg/faq.svg", label: "FAQ" },
];

const Logout = () => {
  localStorage.removeItem("authToken");
  router.push("/login");
};
</script>

<template>
  <div
    class="my-4 w-3xs pb-4 text-base list-none bg-white dark:bg-gray-700 divide-y divide-gray-100 shadow-sm rounded-xl dark:divide-gray-600"
  >
    <div class="flex item-center px-4 pt-4 pb-3" role="none">
      <div>
        <img
          class="w-10 h-10 rounded-full"
          src="/images/avatar-1.png"
          alt="user photo"
        />
      </div>
      <div class="ml-2">
        <p class="font-medium" role="none">John Doe</p>
        <p class="truncate font-normal text-gray-400 text-sm" role="none">
          Admin
        </p>
      </div>
    </div>
    <ul class="py-1" role="none">
      <li v-for="(link, index) in links" :key="index" class="mb-2">
        <router-link
          type="button"
          to="#"
          class="flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <div class="flex items-center">
            <img :src="link.icon" class="icon h-6" :alt="link.label" />
            <span class="flex-1 ms-3 text-base whitespace-nowrap text-ellipsis">
              {{ link.label }}
            </span>
          </div>
          <span v-if="link.badge"
            class="text-xs font-medium px-3 py-2 me-2 rounded-full bg-badge text-white"
            >{{ link.badge }}</span
          >
        </router-link>
      </li>
    </ul>
    <ul class="py-1" role="none">
      <li v-for="(link, index) in link" :key="index" class="mb-2">
        <router-link
          type="button"
          to="#"
          class="flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
            <img :src="link.icon" class="icon h-6" :alt="link.label" />
            <span class="flex-1 ms-3 text-base whitespace-nowrap text-ellipsis">
              {{ link.label }}
            </span>
        </router-link>
      </li>
      <li class="px-4 mt-3">
        <button
          @click="Logout"
          class="flex px-4 py-2 justify-center font-medium rounded-lg w-full bg-badge text-white"
          role="menuitem"
        >
          <span class="me-2">Logout</span>
          <img src="/svg/logout.svg" class="h-6" alt="logout" />
        </button>
      </li>
    </ul>
  </div>
</template>
