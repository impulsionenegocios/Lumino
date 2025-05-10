# apps/frontend/Dockerfile
FROM node:18

# Ativa o pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Define o diretório de trabalho principal
WORKDIR /app

# Expondo a porta padrão do Astro/Vite
EXPOSE 4321

CMD ["pnpm", "dev", "--host"]
