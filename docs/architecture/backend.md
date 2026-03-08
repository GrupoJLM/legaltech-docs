---
sidebar_position: 2
---

# Backend

## Serviços

### api-core (porta 8000)

API principal com 21 routers:

| Router | Endpoints | Descrição |
|--------|-----------|-----------|
| `cases` | CRUD | Gestão de casos |
| `deadlines` | CRUD + filters | Prazos processuais |
| `documents` | list, download | Listagem de documentos |
| `chat` | messages, SSE stream | Chat IA por caso |
| `billing` | subscribe, webhook | Stripe billing |
| `analytics` | by-user, summary | Dashboard analytics |
| `analytics_personal` | my-stats | Métricas pessoais |
| `notifications` | list, mark-read, SSE | Notificações real-time |
| `templates` | CRUD + AI fill | Templates com RAG |
| `users` | profile, settings | Perfil de usuário |
| `admin` | users, tenants | Administração |
| `whatsapp` | send, messages | WhatsApp API |
| `bulk` | import CSV, multi-upload | Operações em massa |
| `reports` | generate PDF | Relatórios |
| `audit` | list, export | Audit trail |
| `timeline` | movements | Timeline do caso |
| `tribunals` | sync, list | Integração tribunais |
| `signatures` | sign, verify | Assinaturas digitais |
| `devices` | register token | Push notifications |

### doc-service (porta 8001)

Processamento de documentos:
- Upload para S3
- OCR via AWS Textract
- Webhook WhatsApp (inbound media + text + status)
- Transcrição de áudio via AWS Transcribe

### ai-service (porta 8002)

Inteligência artificial:
- RAG search (pgvector + Bedrock embeddings)
- Geração de minutas (Claude)
- Template fill (RAG + Claude)
- Streaming SSE

### worker

Processador assíncrono de jobs (SQS consumer):
- `JOB_PROCESS_DOC_EXTRACT` — OCR + chunking + embeddings
- `JOB_PROCESS_AUDIO_TRANSCRIBE` — Transcrição de áudio
- `JOB_EXPORT_PDF` — Geração de relatórios PDF
- `JOB_EXPORT_CHAT_DOCX` — Exportação de chat
- `JOB_SYNC_TRIBUNAL` — Sincronização com tribunais
- `JOB_SEND_WHATSAPP` — Envio WhatsApp via Meta API
- `JOB_SEND_EMAIL` — Envio email via SES
- `JOB_DEADLINE_REMINDER` — Notificações de prazos

## Shared Module

Pacote Python compartilhado por todos os serviços:

```
shared/
├── models/          # 26 SQLAlchemy models
├── dependencies/    # Auth (Cognito JWT), Tenant, Rate Limit, Quota
├── config/          # Pydantic Settings
├── database.py      # AsyncSession factory
├── middleware/       # Security headers
├── observability/   # Sentry + OpenTelemetry
├── logging/         # JSON structured logging
├── services/        # Email, Notifications, Push, Tribunal
├── utils/           # Business days, PDF/DOCX builders, File validation
├── alembic/         # Database migrations
└── tests/           # 420 unit tests
```
