// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL,
      USE_FAKE_BACKEND: process.env.USE_FAKE_BACKEND,
    },
  },

  modules: ["@nuxt/ui"],

  plugins: ["~/plugins/http-repository", "~/plugins/auth"],
});
