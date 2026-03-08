---
sidebar_position: 5
---

# Infraestrutura

## AWS Architecture

A infraestrutura é gerenciada via Terraform no projeto `infrastructure/aws/account/tecnoepec/legaltech/`.

### ECS Cluster

Todos os serviços rodam no cluster ECS **"main"** compartilhado (padrão Tecnoepec):

| Service | vCPU | Memory | Port |
|---------|------|--------|------|
| api-core | 0.25 | 512MB | 8000 |
| doc-service | 0.25 | 512MB | 8001 |
| ai-service | 0.25 | 512MB | 8002 |
| worker | 0.25 | 512MB | — |

**Capacity Provider**: FARGATE_SPOT (redução de ~70% no custo)

### NLB (Network Load Balancer)

Reutiliza o NLB existente com novas portas:

| Porta NLB | Serviço | Protocolo |
|-----------|---------|-----------|
| 9443 | api-core | TLS |
| 9444 | doc-service | TLS |
| 9445 | ai-service | TLS |

### CloudFront + S3

Frontend estático servido via CloudFront com:
- Origin Access Control (OAC)
- S3 bucket privado
- CloudFront Function para SPA routing
- Cache: `_next/` com max-age imutável

### Database

- **RDS PostgreSQL 16** com extensão pgvector
- **ElastiCache Redis 7** para cache e sessions

### Ambientes

| Ambiente | Uso |
|----------|-----|
| dev | Desenvolvimento |
| staging | Pré-produção |
| prod | Produção |
