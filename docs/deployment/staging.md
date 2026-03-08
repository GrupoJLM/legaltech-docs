---
sidebar_position: 2
---

# Deploy Staging

## Pipeline

1. Push para branch `main`
2. CI roda lint + testes
3. Se CI passa, deploy é acionado automaticamente

## Backend

- **ECR**: Imagens Docker pushadas para ECR
- **ECS**: Services atualizados com `force-new-deployment`
- **Migrations**: Alembic upgrade executado se `shared/` mudou

## Frontend

- **Build**: `npm run build` com variáveis de staging
- **S3**: Sync do diretório `out/`
- **CloudFront**: Invalidação de cache

## Secrets

Configurados via GitHub Actions Secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DATABASE_URL`
- `API_BASE_URL`
- `COGNITO_*`
