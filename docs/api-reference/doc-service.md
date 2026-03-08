---
sidebar_position: 2
---

# Doc Service

Base URL: `https://docs.legaltech.jlm.app` (produção)

## Endpoints

### Upload

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/ingest/upload` | Upload de documento (multipart/form-data) |
| POST | `/ingest/whatsapp/webhook` | Webhook WhatsApp (Meta) |

### Processamento

O upload enfileira jobs no SQS:
1. `JOB_PROCESS_DOC_EXTRACT` — OCR + text extraction
2. `JOB_PROCESS_AUDIO_TRANSCRIBE` — Transcrição de áudio
3. `JOB_PROCESS_ZIP` — Extração de ZIP

### Health

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/health` | Health check |
