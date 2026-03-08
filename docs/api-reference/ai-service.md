---
sidebar_position: 3
---

# AI Service

Base URL: `https://ai.legaltech.jlm.app` (produção)

## Endpoints

### Search

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/ai/search` | Busca semântica RAG (pgvector) |

### Generation

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/ai/generate/draft` | Gerar minuta com Claude |
| POST | `/ai/generate/report` | Gerar relatório |
| POST | `/ai/template/fill` | Preencher template com RAG |

### Embeddings

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/ai/embeddings` | Gerar embeddings (Titan) |

### Streaming

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/ai/stream/{chat_id}` | SSE stream de resposta |
