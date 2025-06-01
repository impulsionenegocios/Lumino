#!/bin/bash
set -e

echo "⏳ Gerando snapshot do schema do Directus..."

# Garante que a pasta schema/ exista
mkdir -p "$(pwd)/schema"

# Caminho correto do .env na raiz do monorepo
ENV_FILE="$(dirname "$(pwd)")/../.env"

# Verifica se o .env realmente existe
if [ ! -f "$ENV_FILE" ]; then
  echo "❌ Arquivo .env não encontrado em $ENV_FILE"
  exit 1
fi

# Executa o container com a versão correta do Directus CLI
docker run --rm \
  --network directus-net \
  --env-file "$ENV_FILE" \
  -e DB_HOST=db \
  -v "$(pwd)/schema":/app/schema \
  node:22-bullseye \
  bash -c "\
    npm install -g directus@11.8.0 && \
    directus schema snapshot --file /app/schema/schema.json --yes \
  "

echo "✅ Schema salvo com sucesso em ./schema/schema.json"
