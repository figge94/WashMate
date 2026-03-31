// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      title: "WashMate",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Smart tvättguide för din tvättmaskin" }
      ]
    }
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
});
