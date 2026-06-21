---
sidebar_position: 2
---

# Doc Service

Base URL produção: `https://api-dev.altajuris.com.br/docs`  
Base URL local: `http://localhost:8001`

Responsável por upload, download, extração de texto (OCR) e webhook do WhatsApp.

## Endpoints de Upload

### POST `/documents/upload-init`

Inicia upload direto ao S3 via presigned URL (bypassa limite de 10MB do API Gateway).

**Body:**
```json
{
  "case_id": "uuid",
  "filename": "contrato.pdf",
  "size_bytes": 3145728
}
```

**Response:**
```json
{
  "upload_url": "https://s3.amazonaws.com/...",
  "s3_key": "tenants/{tenant_id}/cases/{case_id}/...",
  "content_type": "application/pdf",
  "expires_in": 900
}
```

### POST `/documents/upload-complete`

Confirma upload após PUT ao S3. Cria registro `Document` no DB e enfileira `PROCESS_DOC_EXTRACT`.

**Body:**
```json
{
  "case_id": "uuid",
  "s3_key": "tenants/{tenant_id}/cases/{case_id}/contrato.pdf",
  "filename": "contrato.pdf"
}
```

**Response:** `201 Created` com metadados do documento.

### POST `/documents/upload` *(legado)*

Upload direto multipart via API Gateway (limite 10MB). Preferir `upload-init` + `upload-complete`.

---

## Endpoints de Documentos

### GET `/documents`

Lista documentos do tenant (filtro por `case_id` opcional).

| Param | Tipo | Descrição |
|-------|------|-----------|
| `case_id` | UUID | Filtra por caso |
| `skip` | int | Paginação (default 0) |
| `limit` | int | Máx por página (default 100) |

### GET `/documents/{document_id}`

Retorna metadados de um documento.

### GET `/documents/{document_id}/download`

Retorna presigned URL do S3 para download (válida 1h).

### GET `/documents/{document_id}/text`

Retorna o texto já extraído pelo OCR.

**Response:**
```json
{
  "document_id": "uuid",
  "text": "Texto extraído...",
  "extraction_method": "textract | textract_async | pypdf | plain_text"
}
```

**404** se o texto ainda não foi extraído (documento em processamento).

### POST `/documents/{document_id}/extract`

Re-enfileira o job `PROCESS_DOC_EXTRACT` (reprocessamento). Retorna `{"status": "processing"}`.

---

## Pipeline de Processamento (Worker)

Após `upload-complete`, o worker executa em cascata:

```
PROCESS_DOC_EXTRACT
  ├── detect_document_text (Textract sync)     → imagens, PDFs digitais simples
  ├── pypdf fallback                            → PDFs digitais multi-página
  └── start_document_text_detection (async)    → PDFs escaneados (pypdf < 100 chars)
        └── polling 5s por até 120s
  │
  ├─► CLASSIFY_DOCUMENT    (Bedrock Claude)
  ├─► INDEX_CHUNKS         (pgvector embeddings)
  └─► DETECT_DEADLINES     (extração de datas)
```

**Métodos de extração (`extraction_method`):**

| Valor | Quando usado |
|-------|-------------|
| `textract` | Imagens JPG/PNG/TIFF e PDFs simples (Textract sync) |
| `pypdf` | PDFs com texto embutido (quando Textract sync falha) |
| `textract_async` | PDFs escaneados multi-página (pypdf retornou < 100 chars) |
| `plain_text` | Arquivos `.txt` (leitura direta do S3) |

---

## Webhook WhatsApp

### POST `/whatsapp/webhook`

Recebe eventos do Meta (mensagens inbound, status de entrega, mídia).

### GET `/whatsapp/webhook`

Verificação do webhook pelo Meta (challenge).

---

## Saúde

### GET `/health`

```json
{"status": "ok"}
```

---

## Modelos de Dados

### Document

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único |
| `tenant_id` | UUID | Multi-tenant scoping |
| `case_id` | UUID | Caso vinculado |
| `original_filename` | string | Nome original do arquivo |
| `mime_type` | string | Tipo MIME detectado |
| `size_bytes` | int | Tamanho em bytes |
| `s3_key` | string | Chave no S3 |
| `source` | enum | `WEB` \| `TRIBUNAL` \| `WHATSAPP` |
| `status` | enum | `RECEIVED` \| `PROCESSING` \| `EXTRACTED` \| `INDEXED` \| `READY` \| `READY_WITH_ERRORS` \| `ERROR` |
| `document_type` | string | Classificação por IA (ex: `peticao`, `decisao`) |
| `sha256` | string | Hash do arquivo |
| `created_at` | datetime | Data de upload |

### DocumentText

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `document_id` | UUID | FK → documents |
| `text` | text | Texto extraído pelo OCR |
| `extraction_method` | string | Método usado (`textract`, `textract_async`, `pypdf`, `plain_text`) |
