---
sidebar_position: 1
---

# Visão Geral da Arquitetura

## Diagrama

```
┌─────────────┐  ┌──────────────┐  ┌───────────────┐
│  Web App    │  │  Mobile App  │  │  Client Portal│
│  (Next.js)  │  │  (Flutter)   │  │  (Next.js)    │
└──────┬──────┘  └──────┬───────┘  └───────┬───────┘
       │                │                   │
       └────────────────┴───────────────────┘
                        │
              ┌─────────▼─────────┐
              │   NLB (Layer 4)   │
              │   Port 9443/9444  │
              └─────────┬─────────┘
                        │
       ┌────────────────┼────────────────┐
       │                │                │
┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
│  api-core   │ │ doc-service │ │ ai-service  │
│  :8000      │ │  :8001      │ │  :8002      │
└──────┬──────┘ └──────┬──────┘ └──────┬──────┘
       │                │                │
       └────────────────┴────────────────┘
                        │
              ┌─────────▼─────────┐
              │     shared/       │
              │  Models, Auth,    │
              │  Config, Utils    │
              └─────────┬─────────┘
                        │
       ┌────────────────┼────────────────┐
       │                │                │
┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
│ PostgreSQL  │ │   Redis     │ │    SQS      │
│ (pgvector)  │ │   Cache     │ │   FIFO      │
└─────────────┘ └─────────────┘ └──────┬──────┘
                                       │
                               ┌───────▼───────┐
                               │    Worker     │
                               │  (Jobs async) │
                               └───────────────┘
```

## Princípios

1. **Multi-tenant** — Isolamento por `tenant_id` em todas as queries
2. **Shared module** — Código comum (models, auth, config) em pacote Python reutilizável
3. **Async everywhere** — SQLAlchemy async, FastAPI async, SQS consumer
4. **Static export** — Frontend Next.js exportado como HTML estático (CloudFront + S3)
5. **FARGATE_SPOT** — ECS com Fargate Spot para redução de custos
6. **NLB port multiplexing** — Um único NLB com portas diferentes por serviço

## AWS Services

| Service | Uso |
|---------|-----|
| **ECS Fargate** | Containers (4 services) |
| **RDS PostgreSQL** | Database principal (pgvector) |
| **ElastiCache Redis** | Cache, sessions, pub/sub |
| **S3** | Documentos (4 buckets) |
| **SQS FIFO** | Fila de jobs assíncronos |
| **Cognito** | Autenticação (web + mobile) |
| **CloudFront** | CDN para frontend estático |
| **Bedrock** | LLMs (Claude + Titan embeddings) |
| **Textract** | OCR de documentos |
| **Transcribe** | Transcrição de áudio |
| **SES** | Email transacional |
| **Secrets Manager** | Credenciais seguras |
