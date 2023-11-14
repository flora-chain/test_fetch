import { HttpRepository } from "~~/shared/api/http.repository";
import { UrlGenerator } from "~~/shared/api/url-generator";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const urlGenerator = new UrlGenerator();

  const repository = new HttpRepository(
    urlGenerator,
    config.public.API_BASE_URL
  );

  const services = {
    repository,
    urlGenerator,
  };

  return {
    provide: {
      projectServices: services,
    },
  };
});
