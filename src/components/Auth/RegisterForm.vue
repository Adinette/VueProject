<script setup lang="ts">
import Form from "../Form/Form.vue";
import InputText from "../Form/InputText.vue";
import InputPassword from "../Form/InputPassword.vue";
import Button from "../Form/Button.vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { schema } from "@/schema";
import AuthContent from "../AuthContent.vue";

const router = useRouter();

const { handleSubmit, defineField, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const submitForm = handleSubmit(async (values) => {
  try {
    const user = {
      email: values.email,
      password: values.password,
    };
    
    const response = await new Promise<{ token: string }>((resolve) => {
      setTimeout(() => resolve({ token: "fake-jwt-token" }), 500);
    });

    if (response.token) {
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
});
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
          class="mt-8 mb-4"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          v-model="email"
          v-bind="emailAttrs"
        />
        <p class="text-red-500 text-sm">{{ emailAttrs['error-message'] }}</p>

        <InputPassword
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          v-model="password"
          v-bind="passwordAttrs"
        />
        <p class="text-red-500 text-sm">{{ passwordAttrs['error-message'] }}</p>

        <div class="mt-8">
          <Button
            type="submit"
            label="Register"
            class="btn-lg mt-8 w-full rounded-xl text-white bg-outline-tertiary"
          />
          <AuthContent linkTo="Connect to your account" descriptionLinkTo="You already have an account?" />
        </div>
      </Form>
    </div>
  </div>
</template>
