import path from 'path';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://joqueianapolis.com.br',
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

    // Configurações para GSAP e Particles.js
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger']
    },
    
    ssr: {
      noExternal: ['gsap', 'particles.js']
    },
    integrations: [vue()],
    plugins: [tailwindcss()]
  }
});