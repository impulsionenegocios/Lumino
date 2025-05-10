#!/bin/bash
set -e

# Espera para garantir que outros serviços estejam prontos (se necessário)
echo "Iniciando Directus..."

# Verifica se os diretórios necessários existem e têm permissões corretas
echo "Verificando diretórios..."
mkdir -p /directus/data
mkdir -p /directus/uploads
chmod -R 755 /directus/data
chmod -R 755 /directus/uploads

# Verifica se o banco de dados já existe
if [ ! -f "$DB_FILENAME" ]; then
    echo "Banco de dados não encontrado. Inicializando Directus..."
    # Cria diretórios necessários
    mkdir -p "$(dirname "$DB_FILENAME")"
    
    # Executa o bootstrap para criar as tabelas iniciais
    npx directus bootstrap
else
    echo "Banco de dados encontrado. Continuando..."
fi

# Inicia o Directus
echo "Iniciando servidor Directus..."
exec pnpm directus start