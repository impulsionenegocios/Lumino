// astro.config.mjs - FINAL SSR Configuration
import path from 'path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue';

// Para SSR em VPS, você vai precisar de um adapter
// Instale: npm install @astrojs/node
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://joqueianapolis.com.br',
  
  // SSR com adapter para VPS
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  
  integrations: [
    vue(),
  ],
  
  server: {
    port: 4321,
    host: true,
  },
  
  vite: {
    logLevel: 'info',
    
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
    
    plugins: [tailwindcss()],
    
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }
});

// COMANDOS PARA VPS:
/*
1. Build: npm run build
2. O build vai gerar uma pasta 'dist/' com um servidor Node.js
3. Na VPS: node ./dist/server/entry.mjs
4. Ou use PM2: pm2 start ./dist/server/entry.mjs --name "lumino-site"
*/