// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],

  image: {
    imgix: {
      baseURL:
        "https://cknprrbgwjpekvsfucet.supabase.co/storage/v1/object/public/images/",
    },
  },
});
