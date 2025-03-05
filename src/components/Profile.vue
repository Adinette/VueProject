<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const Logout = () => {
  localStorage.removeItem("authToken");
  router.push("/login");
};
</script>

<template>
  <div
    class="my-4 w-3xs pb-4 text-base list-none bg-white dark:bg-gray-700 divide-y divide-gray-100 rounded-sm shadow-sm dark:divide-gray-600"
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
        <p class="text-base font-medium" role="none">John Doe</p>
        <p class="text-sm font-medium truncate" role="none">Admin</p>
      </div>
    </div>
    <ul class="py-1" role="none">
      <li>
        <router-link
          to="#"
          class="flex items-center px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/profile.svg" class="h-8" alt="materialize Logo" />
          <span class="ms-3 text-xl">Profile</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="flex items-center px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/setting.svg" class="h-8" alt="materialize Logo" />
          <span class="ms-3 text-xl">Settings</span>
        </router-link>
      </li>
      <li class="">
        <router-link
          to="#"
          class="flex justify-between items-center px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <div class="flex items-center">
            <img src="/svg/file.svg" class="h-8" alt="materialize Logo" />
            <span class="ms-3 text-xl whitespace-nowrap text-ellipsis"
              >Billing plan</span
            >
          </div>
          <span
            class="text-xs font-medium px-3 py-2 me-2 rounded-full bg-badge text-white"
            >4</span
          >
        </router-link>
      </li>
    </ul>
    <ul class="py-1" role="none">
      <li>
        <router-link
          to="#"
          class="flex items-center px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/file.svg" class="h-8" alt="materialize Logo" />
          <span class="ms-3 text-xl">Pricing</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="flex items-center px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
        >
          <img src="/svg/faq.svg" class="h-8" alt="materialize Logo" />
          <span class="ms-3 text-xl">FAQ</span>
        </router-link>
      </li>
      <li class="px-4 mt-3">
        <button
          @click="Logout"
          class="flex px-4 py-2 justify-center text-base font-medium rounded-2xl w-full bg-badge text-white"
          role="menuitem"
        >
          <span class="me-2 text-xl">Logout</span>
          <img src="/svg/logout.svg" class="h-8" alt="materialize Logo" />
        </button>
      </li>
    </ul>
  </div>
</template>
