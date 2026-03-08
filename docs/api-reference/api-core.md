---
sidebar_position: 1
---

# API Core

Base URL: `https://api.legaltech.jlm.app` (produção)

## Autenticação

Todas as rotas (exceto health) requerem token JWT do Cognito:

```
Authorization: Bearer <token>
```

## Endpoints

### Cases

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/cases` | Listar casos do tenant |
| GET | `/cases/{id}` | Detalhe do caso |
| POST | `/cases` | Criar caso |
| PUT | `/cases/{id}` | Atualizar caso |
| DELETE | `/cases/{id}` | Arquivar caso |

### Deadlines

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/deadlines` | Listar prazos (filtros: due_date_from, due_date_to, type, priority) |
| POST | `/deadlines` | Criar prazo |
| PUT | `/deadlines/{id}` | Atualizar prazo |
| DELETE | `/deadlines/{id}` | Remover prazo |

### Chat

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/chat` | Listar chats do caso |
| POST | `/chat` | Criar chat |
| GET | `/chat/{id}/messages` | Listar mensagens |
| POST | `/chat/{id}/messages` | Enviar mensagem (+ AI response) |
| GET | `/chat/{id}/stream` | SSE stream para resposta AI |
| GET | `/chat/{id}/export` | Exportar chat como DOCX |

### Analytics

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/analytics/summary` | Resumo do tenant |
| GET | `/analytics/by-user` | Métricas por advogado |
| GET | `/analytics/my-stats` | Métricas pessoais |

### WhatsApp

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/whatsapp/send` | Enviar mensagem |
| GET | `/whatsapp/messages/{case_id}` | Listar mensagens do caso |
| GET | `/whatsapp/phones` | Listar telefones cadastrados |

### Billing

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/billing/subscribe` | Assinar plano |
| POST | `/billing/webhook` | Stripe webhook |
| GET | `/billing/subscription` | Status da assinatura |
