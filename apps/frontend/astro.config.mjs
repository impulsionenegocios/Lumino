import path from 'path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://joqueianapolis.com.br',
  output: 'server',
  integrations: [
    vue(), // correto aqui!
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/abstracts/_variables.scss";`
        }
      }
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'vue'], 
    },
    ssr: {
      noExternal: ['gsap', 'particles.js']
    },
    plugins: [tailwindcss()]
  }
});
