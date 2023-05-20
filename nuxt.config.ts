// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/main.css",
  ],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/general-sans",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
