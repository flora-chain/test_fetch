<script lang="ts" setup>
const { login } = useAuth();

const form = reactive({
  data: {
    email: "+12344455566",
    password: "Testpass!@",
  },
  error: "",
  pending: false,
});

async function onLoginClick() {
  try {
    form.error = "";
    form.pending = true;

    await login(form.data.email, form.data.password, form.data.rememberMe);
  } catch (error: any) {
    console.error(error);

    if (error.data.message) form.error = error.data.message;
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <p v-if="form.error" class="mb-3 text-red-500">
    {{ form.error }}
  </p>
  <form class="mb-3 flex flex-col gap-3" @submit.prevent="onLoginClick">
    <input
      v-model="form.data.email"
      type="phone"
      placeholder="Phone"
      required
    />
    <input
      v-model="form.data.password"
      type="password"
      placeholder="Password"
      required
    />
    <button
      type="submit"
      :disabled="form.pending"
      class="py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors"
    >
      Login
    </button>
  </form>
</template>
