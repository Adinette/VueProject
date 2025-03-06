<script setup lang="ts">
import Form from "../Form/Form.vue";
import InputText from "../Form/InputText.vue";
import InputPassword from "../Form/InputPassword.vue";
import Button from "../Form/Button.vue";
import { useRouter } from "vue-router";
import AuthContent from "../AuthContent.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { schema } from "@/schema";

const { handleSubmit, defineField, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const router = useRouter();

const submitForm = handleSubmit(async (values) => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      const response = await new Promise<{ token: string }>((resolve) => {
        setTimeout(() => resolve({ token: "fake-jwt-token" }), 500);
      });

      if (response?.token) {
        localStorage.setItem("authToken", response.token);
        router.push("/");
      } else {
        console.log("Email ou mot de passe incorrect.");
      }
    } else {
      console.log("Email ou mot de passe incorrect.");
    }
  } catch (error) {
    console.log("Échec de la connexion.");
  }
  resetForm();
});
</script>

<template>
  <div>
    <div>
      <h4 class="mb-1 text-2xl font-medium">
        Welcome to <span class="text-capitalize">materialize! 👋🏻</span>
      </h4>
      <p class="mb-0">Please sign-in to your account and start the adventure</p>
    </div>

    <Form @submit.prevent="submitForm">
      <InputText
        class="mt-8 mb-4"
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder=""
        v-model="email"
        v-bind="emailAttrs"
      />
      <p class="text-red-500 text-sm">{{ emailAttrs.errorMessage }}</p>

      <InputPassword
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder=""
        v-model="password"
        v-bind="passwordAttrs"
      />
      <p class="text-red-500 text-sm">{{ passwordAttrs.errorMessage }}</p>

      <div class="mt-8">
        <div class="mb-4 text-center flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium"
              >Remember me</label
            >
          </div>
          <router-link to="/" class="text-lg font-medium text-outline-tertiary">
            Forgot Password?
          </router-link>
        </div>

        <Button
          type="submit"
          label="Login"
          class="btn-lg mt-8 w-full rounded-xl text-white bg-outline-tertiary"
        />
        <AuthContent
          linkTo="Create an account"
          descriptionLinkTo="New on our platform?"
        />
      </div>
    </Form>
  </div>
</template>
