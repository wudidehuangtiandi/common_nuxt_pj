// https://nuxt.com/docs/api/configuration/nuxt-config
// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // runtimeConfig: {
  //   public: {
  //      baseURL:  'http://47.89.254.121:8002/shop' || 'http://39.108.227.113:8002' // Exposed to the frontend as well.
  //   }
  // },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt', '@nuxtjs/i18n'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  nitro: {
    //仅在客户端渲染时生效，需要serve false
    devProxy: {
      '/ins': {
        target: 'http://127.0.0.1:8888/ins', // 线上代理地址
        // target: process.env.BASE_URL || 'http://39.108.227.113:8002/shop', // 目标接口域名
        changeOrigin: true, // 表示是否跨域
      },
    },
    // 该配置用于服务端请求转发,注意 nuxt3.2之后听说不生效，那就要写全路径 或者 只用proxy插件
    routeRules: {
      '/ins/**': {
        proxy: 'http://127.0.0.1:8888/ins/**',
        // proxy: process.env.BASE_URL || 'http://39.108.227.113:8002/shop/**'
      },
    },
  },
});
