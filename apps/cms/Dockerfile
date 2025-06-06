FROM node:18

# 1. Instala build tools e curl (para baixar binários do isolated-vm)
RUN apt-get update \
 && apt-get install -y build-essential python3 curl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 2. Copia apenas o workspace e o diretório CMS
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY apps/cms ./apps/cms
COPY apps/cms/extensions /directus/extensions
# 3. Ativa Corepack e instala dependências do CMS
RUN corepack enable \
 && corepack prepare pnpm@latest --activate \
 && pnpm install --filter ./apps/cms...

# 4. Rebuild do isolated-vm usando npm (suporta --build-from-source)
RUN npm rebuild isolated-vm --build-from-source

# 5. Ajusta diretório de trabalho para o CMS
WORKDIR /app/apps/cms

# 6. Cria diretórios para os dados e uploads, e ajusta permissões
RUN mkdir -p /directus/data /directus/uploads && chown -R node:node /directus

# 7. Usa o usuário node para evitar problemas de permissão
USER node

# 8. Expõe a porta padrão do Directus
EXPOSE 8055

# 9. Script de inicialização que primeiro verifica e inicializa o banco de dados
COPY --chown=node:node ./apps/cms/docker-entrypoint.sh /app/apps/cms/docker-entrypoint.sh
RUN chmod +x /app/apps/cms/docker-entrypoint.sh

# 10. Inicia o Directus usando o script de entrypoint
ENTRYPOINT ["/app/apps/cms/docker-entrypoint.sh"]