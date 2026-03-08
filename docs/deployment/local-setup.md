---
sidebar_position: 1
---

# Setup Local

## Pré-requisitos

- Docker + Docker Compose
- Python 3.13 (pyenv recomendado)
- Node.js 20 (nvm recomendado)
- Flutter >=3.3.0

## Backend

```bash
# Clonar
git clone https://github.com/GrupoJLM/legaltech-backend.git
cd legaltech-backend

# Configurar ambiente
cp .env.example .env
# Editar .env com suas credenciais

# Subir serviços
docker compose up -d

# Rodar migrations
make migrate

# Seed dos planos de billing
make seed

# Verificar
curl http://localhost:8000/health
curl http://localhost:8001/health
curl http://localhost:8002/health
```

## Frontend

```bash
git clone https://github.com/GrupoJLM/legaltech-web.git
cd legaltech-web

cp .env.example .env.local
npm ci
npm run dev
# Acesse http://localhost:3000
```

## Mobile

```bash
git clone https://github.com/GrupoJLM/legaltech-mobile.git
cd legaltech-mobile

flutter pub get
flutter run
```
