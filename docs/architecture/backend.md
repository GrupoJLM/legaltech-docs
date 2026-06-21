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
| `billing` | subscribe, webhook | Asaas billing |
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
- `PROCESS_DOC_EXTRACT` — OCR (Textract sync → pypdf → Textract async para PDFs escaneados)
- `CLASSIFY_DOCUMENT` — Classificação via Claude/Bedrock
- `INDEX_CHUNKS` — Embeddings + pgvector
- `DETECT_DEADLINES` — Extração de datas/prazos do texto OCR
- `PROCESS_AUDIO_TRANSCRIBE` — Transcrição via AWS Transcribe
- `PROCESS_ZIP` — Extração de ZIPs (WhatsApp export)
- `SYNC_TRIBUNAL` — Sincronização eSAJ/PJe/DataJud
- `SYNC_ALL_CASES` — Sincronização em massa
- `SEND_EMAIL` — Envio via SES (botões com inline styles)
- `SEND_SIGNATURE_REQUEST` — E-mail de solicitação de assinatura
- `EXPORT_PDF` — Geração de relatórios PDF
- `EXPORT_CHAT_DOCX` — Exportação de chat DOCX
- `DEADLINE_REMINDER` — Notificações de prazos
- `SEND_WHATSAPP` — Envio via Meta API
- `HANDLE_DLQ_ALERT` — DLQ: notifica admins + marca documento como ERROR

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
