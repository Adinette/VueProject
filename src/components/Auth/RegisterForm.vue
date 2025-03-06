<script setup lang="ts">
import Form from "../Form/Form.vue";
import InputText from "../Form/InputText.vue";
import InputPassword from "../Form/InputPassword.vue";
import Button from "../Form/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { schema } from "@/schema";
import AuthContent from "../AuthContent.vue";

const email = ref("");
const password = ref("");
const router = useRouter();

const emailError = ref("");
const passwordError = ref("");

const resetForm = () => {
  email.value = "";
  password.value = "";
  emailError.value = "";
  passwordError.value = "";
};

const validateForm = () => {
  const result = schema.safeParse({
    email: email.value,
    password: password.value,
  });
  if (!result.success) {
    result.error.errors.forEach((error) => {
      if (error.path[0] === "email") {
        emailError.value = error.message;
      }
      if (error.path[0] === "password") {
        passwordError.value = error.message;
      }
    });
    return false;
  }
  emailError.value = "";
  passwordError.value = "";
  return true;
};

const submitForm = async () => {
  if (validateForm()) {
    try {
      const user = {
        email: email.value,
        password: password.value,
      };
      const response = await new Promise<{ token: string }>((resolve) => {
        setTimeout(() => resolve({ token: "fake-jwt-token" }), 1000);
      });
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      } else {
        console.log("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.log("Échec de la connexion.");
    }
    resetForm();
  }
};
</script>

<template>
  <div>
    <div class="">
      <div>
        <h4 class="mb-1 text-2xl font-medium">
          Welcome to <span class="text-capitalize">materialize! 👋🏻</span>
        </h4>
        <p class="mb-0">Please create your account and start the adventure</p>
      </div>
      <Form @submit.prevent="submitForm">
        <InputText
          class="my-8"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          v-model="email"
        />
        <p v-if="emailError" class="text-red-500 mt-2">{{ emailError }}</p>
        <InputPassword
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <p v-if="passwordError" class="text-red-500 mt-2">
          {{ passwordError }}
        </p>
        <div class="mt-8">
          <Button
            type="submit"
            label="Register"
            class="btn-lg mt-8 w-full rounded-xl text-white bg-outline-tertiary"
          />
          <AuthContent linkTo="Connect to your account" descriptionLinkTo="You already have an account?"/>
        </div>
      </Form>
    </div>
  </div>
</template>
